import React from "../../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react";
import { Shape, Group } from "react-konva";

 export default class DinoBody extends React.Component {
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
                context.moveTo(18, 80);
                context.quadraticCurveTo(-40, 100, 10, 155);
                context.lineTo(60, 155);
                context.quadraticCurveTo(100, 100, 45, 80)
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              shadowBlur={2}
              fill="#2B9E49"
            />
            <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(25, 80);
                context.quadraticCurveTo(12, 100, 25, 155);
                context.lineTo(55, 155);
                context.quadraticCurveTo(90, 100, 45, 80)
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              fill="#A4C365"
            />
        </Group>
      );
    }
  }