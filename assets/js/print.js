/* Volpe Calogero — Dessinateur projeteur CAO/DAO — barre d'outils du CV.
   Amélioration progressive : les boutons sont ajoutés par JavaScript, donc
   aucun contrôle inopérant lorsque JavaScript est désactivé. « Imprimer cette
   page » ouvre la boîte de dialogue d'impression (window.print()), depuis
   laquelle le navigateur permet aussi d'enregistrer au format PDF. À côté, deux
   liens directs téléchargent le CV et la lettre de motivation au format PDF.
   La barre n'est ajoutée que sur les pages expressément concernées : seul le
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

    var lienCv = document.createElement('a');
    lienCv.className = 'print-btn';
    lienCv.href = 'assets/fichiers/cv-volpe-calogero.pdf';
    lienCv.setAttribute('download', '');
    lienCv.textContent = 'Télécharger le CV (PDF)';

    var lienLettre = document.createElement('a');
    lienLettre.className = 'print-btn';
    lienLettre.href = 'assets/fichiers/lettre-motivation.pdf';
    lienLettre.setAttribute('download', '');
    lienLettre.textContent = 'Télécharger la lettre de motivation (PDF)';

    barre.appendChild(boutonImprimer);
    barre.appendChild(lienCv);
    barre.appendChild(lienLettre);
    main.insertBefore(barre, main.firstChild);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', construireBarre);
  } else {
    construireBarre();
  }
})();
