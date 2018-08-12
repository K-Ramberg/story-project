import React from "../../../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react";
import Konva from "konva";
import { Shape, Group } from "react-konva";

 export default class SlicedPies extends React.Component {
    state = {
      color: Konva.Util.getRandomColor()
    };
    handleClick = () => {
      this.setState({
        color: Konva.Util.getRandomColor()
      });
    };
    render() {
      return (
        <Group
          x={220}
          y={20}
        >
        <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(75, 140);
                context.lineTo(95, 140);
                context.lineTo(80, 130)
                context.lineTo(75, 138)
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              shadowBlur={2}
              fill="#421677"
            />
        </Group>
      );
    }
  }