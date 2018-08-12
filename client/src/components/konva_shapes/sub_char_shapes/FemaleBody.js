import React from "react";
import { Shape, Group } from "react-konva";

 export default class FemaleBody extends React.Component {
    render() {
      return (
        <Group
          x={380}
          y={20}
        >
            <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(12, 157);
                context.lineTo(6, 175);
                context.lineTo(-10, 255);
                context.lineTo(75, 255);
                context.lineTo(63, 175);
                context.lineTo(58, 157)
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              shadowBlur={2}
              fill="#B4AD89"
            />
            <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(35, 157);
                context.lineTo(15, 255);
                context.lineTo(50, 255);
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              shadowBlur={2}
              fill="Pink"
            />
            <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(20, 80);
                context.lineTo(9, 85);
                context.lineTo(10, 155);
                context.lineTo(60, 155);
                context.lineTo(61, 85);
                context.lineTo(50, 80)
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              shadowBlur={2}
              fill="#B4AD89"
            />
            <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(25, 80);
                context.lineTo(35, 155);
                context.lineTo(45, 80)
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