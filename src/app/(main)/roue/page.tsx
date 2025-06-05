"use client";
import { themes } from "@/lib/themes";
/** Constellation.js */
//TODO REPLACE types (any everywhere)

import * as d3 from "d3";
import { useEffect, useRef, useState } from "react";

type circle = {
  [key: string]: boolean;
};

const dimensions = {
  width: 700,
  height: 800,
  margin: { top: 16, right: 16, bottom: 16, left: 16 },
};

const Constellation = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selected, setSelected] = useState<boolean[]>([false, false, false, false, false, false, false, false, false]);
  const theme = themes.inconfortThermique;



  const svgRef = useRef(null);

  const [selectedCircle, setSelectedCircle] = useState({
    Bâtiment: selected.at(0),
    Tourisme: selected.at(1),
    Santé: selected.at(2),
    Aménagement: selected.at(3),
    "Espaces naturels": selected.at(4),
    "Gestion de l'eau": selected.at(5),
    "Inconfort thermique": selected.at(6),
    "test": selected.at(7),
  });

  const resetFunction = (obj: circle) => {
    Object.keys(obj).forEach(function (key) {
      obj[key] = false;
    });
    return obj;
  };

  const handleCircleSelect = (selectedCircle: circle, themeId: string) => {
    if (selectedCircle[themeId] === true) {
      const tempData = resetFunction(selectedCircle);
      setSelected(Object.values(tempData));
    } else {
      const tempData = resetFunction(selectedCircle);
      tempData[themeId] === true ? (tempData[themeId] = false) : (tempData[themeId] = true);
      setSelected(Object.values(tempData));
    }
  };

  const { width, height, margin } = dimensions;
  const svgWidth = Number(width) + margin.left + margin.right;
  const svgHeight = Number(height) + margin.top + margin.bottom;
  const mainnodes: any = [];
  const childnodes: any = [];
  const links: any = [];
  const center = { id: "center" };
  const InconfortThermique = { id: "Inconfort thermique" };
  const Sante = { id: "Santé" };
  const Tourisme = { id: "Tourisme" };
  const EspaceNaturel = { id: "Espaces naturels" };
  const Batiment = { id: "Bâtiment" };
  const GestionEau = { id: "Gestion de l'eau" };
  const Amenagement = { id: "Aménagement" };
  const test = { id: "test" };

  const addMainNode = (node: any) => {
    node.size = 50;
    node.color = "#FFFFFF";
    node.textColor = "#black";
    mainnodes.push(node);
  };

  const addChildNode = (
    parentNode: any,
    childNode: any,
    size: number,
    color: string,
    distance: number,
  ) => {
    childNode.size = size;
    childNode.color = color;
    childNode.textColor = "#4F4F4F";
    childNode.state = false;
    childnodes.push(childNode);
    links.push({
      source: parentNode,
      target: childNode,
      distance,
      color: color, //parentNode.color
    });
  };

  const assembleChildNode = (parentNode: any, childNode: any, weight: number, color: string) => {
    addChildNode(parentNode, childNode, weight, color, 100);
  };

  addMainNode(center);
  assembleChildNode(center, Sante, 20, "#DCE6FF");
  assembleChildNode(center, Tourisme, 20, "#DCE6FF");
  assembleChildNode(center, EspaceNaturel, 20, "#DCE6FF");
  assembleChildNode(center, GestionEau, 20, "#DCE6FF");
  assembleChildNode(center, Batiment, 20, "#DCE6FF");
  assembleChildNode(center, Amenagement, 20, "#DCE6FF");
  assembleChildNode(center, test, 20, "#DCE6FF");
  assembleChildNode(center, InconfortThermique, 20, "#DCE6FF");
  const nodes = childnodes.concat(mainnodes);
  //console.log('nodes', nodes)

  useEffect(() => {
    const svgEl = d3.select(svgRef.current);
    svgEl.selectAll("*").remove(); // Clear svg content before adding new elements
    const svg = svgEl.append("g").attr("transform", `translate(${margin.left},${margin.top})`);
    const centerX = svgWidth / 2;
    const centerY = svgHeight / 2;

    // Arrange nodes radially
    const mainNode = mainnodes[0];
    mainNode.x = centerX;
    mainNode.y = centerY;
    const radius = 180; // Distance from center to child nodes
    const n = childnodes.length;
    childnodes.forEach((node: any, i: number) => {
      const angle = (2 * Math.PI * i) / n;
      node.x = centerX + radius * Math.cos(angle);
      node.y = centerY + radius * Math.sin(angle);
    });

    // Draw a smooth, dashed circular path through all child nodes
    if (childnodes.length > 1) {
      const lineGenerator = d3.line()
        .x((d: any) => d.x)
        .y((d: any) => d.y)
        .curve(d3.curveCardinalClosed);
      svg
        .append('path')
        .attr('d', lineGenerator(childnodes))
        .attr('fill', 'none')
        .attr('stroke', '#B0B0B0')
        .attr('stroke-width', 3)
        .attr('stroke-dasharray', '8 6');
    }

    // Draw circles
    svg
      .selectAll("circle")
      .data(nodes)
      .enter()
      .append("circle")
      .attr("id", (node: any) => node.id)
      .attr("r", (node: any) => node.size)
      .attr("fill", (node: any) => node.color)
      .attr("cx", (node: any) => node.x)
      .attr("cy", (node: any) => node.y)
      .on("mouseover", function () {
        d3.select(this).style("cursor", "pointer");
      })
      .on("click", function () {
        const themeId = d3.select(this).attr("id");
        handleCircleSelect(selectedCircle as circle, themeId);
        if (this.getAttribute("id") === "Inconfort thermique") {
          d3.selectAll("circle").attr("fill", (node: any) => node.color);
        } else {
          if (this.getAttribute("fill") === "#DCE6FF") {
            d3.selectAll("circle").attr("fill", (node: any) => node.color);
            d3.select(this).attr("fill", "#9580FF");
          } else {
            d3.selectAll("circle").attr("fill", (node: any) => node.color);
            d3.select(this).attr("fill", "#DCE6FF");
          }
        }
      });

    // Draw text labels for child nodes outside the circle, inside a box
    const labelRadius = radius + 100;
    const labelPaddingX = 25;
    const labelPaddingY = 10;
    const childLabels = svg
      .selectAll("g.child-label-group")
      .data(childnodes)
      .enter()
      .append("g")
      .attr("class", "child-label-group")
      .attr("transform", (node: any, i: number) => {
        const angle = (2 * Math.PI * i) / childnodes.length;
        const x = centerX + labelRadius * Math.cos(angle);
        const y = centerY + labelRadius * Math.sin(angle);
        return `translate(${x},${y})`;
      });

    // Add rect background for each label
    childLabels
      .append("rect")
      .attr("x", (d: any, i: number, nodes: any) => {
        // Center the rect on the text
        const text = d.id;
        // Estimate width: 8px per char, adjust as needed
        return -((text.length * 8) / 2 + labelPaddingX);
      })
      .attr("y", -14)
      .attr("width", (d: any) => d.id.length * 8 + labelPaddingX * 2)
      .attr("height", 30 + labelPaddingY * 2)
      .attr("fill", "#fff")
      .attr("stroke", "#000")
      .attr("stroke-width", 1);

    // Add text on top of rect
    childLabels
      .append("text")
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .attr("fill", (node: any) => node.textColor)
      .style("pointer-events", "none")
      .attr("y", 10)
      .text((node: any) => node.id);

    // Draw text labels for main node in the center
    svg
      .selectAll("text.main-label")
      .data(mainnodes)
      .enter()
      .append("text")
      .attr("class", "main-label")
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .attr("fill", (node: any) => node.textColor)
      .style("pointer-events", "none")
      .attr("x", (node: any) => node.x)
      .attr("y", (node: any) => node.y)
      .text((node: any) => node.id);
  }, []); // Redraw chart if data changes

  return <svg ref={svgRef} width={svgWidth} height={svgHeight} />;
};

export default Constellation;
