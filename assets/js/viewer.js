/* Volpe Calogero — Dessinateur projeteur CAO/DAO — visionneuse de planches.
   Confort ajouté par JavaScript (amélioration progressive) : l'ouverture et la
   fermeture de l'aperçu fonctionnent déjà en CSS pur (:target). Ce module ajoute
   la navigation à la molette et au clavier, les boutons précédent / suivant et
   le zoom des images (clic sur l'image ou bouton). */
(function () {
  'use strict';

  function liste() {
    /* Les aperçus de documents (CV, lettre) portent la classe .visionneuse-doc-fixe :
       ce ne sont pas des planches — ils gardent leur défilement natif et ne
       reçoivent ni les commandes, ni le zoom, ni la navigation de la visionneuse. */
    return Array.prototype.slice.call(
      document.querySelectorAll('.visionneuse:not(.visionneuse-doc-fixe)')
    );
  }
  function actif(vues) {
    for (var i = 0; i < vues.length; i++) {
      if ('#' + vues[i].id === window.location.hash) { return i; }
    }
    return -1;
  }
  function boite(v) { return v.querySelector('.visionneuse-boite'); }
  function estZoom(v) {
    var b = boite(v);
    return !!(b && b.classList.contains('est-zoom'));
  }
  function majBoutonZoom(vues) {
    var i = actif(vues);
    if (i < 0) { return; }
    var b = vues[i].querySelector('[data-role="zoom"]');
    if (!b) { return; }
    var z = estZoom(vues[i]);
    b.setAttribute('aria-pressed', z ? 'true' : 'false');
    b.setAttribute('aria-label', z ? "Réduire l'image" : "Zoomer l'image");
    b.textContent = z ? '−' : '+';
  }
  function resetZoom(vues) {
    vues.forEach(function (v) {
      var b = boite(v);
      if (b) { b.classList.remove('est-zoom'); }
    });
    majBoutonZoom(vues);
  }
  function basculerZoom(vues) {
    var i = actif(vues);
    if (i < 0) { return; }
    var b = boite(vues[i]);
    if (!b) { return; }
    b.classList.toggle('est-zoom');
    if (b.classList.contains('est-zoom')) { b.scrollTop = 0; b.scrollLeft = 0; }
    majBoutonZoom(vues);
  }
  function pas(vues, dir) {
    var i = actif(vues);
    if (i < 0) { return; }
    var j = Math.min(vues.length - 1, Math.max(0, i + dir));
    if (j !== i) { resetZoom(vues); window.location.hash = vues[j].id; }
  }
  function fermer() { window.location.hash = 'dessins-autocad'; }

  /* Aperçus de documents (CV, lettre) : la touche Échap reproduit la croix de
     fermeture (même cible que le lien « Fermer l'aperçu » du HTML). */
  function fermetureClavierDocs() {
    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') { return; }
      var doc = document.querySelector('.visionneuse-doc-fixe:target');
      if (!doc) { return; }
      var lien = doc.querySelector('.visionneuse-fermer');
      if (lien) { window.location.hash = lien.getAttribute('href'); }
    });
  }

  function construire() {
    fermetureClavierDocs();
    var vues = liste();
    if (!vues.length) { return; }

    /* Boutons précédent / suivant / zoom, un jeu par aperçu. */
    vues.forEach(function (v) {
      var nav = document.createElement('div');
      nav.className = 'visionneuse-nav';
      nav.innerHTML =
        '<button type="button" class="visionneuse-btn" data-role="zoom" aria-label="Zoomer l&#39;image" aria-pressed="false">+</button>' +
        '<button type="button" class="visionneuse-btn" data-dir="-1" aria-label="Planche précédente">‹</button>' +
        '<button type="button" class="visionneuse-btn" data-dir="1" aria-label="Planche suivante">›</button>';
      Array.prototype.forEach.call(nav.querySelectorAll('button'), function (b) {
        if (b.getAttribute('data-role') === 'zoom') {
          b.addEventListener('click', function () { basculerZoom(vues); });
        } else {
          b.addEventListener('click', function () { pas(vues, parseInt(b.getAttribute('data-dir'), 10)); });
        }
      });
      v.appendChild(nav);

      /* Clic sur l'image : bascule du zoom. */
      var img = v.querySelector('.visionneuse-boite img');
      if (img) { img.addEventListener('click', function () { basculerZoom(vues); }); }
    });

    /* Clavier : Échap ferme ; flèches et + / - ; quand l'image est zoomée, les
       flèches font défiler l'image au lieu de changer de planche. */
    document.addEventListener('keydown', function (e) {
      var i = actif(vues);
      if (i < 0) { return; }
      var b = boite(vues[i]);
      var z = estZoom(vues[i]);
      if (e.key === 'Escape') { fermer(); }
      else if (e.key === '+' || e.key === '=') { if (!z) { e.preventDefault(); basculerZoom(vues); } }
      else if (e.key === '-' || e.key === '_') { if (z) { e.preventDefault(); basculerZoom(vues); } }
      else if (z) {
        if (e.key === 'ArrowLeft') { e.preventDefault(); if (b) { b.scrollLeft -= 80; } }
        else if (e.key === 'ArrowRight') { e.preventDefault(); if (b) { b.scrollLeft += 80; } }
        else if (e.key === 'ArrowUp') { e.preventDefault(); if (b) { b.scrollTop -= 80; } }
        else if (e.key === 'ArrowDown') { e.preventDefault(); if (b) { b.scrollTop += 80; } }
      }
      else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') { e.preventDefault(); pas(vues, -1); }
      else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') { e.preventDefault(); pas(vues, 1); }
    });

    /* Molette : haut = planche précédente, bas = planche suivante.
       Image zoomée : la molette fait défiler l'image (défilement natif). */
    document.addEventListener('wheel', function (e) {
      var i = actif(vues);
      if (i < 0) { return; }
      if (estZoom(vues[i])) { return; }
      e.preventDefault();
      pas(vues, e.deltaY > 0 ? 1 : -1);
    }, { passive: false });

    /* Chaque ouverture ou fermeture repart en mode « ajusté ». */
    window.addEventListener('hashchange', function () { resetZoom(vues); });
  }

  if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', construire); }
  else { construire(); }
})();