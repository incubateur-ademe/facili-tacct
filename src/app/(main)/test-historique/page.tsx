'use client';

import { useState } from 'react';

interface Departement {
  code: string;
  nom: string;
}

interface Fichier {
  nom?: string;
  url: string;
  size?: number;
}

interface ArreteCadre {
  id: number;
  numero: string;
  dateDebut: string;
  dateFin: string | null;
  fichier: Fichier;
}

interface Restriction {
  niveauGravite: string;
  zonesAlerteComputed: any[];
}

interface ArreteRestriction {
  id: number;
  numero: string;
  dateSignature: string;
  dateDebut: string;
  dateFin: string;
  statut: string;
  departement: Departement;
  fichier: Fichier | null;
  restrictions: Restriction[];
  arretesCadre: ArreteCadre[];
  niveauGraviteMax: string;
  types: string[];
}

export default function TestHistoriquePage() {
  const [loading, setLoading] = useState(false);
  const [arretes, setArretes] = useState<ArreteRestriction[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [stats, setStats] = useState<{
    totalArretes: number;
    departementsUniques: number;
    periodeDebut: string;
    periodeFin: string;
    dureeRequetes: number;
  } | null>(null);

  const fetchHistorique2023 = async () => {
    setLoading(true);
    setError(null);
    setArretes([]);
    setStats(null);

    const startTime = Date.now();

    try {
      // Créer une date par mois pour toute l'année 2023
      const datesToFetch = [];
      for (let month = 1; month <= 12; month++) {
        const date = `2023-${month.toString().padStart(2, '0')}-15`; // Milieu de chaque mois
        datesToFetch.push(date);
      }

      console.log(`Récupération des arrêtés pour ${datesToFetch.length} dates...`);

      // Faire toutes les requêtes en parallèle
      const promises = datesToFetch.map(async (date) => {
        const response = await fetch(
          `https://api.vigieau.beta.gouv.fr/api/arretes_restrictions?date=${date}`
        );
        if (!response.ok) {
          throw new Error(`Erreur ${response.status} pour la date ${date}`);
        }
        const data = await response.json();
        console.log(`Date ${date}: ${data.length} arrêtés`);
        return data;
      });

      const results = await Promise.all(promises);

      // Fusionner tous les résultats
      const allArretes: ArreteRestriction[] = results.flat();

      // Dédupliquer par ID
      const uniqueArretes = allArretes.filter(
        (arrete, index, self) => index === self.findIndex((a) => a.id === arrete.id)
      );

      // Trier par date de début
      const sortedArretes = uniqueArretes.toSorted(
        (a, b) => new Date(a.dateDebut).getTime() - new Date(b.dateDebut).getTime()
      );

      // Calculer les statistiques
      const departementsSet = new Set(uniqueArretes.map((a) => a.departement.code));
      const datesTimestamps = uniqueArretes.map((a) => new Date(a.dateDebut).getTime());
      const minDate = new Date(Math.min(...datesTimestamps)).toLocaleDateString('fr-FR');
      const maxDate = new Date(Math.max(...datesTimestamps)).toLocaleDateString('fr-FR');

      const endTime = Date.now();
      const duration = endTime - startTime;

      setStats({
        totalArretes: uniqueArretes.length,
        departementsUniques: departementsSet.size,
        periodeDebut: minDate,
        periodeFin: maxDate,
        dureeRequetes: duration,
      });

      setArretes(uniqueArretes);
    } catch (err) {
      console.error('Erreur:', err);
      setError(err instanceof Error ? err.message : 'Erreur inconnue');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Historique des arrêtés sécheresse 2023</h1>

      <button
        onClick={fetchHistorique2023}
        disabled={loading}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg disabled:bg-gray-400 hover:bg-blue-700 mb-6"
      >
        {loading ? 'Chargement...' : 'Récupérer toute l\'année 2023'}
      </button>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          <strong>Erreur:</strong> {error}
        </div>
      )}

      {stats && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Statistiques</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div>
              <div className="text-3xl font-bold text-blue-600">{stats.totalArretes}</div>
              <div className="text-sm text-gray-600">Arrêtés uniques</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">{stats.departementsUniques}</div>
              <div className="text-sm text-gray-600">Départements</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">{stats.periodeDebut}</div>
              <div className="text-sm text-gray-600">Début période</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">{stats.periodeFin}</div>
              <div className="text-sm text-gray-600">Fin période</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">{(stats.dureeRequetes / 1000).toFixed(1)}s</div>
              <div className="text-sm text-gray-600">Durée</div>
            </div>
          </div>
        </div>
      )}

      {arretes.length > 0 && (
        <div className="bg-white border rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Numéro
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Département
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Date signature
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Début validité
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Fin validité
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Statut
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Niveau max
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Nb restrictions
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Fichier
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {arretes.map((arrete) => (
                  <tr key={arrete.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm">{arrete.numero}</td>
                    <td className="px-4 py-3 text-sm">
                      {arrete.departement.code} - {arrete.departement.nom}
                    </td>
                    <td className="px-4 py-3 text-sm">
                      {new Date(arrete.dateSignature).toLocaleDateString('fr-FR')}
                    </td>
                    <td className="px-4 py-3 text-sm">
                      {new Date(arrete.dateDebut).toLocaleDateString('fr-FR')}
                    </td>
                    <td className="px-4 py-3 text-sm">
                      {new Date(arrete.dateFin).toLocaleDateString('fr-FR')}
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <span
                        className={`px-2 py-1 rounded text-xs ${
                          arrete.statut === 'abroge'
                            ? 'bg-gray-200 text-gray-700'
                            : 'bg-green-200 text-green-700'
                        }`}
                      >
                        {arrete.statut}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <span
                        className={`px-2 py-1 rounded text-xs font-semibold ${
                          arrete.niveauGraviteMax === 'crise'
                            ? 'bg-red-200 text-red-700'
                            : arrete.niveauGraviteMax === 'alerte_renforcee'
                              ? 'bg-orange-200 text-orange-700'
                              : arrete.niveauGraviteMax === 'alerte'
                                ? 'bg-yellow-200 text-yellow-700'
                                : 'bg-blue-200 text-blue-700'
                        }`}
                      >
                        {arrete.niveauGraviteMax}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-center">
                      {arrete.restrictions.length}
                    </td>
                    <td className="px-4 py-3 text-sm">
                      {arrete.fichier ? (
                        <a
                          href={arrete.fichier.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          PDF
                        </a>
                      ) : (
                        <span className="text-gray-400">N/A</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {loading && (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Récupération des données en cours...</p>
        </div>
      )}
    </div>
  );
}
