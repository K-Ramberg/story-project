import React from "react";
import { Shape, Group} from "react-konva";

 export default class DinoLegs extends React.Component {
    render() {
      return (
        <Group
          draggable={true}
          x={220}
          y={-156}
        >
        <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(10, 160);
                context.quadraticCurveTo(-20, 190, -40, 230);
                context.lineTo(70, 165);
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              shadowBlur={2}
              fill="#2B9E49"
            />
             <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(10, 157);
                context.quadraticCurveTo(-20, 190, 10, 210);
                context.lineTo(-10, 245);
                context.lineTo(45, 255);
                context.lineTo(45, 245);
                context.lineTo(10, 235);
                context.lineTo(45, 200);
                context.lineTo(45, 235);
                context.lineTo(85, 255);
                context.lineTo(85, 240);
                context.lineTo(58, 228)
                context.quadraticCurveTo(90, 150, 60, 157)
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              shadowBlur={2}
              fill="#2B9E49"
            />
        </Group>
      );
    }
  }