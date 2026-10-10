/* Volpe Calogero — Dessinateur projeteur CAO/DAO — sommaire de page.
   Crée, à partir des <h2> visibles, un sommaire cliquable (défilement doux,
   section affichée surlignée). Amélioration progressive : sans JavaScript, le
   contenu reste intégralement lisible. prefers-reduced-motion : saut direct. */
(function () {
  'use strict';

  function mouvementReduit() {
    return window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  /* Identifiant d'ancre unique, sans accent (ex. « Savoir-être » → savoir-etre). */
  function fabriquerId(texte, dejaVus) {
    var base = texte.toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') || 'section';
    var id = base, n = 2;
    while (dejaVus[id]) { id = base + '-' + n; n++; }
    dejaVus[id] = true;
    return id;
  }

  function init() {
    var main = document.querySelector('main');
    if (!main) { return; }
    var titres = Array.prototype.filter.call(
      main.querySelectorAll('h2'),
      function (h) { return !h.classList.contains('visually-hidden'); }
    );
    if (titres.length < 3) { return; }

    var dejaVus = {};
    Array.prototype.forEach.call(main.querySelectorAll('[id]'), function (el) {
      dejaVus[el.id] = true;
    });

    var sommaire = document.createElement('nav');
    sommaire.className = 'sommaire';
    sommaire.setAttribute('aria-label', 'Sommaire de la page');
    var intitule = document.createElement('p');
    intitule.className = 'sommaire-titre';
    intitule.textContent = 'Sommaire';
    sommaire.appendChild(intitule);

    var liste = document.createElement('ul');
    var liens = [];
    Array.prototype.forEach.call(titres, function (titre) {
      var texte = titre.textContent.trim();
      if (!titre.id) { titre.id = fabriquerId(texte, dejaVus); }
      else { dejaVus[titre.id] = true; }
      var li = document.createElement('li');
      var lien = document.createElement('a');
      lien.href = '#' + titre.id;
      lien.textContent = texte;
      lien.addEventListener('click', function (e) {
        e.preventDefault();
        titre.scrollIntoView({ behavior: mouvementReduit() ? 'auto' : 'smooth', block: 'start' });
        titre.setAttribute('tabindex', '-1');
        if (titre.focus) { titre.focus({ preventScroll: true }); }
        activer(titre);
      });
      li.appendChild(lien);
      liste.appendChild(li);
      liens.push({ lien: lien, titre: titre });
    });
    sommaire.appendChild(liste);
    titres[0].parentNode.insertBefore(sommaire, titres[0]);

    function activer(titreActif) {
      Array.prototype.forEach.call(liens, function (item) {
        if (item.titre === titreActif) { item.lien.setAttribute('aria-current', 'true'); }
        else { item.lien.removeAttribute('aria-current'); }
      });
    }

    if ('IntersectionObserver' in window) {
      var obs = new IntersectionObserver(function (entrees) {
        Array.prototype.forEach.call(entrees, function (e) {
          if (e.isIntersecting) { activer(e.target); }
        });
      }, { rootMargin: '-20% 0px -70% 0px', threshold: 0 });
      Array.prototype.forEach.call(titres, function (t) { obs.observe(t); });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();