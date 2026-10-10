/* Volpe Calogero — Dessinateur projeteur CAO/DAO — recherche dans l'index
   des fonctions (excel.html). Amélioration progressive : la barre de recherche
   est entièrement créée par JavaScript, donc aucun contrôle inopérant lorsque
   JavaScript est désactivé — l'index complet reste alors affiché et navigable.
   Aucune animation : rien à désactiver pour prefers-reduced-motion. */
(function () {
  'use strict';

  /* Minuscules + suppression des accents (recherche insensible à la casse et
     aux accents, par exemple « agregation » trouve « agrégation »). */
  function normaliser(texte) {
    return (texte || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  function construireBarre(conteneur) {
    var barre = document.createElement('div');
    barre.className = 'recherche';

    var label = document.createElement('label');
    label.className = 'visually-hidden';
    label.setAttribute('for', 'recherche-fonctions');
    label.textContent = 'Rechercher une fonction';

    var champ = document.createElement('input');
    champ.type = 'search';
    champ.id = 'recherche-fonctions';
    champ.className = 'recherche-champ';
    champ.placeholder = 'Rechercher une fonction…';
    champ.setAttribute('autocomplete', 'off');
    champ.setAttribute('spellcheck', 'false');

    var filtres = document.createElement('div');
    filtres.className = 'recherche-filtres';
    filtres.setAttribute('role', 'group');
    filtres.setAttribute('aria-label', 'Filtrer par catégorie');

    var compteur = document.createElement('p');
    compteur.className = 'recherche-compteur';
    compteur.setAttribute('role', 'status');
    compteur.setAttribute('aria-live', 'polite');

    barre.appendChild(label);
    barre.appendChild(champ);
    barre.appendChild(filtres);
    barre.appendChild(compteur);
    conteneur.parentNode.insertBefore(barre, conteneur);

    return { champ: champ, filtres: filtres, compteur: compteur };
  }

  function init() {
    var conteneur = document.querySelector('.fonctions');
    if (!conteneur) { return; }

    var groupes = Array.prototype.slice.call(
      conteneur.querySelectorAll('.fonctions-groupe')
    );
    if (groupes.length === 0) { return; }

    var ui = construireBarre(conteneur);
    var filtreActif = null; // null = « Tous »

    // Boutons de catégorie dérivés des titres <h3> des groupes (aucune liste
    // codée en dur : les filtres suivent automatiquement le contenu).
    var boutons = [];
    function creerBouton(libelle, valeurFiltre) {
      var bouton = document.createElement('button');
      bouton.type = 'button';
      bouton.className = 'filtre-btn';
      bouton.textContent = libelle;
      bouton.setAttribute('aria-pressed', valeurFiltre === null ? 'true' : 'false');
      bouton.addEventListener('click', function () {
        filtreActif = valeurFiltre;
        Array.prototype.forEach.call(boutons, function (b) {
          b.setAttribute('aria-pressed', b === bouton ? 'true' : 'false');
        });
        appliquer();
      });
      boutons.push(bouton);
      ui.filtres.appendChild(bouton);
    }

    creerBouton('Tous', null);
    Array.prototype.forEach.call(groupes, function (groupe) {
      var titre = groupe.querySelector('h3');
      if (!titre) { return; }
      var libelle = titre.textContent.trim();
      creerBouton(libelle, libelle);
    });

    function appliquer() {
      var requete = normaliser(ui.champ.value.trim());
      var total = 0;

      Array.prototype.forEach.call(groupes, function (groupe) {
        var titre = groupe.querySelector('h3');
        var libelle = titre ? titre.textContent.trim() : '';
        var categorieOK = (filtreActif === null) ||
          (normaliser(libelle) === normaliser(filtreActif));

        var visiblesGroupe = 0;
        Array.prototype.forEach.call(groupe.querySelectorAll('li'), function (li) {
          var requeteOK = requete === '' ||
            normaliser(li.textContent).indexOf(requete) !== -1;
          var visible = categorieOK && requeteOK;
          li.classList.toggle('est-masque', !visible);
          if (visible) { visiblesGroupe++; }
        });

        // On masque aussi le groupe entier lorsqu'aucune entrée ne reste.
        groupe.classList.toggle('est-masque', visiblesGroupe === 0);
        total += visiblesGroupe;
      });

      if (total === 0) {
        ui.compteur.textContent = 'Aucun résultat';
      } else {
        ui.compteur.textContent = total +
          (total > 1 ? ' fonctions affichées' : ' fonction affichée');
      }
    }

    ui.champ.addEventListener('input', appliquer);
    appliquer();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();