import {
  AgeBatiDto,
  GrandAgeIsolementDto,
  travailExtDto,
  VegetalisationDto
} from '@/lib/dto';
import {
  AgricultureBio,
  AOT40,
  ArreteCatNat,
  CarteCommunes,
  ConsommationNAF,
  EtatCoursDeau,
  IncendiesForet,
  InconfortThermique,
  QualiteSitesBaignade,
  RessourcesEau,
  RGAdb,
  SurfacesAgricolesModel
} from '@/lib/postgres/models';
import { Round } from '../reusableFunctions/round';

export const IndicatorExportTransformations = {
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
          'part_surface_irriguee (%)': (() => {
            if (commune.surfacesIrriguees === 0) return 0;
            if (!commune.surfacesIrriguees || isNaN(commune.surfacesIrriguees))
              return 'secret statistique';
            return commune.surfacesIrriguees;
          })()
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
      }),
    surfacesAgricoles: (surfacesAgricoles: SurfacesAgricolesModel[]) =>
      surfacesAgricoles.map((el) => {
        return {
          code_epci: el.epci,
          exploitation_sau: el.exploitation_sau,
          exploitation_sau_terres_arables: el.exploitation_sau_terres_arables,
          exploitation_sau_terres_arables_cereales:
            el.exploitation_sau_terres_arables_cereales,
          exploitation_sau_terres_arables_oleagineux:
            el.exploitation_sau_terres_arables_oleagineux,
          exploitation_sau_terres_arables_fourrageres:
            el.exploitation_sau_terres_arables_fourrageres,
          exploitation_sau_terres_arables_tubercules:
            el.exploitation_sau_terres_arables_tubercules,
          exploitation_sau_terres_arables_legumes_melons_fraises:
            el.exploitation_sau_terres_arables_legumes_melons_fraises,
          exploitation_sau_terres_arables_fleurs:
            el.exploitation_sau_terres_arables_fleurs,
          exploitation_sau_terres_arables_autres:
            el.exploitation_sau_terres_arables_autres,
          exploitation_sau_cultures_permanentes:
            el.exploitation_sau_cultures_permanentes,
          exploitation_sau_cultures_permanentes_vigne:
            el.exploitation_sau_cultures_permanentes_vigne,
          exploitation_sau_cultures_permanentes_fruits:
            el.exploitation_sau_cultures_permanentes_fruits,
          exploitation_sau_cultures_permanentes_autres:
            el.exploitation_sau_cultures_permanentes_autres,
          exploitation_sau_herbe: el.exploitation_sau_herbe,
          exploitation_sau_herbe_prairies_productives:
            el.exploitation_sau_herbe_prairies_productives,
          exploitation_sau_herbe_prairies_peu_productives:
            el.exploitation_sau_herbe_prairies_peu_productives,
          exploitation_sau_herbe_subventions:
            el.exploitation_sau_herbe_subventions,
          exploitation_sau_herbe_bois_patures:
            el.exploitation_sau_herbe_bois_patures,
          exploitation_sau_jardins: el.exploitation_sau_jardins,
          superficie_sau_ha: el.superficie_sau,
          superficie_sau_terres_arables_ha: el.superficie_sau_terres_arables,
          superficie_sau_terres_arables_cereales_ha:
            el.superficie_sau_terres_arables_cereales,
          superficie_sau_terres_arables_oleagineux_ha:
            el.superficie_sau_terres_arables_oleagineux,
          superficie_sau_terres_arables_fourrageres_ha:
            el.superficie_sau_terres_arables_fourrageres,
          superficie_sau_terres_arables_tubercules_ha:
            el.superficie_sau_terres_arables_tubercules,
          superficie_sau_terres_arables_legumes_melons_fraises_ha:
            el.superficie_sau_terres_arables_legumes_melons_fraises,
          superficie_sau_terres_arables_fleurs_ha:
            el.superficie_sau_terres_arables_fleurs,
          superficie_sau_terres_arables_autres_ha:
            el.superficie_sau_terres_arables_autres,
          superficie_sau_cultures_permanentes_ha:
            el.superficie_sau_cultures_permanentes,
          superficie_sau_cultures_permanentes_vigne_ha:
            el.superficie_sau_cultures_permanentes_vigne,
          superficie_sau_cultures_permanentes_fruits_ha:
            el.superficie_sau_cultures_permanentes_fruits,
          superficie_sau_cultures_permanentes_autres_ha:
            el.superficie_sau_cultures_permanentes_autres,
          superficie_sau_herbe_ha: el.superficie_sau_herbe,
          superficie_sau_herbe_prairies_productives_ha:
            el.superficie_sau_herbe_prairies_productives,
          superficie_sau_herbe_prairies_peu_productives_ha:
            el.superficie_sau_herbe_prairies_peu_productives,
          superficie_sau_herbe_subventions_ha:
            el.superficie_sau_herbe_subventions,
          superficie_sau_herbe_bois_patures_ha:
            el.superficie_sau_herbe_bois_patures,
          superficie_sau_jardins_ha: el.superficie_sau_jardins
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
          part_age_bati_pre_1919: el.age_bati_pre_19,
          part_age_bati_1919_1945: el.age_bati_19_45,
          part_age_bati_1946_1990: el.age_bati_46_90,
          part_age_bati_1991_2005: el.age_bati_91_05,
          part_age_bati_post_2006: el.age_bati_post06
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
          agriculture: Number(el.NA5AZ_sum.toFixed(0)) // pour ne pas avoir une erreur à l'ouverture du fichier xlsx
            ? Number(el.NA5AZ_sum.toFixed(0))
            : '',
          industries: Number(el.NA5BE_sum.toFixed(0))
            ? Number(el.NA5BE_sum.toFixed(0))
            : '',
          construction: Number(el.NA5FZ_sum.toFixed(0))
            ? Number(el.NA5FZ_sum.toFixed(0))
            : '',
          commerces: Number(el.NA5GU_sum.toFixed(0))
            ? Number(el.NA5GU_sum.toFixed(0))
            : '',
          administration: Number(el.NA5OQ_sum.toFixed(0))
            ? Number(el.NA5OQ_sum.toFixed(0))
            : ''
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
          surface_artificialisee_ha: el.clc_1_artificialise,
          surface_agricole_ha: el.clc_2_agricole,
          surface_foret_et_espaces_semi_naturels_ha: el.clc_3_foret_semiNaturel,
          surface_zone_humide_ha: el.clc_4_humide,
          surface_en_eau_ha: el.clc_5_eau
        };
      });
    }
  },
  ressourcesEau: {
    PrelevementEau: (prelevementEau: RessourcesEau[]) => {
      return prelevementEau.map((el) => {
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
          sous_champ: el.SOUS_CHAMP,
          libelle_sous_champ: el.LIBELLE_SOUS_CHAMP,
          prelevement_2008_m3: el.A2008,
          prelevement_2009_m3: el.A2009,
          prelevement_2010_m3: el.A2010,
          prelevement_2011_m3: el.A2011,
          prelevement_2012_m3: el.A2012,
          prelevement_2013_m3: el.A2013,
          prelevement_2014_m3: el.A2014,
          prelevement_2015_m3: el.A2015,
          prelevement_2016_m3: el.A2016,
          prelevement_2017_m3: el.A2017,
          prelevement_2018_m3: el.A2018,
          prelevement_2019_m3: el.A2019,
          prelevement_2020_m3: el.A2020
        };
      });
    },
    EtatCoursEau: (etatCoursDeau: EtatCoursDeau[]) => {
      return etatCoursDeau.map((el) => {
        return {
          nom_cours_d_eau: el.name,
          etat_cours_d_eau:
            el.etateco === '1'
              ? 'Très bon'
              : el.etateco === '2'
                ? 'Bon'
                : el.etateco === '3'
                  ? 'Moyen'
                  : el.etateco === '4'
                    ? 'Médiocre'
                    : el.etateco === '5'
                      ? 'Mauvais'
                      : 'Indéterminé'
        };
      });
    },
    QualiteSitesBaignade: (qualiteSitesBaignade: QualiteSitesBaignade[]) => {
      return qualiteSitesBaignade.map((el) => {
        return {
          libelle_geographique: el.COMMUNE,
          libelle_departement: el.DEP_NOM,
          departement: el.DEP_NUM,
          latitude: el.LAT,
          longitude: el.LONG,
          point_d_eau: el.POINT,
          qualite_eau_2013: el.QEB_2013,
          qualite_eau_2014: el.QEB_2014,
          qualite_eau_2015: el.QEB_2015,
          qualite_eau_2016: el.QEB_2016,
          qualite_eau_2017: el.QEB_2017,
          qualite_eau_2018: el.QEB_2018,
          qualite_eau_2019: el.QEB_2019,
          qualite_eau_2020: el.QEB_2020,
          type_d_eau: el.TYPE
        };
      });
    }
  },
  biodiversite: {
    EspacesNaf: (espacesNaf: ConsommationNAF[]) => {
      return espacesNaf.map((el) => {
        return {
          code_geographique: el.code_geographique,
          libelle_geographique: el.libelle_geographique,
          code_epci: el.epci,
          libelle_epci: el.libelle_epci,
          code_departement: el.departement,
          libelle_departement: el.libelle_departement,
          region: el.region,
          ept: el.ept,
          code_pnr: el.code_pnr,
          libelle_pnr: el.libelle_pnr,
          libelle_petr: el.libelle_petr,
          naf09art10: el.naf09art10,
          art09act10: el.art09act10,
          art09hab10: el.art09hab10,
          art09mix10: el.art09mix10,
          art09rou10: el.art09rou10,
          art09fer10: el.art09fer10,
          art09inc10: el.art09inc10,
          naf10art11: el.naf10art11,
          art10act11: el.art10act11,
          art10hab11: el.art10hab11,
          art10mix11: el.art10mix11,
          art10rou11: el.art10rou11,
          art10fer11: el.art10fer11,
          naf11art12: el.naf11art12,
          art11act12: el.art11act12,
          art11hab12: el.art11hab12,
          art11mix12: el.art11mix12,
          art11rou12: el.art11rou12,
          art11fer12: el.art11fer12,
          art11inc12: el.art11inc12,
          naf12art13: el.naf12art13,
          art12act13: el.art12act13,
          art12hab13: el.art12hab13,
          art12mix13: el.art12mix13,
          art12rou13: el.art12rou13,
          art12fer13: el.art12fer13,
          art12inc13: el.art12inc13,
          naf13art14: el.naf13art14,
          art13act14: el.art13act14,
          art13hab14: el.art13hab14,
          art13mix14: el.art13mix14,
          art13rou14: el.art13rou14,
          art13fer14: el.art13fer14,
          art13inc14: el.art13inc14,
          naf14art15: el.naf14art15,
          art14act15: el.art14act15,
          art14hab15: el.art14hab15,
          art14mix15: el.art14mix15,
          art14rou15: el.art14rou15,
          art14fer15: el.art14fer15,
          art14inc15: el.art14inc15,
          naf15art16: el.naf15art16,
          art15act16: el.art15act16,
          art15hab16: el.art15hab16,
          art15mix16: el.art15mix16,
          art15rou16: el.art15rou16,
          art15fer16: el.art15fer16,
          art15inc16: el.art15inc16,
          naf16art17: el.naf16art17,
          art16act17: el.art16act17,
          art16hab17: el.art16hab17,
          art16mix17: el.art16mix17,
          art16rou17: el.art16rou17,
          art16fer17: el.art16fer17,
          art16inc17: el.art16inc17,
          naf17art18: el.naf17art18,
          art17act18: el.art17act18,
          art17hab18: el.art17hab18,
          art17mix18: el.art17mix18,
          art17rou18: el.art17rou18,
          art17fer18: el.art17fer18,
          art17inc18: el.art17inc18,
          naf18art19: el.naf18art19,
          art18act19: el.art18act19,
          art18hab19: el.art18hab19,
          art18mix19: el.art18mix19,
          art18rou19: el.art18rou19,
          art18fer19: el.art18fer19,
          art18inc19: el.art18inc19,
          naf19art20: el.naf19art20,
          art19act20: el.art19act20,
          art19hab20: el.art19hab20,
          art19mix20: el.art19mix20,
          art19rou20: el.art19rou20,
          art19fer20: el.art19fer20,
          art19inc20: el.art19inc20,
          naf20art21: el.naf20art21,
          art20act21: el.art20act21,
          art20hab21: el.art20hab21,
          art20mix21: el.art20mix21,
          art20rou21: el.art20rou21,
          art20fer21: el.art20fer21,
          art20inc21: el.art20inc21,
          naf21art22: el.naf21art22,
          art21act22: el.art21act22,
          art21hab22: el.art21hab22,
          art21mix22: el.art21mix22,
          art21rou22: el.art21rou22,
          art21fer22: el.art21fer22,
          art21inc22: el.art21inc22,
          naf22art23: el.naf22art23,
          art22act23: el.art22act23,
          art22hab23: el.art22hab23,
          art22mix23: el.art22mix23,
          art22rou23: el.art22rou23,
          art22fer23: el.art22fer23,
          art22inc23: el.art22inc23,
          naf09art23: el.naf09art23,
          art09act23: el.art09act23,
          art09hab23: el.art09hab23,
          art09mix23: el.art09mix23,
          art09inc23: el.art09inc23,
          art09rou23: el.art09rou23,
          art09fer23: el.art09fer23,
          artcom0923: el.artcom0923
        };
      });
    },
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
      }),
    aot40: (aot40: AOT40[]) => {
      return aot40.map((el) => {
        return {
          nom_site: el.nom_site,
          type_d_implantation: el.type_d_implantation,
          'valeur brute (µg/m³)': el.valeur_brute,
          latitude: el.Latitude,
          longitude: el.Longitude
        };
      });
    }
  },
  gestionRisques: {
    RGA: (rga: RGAdb[]) => {
      return rga.map((el) => {
        return {
          code_geographique: el.code_geographique,
          libelle_geographique: el.libelle_geographique,
          code_epci: el.epci,
          libelle_epci: el.libelle_epci,
          code_departement: el.departement,
          libelle_departement: el.libelle_departement,
          region: el.region,
          ept: el.ept,
          code_pnr: el.code_pnr,
          libelle_pnr: el.libelle_pnr,
          libelle_petr: el.libelle_petr,
          nb_logement: el.nb_logement,
          nb_logement_alea_moyen_fort: el.nb_logement_alea_moyen_fort,
          nb_logement_alea_faible: el.nb_logement_alea_faible,
          nb_logement_sans_alea: el.nb_logement_sans_alea,
          nb_logement_alea_moyen_fort_avant_1920:
            el.nb_logement_alea_moyen_fort_avant_1920,
          nb_logement_alea_moyen_fort_1920_1945:
            el.nb_logement_alea_moyen_fort_1920_1945,
          nb_logement_alea_moyen_fort_1945_1975:
            el.nb_logement_alea_moyen_fort_1945_1975,
          nb_logement_alea_moyen_fort_apres_1975:
            el.nb_logement_alea_moyen_fort_apres_1975,
          nb_logement_alea_faible_avant_1920:
            el.nb_logement_alea_faible_avant_1920,
          nb_logement_alea_faible_1920_1945:
            el.nb_logement_alea_faible_1920_1945,
          nb_logement_alea_faible_1945_1975:
            el.nb_logement_alea_faible_1945_1975,
          nb_logement_alea_faible_apres_1975:
            el.nb_logement_alea_faible_apres_1975,
          surface_commune_m2: el.surface_commune,
          surface_alea_faible_commune_m2: el.surface_alea_faible_commune,
          surface_alea_moyen_fort_commune_m2:
            el.surface_alea_moyen_fort_commune,
          part_logement_alea_moyen_fort_avant_1920:
            el.part_logement_alea_moyen_fort_avant_1920,
          part_logement_alea_moyen_fort_1920_1945:
            el.part_logement_alea_moyen_fort_1920_1945,
          part_logement_alea_moyen_fort_1945_1975:
            el.part_logement_alea_moyen_fort_1945_1975,
          part_logement_alea_moyen_fort_apres_1975:
            el.part_logement_alea_moyen_fort_apres_1975,
          part_logement_alea_faible_avant_1920:
            el.part_logement_alea_faible_avant_1920,
          part_logement_alea_faible_1920_1945:
            el.part_logement_alea_faible_1920_1945,
          part_logement_alea_faible_1945_1975:
            el.part_logement_alea_faible_1945_1975,
          part_logement_alea_faible_apres_1975:
            el.part_logement_alea_faible_apres_1975,
          part_alea_faible_commune: el.part_alea_faible_commune,
          part_alea_moyen_fort_commune: el.part_alea_moyen_fort_commune
        };
      });
    },
    FeuxForet: (incendiesForet: IncendiesForet[]) => {
      return incendiesForet.map((el) => {
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
          nature: el.nature,
          annee: el.annee,
          surface_parcourue_km2: el.surface_parcourue,
          surface_foret_km2: el.surface_foret,
          surface_maquis_garrigues_km2: el.surface_maquis_garrigues,
          autres_surfaces_naturelles_hors_foret_km2:
            el.autres_surfaces_naturelles_hors_foret,
          surfaces_agricoles_km2: el.surfaces_agricoles,
          surfaces_non_boisees_km2: el.surfaces_non_boisees,
          surfaces_non_boisees_artificialisees_km2:
            el.surfaces_non_boisees_artificialisees,
          surfaces_non_boisees_naturelles_km2:
            el.surfaces_non_boisees_naturelles,
          surface_autres_terres_boisees_km2: el.surface_autres_terres_boisees,
          autres_surfaces_km2: el.autres_surfaces
        };
      });
    },
    ArretesCatnat: (arretesCatnat: ArreteCatNat[]) => {
      return arretesCatnat.map((item) => {
        return {
          code_geographique: item.code_geographique,
          libelle_geographique: item.libelle_geographique,
          code_epci: item.epci,
          libelle_epci: item.libelle_epci,
          code_departement: item.departement,
          libelle_departement: item.libelle_departement,
          region: item.region,
          ept: item.ept,
          code_pnr: item.code_pnr,
          libelle_pnr: item.libelle_pnr,
          libelle_petr: item.libelle_petr,
          date_publication_arrete: item.dat_pub_arrete,
          libelle_risque: item.lib_risque_jo
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
        '2020_population_de_plus_de_80_ans': el.over_80_sum_2020,
        travail_agriculture: Round(Number(el.NA5AZ_sum), 0),
        travail_industries: Round(Number(el.NA5BE_sum), 0),
        travail_construction: Round(Number(el.NA5FZ_sum), 0),
        travail_commerces: Round(Number(el.NA5GU_sum), 0),
        travail_administration: Round(Number(el.NA5OQ_sum), 0),
        age_bati_pre_1919: el.age_bati_pre_19,
        age_bati_1919_1945: el.age_bati_19_45,
        age_bati_1946_1990: el.age_bati_46_90,
        age_bati_1991_2005: el.age_bati_91_05,
        age_bati_post_2006: el.age_bati_post06,
        densite_bati: el.densite_bati,
        surface_artificialisee_ha: el.clc_1_artificialise,
        surface_agricole_ha: el.clc_2_agricole,
        surface_foret_et_espaces_semi_naturels_ha: el.clc_3_foret_semiNaturel,
        surface_zone_humide_ha: el.clc_4_humide,
        surface_en_eau_ha: el.clc_5_eau
      };
    });
  }
  // GestionRisques: (gestionRisques)
};
