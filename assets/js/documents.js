/* Volpe Calogero — Dessinateur projeteur CAO/DAO — visionneuse de documents.
   Confort ajouté par JavaScript (amélioration progressive) : deux boutons dans la
   barre latérale (« Voir mon CV », « Lettre de motivation ») et un aperçu PDF
   partagé, avec téléchargement direct du fichier original. Sans JavaScript, ces
   contrôles n'existent pas ; le CV et la lettre restent accessibles depuis
   parcours.html (liens de téléchargement et aperçu CSS de la lettre).
   Aucune animation : rien à désactiver pour prefers-reduced-motion. */
(function () {
  'use strict';

  var DOCUMENTS = {
    cv: {
      fichier: 'assets/fichiers/cv-volpe-calogero.pdf',
      titre: 'CV — Volpe Calogero',
      libelle: 'Voir mon CV'
    },
    lettre: {
      fichier: 'assets/fichiers/lettre-motivation.pdf',
      titre: 'Lettre de motivation — Volpe Calogero',
      libelle: 'Lettre de motivation'
    }
  };

  var ICO_CV = '<svg class="nav-ico" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4"/><path d="M9 13h6M9 17h6"/></svg>';
  var ICO_LETTRE = '<svg class="nav-ico" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>';

  var apercu = null;
  var cadre = null;
  var titre = null;
  var lienPdf = null;
  var boutonFermer = null;
  var focusRetour = null;

  /* Aperçu PDF unique, partagé par les deux documents. */
  function construireApercu() {
    apercu = document.createElement('div');
    apercu.className = 'apercu-doc';
    apercu.setAttribute('role', 'dialog');
    apercu.setAttribute('aria-modal', 'true');
    apercu.setAttribute('aria-label', 'Aperçu de document');
    apercu.innerHTML =
      '<div class="visionneuse-boite visionneuse-boite-doc">' +
        '<div class="visionneuse-doc-tete">' +
          '<p class="visionneuse-doc-titre"></p>' +
          '<a class="visionneuse-doc-lien" href="#">Télécharger le PDF</a>' +
        '</div>' +
        '<iframe class="visionneuse-doc" title="" loading="lazy"></iframe>' +
      '</div>' +
      '<button type="button" class="visionneuse-fermer" aria-label="Fermer l\'aperçu">✕</button>';
    document.body.appendChild(apercu);

    cadre = apercu.querySelector('.visionneuse-doc');
    titre = apercu.querySelector('.visionneuse-doc-titre');
    lienPdf = apercu.querySelector('.visionneuse-doc-lien');
    boutonFermer = apercu.querySelector('.visionneuse-fermer');

    boutonFermer.addEventListener('click', fermer);
    apercu.addEventListener('click', function (e) { if (e.target === apercu) { fermer(); } });
  }

  function ouvrir(cle) {
    var doc = DOCUMENTS[cle];
    if (!doc) { return; }
    focusRetour = document.activeElement;
    titre.textContent = doc.titre;
    cadre.setAttribute('title', doc.titre);
    cadre.setAttribute('src', doc.fichier);
    lienPdf.setAttribute('href', doc.fichier);
    lienPdf.setAttribute('download', '');
    apercu.classList.add('est-ouvert');
    document.documentElement.style.overflow = 'hidden';
    boutonFermer.focus();
  }

  function fermer() {
    apercu.classList.remove('est-ouvert');
    document.documentElement.style.overflow = '';
    cadre.setAttribute('src', '');
    if (focusRetour && focusRetour.focus) { focusRetour.focus(); }
    focusRetour = null;
  }

  /* Deux boutons ajoutés à la barre latérale, à la suite des entrées de menu. */
  function construireBoutons() {
    var liste = document.querySelector('.site-nav ul');
    if (!liste) { return; }
    [['cv', ICO_CV], ['lettre', ICO_LETTRE]].forEach(function (entree) {
      var doc = DOCUMENTS[entree[0]];
      var item = document.createElement('li');
      item.className = 'nav-document';
      var bouton = document.createElement('button');
      bouton.type = 'button';
      bouton.className = 'doc-btn';
      bouton.innerHTML = entree[1] + '<span class="nav-libelle">' + doc.libelle + '</span>';
      bouton.setAttribute('aria-label', doc.libelle + ' — aperçu et téléchargement');
      bouton.addEventListener('click', function () { ouvrir(entree[0]); });
      item.appendChild(bouton);
      liste.appendChild(item);
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && apercu && apercu.classList.contains('est-ouvert')) { fermer(); }
  });

  function init() {
    construireApercu();
    construireBoutons();
  }

  if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', init); }
  else { init(); }
})();
