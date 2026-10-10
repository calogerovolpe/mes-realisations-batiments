# systemPatterns.md

Structure
Pages HTML à plat à la racine. CSS partagé (style.css, print.css). JavaScript vanilla
en fichiers séparés chargés en defer depuis main.js. Aucun gabarit serveur : la
navigation, la marque et le pied de page sont recopiés à l'identique dans chaque page.

Navigation
Accueil · Portfolio · Excel · Parcours · Contact (+ bouton « Rechercher » et bascule de
thème injectés par JavaScript). Barre latérale réductible en CSS pur (case à cocher).

Composants réutilisables
- Cartouche de plan (.cartouche) : bloc-titre clé / valeur.
- Fiche de caractéristiques (.spec) : liste clé / valeur.
- Registre de planches (.registre) + planche cliquable (.plan) avec cartouche.
- Étiquette technique (.badge).
- Carte de section (.card), chiffres clés (.stat), bloc compétences (.competence).
- Bloc « onglets » CSS pur (input radio + labels).
- Fenêtres modales en CSS pur (:target).
- Pied de page identique partout + date de dernière mise à jour.

Conventions
- Images dans assets/img/, noms en minuscules sans accent ni espace (ex. autocad-01.jpg,
  releve-01.jpg), poids < 300 Ko, alt neutre et descriptif.
- Amélioration progressive : le contenu reste présent dans le HTML.
- Toute page nouvelle est ajoutée à la navigation de toutes les pages dans le même commit.
- Index de la recherche globale (global-search.js) à tenir à jour à chaque ajout de page.
