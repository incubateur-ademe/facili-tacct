"use client"
/** Constellation.js */
//TODO REPLACE types (any everywhere)

import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";

interface Props {
  dimensions: {
    width: string,
    height: number,
    margin: {
      top: number,
      right: number,
      bottom: number,
      left: number,
    }
  },
  states: boolean[],
  setSelected: React.Dispatch<React.SetStateAction<boolean[]>>;
}

type circle = {
  [key: string]: boolean,
}

const Constellation = (props: Props) => {
  const { dimensions, states, setSelected } = props;
  const svgRef = useRef(null);

  const [selectedCircle, setSelectedCircle] = useState({
    "Bâtiment": states.at(0),
    "Tourisme": states.at(1),
    "Santé": states.at(2),
    "Aménagement": states.at(3),
    "Espaces naturels": states.at(4),
    "Gestion de l'eau": states.at(5),
  })
  
  const resetFunction = (obj: circle) => {
    Object.keys(obj).forEach(function(key){ obj[key] = false });
    return obj;
  }

  const handleCircleSelect = (selectedCircle: circle, themeId: string) => {
    if (selectedCircle[themeId] === true) {
      const tempData = resetFunction(selectedCircle);
      setSelected(Object.values(tempData));
    } else {
      const tempData = resetFunction(selectedCircle);  
      tempData[themeId] === true ? tempData[themeId] = false : tempData[themeId] = true;
      setSelected(Object.values(tempData));
    }
  }

  const { width, height, margin } = dimensions;
  const svgWidth = width + margin.left + margin.right;
  const svgHeight = height + margin.top + margin.bottom;
  const mainnodes: any = [];
  const childnodes: any = [];
  const links: any = [];
  const InconfortThermique = { id: 'Inconfort Thermique' };
  const Sante = { id: 'Santé' };
  const Tourisme = { id: 'Tourisme' };
  const EspaceNaturel = { id: 'Espaces naturels' };
  const Batiment = { id: 'Bâtiment' };
  const GestionEau = { id: 'Gestion de l\'eau' };
  const Amenagement = { id: 'Aménagement' };
  
  const addMainNode = (node: any) => {
    node.size = 70;
    node.color = "#000091";
    node.textColor = "black"
    mainnodes.push(node);
  };
  
  const addChildNode = (
    parentNode: any,
    childNode: any,
    size: number,
    color: string,
    distance: number,
    state: boolean
  ) => {
    childNode.size = size;
    childNode.color = color;
    childNode.textColor = "#black";
    childNode.state = false
    childnodes.push(childNode);
    links.push({
      source: parentNode,
      target: childNode,
      distance,
      color: color, //parentNode.color
    });
  };

  const assembleChildNode = (parentNode: any, childNode: any, weight: number, color: string) => {
    addChildNode(parentNode, childNode, weight, color, 170, false);
  };

  addMainNode(InconfortThermique);
  assembleChildNode(InconfortThermique, Sante, 40, "#D0DDFF");
  assembleChildNode(InconfortThermique, Tourisme, 40, "#D0DDFF");
  assembleChildNode(InconfortThermique, EspaceNaturel, 40, "#D0DDFF");
  assembleChildNode(InconfortThermique, GestionEau, 40, "#D0DDFF");
  assembleChildNode(InconfortThermique, Batiment, 40, "#D0DDFF");
  assembleChildNode(InconfortThermique, Amenagement, 40, "#D0DDFF");
  const nodes = childnodes.concat(mainnodes)

  useEffect(() => {
    const svgEl = d3.select(svgRef.current);
    svgEl.selectAll("*").remove(); // Clear svg content before adding new elements
    const svg = svgEl
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);
    const width = 600
    const height = 450
    const centerX = width / 2;
    const centerY = height / 2;
    const simulation = d3.forceSimulation(nodes)
      .force('charge', d3.forceManyBody().strength(-500))
      .force(
        'link',
        d3.forceLink(links).distance((link: any) => link.distance)
      )
      .force('center', d3.forceCenter(centerX, centerY))
    // const dragInteraction: any = d3.drag().on('drag', (event, node: any) => {
    //     node.fx = event.x;
    //     node.fy = event.y;
    //     simulation.alpha(1);
    //     simulation.restart();
    //   });
    const lines = svg
      .selectAll('line')
      .data(links)
      .enter()
      .append('line')
      .attr('stroke', (link: any) => link.color || 'black');


    const circles = svg
      .selectAll('circle')
      .data(nodes)
      .enter()
      .append('circle')
      .attr("id", (node: any) => node.id)
      .attr('r', (node: any) => node.size)
      .attr('fill', 'lightgray')
      .style("stroke", "#D0DDFF")
      .style("stroke-width", 20)      
      //.call(dragInteraction)
      .on("click", function() {
        let themeId = d3.select(this).attr("id");
        handleCircleSelect(selectedCircle as circle, themeId);
        if (this.getAttribute("id") === "Inconfort Thermique") {
          d3.selectAll("circle").attr("fill", (node: any) => node.color);
        } else { 
          if (this.getAttribute("fill") === "#D0DDFF") {
            d3.selectAll("circle").attr("fill", (node: any) => node.color);
            d3.select(this).attr("fill", "#FF0000");
          } else {
            d3.selectAll("circle").attr("fill", (node: any) => node.color);
            d3.select(this).attr("fill", "#D0DDFF")
          }
        }
      }
    )

    const text = svg
      .selectAll('text')
      .data(nodes)
      .enter()
      .append('text')
      .attr('text-anchor', 'middle')
      .attr('alignment-baseline', 'middle')
      .attr("fill", (node: any) => node.textColor) 
      .style('pointer-events', 'none')
      .text((node: any) => node.id);
    simulation.on('tick', () => {
      circles.attr('cx', (node: any) => node.x).attr('cy', (node: any) => node.y);
      text.attr('x', (node: any) => node.x).attr('y', (node: any) => node.y);
      lines
      .attr('x1', (link: any) => link.source.x)
      .attr('y1', (link: any) => link.source.y)
      .attr('x2', (link: any) => link.target.x)
      .attr('y2', (link: any) => link.target.y);
    });
  }, []); // Redraw chart if data changes

  return <svg ref={svgRef} width={svgWidth} height={svgHeight} />;
};

export default Constellation;