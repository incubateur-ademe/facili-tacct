import { SecheressesPasseesModel } from "../postgres/models";

type TypeRestrictions = "alerte" | "alerte_renforcee" | "crise" | "vigilance" | null;

export const calculerMoyenneJoursMensuelleAvecRestriction = ({
  secheresses
}: {
  secheresses: SecheressesPasseesModel[];
}) => {
  const toutesLesRestrictions = secheresses.flatMap(s =>
    s.restrictions
      ? JSON.parse(s.restrictions.replace(/None/g, 'null').replace(/'/g, '"'))
      : []
  );

  if (toutesLesRestrictions.length === 0) return 0;

  const joursAvecArreteParMoisEtAnnee: Record<number, Record<number, Set<number>>> = {};
  for (let mois = 1; mois <= 12; mois++) {
    joursAvecArreteParMoisEtAnnee[mois] = {};
    for (let annee = 2020; annee <= 2025; annee++) {
      joursAvecArreteParMoisEtAnnee[mois][annee] = new Set();
    }
  }

  toutesLesRestrictions.forEach((restriction: {
    AEP: string | null;
    SOU: string | null;
    SUP: string | null;
    end_date: string;
    start_date: string;
  }) => {
    const { AEP, SOU, SUP, start_date, end_date } = restriction;

    if (!AEP && !SOU && !SUP) return;

    const dateDebut = new Date(start_date);
    const dateFin = new Date(end_date);

    for (let d = new Date(dateDebut); d <= dateFin; d.setDate(d.getDate() + 1)) {
      const annee = d.getFullYear();
      const mois = d.getMonth() + 1;
      const jour = d.getDate();

      if (annee >= 2020 && annee <= 2025) {
        joursAvecArreteParMoisEtAnnee[mois][annee].add(jour);
      }
    }
  });

  let sommeTotale = 0;
  for (let mois = 1; mois <= 12; mois++) {
    let sommeJoursPourCeMois = 0;
    for (let annee = 2020; annee <= 2025; annee++) {
      const nombreJours = joursAvecArreteParMoisEtAnnee[mois][annee].size;
      sommeJoursPourCeMois += nombreJours;
    }
    sommeTotale += sommeJoursPourCeMois / 6;
  }

  return Math.round(sommeTotale / 12);
};

export const transformerRestrictionsParAnnee = (restrictions: {
  AEP: TypeRestrictions;
  SOU: TypeRestrictions;
  SUP: TypeRestrictions;
  end_date: string;
  start_date: string;
}[]) => {
  const compteurParAnnee: Record<string, {
    annee: string;
    vigilance: number;
    alerte: number;
    alerte_renforcee: number;
    crise: number;
  }> = {};

  restrictions.forEach(restriction => {
    const { AEP, SOU, SUP, start_date, end_date } = restriction;

    const dateDebut = new Date(start_date);
    const dateFin = new Date(end_date);

    for (let d = new Date(dateDebut); d <= dateFin; d.setDate(d.getDate() + 1)) {
      const annee = d.getFullYear().toString();

      if (!compteurParAnnee[annee]) {
        compteurParAnnee[annee] = {
          annee,
          vigilance: 0,
          alerte: 0,
          alerte_renforcee: 0,
          crise: 0
        };
      }

      [AEP, SOU, SUP].forEach(type => {
        if (type === 'vigilance') compteurParAnnee[annee].vigilance++;
        else if (type === 'alerte') compteurParAnnee[annee].alerte++;
        else if (type === 'alerte_renforcee') compteurParAnnee[annee].alerte_renforcee++;
        else if (type === 'crise') compteurParAnnee[annee].crise++;
      });
    }
  });

  return Object.values(compteurParAnnee);
};

export const transformerRestrictionsSaisons = (restrictions: {
  AEP: TypeRestrictions;
  SOU: TypeRestrictions;
  SUP: TypeRestrictions;
  end_date: string;
  start_date: string;
}[]) => {
  const getSaison = (mois: number): string => {
    if (mois === 12 || mois === 1 || mois === 2) return 'Hiver';
    if (mois >= 3 && mois <= 5) return 'Printemps';
    if (mois >= 6 && mois <= 8) return 'Été';
    return 'Automne';
  };

  const compteurParSaisonEtAnnee: Record<string, Record<string, number>> = {
    'Hiver': {},
    'Printemps': {},
    'Été': {},
    'Automne': {}
  };

  restrictions.forEach(restriction => {
    const { AEP, SOU, SUP, start_date, end_date } = restriction;

    const dateDebut = new Date(start_date);
    const dateFin = new Date(end_date);

    for (let d = new Date(dateDebut); d <= dateFin; d.setDate(d.getDate() + 1)) {
      const annee = d.getFullYear();

      if (annee < 2020) continue;

      const anneeStr = annee.toString();
      const mois = d.getMonth() + 1;
      const saison = getSaison(mois);

      if (!compteurParSaisonEtAnnee[saison][anneeStr]) {
        compteurParSaisonEtAnnee[saison][anneeStr] = 0;
      }

      [AEP, SOU, SUP].forEach(type => {
        if (type) {
          compteurParSaisonEtAnnee[saison][anneeStr]++;
        }
      });
    }
  });

  return ['Hiver', 'Printemps', 'Été', 'Automne'].map(saison => ({
    saison,
    ...compteurParSaisonEtAnnee[saison]
  }));
};
