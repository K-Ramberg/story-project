import React from "react";
import Konva from "konva";
import { Shape, Group } from "react-konva";

 export default class Glasses extends React.Component {
    render() {
      return (
        <Group
          x={380}
          y={20}
        >
        <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(15, 38);
                context.quadraticCurveTo(30, 58, 35, 40)
                context.lineTo(15, 38)
                context.fillStrokeShape(shape);
              }}
              stroke="red"
              strokeWidth={2}
              shadowBlur={2}
              fill="#BEF4EF"
            />
            <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(38, 40);
                context.quadraticCurveTo(45, 58, 57, 38)
                context.lineTo(38, 40)
                context.fillStrokeShape(shape);
              }}
              stroke="red"
              strokeWidth={2}
              shadowBlur={2}
              fill="#BEF4EF"
            />
        </Group>
      );
    }
  }