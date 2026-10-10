/* Volpe Calogero — Dessinateur projeteur CAO/DAO — recherche globale (Ctrl+K, Cmd+K sur Mac).
   Interface créée par JavaScript : sans lui, le site reste navigable (amélioration progressive).
   Index « titre|url|section|résumé » séparé par « ; » — à tenir à jour avec les pages. */
(function () {
  'use strict';

  var DONNEES =
    'Accueil|index.html|Accueil|Portfolio de dessin technique CAO/DAO;' +
    'Portfolio CAO / DAO|portfolio.html|Portfolio|Plans et réalisations sous AutoCAD;' +
    'Modèles Excel|excel.html|Excel|Sommaire des modèles et des fonctions;' +
    'Mensana — modèle d\'exploitation|excel-modele-01-rentabilite.html|Excel|Rentabilité, coût matière, prévisionnel;' +
    'Coût matière — Casa Urpi|excel-modele-02-cout-matiere.html|Excel|Fiches techniques et coûts des recettes;' +
    'Investissement — L\'Appartement|excel-modele-03-investissement.html|Excel|Plan d\'investissement et financement;' +
    'Parcours et compétences|parcours.html|Parcours|Compétences, formation, expérience;' +
    'Contact|contact.html|Contact|Formulaire de contact et e-mail;' +
    'Mentions légales|mentions-legales.html|Mentions légales|Éditeur et confidentialité;' +
    'Page introuvable|404.html|404|Page d\'erreur personnalisée';

  function normaliser(t) {
    return (t || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
  var PAGES = DONNEES.split(';').map(function (r) {
    var p = r.split('|');
    return { t: p[0], u: p[1], s: p[2], o: p[3], c: normaliser(r.replace(/\|/g, ' ')) };
  });

  var boite, champ, liste, statut, focusRetour = null;

  function construire() {
    boite = document.createElement('div');
    boite.className = 'rg-overlay';
    boite.hidden = true;
    boite.innerHTML =
      '<div class="rg-panneau" role="dialog" aria-modal="true" aria-label="Recherche dans le site">' +
      '<label class="rg-label" for="rg-champ">Rechercher une page</label>' +
      '<input class="rg-champ" id="rg-champ" type="search" placeholder="Rechercher une page, une rubrique…" autocomplete="off" spellcheck="false">' +
      '<ul class="rg-liste" aria-label="Résultats"></ul>' +
      '<p class="rg-statut" role="status" aria-live="polite"></p></div>';
    document.body.appendChild(boite);
    champ = boite.querySelector('.rg-champ');
    liste = boite.querySelector('.rg-liste');
    statut = boite.querySelector('.rg-statut');

    boite.addEventListener('click', function (e) { if (e.target === boite) { fermer(); } });
    champ.addEventListener('input', function () { rendre(champ.value); });
    champ.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') { e.preventDefault(); var p = liste.querySelector('a'); if (p) { p.focus(); } }
      else if (e.key === 'Enter' && liste.querySelector('a')) { e.preventDefault(); liste.querySelector('a').click(); }
    });
    liste.addEventListener('keydown', function (e) {
      var lien = e.target.closest('a');
      if (!lien || (e.key !== 'ArrowDown' && e.key !== 'ArrowUp')) { return; }
      e.preventDefault();
      var v = e.key === 'ArrowDown' ? lien.parentNode.nextElementSibling : lien.parentNode.previousElementSibling;
      if (v) { v.querySelector('a').focus(); }
      else if (e.key === 'ArrowUp') { champ.focus(); }
    });
    boite.addEventListener('keydown', function (e) {
      if (e.key !== 'Tab') { return; }
      var f = boite.querySelectorAll('input, a');
      if (!f.length) { return; }
      if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
    });
    document.addEventListener('keydown', function (e) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); basculer(); }
      else if (e.key === 'Escape' && !boite.hidden) { fermer(); }
    });
    var nav = document.querySelector('.site-nav ul');
    if (nav) {
      var li = document.createElement('li');
      li.innerHTML = '<button type="button" class="rg-btn" aria-label="Rechercher dans le site (Ctrl+K)">Rechercher <kbd class="rg-kbd">Ctrl K</kbd></button>';
      li.querySelector('button').addEventListener('click', ouvrir);
      nav.appendChild(li);
    }
  }

  function rendre(requete) {
    var q = normaliser(requete.trim());
    var html = '';
    var n = 0;
    PAGES.forEach(function (p) {
      if (q === '' || p.c.indexOf(q) !== -1) {
        n++;
        html += '<li><a class="rg-resultat" href="' + p.u + '"><span class="rg-resultat-titre">' + p.t +
          '</span><span class="rg-resultat-meta">' + p.s + ' — ' + p.o + '</span></a></li>';
      }
    });
    liste.innerHTML = html;
    statut.textContent = n === 0 ? 'Aucun résultat' : n + (n > 1 ? ' résultats' : ' résultat');
  }

  function ouvrir() { focusRetour = document.activeElement; boite.hidden = false; champ.value = ''; rendre(''); champ.focus(); }
  function fermer() { boite.hidden = true; if (focusRetour && focusRetour.focus) { focusRetour.focus(); } focusRetour = null; }
  function basculer() { if (boite.hidden) { ouvrir(); } else { fermer(); } }

  if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', construire); }
  else { construire(); }
})();

