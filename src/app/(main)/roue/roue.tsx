"use client";
//TODO REPLACE types (any everywhere)

import * as d3 from "d3";
import { useEffect, useRef, useState } from "react";

// Import CircleType (types seront déclarés en tant que any)
// @ts-ignore
import CircleType from 'circletype';

type circle = {
  [key: string]: boolean;
};

const dimensions = {
  width: 1200,
  height: 800,
  margin: { top: 100, right: 16, bottom: 16, left: 16 },
};

const RoueSystemique = () => {
  const svgRef = useRef(null);

  const { width, height, margin } = dimensions;
  const svgWidth = Number(width) + margin.left + margin.right;
  const svgHeight = Number(height) + margin.top + margin.bottom;


  // Définition des couleurs par catégorie
  const categoryColors = {
    "Cadre de vie": "#FFD1DF",
    "Ressources naturelles": "#D3EDEB",
    "Ressources économiques": "#FFEBB6"
  };

  // Couleurs de sélection par catégorie
  const categorySelectedColors = {
    "Cadre de vie": "#D76D8E",       // Rouge foncé pour Cadre de vie
    "Ressources naturelles": "#89CAC6", // Vert foncé pour Ressources naturelles
    "Ressources économiques": "#FFC03F"  // Orange foncé pour Ressources économiques
  };

  // Couleurs de contour de sélection par catégorie
  const categorySelectedBorderColors = {
    "Cadre de vie": "#CE0041",       // Rouge très foncé pour contour Cadre de vie
    "Ressources naturelles": "#038278", // Vert très foncé pour contour Ressources naturelles
    "Ressources économiques": "#DF9202"  // Orange-rouge pour contour Ressources économiques
  };

  // Mapping des nœuds vers leurs catégories d'origine
  const nodeCategoryMapping = {
    // Cadre de vie (first 6)
    "Continuité des services": "Cadre de vie",
    "Bâtiment & Logement": "Cadre de vie",
    "Aménagement": "Cadre de vie",
    "Confort thermique": "Cadre de vie",
    "Gestion des risques": "Cadre de vie",
    "Santé": "Cadre de vie",
    // Ressources naturelles (next 4)
    "Forêts": "Ressources naturelles",
    "Eau": "Ressources naturelles",
    "Biodiversité": "Ressources naturelles",
    "Air": "Ressources naturelles",
    // Ressources économiques (last 4)
    "Entreprises": "Ressources économiques",
    "Tourisme": "Ressources économiques",
    "Agriculture & pêche": "Ressources économiques",
    "Filière bois": "Ressources économiques",
  };

  // Helper function to get category color
  const getCategoryColor = (label: string) => {
    const category = nodeCategoryMapping[label as keyof typeof nodeCategoryMapping];
    return category ? categoryColors[category as keyof typeof categoryColors] : "#D9D9D9";
  };

  // Layer 2: nodes, distributed evenly around the circle, with real first names
  const layer2Names = [
    { label: "Continuité des services", labelRadius: 340 },
    { label: "Bâtiment & Logement", labelRadius: 330 },
    { label: "Confort thermique" },
    { label: "Gestion des risques" },
    { label: "Santé" },
    { label: "Aménagement", labelRadius: 350 },
    { label: "Forêts", labelRadius: 310 },
    { label: "Eau" },
    { label: "Biodiversité", labelRadius: 330 },
    { label: "Air" },
    { label: "Entreprises" },
    { label: "Tourisme", labelRadius: 320 },
    { label: "Agriculture & pêche", labelRadius: 340 },
    { label: "Filière bois", labelRadius: 330 },
  ];
  const layer2Count = layer2Names.length;
  const layer2Radius = 240;
  const defaultLabelRadius = layer2Radius + 70;
  const layer2Nodes: { id: string; label: string; x: number; y: number; size: number; color: string; textColor: string; labelRadius?: number; category?: string }[] = [];
  // Add a parameter to rotate layer 2 radially (in degrees)
  const layer2Rotation = 25;
  for (let i = 0; i < layer2Count; i++) {
    // Apply rotation to layer 2 nodes
    const angle = (2 * Math.PI * i) / layer2Count + (layer2Rotation * Math.PI / 180);
    const label = layer2Names[i].label;
    const category = nodeCategoryMapping[label as keyof typeof nodeCategoryMapping];
    layer2Nodes.push({
      id: `L2-${i + 1}`,
      ...layer2Names[i], // Copy label, labelRadius, etc.
      x: layer2Radius * Math.cos(angle),
      y: layer2Radius * Math.sin(angle),
      size: 20,
      color: getCategoryColor(label), // Utilise la couleur de la catégorie
      textColor: "#222",
      category: category
    });
  }

  // Nouveaux liens directs entre les cercles extérieurs (remplace les anciens liens L1-L2)
  const layer2DirectLinks = [
    // Exemples de liens directs entre les cercles extérieurs
    { source: "L2-1", target: "L2-8", curve: 1, curveRadius: 0.15 }, // Continuité services <-> Alimentation eau
    { source: "L2-4", target: "L2-5", curve: 1, curveRadius: 0.8 }, // Gestion des risques <-> Santé
    { source: "L2-3", target: "L2-5", curve: 1, curveRadius: 0.7 },  // Confort thermique <-> Santé
    { source: "L2-2", target: "L2-5", curve: 1, curveRadius: 0.6 }, // Bâtiment & Logement <-> Santé
    { source: "L2-1", target: "L2-5", curve: 1, curveRadius: 0.4 }, // Continuité services <-> Santé
    { source: "L2-14", target: "L2-5", curve: 1, curveRadius: 0.26 }, // Filière bois <-> Santé
    { source: "L2-13", target: "L2-5", curve: 1, curveRadius: 0.15 }, // Agriculture <-> Santé
    { source: "L2-12", target: "L2-5", curve: -1, curveRadius: 0.05 }, // Tourisme <-> Santé
    { source: "L2-11", target: "L2-5", curve: 1, curveRadius: 0.05 }, // Entreprises <-> Santé
    { source: "L2-10", target: "L2-5", curve: 1, curveRadius: 0.15 }, // Air <-> Santé
    { source: "L2-9", target: "L2-5", curve: 1, curveRadius: 0.25 }, // Biodiversité <-> Santé
    { source: "L2-8", target: "L2-5", curve: 1, curveRadius: 0.4 }, // Eau <-> Santé
    { source: "L2-7", target: "L2-5", curve: 1, curveRadius: 0.6 }, // Forêts <-> Santé
    { source: "L2-6", target: "L2-5", curve: 1, curveRadius: 0.8 }, // Aménagement <-> Santé
  ];

  // New: Layer 2 inter-node links
  const layer2Links = [
    { source: "Logement", targets: ["Air", "Eau", "Inconfort thermique", "Santé"] },
    // Add more links as needed
  ];

  // New: State for selected layer 2 node
  const [selectedL2, setSelectedL2] = useState<string | null>(null);

  // State pour stocker les positions des textes de catégories
  const [categoryPositions, setCategoryPositions] = useState<{
    [key: string]: {
      x: number,
      y: number,
      rotation: number
    }
  }>({});

  // Helper: Get all nodes linked to the selected node
  const getLinkedL2Nodes = (nodeLabel: string) => {
    const linkedNodeIds: string[] = [];

    // Trouver le nœud sélectionné par son label
    const selectedNode = layer2Nodes.find(n => n.label === nodeLabel);
    if (!selectedNode) return [];

    // Parcourir tous les liens directs pour trouver ceux qui impliquent le nœud sélectionné
    layer2DirectLinks.forEach(link => {
      const sourceNode = layer2Nodes.find(n => n.id === link.source);
      const targetNode = layer2Nodes.find(n => n.id === link.target);

      if (sourceNode && targetNode) {
        if (sourceNode.label === nodeLabel) {
          // Le nœud sélectionné est la source, ajouter la cible
          linkedNodeIds.push(targetNode.label);
        } else if (targetNode.label === nodeLabel) {
          // Le nœud sélectionné est la cible, ajouter la source
          linkedNodeIds.push(sourceNode.label);
        }
      }
    });

    return linkedNodeIds;
  };

  useEffect(() => {
    const svgEl = d3.select(svgRef.current);
    svgEl.selectAll("*").remove();
    const svg = svgEl.append("g").attr("transform", `translate(${svgWidth / 2},${svgHeight / 2})`);

    // Créer les définitions pour les gradients
    const defs = svg.append("defs");

    // --- DRAW LINES AND PATHS FIRST ---
    // Suppression du cercle layer1 - le centre reste vide

    // Nouveaux liens directs entre les cercles extérieurs
    svg.selectAll("path.l2tol2")
      .data(layer2DirectLinks)
      .enter()
      .append("path")
      .attr("class", "l2tol2")
      .attr("d", d => {
        const sourceNode = layer2Nodes.find((n: any) => n.id === d.source);
        const targetNode = layer2Nodes.find((n: any) => n.id === d.target);
        if (!sourceNode || !targetNode) return null;

        // Calculer les points de départ et d'arrivée sur les bords des cercles
        const circleRadius = sourceNode.size; // Rayon du cercle (20px)

        // Direction vers le centre (0,0) pour chaque cercle
        const sourceAngleToCenter = Math.atan2(-sourceNode.y, -sourceNode.x);
        const targetAngleToCenter = Math.atan2(-targetNode.y, -targetNode.x);

        // Points de départ et d'arrivée sur les bords des cercles (côté centre)
        const startX = sourceNode.x + circleRadius * Math.cos(sourceAngleToCenter);
        const startY = sourceNode.y + circleRadius * Math.sin(sourceAngleToCenter);
        const endX = targetNode.x + circleRadius * Math.cos(targetAngleToCenter);
        const endY = targetNode.y + circleRadius * Math.sin(targetAngleToCenter);

        const mx = (startX + endX) / 2;
        const my = (startY + endY) / 2;

        // Distance entre les points de départ et d'arrivée
        const dist = Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2);
        // Force de la courbe basée sur curveRadius
        const curveStrength = d.curveRadius ?? 0.25;

        // Direction vers l'intérieur (vers le centre du design)
        const centerDirection = Math.atan2(-my, -mx); // Direction vers le centre (0,0)

        // Point de contrôle déplacé vers l'intérieur du design
        const controlDistance = dist * curveStrength * d.curve; // curve peut être positif ou négatif
        const cpx = mx + controlDistance * Math.cos(centerDirection);
        const cpy = my + controlDistance * Math.sin(centerDirection);

        return `M${startX},${startY} Q${cpx},${cpy} ${endX},${endY}`;
      })
      .attr("fill", "none")
      .attr("stroke", (d: any, i: number) => {
        // Highlight only direct links involving the selected node
        if (selectedL2) {
          const sourceLabel = layer2Nodes.find(n => n.id === d.source)?.label;
          const targetLabel = layer2Nodes.find(n => n.id === d.target)?.label;

          // Seuls les liens directs avec le nœud sélectionné sont mis en évidence
          if (sourceLabel === selectedL2 || targetLabel === selectedL2) {
            // Créer un gradient pour ce lien
            const sourceNode = layer2Nodes.find(n => n.id === d.source);
            const targetNode = layer2Nodes.find(n => n.id === d.target);

            if (sourceNode && targetNode) {
              const sourceCategory = nodeCategoryMapping[sourceNode.label as keyof typeof nodeCategoryMapping];
              const targetCategory = nodeCategoryMapping[targetNode.label as keyof typeof nodeCategoryMapping];

              const sourceColor = sourceCategory ? categorySelectedBorderColors[sourceCategory as keyof typeof categorySelectedBorderColors] : "#800020";
              const targetColor = targetCategory ? categorySelectedBorderColors[targetCategory as keyof typeof categorySelectedBorderColors] : "#800020";

              // Calculer la direction du gradient en fonction de la position des nœuds
              const angle = Math.atan2(targetNode.y - sourceNode.y, targetNode.x - sourceNode.x);
              const x1 = 50 + 50 * Math.cos(angle + Math.PI);
              const y1 = 50 + 50 * Math.sin(angle + Math.PI);
              const x2 = 50 + 50 * Math.cos(angle);
              const y2 = 50 + 50 * Math.sin(angle);

              // Créer un gradient unique pour ce lien
              const gradientId = `gradient-${i}`;
              const gradient = defs.append("linearGradient")
                .attr("id", gradientId)
                .attr("x1", `${x1}%`)
                .attr("y1", `${y1}%`)
                .attr("x2", `${x2}%`)
                .attr("y2", `${y2}%`);

              gradient.append("stop")
                .attr("offset", "0%")
                .attr("stop-color", sourceColor);

              gradient.append("stop")
                .attr("offset", "100%")
                .attr("stop-color", targetColor);

              return `url(#${gradientId})`;
            }
            return "#800020";
          }
        }
        return "transparent"; // Liens invisibles par défaut
      })
      .attr("stroke-width", (d: any) => {
        if (selectedL2) {
          const sourceLabel = layer2Nodes.find(n => n.id === d.source)?.label;
          const targetLabel = layer2Nodes.find(n => n.id === d.target)?.label;

          // Seuls les liens directs avec le nœud sélectionné sont mis en évidence
          if (sourceLabel === selectedL2 || targetLabel === selectedL2) {
            return 1.5;
          }
        }
        return 0; // Largeur 0 quand invisible
      });

    // --- DRAW NODES AND LABELS LAST (ON TOP) ---
    // Le centre reste vide - plus de nœud central ni de layer1

    // Layer 2 nodes (les cercles extérieurs)
    svg.selectAll("circle.l2")
      .data(layer2Nodes)
      .enter()
      .append("circle")
      .attr("class", "l2")
      .attr("r", (d: any) => d.size)
      .attr("fill", (d: any) => {
        if (selectedL2 === d.label) {
          // Le cercle sélectionné utilise la couleur de contour (la plus foncée)
          const category = nodeCategoryMapping[d.label as keyof typeof nodeCategoryMapping];
          return category ? categorySelectedBorderColors[category as keyof typeof categorySelectedBorderColors] : "#800020";
        }
        if (selectedL2 && getLinkedL2Nodes(selectedL2).includes(d.label)) {
          // Les cercles liés prennent la couleur de sélection de leur propre catégorie (moins foncée)
          const category = nodeCategoryMapping[d.label as keyof typeof nodeCategoryMapping];
          return category ? categorySelectedColors[category as keyof typeof categorySelectedColors] : "#800020";
        }
        // Couleur normale pour les cercles non sélectionnés et non liés (mais invisibles)
        return d.color;
      })
      .attr("stroke", (d: any) => {
        if (selectedL2 === d.label) {
          // Utilise la couleur de contour de sélection spécifique à la catégorie pour le cercle sélectionné
          const category = nodeCategoryMapping[d.label as keyof typeof nodeCategoryMapping];
          return category ? categorySelectedBorderColors[category as keyof typeof categorySelectedBorderColors] : "#800020";
        }
        if (selectedL2 && getLinkedL2Nodes(selectedL2).includes(d.label)) {
          // Les cercles liés prennent aussi la couleur de contour de sélection de leur propre catégorie
          const category = nodeCategoryMapping[d.label as keyof typeof nodeCategoryMapping];
          return category ? categorySelectedBorderColors[category as keyof typeof categorySelectedBorderColors] : "#800020";
        }
        return d.color; // Utilise la couleur de la catégorie pour le contour
      })
      .attr("stroke-width", (d: any) => {
        if (selectedL2 === d.label) return 1.5; // Le cercle sélectionné a un contour épais
        if (selectedL2 && getLinkedL2Nodes(selectedL2).includes(d.label)) return 1.5; // Les cercles liés aussi
        return 1.5; // Contour normal pour les autres
      })
      .attr("opacity", (d: any) => {
        // Afficher seulement les cercles sélectionnés ou liés
        if (selectedL2 === d.label) return 1; // Cercle sélectionné visible
        if (selectedL2 && getLinkedL2Nodes(selectedL2).includes(d.label)) return 1; // Cercles liés visibles
        return 0; // Tous les autres cercles sont cachés
      })
      .attr("cx", (d: any) => d.x)
      .attr("cy", (d: any) => d.y);

    // Création des arcs de donut pour les catégories (au premier plan)
    const donutRadius = layer2Radius; // Même rayon que les cercles pour qu'ils se chevauchent
    const donutThickness = 36; // Épaisseur du donut
    const innerRadius = 16 + (donutRadius - donutThickness / 2);
    const outerRadius = (donutRadius + donutThickness / 2) + 8;

    // Grouper les nœuds par catégorie avec leurs indices d'origine
    const categorizedNodes = {
      "Cadre de vie": [] as any[],
      "Ressources naturelles": [] as any[],
      "Ressources économiques": [] as any[]
    };

    // Grouper en utilisant l'ordre d'origine des nœuds (pas les angles calculés)
    layer2Nodes.forEach((node: any, index: number) => {
      if (node.category && categorizedNodes[node.category as keyof typeof categorizedNodes]) {
        categorizedNodes[node.category as keyof typeof categorizedNodes].push({
          ...node,
          originalIndex: index
        });
      }
    });

    // Paramètres pour les textes courbés
    const categoryTextSettings = {
      "Cadre de vie": {
        angleOffset: 0,     // Décalage individuel pour cette catégorie (en degrés)
        wordSpacing: 2       // Garde pour compatibilité 
      },
      "Ressources naturelles": {
        angleOffset: 0,     // Décalage individuel pour cette catégorie (en degrés)
        wordSpacing: 2
      },
      "Ressources économiques": {
        angleOffset: 0,      // Décalage individuel pour cette catégorie (en degrés)
        wordSpacing: 2
      }
    };

    // Rotation globale pour ajuster la position de tous les textes de catégories (en degrés)
    // Ajustez cette valeur pour faire tourner tous les textes en même temps
    const globalCategoryRotation = -90;

    // Dessiner les arcs de donut en utilisant les indices d'origine
    const newCategoryPositions: {
      [key: string]: {
        x: number,
        y: number,
        rotation: number
      }
    } = {};

    Object.entries(categorizedNodes).forEach(([category, nodes]) => {
      if (nodes.length > 0) {
        // Utiliser les indices d'origine pour calculer les vrais angles
        const indices = nodes.map(n => n.originalIndex).sort((a, b) => a - b);
        const startIndex = indices[0];
        const endIndex = indices[indices.length - 1];

        // Calculer les angles basés sur la position originale dans le cercle avec rotation
        let startAngle: number = 0;
        let endAngle: number = 2 * Math.PI;

        if (category === "Cadre de vie") {
          startAngle = (4 * 2 * Math.PI / 14) + 0.02;              // Position de départ (en radians)
          endAngle = (10 * 2 * Math.PI / 14) - 0.02;          // Position de fin (en radians)
        }
        else if (category === "Ressources naturelles") {
          startAngle = (10 * 2 * Math.PI / 14) + 0.02;
          endAngle = (2 * Math.PI / 14) * 14 - 0.02;
        }
        else if (category === "Ressources économiques") {
          startAngle = 0 + 0.02;
          endAngle = (4 * 2 * Math.PI / 14) - 0.02;
        }

        // Gérer le cas où l'arc traverse 0° (par exemple si les éléments sont en fin et début de cercle)
        if (endIndex - startIndex > layer2Count / 2) {
          // L'arc devrait aller dans l'autre direction
          endAngle = startAngle + (2 * Math.PI * nodes.length) / layer2Count + 0.2;
        }

        const arc = d3.arc()
          .innerRadius(innerRadius)
          .outerRadius(outerRadius)
          .startAngle(startAngle)
          .endAngle(endAngle);

        svg.append("path")
          .attr("d", arc as any)
          .attr("fill", categoryColors[category as keyof typeof categoryColors])
          .attr("opacity", 1)
          .attr("class", `donut-arc donut-${category.replace(/\s+/g, '-').toLowerCase()}`);

        // Calculer la position pour le texte avec distance personnalisable
        let textRadius = (innerRadius + outerRadius) / 2; // Distance par défaut

        // Distance personnalisée pour chaque catégorie
        if (category === "Cadre de vie") {
          textRadius = 245; // Distance du centre pour Cadre de vie
        } else if (category === "Ressources naturelles") {
          textRadius = 180; // Distance du centre pour Ressources naturelles
        } else if (category === "Ressources économiques") {
          textRadius = 180; // Distance du centre pour Ressources économiques
        }

        const midAngle = (startAngle + endAngle) / 2;
        const settings = categoryTextSettings[category as keyof typeof categoryTextSettings];

        // Rotation individuelle par rapport au centre du design (en degrés)
        let centerRotation = 0;
        if (category === "Cadre de vie") {
          centerRotation = 0; // Rotation par rapport au centre pour Cadre de vie
        } else if (category === "Ressources naturelles") {
          centerRotation = 0; // Rotation par rapport au centre pour Ressources naturelles  
        } else if (category === "Ressources économiques") {
          centerRotation = 0; // Rotation par rapport au centre pour Ressources économiques
        }

        // Appliquer la rotation globale, le décalage individuel ET la rotation par rapport au centre
        const adjustedMidAngle = midAngle + (settings.angleOffset * Math.PI / 180) + (globalCategoryRotation * Math.PI / 180) + (centerRotation * Math.PI / 180);

        // Position pour le conteneur du texte courbé
        const x = (svgWidth / 2) + textRadius * Math.cos(adjustedMidAngle);
        const y = (svgHeight / 2) + textRadius * Math.sin(adjustedMidAngle);

        newCategoryPositions[category] = { x, y, rotation: 0 };
      }
    });

    setCategoryPositions(newCategoryPositions);

    // Layer 2 labels (outside the circle)
    svg.selectAll("g.l2-label")
      .data(layer2Nodes)
      .enter()
      .append("g")
      .attr("class", "l2-label")
      .attr("transform", (d: any) => {
        // Use custom labelRadius if present, otherwise defaultLabelRadius
        const labelRadius = d.labelRadius ? d.labelRadius : defaultLabelRadius;
        // Compute the angle for the label, including the rotation
        const nodeAngle = Math.atan2(d.y, d.x);
        // Place the label at the rotated position, but keep the box horizontal
        const x = labelRadius * Math.cos(nodeAngle);
        const y = labelRadius * Math.sin(nodeAngle);
        return `translate(${x},${y})`;
      })
      .style("cursor", "pointer")
      .on("click", (event: any, d: any) => {
        setSelectedL2(selectedL2 === d.label ? null : d.label);
      })
      .each(function (d: any) {
        // Break label into lines if > 12 chars per line
        const charsPerLine = 12;
        const words = d.label.split(' ');
        let lines: string[] = [];
        let currentLine = '';
        words.forEach((word: string) => {
          if ((currentLine + ' ' + word).trim().length > charsPerLine) {
            if (currentLine) lines.push(currentLine.trim());
            currentLine = word;
          } else {
            currentLine += ' ' + word;
          }
        });
        if (currentLine) lines.push(currentLine.trim());
        // Measure max line width
        const tempText = d3.select(this)
          .append("text")
          .attr("font-size", 16)
          .attr("font-family", "Marianne");
        let maxLineWidth = 0;
        lines.forEach(line => {
          tempText.text(line);
          const textNode = tempText.node();
          let textWidth = 0;
          if (textNode && typeof textNode.getComputedTextLength === "function") {
            textWidth = textNode.getComputedTextLength();
          }
          if (textWidth > maxLineWidth) maxLineWidth = textWidth;
        });
        tempText.remove();
        let rectFill = "#fff";
        let rectStroke = d.color; // Utilise la couleur de la catégorie pour le contour
        let textFill = d.textColor;
        let strokeDasharray = "2 2";
        let paddingX = 16;
        let paddingY = 8;
        const fontSize = 16;
        if (selectedL2 === d.label) {
          // L'item sélectionné utilise la couleur de contour la plus foncée
          const category = nodeCategoryMapping[d.label as keyof typeof nodeCategoryMapping];
          rectFill = category ? categorySelectedBorderColors[category as keyof typeof categorySelectedBorderColors] : "#800020";
          rectStroke = category ? categorySelectedBorderColors[category as keyof typeof categorySelectedBorderColors] : "#800020";
          textFill = "#fff";
          strokeDasharray = "";
        } else if (selectedL2 && getLinkedL2Nodes(selectedL2).includes(d.label)) {
          // Les items liés ont la couleur de sélection de leur catégorie en remplissage
          const category = nodeCategoryMapping[d.label as keyof typeof nodeCategoryMapping];
          rectFill = category ? categoryColors[category as keyof typeof categoryColors] : "#E5E5E5";
          rectStroke = category ? categorySelectedBorderColors[category as keyof typeof categorySelectedBorderColors] : "#800020";
          textFill = "#222";
          strokeDasharray = "";
        }
        const boxWidth = maxLineWidth + paddingX * 2;
        const boxHeight = lines.length * fontSize + paddingY * 2;
        d3.select(this)
          .append("rect")
          .attr("x", -boxWidth / 2)
          .attr("y", -boxHeight / 2)
          .attr("width", boxWidth)
          .attr("height", boxHeight)
          .attr("fill", rectFill)
          .attr("stroke", rectStroke)
          .attr("stroke-width", 0.8)
          .attr("stroke-dasharray", strokeDasharray)
          .attr("rx", 15)
          .attr("ry", 100);
        // Add each line as a tspan, aligning text block to top padding
        const textElem = d3.select(this)
          .append("text")
          .attr("text-anchor", "middle")
          .attr("fill", textFill)
          .attr("font-size", fontSize)
          .attr("font-family", "Marianne")
          // Align the text block to the top padding (adjust for baseline)
          .attr("y", -boxHeight / 2 + paddingY + fontSize * 0.8);
        lines.forEach((line, i) => {
          textElem.append("tspan")
            .attr("x", 0)
            .attr("dy", i === 0 ? 0 : fontSize)
            .text(line);
        });
      });
  }, [selectedL2, svgWidth, svgHeight]);

  return (
    <div style={{ position: 'relative', width: svgWidth, height: svgHeight }}>
      <svg
        ref={svgRef}
        width={svgWidth}
        height={svgHeight}
        style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}
      />

      {/* Textes des catégories avec CircleType - contrôle individuel */}

      {/* Cadre de vie */}
      {categoryPositions["Cadre de vie"] && (
        <div
          ref={(el) => {
            if (el) {
              const existingInstance = (el as any).circleTypeInstance;
              if (existingInstance) {
                existingInstance.destroy();
              }
              const circleType = new (CircleType as any)(el);
              circleType.radius(260); // Courbure pour Cadre de vie
              circleType.dir(-1); // Direction pour Cadre de vie
              (el as any).circleTypeInstance = circleType;
            }
          }}
          style={{
            position: 'absolute',
            left: `${categoryPositions["Cadre de vie"].x}px`,
            top: `${categoryPositions["Cadre de vie"].y - 15}px`,
            transform: `rotate(0deg)`, // Rotation pour Cadre de vie
            fontSize: '14px',
            fontWeight: 'bold',
            fontFamily: 'Marianne',
            letterSpacing: '0.3em',
            color: categorySelectedBorderColors["Cadre de vie"],
            pointerEvents: 'none',
            transformOrigin: 'center center',
            zIndex: 2,
            whiteSpace: 'nowrap'
          }}
        >
          Cadre de vie
        </div>
      )}

      {/* Ressources naturelles */}
      {categoryPositions["Ressources naturelles"] && (
        <div
          ref={(el) => {
            if (el) {
              const existingInstance = (el as any).circleTypeInstance;
              if (existingInstance) {
                existingInstance.destroy();
              }
              const circleType = new (CircleType as any)(el);
              circleType.radius(270); // Courbure pour Ressources naturelles
              circleType.dir(0.4); // Direction pour Ressources naturelles
              (el as any).circleTypeInstance = circleType;
            }
          }}
          style={{
            position: 'absolute',
            left: `${categoryPositions["Ressources naturelles"].x - 21}px`,
            top: `${categoryPositions["Ressources naturelles"].y - 71}px`,
            transform: `rotate(-54deg)`, // Rotation pour Ressources naturelles
            fontSize: '14px',
            fontWeight: 'bold',
            fontFamily: 'Marianne',
            color: categorySelectedBorderColors["Ressources naturelles"],
            pointerEvents: 'none',
            transformOrigin: 'center center',
            zIndex: 2,
            whiteSpace: 'nowrap'
          }}
        >
          Ressources naturelles
        </div>
      )}

      {/* Ressources économiques */}
      {categoryPositions["Ressources économiques"] && (
        <div
          ref={(el) => {
            if (el) {
              const existingInstance = (el as any).circleTypeInstance;
              if (existingInstance) {
                existingInstance.destroy();
              }
              const circleType = new (CircleType as any)(el);
              circleType.radius(270); // Courbure pour Ressources économiques
              circleType.dir(0.4); // Direction pour Ressources économiques
              (el as any).circleTypeInstance = circleType;
            }
          }}
          style={{
            position: 'absolute',
            left: `${categoryPositions["Ressources économiques"].x + 20}px`,
            top: `${categoryPositions["Ressources économiques"].y - 70}px`,
            transform: `rotate(51deg)`, // Rotation pour Ressources économiques
            fontSize: '14px',
            fontWeight: 'bold',
            fontFamily: 'Marianne',
            color: categorySelectedBorderColors["Ressources économiques"],
            pointerEvents: 'none',
            // letterSpacing: '-0.1em',
            transformOrigin: 'center center',
            zIndex: 2,
            whiteSpace: 'nowrap'
          }}
        >
          Ressources économiques
        </div>
      )}
    </div>
  );
};

export default RoueSystemique;
