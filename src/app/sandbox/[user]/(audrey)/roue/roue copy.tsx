"use client";
//TODO REPLACE types (any everywhere)

import * as d3 from "d3";
import { useEffect, useRef, useState } from "react";

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

  // Center node
  const centerNode = {
    id: "CA du Pays Basque",
    x: 0,
    y: 0,
    size: 70, 
    color: "#222",
    textColor: "#fff"
  };

  // Layer 1: 3 nodes with customizable angles (in degrees)
  const layer1Nodes = [
    { id: "Cadre de vie", angle: 90, size: 20, color: "#D9D9D9", textColor: "#222", labelX: 0, labelY: 200 },
    { id: "Ressources naturelles", angle: 220, size: 20, color: "#D9D9D9", textColor: "#222", labelX: -180, labelY: -140 },
    { id: "Ressources économiques", angle: 320, size: 20, color: "#D9D9D9", textColor: "#222", labelX: 180, labelY: -150 },
  ];
  const layer1Radius = 100;
  // Compute x/y for each node and add as properties
  layer1Nodes.forEach((node) => {
    const angleRad = (node.angle * Math.PI) / 180;
    (node as any).x = layer1Radius * Math.cos(angleRad);
    (node as any).y = layer1Radius * Math.sin(angleRad);
  });

  // Layer 2: 17 nodes, distributed evenly around the circle, with real first names
  const layer2Names = [
    { label: "Continuité des services (transport, énergie, eau)", labelRadius: 440 },
    { label: "Logement", labelRadius: 430 },
    { label: "Approvisionnement alimentaire", labelRadius: 440 },
    { label: "Personnes fragiles" },
    { label: "Inconfort thermique" },
    { label: "Gestion des risques" },
    { label: "Santé" },
    { label: "Alimentation en eau potable", labelRadius: 440 },
    { label: "Forêts", labelRadius: 410 },
    { label: "Eau" },
    { label: "Habitats faunes / flores", labelRadius: 430 },
    { label: "Air" },
    { label: "Sols" },
    { label: "Entreprises" },
    { label: "Tourisme" },
    { label: "Agriculture / maraîchage / élevage / pêche / ostréiculture", labelRadius: 450 },
    { label: "Filière bois", labelRadius: 430 },
  ];
  const layer2Count = layer2Names.length;
  const layer2Radius = 340;
  const defaultLabelRadius = layer2Radius + 70;
  const layer2Nodes: { id: string; label: string; x: number; y: number; size: number; color: string; textColor: string; labelRadius?: number }[] = [];
  // Add a parameter to rotate layer 2 radially (in degrees)
  const layer2Rotation = 15; 
  for (let i = 0; i < layer2Count; i++) {
    // Apply rotation to layer 2 nodes
    const angle = (2 * Math.PI * i) / layer2Count + (layer2Rotation * Math.PI / 180);
    layer2Nodes.push({
      id: `L2-${i + 1}`,
      ...layer2Names[i], // Copy label, labelRadius, etc.
      x: layer2Radius * Math.cos(angle),
      y: layer2Radius * Math.sin(angle),
      size: 20,
      color: "#D9D9D9",
      textColor: "#222"
    });
  }

  const explicitL2Links = [
    // Cadre de vie (first 8)
    { source: "Cadre de vie", target: "L2-1", curve: 1, curveRadius: 0.15 },
    { source: "Cadre de vie", target: "L2-2", curve: 1, curveRadius: 0.25 },
    { source: "Cadre de vie", target: "L2-3", curve: 1, curveRadius: 0.25 },
    { source: "Cadre de vie", target: "L2-4", curve: 1, curveRadius: 0.10 },
    { source: "Cadre de vie", target: "L2-5", curve: -1, curveRadius: 0.10 },
    { source: "Cadre de vie", target: "L2-6", curve: -1, curveRadius: 0.25 },
    { source: "Cadre de vie", target: "L2-7", curve: -1, curveRadius: 0.25 },
    { source: "Cadre de vie", target: "L2-8", curve: -1, curveRadius: 0.15 },
    // Ressources naturelles (next 5)
    { source: "Ressources naturelles", target: "L2-9", curve: -1, curveRadius: 0.25 },
    { source: "Ressources naturelles", target: "L2-10", curve: -1, curveRadius: 0.25 },
    { source: "Ressources naturelles", target: "L2-11", curve: 1, curveRadius: 0.25 },
    { source: "Ressources naturelles", target: "L2-12", curve: 1, curveRadius: 0.25 },
    { source: "Ressources naturelles", target: "L2-13", curve: 1, curveRadius: 0.25 },
    // Ressources économiques (last 4)
    { source: "Ressources économiques", target: "L2-14", curve: -1, curveRadius: 0.25 },
    { source: "Ressources économiques", target: "L2-15", curve: -1, curveRadius: 0.25 },
    { source: "Ressources économiques", target: "L2-16", curve: 1, curveRadius: 0.25 },
    { source: "Ressources économiques", target: "L2-17", curve: 1, curveRadius: 0.25 },
  ];

  // New: Layer 2 inter-node links
  const layer2Links = [
    { source: "Logement", targets: ["Air", "Eau", "Inconfort thermique", "Santé"] },
    // Add more links as needed
  ];

  // New: State for selected layer 2 node
  const [selectedL2, setSelectedL2] = useState<string | null>(null);

  // Helper: Get all nodes linked to the selected node
  const getLinkedL2Nodes = (nodeId: string) => {
    const direct = layer2Links.find(link => link.source === nodeId)?.targets || [];
    const reverse = layer2Links.filter(link => link.targets.includes(nodeId)).map(link => link.source);
    return [...direct, ...reverse];
  };

  useEffect(() => {
    const svgEl = d3.select(svgRef.current);
    svgEl.selectAll("*").remove();
    const svg = svgEl.append("g").attr("transform", `translate(${svgWidth / 2},${svgHeight / 2})`);

    // --- DRAW LINES AND PATHS FIRST ---
    // Layer 1 closed curve (replace with a perfect dashed circle)
    svg.append("circle")
      .attr("r", layer1Radius)
      .attr("cx", 0)
      .attr("cy", 0)
      .attr("fill", "none")
      .attr("stroke", selectedL2 ? "#800020" : "#D9D9D9")
      .attr("stroke-width", 2);
    // Layer 2 closed curve
    if (layer2Nodes.length > 1) {
      const lineGen2 = d3.line()
        .x((d: any) => d[0])
        .y((d: any) => d[1])
        .curve(d3.curveCardinalClosed);
      svg.append("path")
        .attr("d", lineGen2(layer2Nodes.map((n: any) => [n.x, n.y])))
        .attr("fill", "none")
        .attr("stroke", "#D9D9D9")
        .attr("stroke-width", 2)
        .attr("stroke-dasharray", "2 2");
    }
    // Links from L1 to L2 (curved, now using curve param and curveRadius)
    svg.selectAll("path.l1tol2")
      .data(explicitL2Links)
      .enter()
      .append("path")
      .attr("class", "l1tol2")
      .attr("d", d => {
        // Use (l1 as any) to access computed x/y
        const l1 = layer1Nodes.find((n: any) => n.id === d.source) as any;
        const l2 = layer2Nodes.find((n: any) => n.id === d.target);
        if (!l1 || !l2) return null;
        const mx = (l1.x + l2.x) / 2;
        const my = (l1.y + l2.y) / 2;
        // Vector from center to midpoint
        const cx = 0, cy = 0;
        const vx = mx - cx;
        const vy = my - cy;
        // Distance between l1 and l2
        const dist = Math.sqrt((l2.x - l1.x) ** 2 + (l2.y - l1.y) ** 2);
        // Curve amount: proportional to distance, now controlled by d.curveRadius
        const curveStrength = d.curveRadius ?? 0.25;
        // Perpendicular vector (rotate by 90deg)
        const perpX = -vy;
        const perpY = vx;
        // Normalize
        const perpLen = Math.sqrt(perpX ** 2 + perpY ** 2) || 1;
        const perpUnitX = perpX / perpLen;
        const perpUnitY = perpY / perpLen;
        // Use curve parameter from link
        const sign = d.curve || 1;
        // Control point
        const cpx = mx + sign * perpUnitX * dist * curveStrength;
        const cpy = my + sign * perpUnitY * dist * curveStrength;
        return `M${l1.x},${l1.y} Q${cpx},${cpy} ${l2.x},${l2.y}`;
      })
      .attr("fill", "none")
      .attr("stroke", (d: any) => {
        // Highlight links to selected layer2 node and its virtual links
        if (selectedL2) {
          // Get all linked layer2 node labels
          const linked = getLinkedL2Nodes(selectedL2);
          const targetLabel = layer2Nodes.find(n => n.id === d.target)?.label;
          // Highlight if the link is to the selected node, or to a linked node, or to the selected node's own link (e.g. Hugo)
          if (
            d.target === selectedL2 ||
            (targetLabel && linked.includes(targetLabel)) ||
            (targetLabel === selectedL2)
          ) {
            return "#800020";
          }
        }
        return "#D9D9D9";
      })
      .attr("stroke-width", (d: any) => {
        if (selectedL2) {
          const linked = getLinkedL2Nodes(selectedL2);
          const targetLabel = layer2Nodes.find(n => n.id === d.target)?.label;
          if (
            d.target === selectedL2 ||
            (targetLabel && linked.includes(targetLabel)) ||
            (targetLabel === selectedL2)
          ) {
            return 3;
          }
        }
        return 3;
      });

    // --- DRAW NODES AND LABELS LAST (ON TOP) ---
    // Center node
    svg.append("circle")
      .attr("r", centerNode.size)
      .attr("fill", centerNode.color)
      .attr("cx", centerNode.x)
      .attr("cy", centerNode.y);
    svg.append("text")
      .attr("x", centerNode.x)
      .attr("y", centerNode.y + 2)
      .attr("text-anchor", "middle")
      .attr("fill", centerNode.textColor)
      .attr("font-size", 16)
      .attr("font-weight", "bold")
      .attr("style", "pointer-events:none; white-space:pre-line;")
      .call(function (text) {
        const words: string[] = centerNode.id.split(' ');
        let lines: string[] = [];
        let currentLine: string[] = [];
        // Estimate max width for a line
        const maxLineLength = centerNode.size * 1.7;
        // Temporary SVG text element for measuring
        const temp = svg.append("text").attr("font-size", 20).attr("font-weight", "bold").attr("visibility", "hidden");
        for (let i = 0; i < words.length; i++) {
          currentLine.push(words[i]);
          temp.text(currentLine.join(" "));
          if (temp.node() && temp.node()!.getComputedTextLength() > maxLineLength) {
            currentLine.pop();
            lines.push(currentLine.join(" "));
            currentLine = [words[i]];
          }
        }
        if (currentLine.length) lines.push(currentLine.join(" "));
        temp.remove();
        lines.forEach((line, i) => {
          text.append("tspan")
            .attr("x", centerNode.x)
            .attr("dy", i === 0 ? `${-(lines.length - 1) / 2}em` : "1.2em")
            .text(line);
        });
      });

    // Layer 1 nodes
    svg.selectAll("circle.l1")
      .data(layer1Nodes)
      .enter()
      .append("circle")
      .attr("class", "l1")
      .attr("r", (d: any) => d.size)
      .attr("fill", (d: any) => d.color)
      .attr("cx", (d: any) => d.x)
      .attr("cy", (d: any) => d.y);
    // Layer 1 labels with custom x/y per node
    svg.selectAll("g.l1-label")
      .data(layer1Nodes)
      .enter()
      .append("g")
      .attr("class", "l1-label")
      .attr("transform", (d: any) => `translate(${d.labelX !== undefined ? d.labelX : d.x * 2},${d.labelY !== undefined ? d.labelY : d.y * 2})`)
      .each(function (d: any) {
        // Measure text width for dynamic box sizing
        const tempText = d3.select(this)
          .append("text")
          .attr("font-size", 16)
          .attr("font-family", "sans-serif")
          .text(d.id);
        const textNode = tempText.node();
        let textWidth = 0;
        if (textNode && typeof textNode.getComputedTextLength === "function") {
          textWidth = textNode.getComputedTextLength();
        }
        tempText.remove();
        // padding box layer 1
        const paddingX = 4;
        const paddingY = 4;
        const boxWidth = textWidth + paddingX * 2;
        const boxHeight = 16 + paddingY * 2; 
        d3.select(this)
          .append("rect")
          .attr("x", -boxWidth / 2)
          .attr("y", -boxHeight / 2)
          .attr("width", boxWidth)
          .attr("height", boxHeight)
          .attr("fill", "#fff")
          .attr("stroke", "none")
          .attr("rx", 5)
          .attr("ry", 5);
        d3.select(this)
          .append("text")
          .attr("text-anchor", "middle")
          .attr("alignment-baseline", "middle")
          .attr("fill", d.textColor)
          .attr("font-size", 16)
          .attr("font-family", "sans-serif")
          .attr("y", 1)
          .text(d.id);
      });

    // Layer 2 nodes
    svg.selectAll("circle.l2")
      .data(layer2Nodes)
      .enter()
      .append("circle")
      .attr("class", "l2")
      .attr("r", (d: any) => d.size)
      .attr("fill", (d: any) => {
        if (selectedL2 === d.label) return "#800020"; // burgundy
        // Only the selected node changes fill, linked nodes keep their color
        return d.color;
      })
      .attr("stroke", (d: any) => {
        if (selectedL2 === d.label) return "#800020";
        if (selectedL2 && getLinkedL2Nodes(selectedL2).includes(d.label)) return "#800020";
        return "#D9D9D9";
      })
      .attr("stroke-width", (d: any) => {
        if (selectedL2 && getLinkedL2Nodes(selectedL2).includes(d.label)) return 4;
        return 3;
      })
      .attr("cx", (d: any) => d.x)
      .attr("cy", (d: any) => d.y)
      .style("cursor", "pointer")
      .on("click", (event: any, d: any) => {
        setSelectedL2(selectedL2 === d.label ? null : d.label);
      });

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
          .attr("font-family", "sans-serif");
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
        let rectStroke = "#666666";
        let textFill = d.textColor;
        let strokeDasharray = "2 2";
        let paddingX = 22.5;
        let paddingY = 12.5;
        const fontSize = 16;
        if (selectedL2 === d.label) {
          rectFill = "#111";
          rectStroke = "#111";
          textFill = "#fff";
          strokeDasharray = "";
        } else if (selectedL2 && getLinkedL2Nodes(selectedL2).includes(d.label)) {
          rectFill = "#E5E5E5";
          rectStroke = "#800020";
          // strokeDasharray = "";
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
          .attr("rx", 5)
          .attr("ry", 5);
        // Add each line as a tspan, aligning text block to top padding
        const textElem = d3.select(this)
          .append("text")
          .attr("text-anchor", "middle")
          .attr("fill", textFill)
          .attr("font-size", fontSize)
          .attr("font-family", "sans-serif")
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

  return <svg ref={svgRef} width={svgWidth} height={svgHeight} />;
};

export default RoueSystemique;
