import React from 'react'
import ReactJSON from 'react-json-view'

const GraphJsonViewer = (props) => {
    return (
      <div style={jsonStyle}>
        <ReactJSON
          name="WorkFlow"
          src={props.graph}
          theme="flat"
        />
      </div>
    )
}

export default GraphJsonViewer;

const jsonStyle = {
  // width: "600px",
  // margin: "auto",
  height: "300px",
  overflowY: "scroll",
};
