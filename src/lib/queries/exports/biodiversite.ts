'use server';


// export const fetchBiodiversiteForExport = async (
//   code: string,
//   libelle: string,
//   type: string,
//   etatCoursDeau: EtatCoursDeau[]
// ): Promise<{
//   espacesNaf: ConsommationNAFExport[];
//   agricultureBio: AgricultureBioExport[];
//   aot40: AOT40Export[];
//   qualiteSitesBaignade: QualiteSitesBaignadeExport[];
//   etatCoursDeau: EtatCoursDeauExport[];
// }> => {
//   const column = ColumnCodeCheck(type);
//   const columnLibelle = ColumnLibelleCheck(type);

//   const whereCondition = {
//     [column]: type === 'petr' || type === 'ept' ? libelle : code
//   };

//   try {
//     const departement = await prisma.collectivites_searchbar.findMany({
//       where: {
//         AND: [
//           {
//             departement: { not: null }
//           },
//           {
//             [columnLibelle]: libelle
//           }
//         ]
//       },
//       distinct: ['departement']
//     });
//     const epci =
//       type === 'commune'
//         ? await prisma.collectivites_searchbar.findFirst({
//             where: {
//               code_geographique: code
//             },
//             select: {
//               epci: true
//             }
//           })
//         : null;
//     // Fetch all data in parallel
//     const [
//       espacesNafRaw,
//       agricultureBioRaw,
//       aot40Raw,
//       qualiteSitesBaignadeRaw
//     ] = await Promise.all([
//       prisma.consommation_espaces_naf.findMany({ where: whereCondition }),
//       type === 'epci'
//         ? prisma.agriculture_bio.findMany({ where: { epci: code } })
//         : type === 'commune' && epci && epci.epci
//           ? prisma.agriculture_bio.findMany({ where: { epci: epci.epci } })
//           : Promise.resolve([]),
//       prisma.aot_40.findMany(),
//       prisma.qualite_sites_baignade.findMany({
//         where: {
//           DEP_NUM: {
//             in: departement
//               .map((d) => d.departement)
//               .filter((d): d is string => d !== null)
//           }
//         }
//       })
//     ]);

//     const espacesNaf = espacesNafRaw.map((item) => ({
//       code_geographique: item.code_geographique,
//       libelle_geographique: item.libelle_geographique,
//       code_epci: item.epci,
//       libelle_epci: item.libelle_epci,
//       departement: item.departement,
//       libelle_departement: item.libelle_departement,
//       region: item.region,
//       ept: item.ept,
//       libelle_petr: item.libelle_petr,
//       code_pnr: item.code_pnr,
//       libelle_pnr: item.libelle_pnr,
//       naf09art10: item.naf09art10,
//       art09act10: item.art09act10,
//       art09hab10: item.art09hab10,
//       art09mix10: item.art09mix10,
//       art09rou10: item.art09rou10,
//       art09fer10: item.art09fer10,
//       art09inc10: item.art09inc10,
//       naf10art11: item.naf10art11,
//       art10act11: item.art10act11,
//       art10hab11: item.art10hab11,
//       art10mix11: item.art10mix11,
//       art10rou11: item.art10rou11,
//       art10fer11: item.art10fer11,
//       naf11art12: item.naf11art12,
//       art11act12: item.art11act12,
//       art11hab12: item.art11hab12,
//       art11mix12: item.art11mix12,
//       art11rou12: item.art11rou12,
//       art11fer12: item.art11fer12,
//       art11inc12: item.art11inc12,
//       naf12art13: item.naf12art13,
//       art12act13: item.art12act13,
//       art12hab13: item.art12hab13,
//       art12mix13: item.art12mix13,
//       art12rou13: item.art12rou13,
//       art12fer13: item.art12fer13,
//       art12inc13: item.art12inc13,
//       naf13art14: item.naf13art14,
//       art13act14: item.art13act14,
//       art13hab14: item.art13hab14,
//       art13mix14: item.art13mix14,
//       art13rou14: item.art13rou14,
//       art13fer14: item.art13fer14,
//       art13inc14: item.art13inc14,
//       naf14art15: item.naf14art15,
//       art14act15: item.art14act15,
//       art14hab15: item.art14hab15,
//       art14mix15: item.art14mix15,
//       art14rou15: item.art14rou15,
//       art14fer15: item.art14fer15,
//       art14inc15: item.art14inc15,
//       naf15art16: item.naf15art16,
//       art15act16: item.art15act16,
//       art15hab16: item.art15hab16,
//       art15mix16: item.art15mix16,
//       art15rou16: item.art15rou16,
//       art15fer16: item.art15fer16,
//       art15inc16: item.art15inc16,
//       naf16art17: item.naf16art17,
//       art16act17: item.art16act17,
//       art16hab17: item.art16hab17,
//       art16mix17: item.art16mix17,
//       art16rou17: item.art16rou17,
//       art16fer17: item.art16fer17,
//       art16inc17: item.art16inc17,
//       naf17art18: item.naf17art18,
//       art17act18: item.art17act18,
//       art17hab18: item.art17hab18,
//       art17mix18: item.art17mix18,
//       art17rou18: item.art17rou18,
//       art17fer18: item.art17fer18,
//       art17inc18: item.art17inc18,
//       naf18art19: item.naf18art19,
//       art18act19: item.art18act19,
//       art18hab19: item.art18hab19,
//       art18mix19: item.art18mix19,
//       art18rou19: item.art18rou19,
//       art18fer19: item.art18fer19,
//       art18inc19: item.art18inc19,
//       naf19art20: item.naf19art20,
//       art19act20: item.art19act20,
//       art19hab20: item.art19hab20,
//       art19mix20: item.art19mix20,
//       art19rou20: item.art19rou20,
//       art19fer20: item.art19fer20,
//       art19inc20: item.art19inc20,
//       naf20art21: item.naf20art21,
//       art20act21: item.art20act21,
//       art20hab21: item.art20hab21,
//       art20mix21: item.art20mix21,
//       art20rou21: item.art20rou21,
//       art20fer21: item.art20fer21,
//       art20inc21: item.art20inc21,
//       naf21art22: item.naf21art22,
//       art21act22: item.art21act22,
//       art21hab22: item.art21hab22,
//       art21mix22: item.art21mix22,
//       art21rou22: item.art21rou22,
//       art21fer22: item.art21fer22,
//       art21inc22: item.art21inc22,
//       naf22art23: item.naf22art23,
//       art22act23: item.art22act23,
//       art22hab23: item.art22hab23,
//       art22mix23: item.art22mix23,
//       art22rou23: item.art22rou23,
//       art22fer23: item.art22fer23,
//       art22inc23: item.art22inc23,
//       naf09art23: item.naf09art23,
//       art09act23: item.art09act23,
//       art09hab23: item.art09hab23,
//       art09mix23: item.art09mix23,
//       art09inc23: item.art09inc23,
//       art09rou23: item.art09rou23,
//       art09fer23: item.art09fer23,
//       artcom0923: item.artcom0923
//     }));
//     const agricultureBio = agricultureBioRaw.map((item) => ({
//       code_epci: item.epci,
//       libelle_epci: item.libelle_epci,
//       variable: item.VARIABLE,
//       libelle_sous_champ: item.LIBELLE_SOUS_CHAMP,
//       surface_2022: item.surface_2022,
//       surface_2021: item.surface_2021,
//       surface_2020: item.surface_2020,
//       surface_2019: item.surface_2019,
//       nombre_2022: item.nombre_2022,
//       nombre_2021: item.nombre_2021,
//       nombre_2020: item.nombre_2020,
//       nombre_2019: item.nombre_2019
//     }));
//     const aot40 = aot40Raw.map(({ index, ...rest }) => ({
//       ...rest
//     }));
//     const qualiteSitesBaignade = qualiteSitesBaignadeRaw.map((item) => ({
//       libelle_geographique: item.COMMUNE,
//       libelle_departement: item.DEP_NOM,
//       departement: item.DEP_NUM,
//       latitude: item.LAT,
//       longitude: item.LONG,
//       point_d_eau: item.POINT,
//       qualite_eau_2013: item.QEB_2013,
//       qualite_eau_2014: item.QEB_2014,
//       qualite_eau_2015: item.QEB_2015,
//       qualite_eau_2016: item.QEB_2016,
//       qualite_eau_2017: item.QEB_2017,
//       qualite_eau_2018: item.QEB_2018,
//       qualite_eau_2019: item.QEB_2019,
//       qualite_eau_2020: item.QEB_2020,
//       type_d_eau: item.TYPE
//     }));
//     const etatCoursDeauFormatted = etatCoursDeau.map((item) => ({
//       nom_cours_d_eau: item.name,
//       etat_cours_d_eau: item.etateco
//     }));
//     return {
//       espacesNaf,
//       agricultureBio,
//       aot40,
//       qualiteSitesBaignade,
//       etatCoursDeau: etatCoursDeauFormatted
//     };
//   } catch (error) {
//     console.error('Error fetching biodiversite data:', error);
//     return {
//       espacesNaf: [],
//       agricultureBio: [],
//       aot40: [],
//       qualiteSitesBaignade: [],
//       etatCoursDeau: []
//     };
//   }
// };
