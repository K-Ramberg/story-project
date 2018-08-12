import React from "react";
import Konva from "konva";
import { Shape, Group } from "react-konva";

 export default class MaleDrHat extends React.Component {
    render() {
      return (
        <Group
          x={380}
          y={20}
        >
        <Shape
            sceneFunc={(context, shape) => {
              context.beginPath();
              context.moveTo(10,10);
              context.lineTo(12, 29);
              context.lineTo(58, 29);
              context.lineTo(60, 10);
              context.lineTo(50, 10);
              context.lineTo(25, 10);
              context.closePath();
              context.fillStrokeShape(shape);
            }}
          fill="white"
          shadowBlur={2}
          />
            <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(35, 13);
                context.lineTo(35, 18);
                context.lineTo(30, 18);
                context.lineTo(30, 23);
                context.lineTo(35, 23);
                context.lineTo(35, 28);
                context.lineTo(40, 28);
                context.lineTo(40, 23);
                context.lineTo(45, 23);
                context.lineTo(45, 18);
                context.lineTo(40, 18);
                context.lineTo(40, 13);
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              fill="red"
              shadowBlur={2}
            />
        </Group>
      );
    }
  }