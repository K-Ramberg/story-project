import React from "../../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react";
import { Shape, Group } from "react-konva";

 export default class PrincessBody extends React.Component {
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
                context.moveTo(20, 80);
                context.lineTo(10, 85);
                context.lineTo(10, 155);
                context.lineTo(60, 155);
                context.lineTo(60, 85);
                context.lineTo(50, 80)
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              shadowBlur={2}
              fill="#DB5387 "
            />
            <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(20, 80);
                context.lineTo(25, 155);
                context.lineTo(45, 155);
                context.lineTo(50, 80)
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              shadowBlur={2}
              fill="Pink"
            />
        </Group>
      );
    }
  }