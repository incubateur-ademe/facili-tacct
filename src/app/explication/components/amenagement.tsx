const Amenagement = () => {
  return (
    <div>
      <h5>Aménagement</h5>
      <div>
        <p style={{fontSize: "1.2em"}}><b>Partenaires relais</b></p>
        <p>
          Rapprochez-vous des services impliqués dans l'élaboration du PLU et du CLS ; investiguez la présence 
          d'îlots de chaleur avec l'Agence d'urbanisme, etc.
        </p>
        <p style={{fontSize: "1.2em"}}><b>Arguments pour convaincre</b></p>
        <div style={{backgroundColor: "white", padding:"1em", borderRadius:"5px", margin:"0.5em 0"}}>
          Lors de l'épisode de canicule de 2003, la surmortalité a été de 40 % plus élevée dans les petites et moyennes villes, 80 % plus élevée à Lyon, 
          et 141 % plus élevée à Paris que dans le reste de la France (Source : Vandentorren et al., 2004).
        </div>
        <div style={{backgroundColor: "white", padding:"1em", borderRadius:"5px", margin:"0.5em 0"}}>
          Le phénomène d'îlot de chaleur urbain (ICU) a été identifié comme un des principaux facteurs de surmortalité :
          habiter dans un quartier plus chaud multiplie le risque de décès par 2, « <i>surtout si cette chaleur persiste la nuit
          et pendant plusieurs jours </i>». (Source :  <a href="https://www.santepubliquefrance.fr/determinants-de-sante/climat/fortes-chaleurs-canicule/documents/rapport-synthese/role-des-ilots-de-chaleur-urbains-dans-la-surmortalite-observee-pendant-les-vagues-de-chaleur.-synthese-des-etudes-realisees-par-l-institut-de-veil" target="_blanck">
            Institut de veille sanitaire</a> 2012)
        </div>
        <div style={{backgroundColor: "white", padding:"1em", borderRadius:"5px", margin:"0.5em 0"}}>
          Si l'ICU est une notion clé pour comprendre la surmortalité en période de canicule, 
          le stress thermique subi par le corps peut intervenir en dehors des périodes de canicule proprement dites. 
          Il est lié à l'environnement immédiat des personnes et à leurs comportements. 
          D'où l'intérêt de mener des réflexions conjointes aménagement - santé.
        </div>
      </div>
    </div>
  );
};

export default Amenagement;




