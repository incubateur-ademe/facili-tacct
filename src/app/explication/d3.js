"use client"
/** Constellation.js */
import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const Constellation = ({ dimensions }) => {
  const svgRef = useRef(null);
  const { width, height, margin } = dimensions;
  const svgWidth = width + margin.left + margin.right;
  const svgHeight = height + margin.top + margin.bottom;
  const mainnodes = [];
  const childnodes = [];
  const links = [];
  const InconfortThermique = { id: 'Inconfort Thermique' };
  const Sante = { id: 'Santé' };
  const Tourisme = { id: 'Tourisme' };
  const EspaceNaturel = { id: 'Espaces naturels' };
  const Batiment = { id: 'Bâtiment' };
  const GestionEau = { id: 'Gestion de l\'eau' };
  const Amenagement = { id: 'Aménagement' };
  
  const addMainNode = (node) => {
    node.size = 70;
    node.color = "#000091";
    node.textColor = "#d2d2d2"
    mainnodes.push(node);
  };
  
  const addChildNode = (
    parentNode,
    childNode,
    size,
    color,
    distance = 170,
  ) => {
    childNode.size = size;
    childNode.color = color;
    childNode.textColor = "#black";
    childnodes.push(childNode);
    links.push({
      source: parentNode,
      target: childNode,
      distance,
      color: color, //parentNode.color
    });
  };

  const assembleChildNode = (parentNode, childNode, weight, color) => {
    addChildNode(parentNode, childNode, weight, color);
  };

  addMainNode(InconfortThermique);
  assembleChildNode(InconfortThermique, Sante, 52, "#D0DDFF");
  assembleChildNode(InconfortThermique, Tourisme, 52, "#D0DDFF");
  assembleChildNode(InconfortThermique, EspaceNaturel, 52, "#D0DDFF");
  assembleChildNode(InconfortThermique, GestionEau, 52, "#D0DDFF");
  assembleChildNode(InconfortThermique, Batiment, 52, "#D0DDFF");
  assembleChildNode(InconfortThermique, Amenagement, 52, "#D0DDFF");
  const nodes = childnodes.concat(mainnodes)
  
  useEffect(() => {
    const svgEl = d3.select(svgRef.current);
    svgEl.selectAll("*").remove(); // Clear svg content before adding new elements
    const svg = svgEl
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);
    const width = 1200
    const height = 450
    const centerX = width / 2;
    const centerY = height / 2;
    const simulation = d3.forceSimulation(nodes)
      .force('charge', d3.forceManyBody().strength(-200))
      .force(
        'link',
        d3.forceLink(links).distance((link) => link.distance)
      )
      .force('center', d3.forceCenter(centerX, centerY));
    const dragInteraction = d3.drag().on('drag', (event, node) => {
        node.fx = event.x;
        node.fy = event.y;
        simulation.alpha(1);
        simulation.restart();
      });
    const lines = svg
      .selectAll('line')
      .data(links)
      .enter()
      .append('line')
      .attr('stroke', (link) => link.color || 'black');
    const circles = svg
      .selectAll('circle')
      .data(nodes)
      .enter()
      .append('circle')
      .attr('fill', (node) => node.color || 'gray')
      .attr('r', (node) => node.size)
      .style("stroke", "black")
      .call(dragInteraction);
    const text = svg
      .selectAll('text')
      .data(nodes)
      .enter()
      .append('text')
      .attr('text-anchor', 'middle')
      .attr('alignment-baseline', 'middle')
      .attr("fill", (node) => node.textColor) 
      .style('pointer-events', 'none')
      .text((node) => node.id);
    simulation.on('tick', () => {
      circles.attr('cx', (node) => node.x).attr('cy', (node) => node.y);
      text.attr('x', (node) => node.x).attr('y', (node) => node.y);
      lines
      .attr('x1', (link) => link.source.x)
      .attr('y1', (link) => link.source.y)
      .attr('x2', (link) => link.target.x)
      .attr('y2', (link) => link.target.y);
    });
  }, []); // Redraw chart if data changes

  return <svg ref={svgRef} width={svgWidth} height={svgHeight} />;
};

export default Constellation;