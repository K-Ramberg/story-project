import React from "react";
import Konva from "konva";
import { Shape, Group, Circle } from "react-konva";

 export default class MaleHead extends React.Component {
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
        <Circle
              height={60}
              fill={this.state.color}
              x={35}
              y={48}
              shadowBlur={4}
            />
            <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(13, 30);
                context.quadraticCurveTo(-4, 20, 5, 50)
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              fill="#9E7727"
              shadowBlur={4}
            />
            <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(57, 30);
                context.quadraticCurveTo(75, 20, 65, 50)
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              fill="#9E7727"
              shadowBlur={2}
            />
            <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(20, 45);
                context.quadraticCurveTo(25, 27, 35, 45)
                context.fillStrokeShape(shape);
              }}
              shadowBlur={2}
              fill="Beige"
            />
            <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(40, 45);
                context.quadraticCurveTo(50, 27, 55, 45)
                context.fillStrokeShape(shape);
              }}
              shadowBlur={2}
              fill="Beige"
            />
            <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(30, 63);
                context.lineTo(36, 67);
                context.lineTo(45, 63);
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              shadowBlur={2}
              fill="black"
            />
        </Group>
      );
    }
  }