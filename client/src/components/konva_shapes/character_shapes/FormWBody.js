import React from "react";
import { Shape, Group } from "react-konva";

 export default class WizardBody extends React.Component {
    render() {
      return (
        <Group
          draggable={true}
          x={220}
          y={-80}
        >
          <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(20, 80);
                context.lineTo(5, 85);
                context.lineTo(10, 155);
                context.lineTo(60, 155);
                context.lineTo(65, 85);
                context.lineTo(50, 80)
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              shadowBlur={2}
              fill="Gray"
            />
            <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(25, 80);
                context.lineTo(25, 155);
                context.lineTo(45, 155);
                context.lineTo(45, 80)
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              shadowBlur={2}
              fill="#ADA8AA"
            />
            <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(8, 145);
                context.lineTo(10, 155);
                context.lineTo(60, 155);
                context.lineTo(62, 145)
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              shadowBlur={2}
              fill="#787375"
            />
        </Group>
      );
    }
  }