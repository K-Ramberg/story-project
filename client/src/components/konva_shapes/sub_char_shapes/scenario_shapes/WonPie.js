import React from "react";
import Konva from "konva";
import { Shape, Group } from "react-konva";

 export default class WonPie extends React.Component {
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
        <Group
          x={230}
          y={20}
        >
        <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(-25, 150);
                context.lineTo(10, 150);
                context.lineTo(20, 140)
                context.lineTo(-35, 140)
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              shadowBlur={2}
              fill="Silver"
            />
            <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(-35, 140);
                context.quadraticCurveTo(-5, 120, 20, 140);
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              shadowBlur={2}
              fill="#F5CE7E"
            />
            <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(-35, 140);
                context.lineTo(20, 140);
                context.lineTo(22, 138)
                context.lineTo(-37, 138)
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              shadowBlur={2}
              fill="#F5CE7E"
            />
        </Group>
      );
    }
  }