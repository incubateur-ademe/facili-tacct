import { Round } from "@/lib/utils/reusableFunctions/round";
import { Sum } from "@/lib/utils/reusableFunctions/sum";

export const CoursDeauTooltip = (coursDeau: string, color: string) => {
  return `
    <div style="display: flex; flex-direction: row; justify-content: space-between; padding: 0.5rem; gap: 0.5rem; align-items: center; width: max-content;">
      <div
      style="background-color: ${color}; width: 1rem; height: 1rem; border-radius: 2px; border: 0.5px solid #161616"
      ></div>
      <p style="font-size: 0.875; font-family: Marianne; font-weight: 400; margin: 0">${coursDeau.charAt(0).toUpperCase() + coursDeau.slice(1)}</p> 
    </div>
  `;
};

export const AOT40Tooltip = (sitesInCluster: string[]) => {
  const displayedSites = sitesInCluster.slice(0, 10);
  return `
    <div style="padding: 0.25rem;">
      <div style="font-size: 0.75rem; font-family: Marianne; font-weight: 400; border-bottom: 1px solid #B8B8B8; margin-bottom: 0.5rem;">
        Dans ce regroupement :
      </div>
      <div style="display: flex; flex-direction: column; font-size: 10px; font-family: Marianne; font-weight: 700;">
        ${displayedSites.map((site) => `<div>${site}</div>`).join('')}
        ${sitesInCluster.length > 10 ? '<div>...</div>' : ''}
      </div>
    </div>`;
};

export const CatnatTooltip = (restCatnat: Object, communeName: string) => {
  const keys = Object.keys(restCatnat);
  const values = Object.values(restCatnat);
  const sum = Sum(values);
  return `
    <div style="
      font-size: 1rem;
      font-family: Marianne;
      font-weight: 700;
      padding: 0 0 1rem;
    ">
      ${communeName} : ${sum} arrêté(s) au total
    </div>
      ${keys.map(
    (el, i) => `
          <div style="
            margin: 0;
            padding: 0 0 0.25rem;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            gap: 0.5rem;
            font-size: 0.875rem;
            font-family: Marianne;
            font-weight: 400;
          ">
            ${el} : <b> ${values[i]}</b>
          </div>`
  ).join(' ')}`;
};

export const EspacesNafTooltip = (communeName: string, naf: number) => {
  return `
    <div style="display: flex; flex-direction: row; justify-content: space-between; padding: 0; width: max-content;">
      <p style="font-size: 0.875rem; font-family: Marianne; font-weight: 400; margin: 0">${communeName} : </p> 
      <p style="font-size: 0.875rem; font-family: Marianne; font-weight: 700; margin: 0"> ${Round(naf / 10000, 1)} hectare(s)</p>
    </div>
  `;
};

export const SurfacesIrrigueesTooltip = (communeName: string, surfacesIrriguees: number) => {
  return `
    <div style="display: flex; flex-direction: row; justify-content: space-between; padding: 0; width: max-content;">
      <p style="font-size: 0.875rem; font-family: Marianne; font-weight: 400; margin: 0">${communeName} : </p> 
      <p style="font-size: 0.875rem; font-family: Marianne; font-weight: 700; margin: 0"> 
        ${isNaN(surfacesIrriguees) ? 'Aucune donnée' : `${surfacesIrriguees} %`}
      </p>
    </div>
  `;
};

export const FragiliteEconomiqueTooltip = (communeName: string, value: number) => {
  return `
      <div style="display: flex; flex-direction: column; justify-content: space-between; padding: 0; width: max-content;">
        <p style="font-size: 1rem; font-family: Marianne; font-weight: 400; margin: 0 0 0.5rem">${communeName}</p> 
        <p style="font-size: 0.875rem; font-family: Marianne; font-weight: 400; margin: 0"> 
          ${isNaN(value) ? 'Aucune donnée' : `Part des ménages en précarité : <b>${Round(100 * Number(value), 0)} %</b>`}
        </p>
      </div>
  `;
}

export const DensiteBatiTooltip = (communeName: string, value: number) => {
  return `
      <div style="display: flex; flex-direction: column; justify-content: space-between; padding: 0; width: max-content;">
        <p style="font-size: 1rem; font-family: Marianne; font-weight: 400; margin: 0">${communeName}</p> 
        <p style="font-size: 0.875rem; font-family: Marianne; font-weight: 700; margin: 0"> 
          Densité du bâti : ${Round(value, 2)}
        </p>
      </div>
  `;
}
