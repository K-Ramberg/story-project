import React from "react";
import Konva from "konva";
import { Shape } from "react-konva";

 export default class Multiply extends React.Component {
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
                context.lineTo(20, 30);
                context.lineTo(0, 60);
                context.lineTo(10, 60);
                context.lineTo(25, 35);
                context.lineTo(40, 60);
                context.lineTo(50, 60);
                context.lineTo(30, 30);
                context.lineTo(50, 0);
                context.lineTo(40, 0);
                context.lineTo(25, 25);
                context.lineTo(10, 0);
                context.closePath();
              context.fillStrokeShape(shape);
            }}
          fill={this.state.color}
          shadowBlur={5}
          onClick={this.handleClick}
          draggable={true}
          x={180}
          y={24}
        />
      );
    }
  }