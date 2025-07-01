# FetchAndExportButton - Guide d'utilisation

## Vue d'ensemble

Le composant `FetchAndExportButton` permet de créer un bouton qui récupère des données au clic et les exporte directement en XLSX. Contrairement au composant `ExportButton` qui travaille avec des données déjà chargées, ce composant récupère les données à la demande.

## 🔧 Utilisation

### Exemple simple

```tsx
import { FetchAndExportButton } from '@/components/utils/FetchAndExportButton';
import { fetchArretesCatnatForExport } from '@/lib/utils/export/gestionRisquesExportActions';

<FetchAndExportButton
  fetchFunction={() => fetchArretesCatnatForExport(code, libelle, type)}
  baseName="arretes_catnat"
  type={type}
  libelle={libelle}
  sheetName="Arrêtés catastrophe naturelle"
>
  Télécharger arrêtés catnat
</FetchAndExportButton>
```

### Avec gestion d'erreur personnalisée

```tsx
<FetchAndExportButton
  fetchFunction={async () => {
    try {
      const data = await fetchMyData(params);
      return data;
    } catch (error) {
      console.error('Erreur lors de la récupération:', error);
      throw error;
    }
  }}
  baseName="my_export"
  type={type}
  libelle={libelle}
  sheetName="Mes données"
>
  Télécharger mes données
</FetchAndExportButton>
```

## 📋 Props

| Prop | Type | Description |
|------|------|-------------|
| `fetchFunction` | `() => Promise<any[]>` | Fonction qui récupère les données brutes |
| `baseName` | `string` | Nom de base du fichier (sans extension) |
| `type` | `string` | Type de territoire (commune, epci, etc.) |
| `libelle` | `string` | Libellé du territoire |
| `sheetName` | `string` | Nom de l'onglet Excel |
| `children` | `React.ReactNode` | Texte du bouton (optionnel) |

## 🆚 Différences avec ExportButton

| Aspect | ExportButton | FetchAndExportButton |
|--------|--------------|---------------------|
| **Données** | Déjà chargées en mémoire | Récupérées au clic |
| **Performance** | Export immédiat | Délai de récupération |
| **Cas d'usage** | Données visibles sur la page | Données non affichées |
| **État de chargement** | Minimal | Gestion complète |

## 🎯 Cas d'usage recommandés

### ✅ Utiliser FetchAndExportButton quand :
- Les données ne sont pas affichées sur la page
- On veut éviter de charger des données volumineuses au chargement de la page
- L'export concerne des données différentes de celles affichées
- On veut proposer plusieurs exports avec des filtres différents

### ✅ Utiliser ExportButton quand :
- Les données sont déjà chargées et affichées
- L'export concerne exactement les données visibles
- On veut un export instantané

## 🔄 Migration d'ExportButton vers FetchAndExportButton

```tsx
// ❌ Avant (avec données pré-chargées)
const MyComponent = async ({ searchParams }) => {
  const data = await fetchData(searchParams);
  const exportData = transformData(data);
  
  return (
    <ExportButton
      data={exportData}
      baseName="my_data"
      type={type}
      libelle={libelle}
      sheetName="My Data"
    />
  );
};

// ✅ Après (avec récupération à la demande)
const MyComponent = ({ searchParams }) => {
  return (
    <FetchAndExportButton
      fetchFunction={() => fetchData(searchParams)}
      baseName="my_data"
      type={type}
      libelle={libelle}
      sheetName="My Data"
    />
  );
};
```

## 🛠️ Créer des fonctions d'export réutilisables

```typescript
// actions/myDataExportActions.ts
'use server';

export const fetchMyDataForExport = async (
  code: string,
  libelle: string,
  type: string
): Promise<MyDataType[]> => {
  return await GetMyData(code, libelle, type);
};

// utils/myDataTransforms.ts
export const transformMyDataForExport = (data: MyDataType[]) => {
  return data.map(item => ({
    code_geographique: item.code,
    libelle_geographique: item.libelle,
    valeur: item.value
  }));
};
```

## 📊 Exemple complet avec plusieurs exports

```tsx
const MultiExportComponent = ({ code, libelle, type }) => {
  return (
    <div className="flex gap-4">
      <FetchAndExportButton
        fetchFunction={() => fetchDataA(code, libelle, type)}
        baseName="data_a"
        type={type}
        libelle={libelle}
        sheetName="Données A"
      >
        Export A
      </FetchAndExportButton>
      
      <FetchAndExportButton
        fetchFunction={() => fetchDataB(code, libelle, type)}
        baseName="data_b"
        type={type}
        libelle={libelle}
        sheetName="Données B"
      >
        Export B
      </FetchAndExportButton>
    </div>
  );
};
```
