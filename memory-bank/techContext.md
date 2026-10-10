# techContext.md

Langages : HTML5, CSS3, JavaScript vanilla (amélioration progressive).
JavaScript autorisé uniquement en confort : le contenu reste lisible et navigable
JavaScript désactivé. Point d'entrée unique en defer ; tout désactivé si
prefers-reduced-motion: reduce.
Aucun : framework, build, npm, CDN, police externe, analytics, cookie, script tiers.

Fichiers de style : assets/css/style.css (thème « plan technique » CAO/DAO),
assets/css/print.css (impression).
Fichiers de script : assets/js/main.js (entrée), nav.js, print.js, search.js,
sommaire.js, global-search.js.

Hébergement : GitHub Pages, dépôt public « mes-realisations-batiments »,
branche main, dossier / (root). JAMAIS /docs.

Sources de référence : dossier /docs local, LECTURE SEULE, jamais publié, présent dans
le .gitignore (il contient notamment /docs/BAT : CV et visuels d'origine).

Outils de production : Cline dans VS Code ; Python + Pillow pour le redimensionnement et
la compression des images (< 300 Ko).

Accessibilité : structure sémantique, un seul h1 par page, navigation clavier et focus
visible, contraste AA, alt sur toutes les images, lisible à 375 px.
