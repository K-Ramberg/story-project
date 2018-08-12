import React from "../../../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react";
import Konva from "konva";
import { Shape, Group } from "react-konva";

 export default class Pies extends React.Component {
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
          x={220}
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
                context.moveTo(60, 150);
                context.lineTo(95, 150);
                context.lineTo(105, 140)
                context.lineTo(50, 140)
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
            <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(50, 140);
                context.quadraticCurveTo(80, 120, 105, 140);
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              shadowBlur={2}
              fill="#F5CE7E"
            />
            <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(50, 140);
                context.lineTo(105, 140);
                context.lineTo(107, 138)
                context.lineTo(48, 138)
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