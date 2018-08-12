import React from "react";
import Konva from "konva";
import { Shape, Group } from "react-konva";

 export default class MrsHat extends React.Component {
    render() {
      return (
        <Group
          x={380}
          y={20}
        >
        <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(15, 18);
                context.lineTo(-22, 33);
                context.lineTo(94, 33);
                context.lineTo(55, 18);
                context.quadraticCurveTo(35, -10, 15, 18)
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              fill="#E8E862"
              shadowBlur={2}
            />
        </Group>
      );
    }
  }