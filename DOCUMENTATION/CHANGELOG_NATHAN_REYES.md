# Journal des changements — Nathan Reyes

Ce document résume les changements réalisés dans ce projet, ainsi que les cas d’utilisation associés.

## Changements apportés

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

