# progress.md

Version CAO/DAO — 3 jalons, un jalon = une conversation = un commit.

- [x] Jalon 1 — Fondations CAO/DAO : nouveau dépôt `mes-realisations-batiments` +
      GitHub Pages ; thème « plan technique » (calque bleu nuit) ; navigation revue
      (Accueil · Portfolio · Excel · Parcours · Contact) ; suppression des sections
      Business plans et Identité visuelle (pages et images) ; nouvelle page d'accueil ;
      portfolio `portfolio.html` (24 planches AutoCAD importées et compressées < 300 Ko) ;
      README, memory-bank et règles mis à jour.
- [x] Jalon 2 — Portfolio précisé (6 groupes, 26 planches aux légendes exactes,
      visionneuse au clic avec navigation à la molette et au clavier) et Parcours
      réécrit depuis le CV /docs/BAT (profil dessinateur projeteur CAO/DAO ; stage
      de fin de formation chez un architecte indépendant).
- [x] Jalon 3 — Excel recentré « chiffrage / quantification » (profil deviseur :
      chiffrage d'exploitation, quantification des composants, estimation
      d'investissement) ; liens morts corrigés ; contact, mentions légales et 404
      adaptés ; SEO et contrôle final. Version CAO/DAO close (3 jalons).

- [x] Complément parcours (hors jalon) : mobilités personnelles (déménagements 2025 et
      2020) réintégrées dans la frise ; mentions BIM et SIG (formation intensive d'un an
      à l'AFPA pour devenir dessinateur projeteur) ; section « Diplômes et certifications »
      avec diplôme Bac pro et attestation de compétence AFPA affichés en pop-up.

- [x] Complément portfolio & accueil (hors jalon) : photo (photo-profil.jpg) ajoutée à
      l'accueil et au parcours ; texte « Profil » du CV et bouton vers le parcours sur
      l'accueil ; légendes A10-A12 (entreprise externe) et PH·01-PH·02 (Montreuil, diffusés
      avec autorisation) ; nouveau groupe « Modélisation 3D — SketchUp » (SKP·01-07 :
      habitation, L'Appartement lié au modèle Excel 03, restaurant 180 m²) ; cartouches des
      présentations REL·01-04 masqués ; attestation AFPA remise en portrait. Règle 02 mise
      à jour (exception PH·01/PH·02).

- [x] Complément (10 octobre 2026) : libellé de navigation « Excel » → « Chiffrage »
      (10 pages) ; barre de navigation inférieure à icônes sur smartphone (Accueil au
      centre, titre de marque et recherche masqués, Ctrl+K désactivé) ; barre d'impression
      limitée à parcours.html ; nouvelles pages « Ce que je cherche » et « Étude de cas —
      rapport de stage » (extraits de dessins) ; CV publié au téléchargement après
      expurgation (code postal et téléphone retirés). Le rapport de stage n'était pas
      publié en PDF à ce stade (noms de personnes interdits) — voir la mise à jour du
      11 octobre 2026 ci-dessous.

- [x] Complément (11 octobre 2026) : bouton « Ce que je cherche » (vert) placé à côté de
      « Voir le parcours complet » sur l'accueil ; marge de séparation entre les chiffres
      et le sommaire ; navigation de fin de page (section précédente / suivante) sur les
      5 sections et « modèle précédent / suivant » sur les 3 modèles de chiffrage ; pied
      de page restructuré en trois colonnes de liens sur les 12 pages ; groupe
      « Modélisation 3D — Revit » (RVT·01-RVT·02 : maison reconstruite dans Revit depuis
      les plans DWG importés, à l'échelle réelle) — portfolio à 35 planches ; légende du
      plan projet précisée (environnement voisin en gris clair) ; rapport de stage 2022
      expurgé publié au téléchargement (assets/fichiers/rapport-stage-2022.pdf) avec
      mention « base de connaissances, amélioré depuis » ; README, memory-bank et règle 02
      mis à jour.

- [x] Correctif responsive (11 octobre 2026) : sur mobile (≤ 40 rem), la fiche
      « clé / valeur » (.spec) de parcours.html — sections « Compétences
      techniques » et « Diplômes et certifications » — s'affiche sur une seule
      colonne (clé au-dessus, valeur en dessous) au lieu de deux colonnes
      écrasées. Règle CSS ajoutée dans assets/css/style.css ; HTML et JS
      inchangés.

- [x] Audit mobile first (11 octobre 2026) : cartouche de l'accueil sur une seule
      colonne sous 40 rem (même correctif que .spec) ; zone sûre iOS prise en
      charge (viewport-fit=cover sur les 12 pages + env(safe-area-inset-bottom)
      sur la barre inférieure, la bascule de thème, le padding du corps et le
      bouton retour en haut) ; breakpoint 480px harmonisé en 30rem. RESTENT
      optionnels : zones tactiles < 44 px, bulle de compétences sur mobile,
      poids du JavaScript (> 24 Ko).


- [x] Correctif visionneuse (11 octobre 2026) : zoom des images dans les aperçus (clic sur
      l'image ou bouton « +/− » injecté par JavaScript ; défilement de l'image zoomée à la
      molette, aux flèches et au pavé tactile ; zoom réinitialisé à chaque ouverture) ;
      contraste des boutons de la visionneuse (flèches précédent / suivant et croix de
      fermeture) — fond blanc et glyphes encre au lieu de couleurs liées au thème,
      illisibles en thème clair sur le fond sombre de l'aperçu ; attestation de compétence
      AFPA redressée (rotation 180°) et ré-encodée sous 300 Ko.

- [x] Complément parcours & documents (15 octobre 2026) : chronologie corrigée —
      Montreuil passe à 2022-2024 ; le parcours restauration est scindé en
      « Bruxelles 2007-2019 » (synthèse en frise : de commis de cuisine à second de
      cuisine, intérim multi-établissements, événements de 50 à 1000 convives,
      gestion du stress ; parcours complet dans la fenêtre « Voir le parcours
      complet ») et « Val-de-Marne 2019-2020 » (contrat d'un an pour remplacer la
      cuisinière, 3 compétences liées à la fonction publique) placé APRÈS le
      déménagement vers Paris, resitué en 2019 — la contradiction « Val-de-Marne
      avant le déménagement en France » est levée. Barre d'outils de parcours.html :
      « Imprimer cette page » conservé ; « Télécharger en PDF » remplacé par les
      liens de téléchargement du CV et de la lettre de motivation. Nouvelle rubrique
      « CV et lettre de motivation » avec lecture de la lettre en aperçu PDF (iframe)
      et téléchargement. Deux boutons « Voir mon CV » et « Lettre de motivation »
      ajoutés à la barre latérale sur toutes les pages (assets/js/documents.js,
      injecté via main.js), avec un aperçu PDF partagé et téléchargement direct du
      fichier original ; l'aperçu de la lettre (parcours.html) est exclu de la
      visionneuse de planches (classe .visionneuse-doc-fixe). Lettre publiée telle
      quelle (ni adresse postale, ni téléphone). Règle 02 mise à jour (3 documents
      téléchargeables). Footer « Dernière mise à jour » porté au 15 octobre 2026.

- [x] Tags de compétences (15 octobre 2026) : dans parcours.html, les bulles de survol
      « Compétences acquises » (.chrono-bulle) sont remplacées par des tags visibles
      directement dans chaque carte de la frise (plus exhaustifs et précis, sans doublon
      dans une même liste) ; nouvelle section dépliable « Toutes les compétences
      acquises » placée sous « Compétences techniques » (<details>/<summary> natif, sans
      JavaScript), listant l'ensemble des compétences par thème (CAO/DAO et dessin
      technique, conception 3D et aménagement, chiffrage et gestion, restauration
      collective, fonction publique et transversal, culture artistique et communication).
      Styles .tags / .tag et .accordeon ajoutés (style.css) ; règles .chrono-bulle
      retirées ; à l'impression, tags noir sur blanc et accordéon masqué (print.css).

- [ ] Adresse e-mail de contact mise à jour → contact@calogero-volpe.eu (contact.html,
      parcours.html, memory-bank). Reste à faire : le CV PDF publié affiche encore
      l'ancienne adresse (texte vectoriel en police sous-ensemble) — le régénérer depuis
      la source et remplacer assets/fichiers/cv-volpe-calogero.pdf.

## Rappel de fin de jalon
git add . → git commit → git push origin main → git status propre → page vérifiée en
ligne → memory-bank mis à jour et poussé → recherche des noms interdits.
