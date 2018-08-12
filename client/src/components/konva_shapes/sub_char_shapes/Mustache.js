import React from "react";
import Konva from "konva";
import { Shape, Group } from "react-konva";

 export default class Mustache extends React.Component {
    render() {
      return (
        <Group
          x={380}
          y={20}
        >
         <Shape 
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(30, 55);
                context.lineTo(24, 58);
                context.lineTo(25, 75);
                context.lineTo(30, 60);
                context.lineTo(38, 61);
                context.lineTo(45, 60);
                context.lineTo(50, 75);
                context.lineTo(50, 58);
                context.lineTo(50, 58);
                context.lineTo(45, 55);
                context.lineTo(38, 57);
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              shadowBlur={2}
              fill="#9E7727"
            />
        </Group>
      );
    }
  }