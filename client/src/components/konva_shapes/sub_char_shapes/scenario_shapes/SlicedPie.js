import React from "react";
import Konva from "konva";
import { Shape, Group } from "react-konva";

 export default class SlicedPie extends React.Component {
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
          x={380}
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