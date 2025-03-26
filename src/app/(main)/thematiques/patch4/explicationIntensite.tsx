export const tagIntensite = [
  {
    intensite: 'Intensité très forte',
    textHeader: 'plus de deux fois plus forte que sur la période 2030-2050',
    textContent: (
      <div>
        <p>
          =&gt; Dans votre diagnostic de vulnérabilité aux impacts du changement climatique, le niveau d’exposition à l’aléa climatique doit être considéré comme maximal.
        </p>
        <p>
          =&gt; À défaut de disposer de capacités d’adaptation démontrant le contraire, considérez comme maximal votre niveau de sensibilité face à cette exposition, pour les habitants, les infrastructures, les ressources naturelles et les activités économiques.
        </p>
        <p>
          =&gt; Vérifier que votre plan d’action comporte des actions visant à réduire vos différents facteurs de sensibilité face à cette exposition. Si ce n’est pas le cas, il convient d’en ajouter.
        </p>
      </div>
    )
  },
  {
    intensite: 'Intensité forte',
    textHeader: 'est 1 à 2 fois supérieure à la valeur de l’évolution sur la période 2030-2050 ',
    textContent: (
      <div>
        <p>
          =&gt; Vérifier que votre diagnostic identifie bien l’aléa climatique suivi par cet indice, sinon l’ajouter.
        </p>
        <p>
          =&gt; Vérifier que votre diagnostic évalue la sensibilité face à cette exposition, pour les habitants, les infrastructures, les ressources naturelles et les activités économiques.
        </p>
        <p>
          =&gt; Éventuellement, compléter votre plan d’action.
        </p>
      </div>
    )
  },
  {
    intensite: 'Intensité modérée',
    textHeader: 'est inférieure à la valeur sur la période 2030-2050',
    textContent: (
      <p>
        =&gt; il n’y a pas de correctif spécifique à apporter à court terme.
      </p>
    )
  },
];
