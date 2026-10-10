/* Volpe Calogero — Dessinateur projeteur CAO/DAO — boutons d'impression.
   Amélioration progressive : les boutons sont ajoutés par JavaScript, donc
   aucun contrôle inopérant lorsque JavaScript est désactivé. Les deux boutons
   ouvrent la boîte de dialogue d'impression (window.print()), depuis laquelle
   le navigateur permet aussi d'enregistrer au format PDF.
   La barre n'est ajoutée que sur les pages expressément imprimables : seul le
   <main> portant l'attribut data-impression la reçoit (aujourd'hui la page
   parcours, conçue pour s'imprimer comme un CV). */
(function () {
  'use strict';

  function construireBarre() {
    var main = document.querySelector('main[data-impression]');
    if (!main) { return; }

    var barre = document.createElement('div');
    barre.className = 'print-toolbar';

    var boutonImprimer = document.createElement('button');
    boutonImprimer.type = 'button';
    boutonImprimer.className = 'print-btn';
    boutonImprimer.textContent = 'Imprimer cette page';
    boutonImprimer.addEventListener('click', function () { window.print(); });

    var boutonPdf = document.createElement('button');
    boutonPdf.type = 'button';
    boutonPdf.className = 'print-btn';
    boutonPdf.textContent = 'Télécharger en PDF';
    boutonPdf.addEventListener('click', function () { window.print(); });

    barre.appendChild(boutonImprimer);
    barre.appendChild(boutonPdf);
    main.insertBefore(barre, main.firstChild);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', construireBarre);
  } else {
    construireBarre();
  }
})();
