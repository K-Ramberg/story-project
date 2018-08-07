import React, { Component } from "react";
import Konva from "konva";
import { Shape } from "react-konva";

 export default class Subtract extends React.Component {
    state = {
      color: Konva.Util.getRandomColor()
    };
    handleClick = () => {
      this.setState({
        color: Konva.Util.getRandomColor()
      });
    };
    render() {
      return (
        <Shape
            sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(0,0);
                context.lineTo(0, 10);
                context.lineTo(60, 10);
                context.lineTo(60, 0);
                context.closePath();
              context.fillStrokeShape(shape);
            }}
          fill={this.state.color}
          shadowBlur={5}
          onClick={this.handleClick}
          draggable={true}
          x={340}
          y={160}
        />
      );
    }
  }