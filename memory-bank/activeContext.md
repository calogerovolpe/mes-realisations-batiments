# activeContext.md

Projet : « Volpe Calogero — Dessinateur projeteur CAO/DAO »
Dépôt : calogerovolpe/mes-realisations-batiments — branche main, GitHub Pages (racine).
URL : https://calogerovolpe.github.io/mes-realisations-batiments/

État : Jalon 3 (Excel « chiffrage / quantification » + finitions) réalisé — les trois jalons de la version CAO/DAO sont clos.
- Portfolio : 33 planches en 7 groupes — captures d'écran AutoCAD (A01-A09) ;
  relevé d'existant (A10-A12 réalisés par une entreprise externe + PH·01-PH·02
  réalisés personnellement pour le patrimoine bâti municipal, diffusés avec
  autorisation) ; organisation du projet (A13) ; plan projet coté (A14-A17 et A20) ;
  projet de cabanon (A18-A19) ; présentations cartouche et échelle (REL·01-04,
  cartouches — nom d'entreprise et adresse — masqués) ; modélisation 3D SketchUp
  (SKP·01-07 : habitation, « L'Appartement » lié au modèle Excel 03, restaurant
  180 m²). Chaque planche ouvre un aperçu agrandi (.visionneuse, CSS :target) ; le
  module viewer.js ajoute la navigation à la molette et au clavier. Images :
  autocad-01..20.jpg, releve-01..04.jpg, releve-photo-01..02.jpg, skp-*.jpg
  (< 300 Ko).
- Accueil : photo (assets/img/photo-profil.jpg, alt neutre) en tête, texte « Profil »
  repris du CV et bouton vers parcours.html.
- Parcours : réécrit depuis le CV /docs/BAT — profil dessinateur projeteur CAO/DAO,
  compétences techniques (.spec) incluant les notions de BIM et l'usage d'un logiciel
  SIG professionnel, frise (chrono) formations + expériences, fenêtres de détail,
  langues, centres d'intérêt, renvoi au portfolio. Le stage de deux mois chez un
  architecte indépendant est rattaché à la formation intensive d'un an à l'AFPA
  (fin de formation). Les mobilités personnelles (déménagements 2025 « Retour en
  Belgique » et 2020 « Déménagement vers Paris ») sont réintégrées dans la frise
  (.chrono-demenagement + légende « Mobilité personnelle »). Section « Diplômes et
  certifications » : diplôme Bac pro et attestation de compétence AFPA (dessinateur
  projeteur), chacun affiché en pop-up (.visionneuse) — images assets/img/
  diplome-bac-pro.jpg et attestation-competence-afpa.jpg (< 300 Ko, remise en
  portrait). Une photo (photo-profil.jpg) est affichée en tête de la section Profil.
- Thème « plan technique » et navigation (Accueil · Portfolio · Excel · Parcours ·
  Contact) du Jalon 1 conservés ; sections Business plans et Identité visuelle supprimées.
- Excel (Jalon 3) : excel.html et les trois modèles recentrés « chiffrage et
  quantification » (chiffrage d'exploitation, quantification des composants,
  estimation d'investissement) ; liens morts des fiches corrigés vers le portfolio.

Complément (10 octobre 2026) — chiffrage, barre mobile, pages cibles, téléchargement
- Navigation : libellé « Excel » remplacé par « Chiffrage » sur les 10 pages
  (excel.html garde son nom de fichier) ; fil d'Ariane et carte 404 alignés ;
  <title>, <h1> et métadonnées de excel.html recentrés sur « Chiffrage et
  quantification ».
- Responsive : sous 60 rem, la barre latérale devient une barre INFÉRIEURE fixe,
  en icônes seules ; l'entrée Accueil occupe le centre (ordre CSS) ; le titre de
  marque et le bouton « Rechercher » sont masqués ; aucun raccourci Ctrl+K sur
  smartphone (garde dans global-search.js) ; bascule de thème en icône isolée à
  droite ; « retour en haut » remonté au-dessus de la barre. Le h1 reste en tête
  du contenu (sur l'accueil, la photo passe après le h1 et l'accroche).
- Impression : la barre « Imprimer / Télécharger en PDF » n'est plus ajoutée que
  sur le <main> portant data-impression — aujourd'hui parcours.html.
- Nouvelles pages : ce-que-je-cherche.html (poste visé, environnements, méthode,
  outils, disponibilité) et etude-cas-rapport-stage.html (Contexte, Méthode,
  Résultat, Ce que cela démontre). Liens depuis l'accueil, le portfolio, le
  parcours, le contact et la recherche globale. Ces deux pages ne figurent pas
  dans la barre de navigation : celle-ci reste à 5 entrées pour garder Accueil
  parfaitement au centre sur smartphone.
- Téléchargement : un seul document publié, le CV, après expurgation
  (assets/fichiers/cv-volpe-calogero.pdf) — code postal et numéro de
  téléphone retirés. Le rapport de stage n'est PAS publié au téléchargement : il
  contient le nom de l'architecte et d'autres noms de personnes (interdits) ainsi
  qu'un nom de rue dans l'illustration de couverture. Trois extraits de dessins
  sans donnée nominative sont publiés en images (assets/img/rapport-stage-*.png).

Décisions verrouillées
- Nom « Volpe Calogero » autorisé partout (ordre fixé).
- L'architecte du stage n'est jamais nommé : écrire « architecte indépendant ».
- Un seul e-mail : contact@calogero-volpe.eu. Aucun numéro de téléphone, aucune adresse.
- « Guignies, zone frontalière Lille » (pas de code postal).
- Montreuil : décrit en texte ; seuls PH·01 et PH·02 (relevés diffusés avec autorisation) sont publiés, aucun autre visuel.

Points ouverts
- contact.html : le formulaire pointe vers Formspree ; l'identifiant (f/…) reste à
  renseigner par le propriétaire (« VOTRE_ID »).
- Captions des planches : exactes mais génériques ; affinables si souhaité.
- JavaScript total ≈ 25,6 Ko (au-dessus de l'ancienne limite de 24 Ko, viewer.js inclus).
- Rapport de stage : le PDF ne peut pas être publié en l'état (nom de l'architecte,
  autres noms de personnes, nom de rue dans la couverture). Fournir une version
  anonymisée si le téléchargement est souhaité.
- CV PDF publié (assets/fichiers/cv-volpe-calogero.pdf) : l'ancienne adresse
  bx.volpe@gmail.com subsiste dans le texte visible (police sous-ensemble, texte
  vectoriel) — non modifiable par substitution. À régénérer depuis la source
  (export Canva) avec contact@calogero-volpe.eu, puis remplacer le fichier.
