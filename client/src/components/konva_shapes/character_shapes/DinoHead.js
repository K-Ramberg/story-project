import React from "react";
import { Shape, Group } from "react-konva";

 export default class DinoHead extends React.Component {
    render() {
      return (
        <Group
          draggable={true}
          x={220}
          y={20}
        >
        <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(15, 20);
                context.quadraticCurveTo(-10, 30,10, 65);
                context.quadraticCurveTo(5, 75, 30, 80);
                context.quadraticCurveTo(100, 70, 90, 60);
                context.lineTo(50, 53);
                context.lineTo(100, 50);
                context.quadraticCurveTo(100, -5, 55, 15);
                context.lineTo(55, 15);
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              fill="#2B9E49"
              shadowBlur={2}
            />
            <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(15, 40);
                context.quadraticCurveTo(20, 15, 35, 35)
                context.fillStrokeShape(shape);
              }}
              shadowBlur={2}
              fill="Beige"
            />
            <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(65, 28);
                context.quadraticCurveTo(80, 10, 85, 25)
                context.fillStrokeShape(shape);
              }}
              shadowBlur={2}
              fill="Black"
            />
        </Group>
      );
    }
  }