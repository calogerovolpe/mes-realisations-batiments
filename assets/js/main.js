/* Volpe Calogero — Dessinateur projeteur CAO/DAO — point d'entrée JavaScript.
   Chargé en defer (aucun blocage du rendu). Amélioration progressive : le site
   reste entièrement lisible et navigable JavaScript désactivé.
   Des scripts classiques (et non des modules ES) sont utilisés afin de
   fonctionner aussi en ouverture directe d'un fichier local (file://). */
(function () {
  'use strict';

  // Scripts de fonctionnalité à charger (ordre d'exécution préservé).
  var modules = [
    'assets/js/print.js',
    'assets/js/nav.js',
    'assets/js/search.js',
    'assets/js/sommaire.js',
    'assets/js/viewer.js',
    'assets/js/global-search.js'
  ];

  modules.forEach(function (src) {
    var script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.head.appendChild(script);
  });
})();
