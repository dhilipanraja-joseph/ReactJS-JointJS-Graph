import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import joint from 'jointjs'
import GraphViewer from './GraphViewer'
import GraphJsonViewer from './GraphJsonViewer'

let graph = new joint.dia.Graph();

export default class GraphCreater extends Component {

  constructor(props) {
    super(props);
    this.state= {
      graphArr: [],
    };
    this.handleAddRectangle = this.handleAddRectangle.bind(this);
    this.handleAddCircle = this.handleAddCircle.bind(this);
    this.addToGraphArr = this.addToGraphArr.bind(this);
  }

  createRectangle() {
    return new joint.shapes.basic.Rect({
      position: { x: 100, y: 30 },
      size: { width: 100, height: 30 },
      attrs: {
          rect: { fill: 'blue' },
          text: { text: 'RECTANGLE', fill: 'white' }
      }
    });
  }

  createCricle() {
    return new joint.shapes.basic.Circle({
      position: { x: 100, y: 30 },
      size: { width: 100, height: 100 },
      attrs: {
          circle: { fill: 'green' },
          text: { text: 'CIRCLE', fill: 'white' }
      }
    });
  }

  createLink(from, to) {
    return new joint.dia.Link({
      source: { id: from},
      target: { id: to }
    });
  }

  addToGraphArr(a) {
    let { graphArr } = this.state;
    graphArr.push(a);
    this.setState({ graphArr });
  }

  handleAddRectangle() {
    this.addToGraphArr(this.createRectangle());
  }

  handleAddCircle() {
    this.addToGraphArr(this.createCricle());
  }

  render() {
    let graphData = graph.addCells(this.state.graphArr);
    return (
      <div>
        <button onClick={this.handleAddRectangle}>Add rectangle</button>
        <button onClick={this.handleAddCircle}>Add circle</button>
        {/* <button>Add decision</button>
        <button>Add rombus</button> */}
        <GraphViewer graph={graphData} />
        <GraphJsonViewer graph={graphData.toJSON()} />
      </div>
    )
  }
}
