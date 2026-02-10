# Bloc-note des changements du projet

Auteur : Nathan Reyes

Ce document sert de mémo global des changements effectués dans le projet (backend, frontend, base de données, scripts et documentation), avec les fichiers concernés.

## 1) Changements d'environnement (.env / .env.prod)
- Mise à jour des fichiers d'environnement pour supporter le déploiement et la visualisation sur `perso-exposat.com`.
- **Fichiers concernés** : `.env`, `.env.prod` (gérés localement selon l'environnement de déploiement).

## 2) Base de données (SQL)
### 2.1 Migration `survey` -> `evaluationgrids`
- Renommage logique de la table `survey` vers `evaluationgrids` dans les scripts SQL.
- Mise à jour des contraintes, index et références relationnelles pointant sur les grilles d'évaluation.
- **Fichier principal** : `exposat.sql`.

### 2.2 Données de test
- Mise à jour des scripts de test pour refléter `evaluationgrids`.
- **Fichiers** :
  - `Donnees_SQL_test/Insert_de_test_pour_affichage.sql`
  - `Donnees_SQL_test/requettes_de_test.sql`

### 2.3 Nouvelles données liées à la confidentialité
- Ajout/prise en charge de champs de consentement photo et anonymat côté modèle de données.
- Champs gérés dans le flux :
  - `photo_consent_publication`
  - `photo_consent_internal`
  - `photo_consent_refusal`
  - `is_anonymous`

### 2.4 Réinitialisation annuelle
- Ajout d'une logique de reset annuel (désactivation participation, nettoyage assignations, etc.) côté API/BDD via action dédiée.

## 3) Backend API (PHP)
### 3.1 Routing et actions admin
- Ajout de la route de reset annuel.
- **Fichiers** :
  - `backend/api/config/routes.php`
  - `backend/api/src/Actions/Administrators/ResetAnnualDataAction.php`

### 3.2 Services et repositories
- Adaptation des repositories/services pour:
  - migration vers `evaluationgrids`
  - gestion des nouveaux champs consentement/anonymat
  - filtres d'éligibilité des juges
  - reset annuel
- **Fichiers principaux** :
  - `backend/api/src/Repositories/EvaluationGridRepository.php`
  - `backend/api/src/Repositories/FormRepository.php`
  - `backend/api/src/Repositories/SendRepository.php`
  - `backend/api/src/Repositories/SignUpTeamRepository.php`
  - `backend/api/src/Repositories/SurveyRepository.php`
  - `backend/api/src/Repositories/TeamsListRepository.php`
  - `backend/api/src/Repositories/UserRepository.php`
  - `backend/api/src/Services/SurveyService.php`
  - `backend/api/src/Services/UserService.php`

### 3.3 Modèles, validation, logs
- Mise à jour des modèles et validations pour les nouveaux champs.
- Robustification de la gestion des logs.
- **Fichiers** :
  - `backend/api/src/Models/TeamMember.php`
  - `backend/api/src/Validators/ValidatorTeam.php`
  - `backend/api/src/Handlers/LogHandler.php`

## 4) Frontend (React / TypeScript)
### 4.1 Notifications globales et layout
- Remplacement progressif de l'approche toast/layout précédente.
- Ajout d'un composant global de snackbar et d'un composant de section standardisé.
- **Fichiers** :
  - `front/src/components/common/AppSnackbar.tsx`
  - `front/src/components/common/PageSection.tsx`
  - `front/src/components/common/PageSection.module.css`
  - `front/src/utils/utils.ts`
  - `front/src/App.tsx`

### 4.2 Écrans d'administration et navigation
- Ajustements des pages admin, navigation et actions associées (dont reset annuel).
- **Fichiers** :
  - `front/src/pages/AdministrationMain/AdministrationMainPage.tsx`
  - `front/src/pages/AdministratorsList/AdministratorsListPage.tsx`
  - `front/src/components/AdministrationMainPage/AdministrationNavigationSidebar.tsx`

### 4.3 Flux juges / évaluations
- Ajustements sur l'éligibilité des juges et l'envoi d'évaluations.
- Améliorations UI/empty state sur les pages juges et horaires.
- **Fichiers** :
  - `front/src/pages/JudgesList/JudgesListPage.tsx`
  - `front/src/pages/JudgesList/JudgeTableToolbar.tsx`
  - `front/src/pages/JudgesList/SendEvaluation.test.tsx`
  - `front/src/pages/JudgesSchedules/JudgesSchedulesPage.tsx`
  - `front/src/components/judge-stand/line-select.tsx`

### 4.4 Inscription participants, consentement et anonymat
- Ajout/prise en charge des champs consentement photo + anonymat dans les formulaires/pages d'inscription.
- **Fichiers** :
  - `front/src/components/signup/team-member.tsx`
  - `front/src/pages/ParticipantRegistration/ParticipantRegistrationPage.tsx`
  - `front/src/types/sign-up/team-member.ts`
  - `front/src/types/TeamsList/ITeamsMember.tsx`

### 4.5 Autres pages migrées / harmonisées
- Harmonisation visuelle/comportementale sur plusieurs pages.
- **Fichiers concernés** (principaux) :
  - `front/src/pages/DevelopersList/DevelopersListPage.tsx`
  - `front/src/pages/EmailValidationJudge/EmailValidationJudgePage.tsx`
  - `front/src/pages/EvaluationGridsList/EvaluationGridCreationPage.tsx`
  - `front/src/pages/EvaluationGridsList/EvaluationGridsListPage.tsx`
  - `front/src/pages/ForgottenPassword/ForgottenPasswordPage.tsx`
  - `front/src/pages/ForgottenPasswordModification/ForgottenPasswordModificationPage.tsx`
  - `front/src/pages/Informations/InformationsPage.tsx`
  - `front/src/pages/JudgeCreation/JudgeCreationPage.tsx`
  - `front/src/pages/JudgeEvaluationsList/JudgeEvaluationsListPage.tsx`
  - `front/src/pages/Login/LoginPage.tsx`
  - `front/src/components/TeamsListPage/TeamsTables/TeamsTable.tsx`
  - `front/src/components/evaluationGrid/evaluationGridFormSection.tsx`
  - `front/src/lang/fr.ts`
  - `front/src/types/judge.ts`
  - `front/src/types/judgeUpdate.ts`
  - `front/src/types/AdministrationMainPage/AdministrationMainPageTabs.ts`

## 5) Scripts et outillage
- Ajouts/ajustements de build pour mieux valider la présence des fichiers d'environnement.
- **Fichier** : `build.ps1`

## 6) Documentation
- Création/évolution d'un changelog de référence des travaux effectués.
- **Fichier** : `DOCUMENTATION/CHANGELOG_NATHAN_REYES.md`

## 7) Remarques de suivi
- Le périmètre couvre des changements transverses importants (SQL + API + UI).
- Pour validation complète, il est recommandé d'exécuter :
  - build frontend
  - tests frontend/backend
  - validation DB locale avec le script SQL à jour
