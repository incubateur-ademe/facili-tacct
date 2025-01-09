export const Sante = () => {
  return (
    <div>
      <h5>Santé</h5>
      <div>
        <div>
          <p style={{ fontSize: '1.2em' }}>
            <b>Partenaires relais</b>
          </p>
          <p>
            Appuyez-vous sur un collègue de votre collectivité qui a une
            expertise ou une autre entité telle que l’Agence Régionale de Santé,
            un Centre d’Action Sociale, ou Écoles de santé publique...
          </p>
          <p style={{ fontSize: '1.2em' }}>
            <b>Arguments pour convaincre</b>
          </p>

          <p>
            En parallèle des données fournies, utilisez ces éléments pour
            discuter du niveau de gravité de la situation sanitaire avec les
            services et partenaires pertinents. Vos leviers d'action seront à
            déterminer collectivement dans les autres thématiques de la
            constellation.
          </p>
        </div>
        <div
          style={{
            backgroundColor: 'white',
            padding: '1em',
            borderRadius: '5px',
            margin: '0.5em 0'
          }}
        >
          {/* Attention à l'effet loupe des campagnes de prévention contre les canicules. Si 2/3 de la surmortalité concerne effectivement les personnes âgées, 
          1/3 concerne de plus jeunes actifs : les hommes de 35 à 44 ans (+27% en 2003), les femmes de 45 à 54 ans (+23% en 2003).  */}
          En France en 2003, une surmortalité significative a été observée à
          partir de la classe d'âge 35-44 ans chez les hommes (+27%) et 45-54
          chez les femmes (+23%){' '}
          <cite>
            [Hémon, D., Jougla, E. (2004). Surmortalité liée à la canicule
            d’août 2003. Rapport remis au Ministre de la Santé et de la
            Protection Sociale, INSERM, 76p.]
          </cite>
          .
        </div>
        <div
          style={{
            backgroundColor: 'white',
            padding: '1em',
            borderRadius: '5px',
            margin: '0.5em 0'
          }}
        >
          L'exposition à la chaleur en dehors des périodes de canicules présente
          un risque plus faible mais plus fréquent. Son impact sur la
          surmortalité totale est plus important que celui des vagues de chaleur
          extrêmes qui sont plus dangereuses mais plus rares.
        </div>
        <div
          style={{
            backgroundColor: 'white',
            padding: '1em',
            borderRadius: '5px',
            margin: '0.5em 0'
          }}
        >
          La culture du risque "chaleur" peut atténuer le constat en limitant
          les comportements à risque (temps passé à l'extérieur, habillement,
          conscience des besoins hydriques, pratique de la sieste...).
        </div>
      </div>
    </div>
  );
};
