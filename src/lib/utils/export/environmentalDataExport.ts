import { AgeBatiDto, GrandAgeIsolementDto, travailExtDto, VegetalisationDto } from '@/lib/dto';
import { AgricultureBio, CarteCommunes, InconfortThermique } from '@/lib/postgres/models';

export const IndicatorTransformations = {
  agriculture: {
    surfacesIrriguees: (carteCommunes: CarteCommunes[]) =>
      carteCommunes.map((commune) => {
        return {
          code_geographique: commune.code_geographique,
          libelle_geographique: commune.libelle_geographique,
          code_epci: commune.epci,
          libelle_epci: commune.libelle_epci,
          code_departement: commune.departement,
          libelle_departement: commune.libelle_departement,
          region: commune.region,
          ept: commune.ept,
          code_pnr: commune.code_pnr,
          libelle_pnr: commune.libelle_pnr,
          libelle_petr: commune.libelle_petr,
          'part_surface_irriguee (%)': commune.surface
        };
      }),
    agricultureBio: (agricultureBio: AgricultureBio[]) =>
      agricultureBio.map((bio) => {
        return {
          code_epci: bio.epci,
          libelle_epci: bio.libelle_epci,
          variable: bio.VARIABLE,
          sous_champ: bio.LIBELLE_SOUS_CHAMP,
          nombre_exploitations_2022: bio.nombre_2022,
          surface_2022_ha: bio.surface_2022,
          nombre_exploitations_2021: bio.nombre_2021,
          surface_2021_ha: bio.surface_2021,
          nombre_exploitations_2020: bio.nombre_2020,
          surface_2020_ha: bio.surface_2020,
          nombre_exploitations_2019: bio.nombre_2019,
          surface_2019_ha: bio.surface_2019
        };
      })
  },
  inconfort_thermique: {
    AgeBati: (ageBati: AgeBatiDto[]) =>
      ageBati.map((el) => {
        return {
          code_geographique: el.code_geographique,
          libelle_geographique: el.libelle_geographique,
          code_epci: el.epci,
          libelle_epci: el.libelle_epci,
          ept: el.ept,
          code_pnr: el.code_pnr,
          libelle_pnr: el.libelle_pnr,
          libelle_petr: el.libelle_petr,
          code_departement: el.departement,
          libelle_departement: el.libelle_departement,
          age_bati_pre_19: el.age_bati_pre_19,
          age_bati_19_45: el.age_bati_19_45,
          age_bati_46_90: el.age_bati_46_90,
          age_bati_91_05: el.age_bati_91_05,
          age_bati_post06: el.age_bati_post06
        };
      }),
    GrandAgeIsolement: (grandAgeIsolement: GrandAgeIsolementDto[]) =>
      grandAgeIsolement.map((el) => {
        return {
          code_geographique: el.code_geographique,
          libelle_geographique: el.libelle_geographique,
          code_epci: el.epci,
          libelle_epci: el.libelle_epci,
          ept: el.ept,
          code_pnr: el.code_pnr,
          libelle_pnr: el.libelle_pnr,
          libelle_petr: el.libelle_petr,
          code_departement: el.departement,
          libelle_departement: el.libelle_departement,
          '1968_population_de_moins_de_4_ans': el.under_4_sum_1968,
          '1968_population_de_4_a_80_ans': el.to_80_sum_1968,
          '1968_population_de_plus_de_80_ans': el.over_80_sum_1968,
          '1975_population_de_moins_de_4_ans': el.under_4_sum_1975,
          '1975_population_de_4_a_80_ans': el.to_80_sum_1975,
          '1975_population_de_plus_de_80_ans': el.over_80_sum_1975,
          '1982_population_de_moins_de_4_ans': el.under_4_sum_1982,
          '1982_population_de_4_a_80_ans': el.to_80_sum_1982,
          '1982_population_de_plus_de_80_ans': el.over_80_sum_1982,
          '1990_population_de_moins_de_4_ans': el.under_4_sum_1990,
          '1990_population_de_4_a_80_ans': el.to_80_sum_1990,
          '1990_population_de_plus_de_80_ans': el.over_80_sum_1990,
          '1999_population_de_moins_de_4_ans': el.under_4_sum_1999,
          '1999_population_de_4_a_80_ans': el.to_80_sum_1999,
          '1999_population_de_plus_de_80_ans': el.over_80_sum_1999,
          '2009_population_de_moins_de_4_ans': el.under_4_sum_2009,
          '2009_population_de_4_a_80_ans': el.to_80_sum_2009,
          '2009_population_de_plus_de_80_ans': el.over_80_sum_2009,
          '2014_population_de_moins_de_4_ans': el.under_4_sum_2014,
          '2014_population_de_4_a_80_ans': el.to_80_sum_2014,
          '2014_population_de_plus_de_80_ans': el.over_80_sum_2014,
          '2020_population_de_moins_de_4_ans': el.under_4_sum_2020,
          '2020_population_de_4_a_80_ans': el.to_80_sum_2020,
          '2020_population_de_plus_de_80_ans': el.over_80_sum_2020
        };
      }),
    travailExt: (travailExt: travailExtDto[]) =>
      travailExt.map((el) => {
        return {
          code_geographique: el.code_geographique,
          libelle_geographique: el.libelle_geographique,
          code_epci: el.epci,
          libelle_epci: el.libelle_epci,
          ept: el.ept,
          code_pnr: el.code_pnr,
          libelle_pnr: el.libelle_pnr,
          libelle_petr: el.libelle_petr,
          departement: el.departement,
          libelle_departement: el.libelle_departement,
          "agriculture": el.NA5AZ_sum,
          "industries": el.NA5BE_sum,
          "construction": el.NA5FZ_sum,
          "commerces": el.NA5GU_sum,
          "administration": el.NA5OQ_sum
        };
      }),
    densiteBati: (carteCommunes: CarteCommunes[]) => {
      return carteCommunes.map((commune) => {
        return {
          code_geographique: commune.code_geographique,
          libelle_geographique: commune.libelle_geographique,
          code_epci: commune.epci,
          libelle_epci: commune.libelle_epci,
          code_departement: commune.departement,
          libelle_departement: commune.libelle_departement,
          region: commune.region,
          ept: commune.ept,
          code_pnr: commune.code_pnr,
          libelle_pnr: commune.libelle_pnr,
          libelle_petr: commune.libelle_petr,
          densite_bati: commune.densite_bati
        };
      });
    },
    vegetalisation: (vegetalisation: VegetalisationDto[]) => {
      return vegetalisation.map((el) => {
        return {
          code_geographique: el.code_geographique,
          libelle_geographique: el.libelle_geographique,
          code_epci: el.epci,
          libelle_epci: el.libelle_epci,
          ept: el.ept,
          code_pnr: el.code_pnr,
          libelle_pnr: el.libelle_pnr,
          libelle_petr: el.libelle_petr,
          code_departement: el.departement,
          libelle_departement: el.libelle_departement,
          "surface_artificialisee_ha": el.clc_1_artificialise,
          "surface_agricole_ha": el.clc_2_agricole,
          "surface_foret_et_espaces_semi_naturels_ha": el.clc_3_foret_semiNaturel,
          "surface_zone_humide_ha": el.clc_4_humide,
          "surface_eau_ha": el.clc_5_eau,
        };
      });
    } 
  }
};

export const ThematiquesExports = {
  inconfortThermique: (inconfortThermique: InconfortThermique[]) => {
    return inconfortThermique.map((el) => {
      return {
        code_geographique: el.code_geographique,
        libelle_geographique: el.libelle_geographique,
        code_epci: el.epci,
        libelle_epci: el.libelle_epci,
        ept: el.ept,
        code_pnr: el.code_pnr,
        libelle_pnr: el.libelle_pnr,
        libelle_petr: el.libelle_petr,
        code_departement: el.departement,
        libelle_departement: el.libelle_departement,
        region: el.region,
        "age_bati_pre_19": el.age_bati_pre_19,
        "age_bati_19_45": el.age_bati_19_45,
        "age_bati_46_90": el.age_bati_46_90,
        "age_bati_91_05": el.age_bati_91_05,
        "age_bati_post06": el.age_bati_post06,
        "1968_population_de_moins_de_4_ans": el.under_4_sum_1968,
        "1968_population_de_4_a_80_ans": el.to_80_sum_1968,
        "1968_population_de_plus_de_80_ans": el.over_80_sum_1968,
        "1975_population_de_moins_de_4_ans": el.under_4_sum_1975,
        "1975_population_de_4_a_80_ans": el.to_80_sum_1975,
        "1975_population_de_plus_de_80_ans": el.over_80_sum_1975,
        "1982_population_de_moins_de_4_ans": el.under_4_sum_1982,
        "1982_population_de_4_a_80_ans": el.to_80_sum_1982,
        "1982_population_de_plus_de_80_ans": el.over_80_sum_1982,
        "1990_population_de_moins_de_4_ans": el.under_4_sum_1990,
        "1990_population_de_4_a_80_ans": el.to_80_sum_1990,
        "1990_population_de_plus_de_80_ans": el.over_80_sum_1990,
        "1999_population_de_moins_de_4_ans": el.under_4_sum_1999,
        "1999_population_de_4_a_80_ans": el.to_80_sum_1999,
        "1999_population_de_plus_de_80_ans": el.over_80_sum_1999,
        "2009_population_de_moins_de_4_ans": el.under_4_sum_2009,
        "2009_population_de_4_a_80_ans": el.to_80_sum_2009,
        "2009_population_de_plus_de_80_ans": el.over_80_sum_2009,
        "2014_population_de_moins_de_4_ans": el.under_4_sum_2014,
        "2014_population_de_4_a_80_ans": el.to_80_sum_2014,
        "2014_population_de_plus_de_80_ans": el.over_80_sum_2014,
        "2020_population_de_moins_de_4_ans": el.under_4_sum_2020,
        "2020_population_de_4_a_80_ans": el.to_80_sum_2020,
        "2020_population_de_plus_de_80_ans": el.over_80_sum_2020,
        "travail_agriculture": el.NA5AZ_sum,
        "travail_industries": el.NA5BE_sum,
        "travail_construction": el.NA5FZ_sum,
        "travail_commerces": el.NA5GU_sum,
        "travail_administration": el.NA5OQ_sum,
        "densite_bati": el.densite_bati,
        "surface_artificialisee_ha": el.clc_1_artificialise,
        "surface_agricole_ha": el.clc_2_agricole,
        "surface_foret_et_espaces_semi_naturels_ha": el.clc_3_foret_semiNaturel,
        "surface_zone_humide_ha": el.clc_4_humide,
        "surface_eau_ha": el.clc_5_eau
      };
    });
  },
  // GestionRisques: (gestionRisques)
};
