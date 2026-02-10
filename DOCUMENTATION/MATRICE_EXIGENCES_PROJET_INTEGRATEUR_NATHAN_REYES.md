# Matrice de correspondance — Exigences du projet intégrateur 2

Auteur : Nathan Reyes  
Objectif : faire le lien entre les exigences de l’épreuve synthèse et les réalisations effectuées dans ce projet.

---

## 1) Rappel des livrables demandés (selon la grille fournie)

Les éléments demandés couvrent notamment :
- Déploiement fonctionnel en environnement de production.
- Dépôt Git propre (code source, scripts SQL, tests, documentation technique, organisation/revues).
- Manuel utilisateur.
- Outil de planification (ClickUp / poker).
- Documentation des rencontres (clients + équipe).
- Document d’analyse et de conception (cas d’utilisation, acteurs, composants/architecture, schéma BD, sécurité, stratégie de tests, plans de tests).
- Document d’utilisation de l’IA générative.
- Document de passation de projet.
- Rapport de temps travaillé.
- Description des tâches de soutien applicatif.

---

## 2) Correspondance exigences ↔ ce qui a été réalisé dans le projet

## A. Déploiement et opérationnalisation

### Exigence
Avoir une version fonctionnelle en production et valider la configuration.

### Réalisation
- Configuration d’environnement adaptée (`.env` / `.env.prod`) pour la vue sur `perso-exposat.com` (travail mentionné de ton côté).
- Vérifications build et garde-fous ajoutés dans le script de build (`build.ps1`) pour réduire les erreurs de déploiement liées aux fichiers d’environnement.

### Preuves dans le repo
- `build.ps1`
- Notes de suivi des changements : `DOCUMENTATION/BLOC_NOTE_CHANGEMENTS_NATHAN_REYES.md`

---

## B. Conception technique et architecture applicative

### Exigence
Démontrer une conception et une architecture cohérentes (composants, flux, évolutivité).

### Réalisation
- Refonte UI structurante : remplacement du pattern layout existant par `PageSection`.
- Mise en place d’un système global de notifications (`AppSnackbar`) via événement applicatif centralisé.
- Harmonisation des pages front avec un composant de section réutilisable.

### Preuves dans le repo
- `front/src/components/common/PageSection.tsx`
- `front/src/components/common/PageSection.module.css`
- `front/src/components/common/AppSnackbar.tsx`
- `front/src/utils/utils.ts`
- `front/src/App.tsx`

---

## C. Données / Base de données / persistance

### Exigence
Concevoir et maintenir un schéma de données cohérent avec le besoin client.

### Réalisation
- Migration des références de `survey` vers `evaluationgrids` (SQL + repositories/services).
- Mise à jour des contraintes relationnelles liées aux grilles d’évaluation.
- Ajout de champs de confidentialité :
  - `photo_consent_publication`
  - `photo_consent_internal`
  - `photo_consent_refusal`
  - `is_anonymous`
- Ajout/gestion de la participation annuelle des juges (`participates_current_year`).

### Preuves dans le repo
- `exposat.sql`
- `Donnees_SQL_test/Insert_de_test_pour_affichage.sql`
- `Donnees_SQL_test/requettes_de_test.sql`
- `backend/api/src/Repositories/EvaluationGridRepository.php`
- `backend/api/src/Repositories/SurveyRepository.php`
- `backend/api/src/Repositories/FormRepository.php`
- `backend/api/src/Repositories/TeamsListRepository.php`

---

## D. Logique métier et services

### Exigence
Répondre aux besoins métier (gestion annuelle, sécurité fonctionnelle, cohérence des flux).

### Réalisation
- Ajout d’un endpoint de reset annuel administrateur :
  - `POST /api/administrators/reset-annual`
- Implémentation service/repository pour réinitialiser les données sensibles de l’édition.
- Filtrage d’éligibilité des juges pour les envois (envoi sécurisé et ciblé).

### Preuves dans le repo
- `backend/api/config/routes.php`
- `backend/api/src/Actions/Administrators/ResetAnnualDataAction.php`
- `backend/api/src/Repositories/UserRepository.php`
- `backend/api/src/Services/UserService.php`
- `backend/api/src/Services/SurveyService.php`

---

## E. Interfaces et expérience utilisateur

### Exigence
Présenter des interfaces compréhensibles, robustes et orientées utilisateur.

### Réalisation
- Messages utilisateur plus explicites sur plusieurs écrans (empty states / erreurs).
- Amélioration des pages juges/horaires et de la cohérence visuelle.
- Ajout de champs et validations UI pour consentement et anonymat côté inscription.

### Preuves dans le repo
- `front/src/pages/JudgesSchedules/JudgesSchedulesPage.tsx`
- `front/src/components/judge-stand/line-select.tsx`
- `front/src/components/signup/team-member.tsx`
- `front/src/pages/ParticipantRegistration/ParticipantRegistrationPage.tsx`
- `front/src/pages/JudgesList/JudgesListPage.tsx`

---

## F. Qualité, validation et tests

### Exigence
Prévoir des stratégies de validation et démontrer une démarche qualité.

### Réalisation
- Ajustements d’actifs de test front liés aux nouveaux champs d’éligibilité des juges.
- Renforcement de validations métier (consentements).
- Journalisation documentaire structurée pour traçabilité des changements.

### Preuves dans le repo
- `front/src/pages/JudgesList/SendEvaluation.test.tsx`
- `backend/api/src/Validators/ValidatorTeam.php`
- `DOCUMENTATION/CHANGELOG_NATHAN_REYES.md`
- `DOCUMENTATION/BLOC_NOTE_CHANGEMENTS_NATHAN_REYES.md`

---

## 3) Livrables académiques à compléter hors code (checklist)

Ces éléments ne sont pas entièrement déductibles du code et doivent être préparés dans Teams/dossiers de remise :
- [ ] Manuel utilisateur final.
- [ ] Document d’analyse et conception complet (avec sections demandées).
- [ ] Document d’utilisation de l’IA (outils, usages, limites, impacts).
- [ ] Document de passation de projet (`README.md` enrichi ou doc dédiée).
- [ ] Rapport du temps travaillé.
- [ ] Description des tâches de soutien applicatif.
- [ ] Dossier de rencontres clients + équipe (comptes-rendus + enregistrements).
- [ ] Grille poker / ClickUp exportée et à jour.

---

## 4) Proposition d’utilisation de ce document pour ta remise

Tu peux utiliser cette matrice de 3 façons :
1. **Annexe de ton document d’analyse et conception** (preuve de traçabilité).
2. **Base de la section “Justification des choix techniques”**.
3. **Checklist d’audit pré-remise** pour vérifier qu’aucun livrable académique n’est oublié.

