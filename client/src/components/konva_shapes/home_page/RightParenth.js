import React, { Component } from "react";
import Konva from "konva";
import { Shape } from "react-konva";

 export default class RightParenth extends React.Component {
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
                context.quadraticCurveTo(20,30,0,60)
                context.lineTo(10, 60);
                context.quadraticCurveTo(30, 30, 10, 0)
                context.closePath();
                context.fillStrokeShape(shape);
            }}
          fill={this.state.color}
          shadowBlur={5}
          onClick={this.handleClick}
          draggable={true}
          x={60}
          y={130}
        />
      );
    }
  }