/* Volpe Calogero — Dessinateur projeteur CAO/DAO — visionneuse de planches.
   Confort ajouté par JavaScript (amélioration progressive) : l'ouverture et la
   fermeture de l'aperçu fonctionnent déjà en CSS pur (:target). Ce module ajoute
   la navigation à la molette et au clavier, et les boutons précédent / suivant. */
(function () {
  'use strict';

  function liste() {
    return Array.prototype.slice.call(document.querySelectorAll('.visionneuse'));
  }
  function actif(vues) {
    for (var i = 0; i < vues.length; i++) {
      if ('#' + vues[i].id === window.location.hash) { return i; }
    }
    return -1;
  }
  function pas(vues, dir) {
    var i = actif(vues);
    if (i < 0) { return; }
    var j = Math.min(vues.length - 1, Math.max(0, i + dir));
    if (j !== i) { window.location.hash = vues[j].id; }
  }
  function fermer() { window.location.hash = 'dessins-autocad'; }

  function construire() {
    var vues = liste();
    if (!vues.length) { return; }

    /* Boutons précédent / suivant, un jeu par aperçu. */
    vues.forEach(function (v) {
      var nav = document.createElement('div');
      nav.className = 'visionneuse-nav';
      nav.innerHTML =
        '<button type="button" class="visionneuse-btn" data-dir="-1" aria-label="Planche précédente">\u2039</button>' +
        '<button type="button" class="visionneuse-btn" data-dir="1" aria-label="Planche suivante">\u203a</button>';
      Array.prototype.forEach.call(nav.querySelectorAll('button'), function (b) {
        b.addEventListener('click', function () { pas(vues, parseInt(b.getAttribute('data-dir'), 10)); });
      });
      v.appendChild(nav);
    });

    /* Clavier : flèches et Échap. */
    document.addEventListener('keydown', function (e) {
      if (actif(vues) < 0) { return; }
      if (e.key === 'Escape') { fermer(); }
      else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') { e.preventDefault(); pas(vues, -1); }
      else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') { e.preventDefault(); pas(vues, 1); }
    });

    /* Molette : haut = planche précédente, bas = planche suivante. */
    document.addEventListener('wheel', function (e) {
      if (actif(vues) < 0) { return; }
      e.preventDefault();
      pas(vues, e.deltaY > 0 ? 1 : -1);
    }, { passive: false });
  }

  if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', construire); }
  else { construire(); }
})();
