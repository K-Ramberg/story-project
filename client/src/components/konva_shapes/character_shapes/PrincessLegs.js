import React from "react";
import Konva from "konva";
import { Shape, Group} from "react-konva";

 export default class PrincessLegs extends React.Component {
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
                context.moveTo(12, 157);
                context.lineTo(3, 170);
                context.lineTo(-10, 255);
                context.lineTo(75, 255);
                context.lineTo(65, 170);
                context.lineTo(58, 157)
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              shadowBlur={2}
              fill="#DB5387"
            />
            <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(23, 157);
                context.lineTo(-10, 255);
                context.lineTo(75, 255);
                context.lineTo(45, 157)
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