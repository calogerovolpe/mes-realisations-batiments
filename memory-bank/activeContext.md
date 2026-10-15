# activeContext.md

Projet : « Volpe Calogero — Dessinateur projeteur CAO/DAO »
Dépôt : calogerovolpe/mes-realisations-batiments — branche main, GitHub Pages (racine).
URL : https://calogerovolpe.github.io/mes-realisations-batiments/

État : version CAO/DAO close (3 jalons) ; compléments en cours. Dernier complément : 15 octobre 2026 (parcours — chronologie corrigée et parcours restauration scindé ; CV et lettre de motivation téléchargeables, aperçu PDF sur la page parcours et boutons dans la barre latérale ; compétences en tags visibles dans la frise et accordéon « Toutes les compétences acquises »). Avant : visionneuse — zoom des images, contraste des boutons en thème clair/sombre et attestation AFPA redressée ; audit mobile first (cartouche accueil une colonne, zone sûre iOS, breakpoints) ; fiche .spec responsive ; navigation de fin de page, pied de page structuré, groupe Revit, rapport de stage téléchargeable.
- Portfolio : 35 planches en 8 groupes — captures d'écran AutoCAD (A01-A09) ;
  relevé d'existant (A10-A12 réalisés par une entreprise externe + PH·01-PH·02
  réalisés personnellement pour le patrimoine bâti municipal, diffusés avec
  autorisation) ; organisation du projet (A13) ; plan projet coté (A14-A17 et A20,
  environnement voisin figuré en gris clair) ; projet de cabanon (A18-A19) ;
  présentations cartouche et échelle (REL·01-04, cartouches — nom d'entreprise et
  adresse — masqués) ; modélisation 3D SketchUp (SKP·01-07 : habitation,
  « L'Appartement » lié au modèle Excel 03, restaurant 180 m²) ; modélisation 3D
  Revit (RVT·01-RVT·02 : maison reconstruite depuis les plans DWG importés à
  l'échelle réelle). Chaque planche ouvre un aperçu agrandi (.visionneuse, CSS :target) ; le
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
  Belgique » et 2019 « Déménagement vers Paris ») sont réintégrées dans la frise
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
- Téléchargement : DEUX documents publiés, tous deux expurgés — le CV
  (assets/fichiers/cv-volpe-calogero.pdf) et le rapport de stage 2022
  (assets/fichiers/rapport-stage-2022.pdf, noms de personnes et d'entreprises et
  adresses retirés, fourni par le propriétaire). Trois extraits de dessins sans
  donnée nominative restent publiés en images (assets/img/rapport-stage-*.png).

Complément (11 octobre 2026) — navigation, pied de page, Revit, téléchargement
- Accueil : bouton « Ce que je cherche » (vert, .btn-vert) placé à côté de
  « Voir le parcours complet » ; marge de séparation entre les chiffres clés
  (.stats) et le sommaire ; compteur porté à 35 planches.
- Navigation de fin de page (.nav-fin) : chaque section pointe vers la précédente
  et la suivante — Accueil → Portfolio → Chiffrage → Parcours → Contact. Les trois
  pages de modèles Excel pointent vers le modèle précédent / suivant. Masquée à
  l'impression (print.css).
- Pied de page : navigation en trois colonnes (Sections / En détail / Informations)
  sur les 12 pages ; texte imposé conservé ; bouton « copier l'e-mail » masqué dans
  le pied de page.
- Portfolio : groupe « Modélisation 3D — Revit » (RVT·01-RVT·02) — maison
  reconstruite dans Revit à partir des plans DWG importés comme référence (échelle
  réelle) ; légende du plan projet précisée (constructions voisines, voirie et
  végétation en gris très clair pour mettre le projet en avant).
- Rapport de stage 2022 publié au téléchargement (version expurgée) depuis le
  portfolio, l'étude de cas et le parcours, avec la mention « base de
  connaissances, nettement amélioré depuis (Ville de Montreuil et autres projets) ».

Complément (11 octobre 2026) — fiche .spec responsive sur mobile
- Correction : sous 40 rem, la fiche « clé / valeur » (.spec) passe en une seule
  colonne (clé au-dessus, valeur en dessous) ; le trait de la clé devient
  horizontal. S'applique aux sections « Compétences techniques » et
  « Diplômes et certifications » de parcours.html (même composant .spec).
  Règle ajoutée dans assets/css/style.css, juste après le bloc .spec. HTML et JS
  inchangés ; aucune incidence sur l'impression (règle en écran uniquement).

Complément (11 octobre 2026) — audit mobile first
- Audit complet de la feuille de style et des 12 pages, puis corrections ciblées
  (assets/css/style.css + balises viewport) :
  · `.cartouche-ligne` (accueil, bloc Profil / Formation / Outils / Mobilité)
    passe en une seule colonne sous 40 rem — même correction que `.spec`.
  · Zone sûre iOS : `viewport-fit=cover` sur les 12 pages ; la barre de
    navigation inférieure, sa bascule de thème, le `padding-bottom` du corps,
    le `scroll-padding-bottom` et le bouton « retour en haut » intègrent
    `env(safe-area-inset-bottom, 0px)`.
  · Breakpoint desktop-first `480px` harmonisé en `30rem`.
- Points non traités (notés comme optionnels) : zones tactiles < 44 px
  (.filtre-btn, .fonctions-liste a, .sommaire a) ; bulle « Compétences
  acquises » (.chrono-bulle) accessible au survol/clavier seulement (le contenu
  reste disponible via la modale « Voir le détail ») ; JavaScript ≈ 25,6 Ko
  (> limite de 24 Ko de la règle 04).


Complément (11 octobre 2026) — visionneuse : zoom, contraste des boutons, attestation
- Zoom des images dans l'aperçu (.visionneuse), ajouté par JavaScript (assets/js/viewer.js) :
  clic sur l'image ou bouton « +/− » (en haut à gauche) pour basculer entre ajusté et taille
  réelle ; l'image zoomée défile à la molette, aux flèches et au pavé tactile (le défilement
  remplace alors le changement de planche) ; le zoom est réinitialisé à chaque ouverture,
  fermeture ou changement de planche. Sans JavaScript, l'aperçu reste affiché en ajusté.
- Boutons de la visionneuse (flèches ‹ › et croix de fermeture) : fond blanc et glyphes encre,
  indépendants du thème. L'aperçu étant toujours posé sur un fond sombre, les couleurs liées
  au thème (var(--encre)) les rendaient illisibles en thème clair. Règle dans assets/css/style.css.
- Attestation de compétence AFPA (assets/img/attestation-competence-afpa.jpg) : redressée
  (rotation 180°) et ré-encodée sous 300 Ko.

Complément (15 octobre 2026) — parcours, CV et lettre de motivation
- Chronologie de parcours.html corrigée : Montreuil passe à 2022-2024 (durée inchangée :
  « un an et demi en collectivité territoriale », conforme aux « dix-huit mois » de la
  lettre de motivation) ; le parcours restauration est
  scindé en « Bruxelles 2007-2019 » (synthèse en frise + parcours complet dans la fenêtre
  « Voir le parcours complet » : de commis de cuisine à second de cuisine, intérim
  multi-établissements, événements de 50 à 1000 convives, gestion du stress) et
  « Val-de-Marne 2019-2020 » (contrat d'un an pour remplacer la cuisinière, 3 compétences
  liées à la fonction publique), ce dernier placé APRÈS le déménagement vers Paris, resitué
  en 2019 : la contradiction « Val-de-Marne avant l'arrivée en France » est levée.
- Barre d'outils de parcours.html (print.js) : « Imprimer cette page » conservé ;
  « Télécharger en PDF » remplacé par deux liens de téléchargement (CV et lettre).
- Rubrique « CV et lettre de motivation » (parcours.html) : téléchargement direct + lecture
  de la lettre dans un aperçu PDF (.visionneuse-doc-fixe, iframe + bouton de téléchargement).
- Barre latérale (toutes pages) : deux boutons « Voir mon CV » et « Lettre de motivation »
  injectés par assets/js/documents.js (chargé via main.js), avec un aperçu PDF partagé
  (.apercu-doc) et téléchargement direct du fichier original. Masqués sur mobile (≤ 60 rem)
  pour préserver la barre inférieure à 5 icônes ; l'aperçu de la lettre est exclu de la
  visionneuse de planches (.visionneuse-doc-fixe) — son défilement reste natif.
- Nouveau fichier publié : assets/fichiers/lettre-motivation.pdf (copie de la lettre du
  propriétaire — ni adresse postale, ni numéro de téléphone). Règle 02 mise à jour :
  3 documents téléchargeables autorisés.
- Footer « Dernière mise à jour » porté au 15 octobre 2026 sur les 12 pages.
- Points ouverts inchangés : le CV PDF publié affiche encore l'ancienne adresse e-mail ;
  poids du JavaScript ≈ 34 Ko (> limite de 24 Ko de la règle 04).

Complément (15 octobre 2026, suite) — tags de compétences
- Dans parcours.html, les bulles de survol « Compétences acquises » (.chrono-bulle,
  invisibles sans survol) sont remplacées par des tags visibles directement dans chaque
  carte de la frise : plus exhaustifs et précis, sans doublon dans une même liste
  (.tags > .tag). Chaque carte de la frise expose donc ses compétences en clair.
- Nouvelle section repliable « Toutes les compétences acquises », placée sous
  « Compétences techniques » : <details>/<summary> natif (sans JavaScript, replié par
  défaut, utilisable au clavier), regroupant l'ensemble des compétences par thème —
  CAO/DAO et dessin technique, conception 3D et aménagement, chiffrage et gestion,
  restauration collective, fonction publique et transversal, culture artistique et
  communication. Liste dédupliquée.
- Styles .tags / .tag et .accordeon ajoutés dans assets/css/style.css ; les règles
  .chrono-bulle (style.css et print.css) sont supprimées. À l'impression (print.css),
  les tags restent lisibles en noir sur blanc (sans pastille) et l'accordéon est masqué,
  le CV imprimé conservant la frise et la liste « Compétences techniques ».

Complément (15 octobre 2026) — position du bloc Val-de-Marne dans la frise
- parcours.html : le bloc « Cuisinier en collectivité territoriale — Val-de-Marne
  (2019-2020) » est replacé dans le segment parisien, immédiatement après la formation
  AFPA Paris 12 (2021-2022), donc AU-DESSUS du bandeau « Déménagement vers Paris » (2019).
  La frise se lit du plus récent au plus ancien : la chronologie réelle est désormais
  respectée — déménagement vers Paris (2019) → Val-de-Marne (2019-2020) → AFPA
  (2021-2022) → Montreuil (2022-2024).

Décisions verrouillées
- Nom « Volpe Calogero » autorisé partout (ordre fixé).
- L'architecte du stage n'est jamais nommé : écrire « architecte indépendant ».
- Un seul e-mail : contact@calogero-volpe.eu. Aucun numéro de téléphone, aucune adresse.
- « Guignies, zone frontalière Lille » (pas de code postal).
- Montreuil : décrit en texte ; seuls PH·01 et PH·02 (relevés diffusés avec autorisation) sont publiés, aucun autre visuel.
- Trois documents téléchargeables autorisés par le propriétaire : le CV, le rapport de stage expurgé et la lettre de motivation (publiée telle quelle — ni adresse, ni téléphone) ; voir progress.md.

Points ouverts
- contact.html : le formulaire pointe vers Formspree ; l'identifiant (f/…) reste à
  renseigner par le propriétaire (« VOTRE_ID »).
- Captions des planches : exactes mais génériques ; affinables si souhaité.
- JavaScript total ≈ 25,6 Ko (au-dessus de l'ancienne limite de 24 Ko, viewer.js inclus).
- Rapport de stage : version expurgée publiée (assets/fichiers/rapport-stage-2022.pdf,
  ~11 Mo — poids élevé, compaction possible si nécessaire). Vérifier qu'aucun nom de
  personne ni adresse ne subsiste dans le PDF avant toute nouvelle version.
- CV PDF publié (assets/fichiers/cv-volpe-calogero.pdf) : l'ancienne adresse
  bx.volpe@gmail.com subsiste dans le texte visible (police sous-ensemble, texte
  vectoriel) — non modifiable par substitution. À régénérer depuis la source
  (export Canva) avec contact@calogero-volpe.eu, puis remplacer le fichier.
