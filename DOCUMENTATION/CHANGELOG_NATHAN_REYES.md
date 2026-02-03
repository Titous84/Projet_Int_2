# Journal des changements — Nathan Reyes

Ce document résume les changements réalisés dans ce projet, ainsi que les cas d’utilisation associés.

## Changements apportés

### 0) Migration `survey` → `evaluationgrids`
- **Cas d’utilisation (Nathan Reyes)** : renommer la table `survey` en `evaluationgrids` afin de clarifier le rôle des grilles d’évaluation dans la base de données et dans l’API.
- **Implémentation** : mises à jour SQL, repositories, services et API pour pointer vers `evaluationgrids` (y compris les alias SQL et les clés étrangères).
- **Fichiers modifiés (sélection principale)** :
  - `exposat.sql`
  - `Donnees_SQL_test/Insert_de_test_pour_affichage.sql`
  - `Donnees_SQL_test/requettes_de_test.sql`
  - `backend/api/src/Repositories/EvaluationGridRepository.php`
  - `backend/api/src/Repositories/FormRepository.php`
  - `backend/api/src/Repositories/SurveyRepository.php`
  - `backend/api/src/Repositories/SendRepository.php`
  - `backend/api/src/Repositories/TeamsListRepository.php`
  - `backend/api/src/Services/SurveyService.php`
  - `front/src/components/evaluationGrid/evaluationGridFormSection.tsx`
  - `front/src/pages/EvaluationGridsList/EvaluationGridCreationPage.tsx`
  - `front/src/pages/EvaluationGridsList/EvaluationGridsListPage.tsx`
  - `front/src/types/TeamsList/ITeam.tsx`
  - `front/src/types/TeamsList/ICategories.tsx`

### 0.1) Autres tâches majeures (liste de suivi Nathan Reyes)
- **Cas d’utilisation (Nathan Reyes)** : livrer les fonctionnalités demandées par la liste de tâches (reset annuel, consentements photo/anonymat, améliorations UI/UX, etc.).
- **Implémentation** : ajout d’un endpoint d’administration pour le reset annuel, prise en charge des consentements/anonymat, refonte PageSection/AppSnackbar, textes FR, et ajustements des écrans et services.
- **Fichiers modifiés (sélection principale)** :
  - `backend/api/src/Actions/Administrators/ResetAnnualDataAction.php`
  - `backend/api/config/routes.php`
  - `backend/api/src/Repositories/UserRepository.php`
  - `backend/api/src/Services/UserService.php`
  - `backend/api/src/Models/TeamMember.php`
  - `backend/api/src/Repositories/SignUpTeamRepository.php`
  - `backend/api/src/Repositories/TeamsListRepository.php`
  - `backend/api/src/Validators/ValidatorTeam.php`
  - `front/src/components/common/AppSnackbar.tsx`
  - `front/src/components/common/PageSection.tsx`
  - `front/src/components/common/PageSection.module.css`
  - `front/src/pages/AdministratorsList/AdministratorsListPage.tsx`
  - `front/src/pages/ParticipantRegistration/ParticipantRegistrationPage.tsx`
  - `front/src/components/signup/team-member.tsx`
  - `front/src/utils/utils.ts`

### 1) Avertissement lors d'une assignation juge/équipe déjà existante
- **Cas d’utilisation (Nathan Reyes)** : avertir l’administrateur si une équipe est déjà assignée au même juge à une autre heure, afin d’éviter une erreur de planification.
- **Implémentation** : un message d’avertissement est affiché lorsque l’assignation existe déjà pour ce juge avec une autre heure.
- **Fichier modifié** : `front/src/components/judge-stand/line-select.tsx`
- **Changement précis** : ajout d’un commentaire de cas d’utilisation (Nathan Reyes) dans le gestionnaire `handleChange`.

### 2) Message clair lorsque les données sont absentes
- **Cas d’utilisation (Nathan Reyes)** : afficher un message informatif lorsqu’il n’y a pas encore de juges ou d’équipes, plutôt que de laisser l’écran vide ou confus.
- **Implémentation** : le rendu affiche un texte spécifique si la liste des juges ou des équipes est vide après chargement.
- **Fichier modifié** : `front/src/pages/JudgesSchedules/JudgesSchedulesPage.tsx`
- **Changement précis** : ajout d’un commentaire de cas d’utilisation (Nathan Reyes) près de la logique de rendu des messages « aucun juge / aucune équipe ».

## Liste des fichiers touchés

- `front/src/components/judge-stand/line-select.tsx`
- `front/src/pages/JudgesSchedules/JudgesSchedulesPage.tsx`

## Liste exhaustive des fichiers modifiés (Nathan Reyes)

Les fichiers ci-dessous ont été modifiés dans le cadre des tâches listées (migration `survey` → `evaluationgrids`, reset annuel, consentements/anonymat, refonte UI/UX, etc.).

- `DOCUMENTATION/CHANGELOG_NATHAN_REYES.md`
- `Donnees_SQL_test/Insert_de_test_pour_affichage.sql`
- `Donnees_SQL_test/requettes_de_test.sql`
- `backend/api/config/routes.php`
- `backend/api/src/Actions/Administrators/ResetAnnualDataAction.php`
- `backend/api/src/Handlers/LogHandler.php`
- `backend/api/src/Models/TeamMember.php`
- `backend/api/src/Repositories/EvaluationGridRepository.php`
- `backend/api/src/Repositories/FormRepository.php`
- `backend/api/src/Repositories/SendRepository.php`
- `backend/api/src/Repositories/SignUpTeamRepository.php`
- `backend/api/src/Repositories/SurveyRepository.php`
- `backend/api/src/Repositories/TeamsListRepository.php`
- `backend/api/src/Repositories/UserRepository.php`
- `backend/api/src/Services/SurveyService.php`
- `backend/api/src/Services/UserService.php`
- `backend/api/src/Validators/ValidatorTeam.php`
- `build.ps1`
- `exposat.sql`
- `front/package.json`
- `front/src/App.tsx`
- `front/src/api/users/userService.ts`
- `front/src/components/AdministrationMainPage/AdministrationNavigationSidebar.tsx`
- `front/src/components/NavigationBar/NavigationBar.module.css`
- `front/src/components/TeamsListPage/TeamsTables/TeamsTable.tsx`
- `front/src/components/common/AppSnackbar.tsx`
- `front/src/components/common/PageSection.module.css`
- `front/src/components/common/PageSection.tsx`
- `front/src/components/evaluationGrid/evaluationGridFormSection.tsx`
- `front/src/components/judge-stand/line-select.tsx`
- `front/src/components/layout/layout.module.css` (supprimé)
- `front/src/components/layout/layout.tsx` (supprimé)
- `front/src/components/signup/team-member.tsx`
- `front/src/lang/fr.ts`
- `front/src/pages/AdministrationMain/AdministrationMainPage.tsx`
- `front/src/pages/AdministratorsList/AdministratorsListPage.tsx`
- `front/src/pages/DevelopersList/DevelopersListPage.tsx`
- `front/src/pages/EmailValidationJudge/EmailValidationJudgePage.tsx`
- `front/src/pages/EvaluationGridsList/EvaluationGridCreationPage.tsx`
- `front/src/pages/EvaluationGridsList/EvaluationGridsListPage.tsx`
- `front/src/pages/ForgottenPassword/ForgottenPasswordPage.tsx`
- `front/src/pages/ForgottenPasswordModification/ForgottenPasswordModificationPage.tsx`
- `front/src/pages/Informations/InformationsPage.tsx`
- `front/src/pages/JudgeCreation/JudgeCreationPage.tsx`
- `front/src/pages/JudgeEvaluationsList/JudgeEvaluationsListPage.tsx`
- `front/src/pages/JudgesList/JudgeTableToolbar.tsx`
- `front/src/pages/JudgesList/JudgesListPage.tsx`
- `front/src/pages/JudgesList/SendEvaluation.test.tsx`
- `front/src/pages/JudgesSchedules/JudgesSchedulesPage.tsx`
- `front/src/pages/Login/LoginPage.tsx`
- `front/src/pages/ParticipantRegistration/ParticipantRegistrationPage.tsx`
- `front/src/types/AdministrationMainPage/AdministrationMainPageTabs.ts`
- `front/src/types/TeamsList/ITeamsMember.tsx`
- `front/src/types/judge.ts`
- `front/src/types/judgeUpdate.ts`
- `front/src/types/sign-up/team-member.ts`
- `front/src/utils/utils.ts`
