import React from "react";
import Konva from "konva";
import { Shape, Group } from "react-konva";

 export default class DrHat extends React.Component {
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
        Shape
            sceneFunc={(context, shape) => {
              context.beginPath();
              context.moveTo(8,25);
              context.lineTo(8, 30);
              context.lineTo(63, 30);
              context.lineTo(63, 25);
              context.lineTo(50, 25);
              context.lineTo(50, 10);
              context.lineTo(25, 10);
              context.lineTo(25, 25);
              context.closePath();
              context.fillStrokeShape(shape);
            }}
          fill="white"
          shadowBlur={2}
          onClick={this.handleClick}
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
              onClick={this.handleClick}
            />
        </Group>
      );
    }
  }