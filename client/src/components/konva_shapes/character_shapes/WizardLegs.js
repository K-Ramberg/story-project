import React from "react";
import Konva from "konva";
import { Shape, Group} from "react-konva";

 export default class WizardLegs extends React.Component {
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
                context.moveTo(10, 157);
                context.lineTo(-20, 255);
                context.lineTo(85, 255);
                context.lineTo(60, 157)
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              shadowBlur={2}
              fill="Gray"
            />
            <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(23, 157);
                context.lineTo(15, 255);
                context.lineTo(50, 255);
                context.lineTo(45, 157)
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              shadowBlur={2}
              fill="#ADA8AA"
            />
        </Group>
      );
    }
  }