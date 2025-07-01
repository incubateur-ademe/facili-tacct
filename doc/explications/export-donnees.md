# Guide d'implémentation des exports XLSX de données environnementales

## Architecture recommandée

### 📁 Structure des fichiers

```
src/
├── lib/
│   ├── queries/
│   │   └── exports/
│   │       └── thematique.ts          # Requêtes d'export pour une thématique
│   └── utils/
│       ├── exportData.ts              # Fonctions d'export XLSX
│       └── environmentalDataExport.ts # Transformations spécifiques aux indicateurs
└── components/
    ├── utils/
    │   └── ExportButton.tsx           # Export de données déjà chargées
    └── exports/
        └── FetchAndExportButton.tsx   # Export avec récupération de données
```

## 🔧 Types d'exports disponibles

### 1. **ExportButton** - Export d'indicateur unique

**Usage :** Export de données déjà chargées sur la page (un seul indicateur, un seul onglet Excel)

```tsx
import { ExportButton } from '@/components/utils/ExportButton';
import { IndicatorExportTransformations } from '@/lib/utils/environmentalDataExport';

const MyIndicatorComponent = ({ carteCommunes, indicatorData, searchParams }) => {
  const { code, type, libelle } = searchParams;
  
  // Transformation des données
  const exportData = IndicatorExportTransformations.agriculture.surfacesIrriguees(carteCommunes);

  return (
    <div>
      <ExportButton
        data={exportData}
        baseName="surfaces_irriguees"
        type={type}
        libelle={libelle}
        sheetName="Surfaces irriguées"
      />
      {/* Vos graphiques/données */}
    </div>
  );
};
```

### 2. **FetchAndExportButton** - Export thématique multi-indicateurs

**Usage :** Export de plusieurs indicateurs d'une même thématique (récupération à la demande, plusieurs onglets Excel)

```tsx
import { FetchAndExportButton } from '@/components/exports/FetchAndExportButton';

const MyThematiqueComponent = ({ searchParams }) => {
  const { code, type, libelle } = searchParams;

  return (
    <div>
      <FetchAndExportButton
        fetchFunction={() => fetchGestionRisquesForExport(code, libelle, type)}
        baseName="gestion_risques"
        type={type}
        libelle={libelle}
      >
        Export complet gestion des risques
      </FetchAndExportButton>
      {/* Vos composants d'indicateurs */}
    </div>
  );
};
```

## 📊 Différences entre les deux approches

| Aspect | ExportButton | FetchAndExportButton |
|--------|--------------|---------------------|
| **Données** | Déjà chargées en mémoire | Récupérées à la demande |
| **Scope** | Un seul indicateur | Plusieurs indicateurs d'une thématique |
| **Onglets Excel** | 1 seul onglet | Plusieurs onglets (un par indicateur) |
| **Performance** | Export immédiat | Délai de récupération |
| **Cas d'usage** | Données visibles sur la page | Export complet thématique |
| **Transformation** | Dans `environmentalDataExport.ts` | Dans la fonction de fetch |

## 🛠️ Implémentation

### Pour ExportButton (indicateur unique)

#### Étape 1: Ajouter la transformation dans `environmentalDataExport.ts`

```typescript
export const IndicatorExportTransformations = {
  agriculture: {
    surfacesIrriguees: (carteCommunes: CarteCommunes[]) =>
      carteCommunes.map((commune) => ({
        code_geographique: commune.code_geographique,
        libelle_geographique: commune.libelle_geographique,
        'part_surface_irriguee (%)': commune.surface
      }))
  }
};
```

#### Étape 2: Utiliser le composant

```tsx
const exportData = IndicatorExportTransformations.agriculture.surfacesIrriguees(carteCommunes);

<ExportButton
  data={exportData}
  baseName="surfaces_irriguees"
  type={type}
  libelle={libelle}
  sheetName="Surfaces irriguées"
/>
```

### Pour FetchAndExportButton (thématique complète)

#### Étape 1: Créer la fonction de fetch avec formatage

```typescript
// src/lib/queries/exports/gestionRisques.ts
'use server';

export const fetchGestionRisquesForExport = async (
  code: string,
  libelle: string,
  type: string
): Promise<{
  feuxForet: { code_geographique: string; "Surface parcourue": number }[];
  arretesCatnat: { code_geographique: string; "Type de risque": string }[];
  rga: { code_geographique: string; "Année": number }[];
}> => {
  const whereCondition = { [column]: code };

  const [feuxForetRaw, arretesCatnatRaw, rgaRaw] = await Promise.all([
    prisma.feux_foret.findMany({ where: whereCondition }),
    prisma.arretes_catnat.findMany({ where: whereCondition }),
    prisma.rga.findMany({ where: whereCondition })
  ]);

  // Formatage des données pour l'export
  return {
    feuxForet: feuxForetRaw.map(item => ({
      code_geographique: item.code_geographique,
      "Surface parcourue": item.surface_parcourue
    })),
    arretesCatnat: arretesCatnatRaw.map(item => ({
      code_geographique: item.code_geographique,
      "Type de risque": item.lib_risque_jo
    })),
    rga: rgaRaw.map(item => ({
      code_geographique: item.code_geographique,
      "Année": item.annee
    }))
  };
};
```

#### Étape 2: Utiliser le composant

```tsx
<FetchAndExportButton
  fetchFunction={() => fetchGestionRisquesForExport(code, libelle, type)}
  baseName="gestion_risques"
  type={type}
  libelle={libelle}
>
  Export complet gestion des risques
</FetchAndExportButton>
```

## 🎯 Résultat des exports

### ExportButton
- **Fichier :** `surfaces_irriguees_commune_Paris.xlsx`
- **Contenu :** 1 onglet "Surfaces irriguées" avec les données de l'indicateur

### FetchAndExportButton
- **Fichier :** `gestion_risques_commune_Paris.xlsx`
- **Contenu :** 3 onglets :
  - "feuxForet" avec les données d'incendies
  - "arretesCatnat" avec les arrêtés catastrophe naturelle
  - "rga" avec les données RGA

## 🎯 Bonnes pratiques

### 1. Choix du bon composant
- **ExportButton** : Pour exporter exactement ce qui est affiché à l'utilisateur
- **FetchAndExportButton** : Pour proposer un export complet d'une thématique

### 2. Nommage
- **Fichiers :** `{baseName}_{type}_{libelle}.xlsx`
- **Onglets :** Noms explicites en français
- **Colonnes :** Noms compréhensibles (évitez les codes techniques)

### 3. Performance
- **ExportButton** : Instantané (données déjà en mémoire)
- **FetchAndExportButton** : Optimisé avec `Promise.all()` pour requêtes parallèles

### 4. Formatage des données
- **ExportButton** : Transformation dans `environmentalDataExport.ts`
- **FetchAndExportButton** : Formatage directement dans la fonction de fetch

## 📋 Checklist implémentation

### Pour ExportButton
- [ ] Ajouter la transformation dans `IndicatorExportTransformations`
- [ ] Définir le mapping des champs (nom DB → nom Excel)
- [ ] Intégrer le composant dans l'interface
- [ ] Tester avec des données réelles

### Pour FetchAndExportButton  
- [ ] Créer la fonction de fetch dans `src/lib/queries/exports/`
- [ ] Formater les données dans la fonction de fetch
- [ ] Définir les types TypeScript pour le retour
- [ ] Intégrer le composant dans l'interface
- [ ] Tester l'export multi-onglets

## 🔄 Migration

### Depuis export manuel vers ExportButton
```tsx
// ❌ Avant
function exportManual() {
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Data");
  XLSX.writeFile(workbook, "export.xlsx");
}

// ✅ Après
<ExportButton
  data={transformedData}
  baseName="mon_indicateur"
  type={type}
  libelle={libelle}
  sheetName="Mon indicateur"
/>
```

### Depuis ExportButton vers FetchAndExportButton
```tsx
// ❌ Avant (données pré-chargées)
const data = await fetchData();
<ExportButton data={data} ... />

// ✅ Après (récupération à la demande)
<FetchAndExportButton
  fetchFunction={() => fetchThematiqueCompleteForExport(params)}
  baseName="ma_thematique"
  type={type}
  libelle={libelle}
/>
```
