# Guide d'implémentation des exports XLSX de données environnementales

## Architecture recommandée

### 📁 Structure des fichiers

```
src/
├── lib/
│   └── utils/
│       ├── exportData.ts              # Fonction d'export XLSX
│       └── environmentalDataExport.ts # Transformations spécifiques aux indicateurs
└── components/
    └── utils/
        └── ExportButton.tsx          # Composant de bouton d'export XLSX
```

## 🔧 Utilisation

### 1. Pour un nouvel indicateur

#### Étape 1: Ajouter la transformation dans `environmentalDataExport.ts`

```typescript
export const IndicatorTransformations = {
  // ...existing transformations
  
  nouvelleThematique: {
    nouvelIndicateur: (carteCommunes: CarteCommunes[], indicatorData: any[]) =>
      transformTerritoryDataForExport(
        carteCommunes,
        indicatorData,
        {
          // Mapping des champs originaux vers les noms d'export
          champ_original: 'nom_export_excel',
          autre_champ: 'autre_nom_export'
        }
      ),
  },
};
```

#### Étape 2: Utiliser le composant ExportButton

```tsx
import { ExportButton } from '@/components/utils/ExportButton';
import { IndicatorTransformations } from '@/lib/utils/environmentalDataExport';

// Dans votre composant
const MyIndicatorComponent = ({ carteCommunes, indicatorData, searchParams }) => {
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;

      <ExportButton
        data={exportData}
        baseName="nom_fichier_base"
        type={type}
        libelle={libelle}
        sheetName="Nom de l'onglet Excel"
      />
      {/* Votre contenu */}
    </div>
  );
};
```

### 2. Composant d'export

Le composant ExportButton exporte uniquement au format XLSX :

```tsx
<ExportButton
  data={exportData}
  baseName="surfaces_irriguees"
  type={type}
  libelle={libelle}
  sheetName="Surfaces irriguées"
/>
```

### 3. Format supporté

- **XLSX** (Excel uniquement)

### 4. Nommage automatique des fichiers

Les fichiers sont automatiquement nommés selon le pattern:
`{baseName}_{type}_{libelle}_{date}.xlsx`

Exemple: `surfaces_irriguees_commune_Paris_2025-06-30.xlsx`

## 🎯 Bonnes pratiques

### 1. Noms de champs d'export
- Utilisez des noms explicites et français pour les colonnes Excel
- Évitez les caractères spéciaux dans les noms de fichiers
- Préférez les underscores aux espaces

### 2. Gestion des erreurs
- Les composants d'export gèrent automatiquement les erreurs
- Les alertes informent l'utilisateur en cas de problème
- Les boutons sont désactivés quand il n'y a pas de données

### 3. Performance
- Les transformations sont optimisées pour les gros volumes
- Utilisez les transformations prédéfinies quand possible
- Évitez de recalculer les données à chaque render

## 📋 Checklist pour ajouter un export

- [ ] Créer la transformation dans `IndicatorTransformations`
- [ ] Définir le mapping des champs (nom original → nom export)
- [ ] Ajouter le préfixe de fichier dans `getExportFilePrefix`
- [ ] Intégrer le composant `ExportButton` dans l'interface
- [ ] Tester l'export avec des données réelles
- [ ] Vérifier le format des colonnes dans Excel

## 🔄 Migration depuis l'ancien système

Pour migrer un indicateur existant:

1. **Remplacer** les imports XLSX manuels:
   ```typescript
   // ❌ Avant
   import * as XLSX from 'xlsx';
   
   // ✅ Après
   import { ExportButton } from '@/components/utils/ExportButton';
   import { IndicatorTransformations } from '@/lib/utils/environmentalDataExport';
   ```

2. **Remplacer** les fonctions d'export manuelles:
   ```typescript
   // ❌ Avant
   function exportToXLSX(data, filename, sheetName) {
     const worksheet = XLSX.utils.json_to_sheet(data);
     const workbook = XLSX.utils.book_new();
     XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
     XLSX.writeFile(workbook, filename);
   }
   
   // ✅ Après
   const exportData = IndicatorTransformations.thematique.indicateur(carteCommunes, data);
   ```

3. **Remplacer** les boutons manuels:
   ```tsx
   {/* ❌ Avant */}
   <button onClick={() => exportToXLSX(data, filename, sheetName)}>
     Exporter XLSX
   </button>
   
   {/* ✅ Après */}
   <ExportButton
     data={exportData}
     baseName="nom_base"
     type={type}
     libelle={libelle}
     sheetName="Nom de l'onglet"
   />
   ```
