/* Volpe Calogero — Dessinateur projeteur CAO/DAO — navigation.
   Deux conforts ajoutés par JavaScript (amélioration progressive) : un bouton
   « retour en haut » et un bouton « copier » à côté de chaque adresse e-mail.
   Les boutons sont créés par JavaScript, donc aucun contrôle inopérant lorsque
   JavaScript est désactivé. La navigation collante et l'indication de la page
   courante (aria-current) restent, elles, gérées en CSS et en HTML. */
(function () {
  'use strict';

  function mouvementReduit() {
    return window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  /* Icônes SVG intégrées aux boutons ajoutés par JavaScript. */
  var ICO_COPIE = '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>';
  var ICO_COCHE = '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m4 12.5 5 5L20 7"/></svg>';
  var ICO_THEME = {
    auto: '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="8"/><path d="M12 4v16"/></svg>',
    clair: '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6 7 7M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4"/></svg>',
    sombre: '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z"/></svg>'
  };

  /* Bouton « retour en haut » : apparaît après 400 px de défilement. */
  function construireRetourHaut() {
    var bouton = document.createElement('button');
    bouton.type = 'button';
    bouton.className = 'back-to-top';
    bouton.setAttribute('aria-label', 'Retour en haut de page');
    bouton.textContent = '↑ Haut';
    document.body.appendChild(bouton);

    var enAttente = false;
    function majVisibilite() {
      if (window.scrollY > 400) {
        bouton.classList.add('is-visible');
      } else {
        bouton.classList.remove('is-visible');
      }
      enAttente = false;
    }
    window.addEventListener('scroll', function () {
      if (!enAttente) {
        enAttente = true;
        window.requestAnimationFrame(majVisibilite);
      }
    }, { passive: true });

    bouton.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: mouvementReduit() ? 'auto' : 'smooth' });
    });

    majVisibilite();
  }

  /* Copie d'un texte dans le presse-papiers, avec replis successifs. */
  function copierTexte(texte) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(texte);
    }
    return new Promise(function (resolve, reject) {
      var zone = document.createElement('textarea');
      zone.value = texte;
      zone.setAttribute('readonly', '');
      zone.style.position = 'fixed';
      zone.style.top = '-9999px';
      document.body.appendChild(zone);
      zone.select();
      try {
        var ok = document.execCommand('copy');
        document.body.removeChild(zone);
        if (ok) { resolve(); } else { reject(new Error('Copie impossible')); }
      } catch (err) {
        document.body.removeChild(zone);
        reject(err);
      }
    });
  }

  /* Bouton icône « Copier » à côté de chaque adresse e-mail. */
  function construireCopieEmail() {
    var liens = document.querySelectorAll('a[href^="mailto:"]');
    Array.prototype.forEach.call(liens, function (lien) {
      var bouton = document.createElement('button');
      bouton.type = 'button';
      bouton.className = 'copy-email';
      bouton.innerHTML = ICO_COPIE;
      bouton.setAttribute('aria-label', "Copier l'adresse e-mail");
      lien.parentNode.insertBefore(bouton, lien.nextSibling);

      var minuterie = null;
      bouton.addEventListener('click', function () {
        var adresse = lien.getAttribute('href').replace('mailto:', '');
        copierTexte(adresse).then(function () {
          bouton.innerHTML = ICO_COCHE;
          bouton.setAttribute('aria-label', 'Adresse e-mail copiée');
          if (minuterie) { clearTimeout(minuterie); }
          minuterie = setTimeout(function () {
            bouton.innerHTML = ICO_COPIE;
            bouton.setAttribute('aria-label', "Copier l'adresse e-mail");
          }, 2000);
        }).catch(function () {
          // Repli : on sélectionne l'adresse pour une copie manuelle.
          var selection = window.getSelection();
          var plage = document.createRange();
          plage.selectNodeContents(lien);
          selection.removeAllRanges();
          selection.addRange(plage);
        });
      });
    });
  }

  /* Bascule de thème : automatique (préférence système), clair ou sombre.
     Le choix est mémorisé (localStorage — préférence d'affichage non traçante).
     Sans JavaScript : thème automatique seul. */
  function construireTheme() {
    var barre = document.querySelector('.site-sidebar');
    if (!barre) { return; }
    var ordre = ['auto', 'clair', 'sombre'];
    var libelle = { auto: 'Thème : automatique', clair: 'Thème : clair', sombre: 'Thème : sombre' };
    var racine = document.documentElement;
    var mode = racine.getAttribute('data-theme') || 'auto';
    if (ordre.indexOf(mode) === -1) { mode = 'auto'; }
    var bouton = document.createElement('button');
    bouton.type = 'button';
    bouton.className = 'theme-toggle';

    function rendre() {
      bouton.innerHTML = ICO_THEME[mode] + '<span class="nav-libelle">' + libelle[mode] + '</span>';
      bouton.setAttribute('aria-label', libelle[mode] + ' — cliquer pour changer');
    }

    bouton.addEventListener('click', function () {
      mode = ordre[(ordre.indexOf(mode) + 1) % ordre.length];
      if (mode === 'auto') { racine.removeAttribute('data-theme'); }
      else { racine.setAttribute('data-theme', mode); }
      try {
        if (mode === 'auto') { localStorage.removeItem('theme'); }
        else { localStorage.setItem('theme', mode); }
      } catch (e) { /* stockage indisponible : le thème reste appliqué pour la page */ }
      rendre();
    });

    rendre();
    barre.appendChild(bouton);
  }

  function init() {
    construireRetourHaut();
    construireCopieEmail();
    construireTheme();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();