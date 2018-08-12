import React from "../../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react";
import Konva from "konva";
import { Shape, Group, Circle } from "react-konva";

 export default class MrsHead extends React.Component {
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
                context.moveTo(30, 15);
                context.lineTo(-5, 74)
                context.quadraticCurveTo(50, 50, 68, 74)
                context.lineTo(60, 44);
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              fill="#9C917C"
            />
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
                context.moveTo(35, 16);
                context.quadraticCurveTo(5, 10, -5, 80)
                context.quadraticCurveTo(5, 45, 35, 16)
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              fill="#9C917C"
              shadowBlur={1}
            />
            <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(35, 18);
                context.quadraticCurveTo(60, 15, 68, 80);
                context.quadraticCurveTo(70, 5, 35, 15);
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              fill="#9C917C"
              shadowBlur={1}
            />
           <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(17, 43);
                context.quadraticCurveTo(32, 28, 32, 45)
                context.fillStrokeShape(shape);
              }}
              shadowBlur={2}
              fill="Beige"
            />
            <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(40, 45);
                context.quadraticCurveTo(43, 28, 55, 43)
                context.fillStrokeShape(shape);
              }}
              shadowBlur={2}
              fill="Beige"
            />
            <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(45, 58);
                context.quadraticCurveTo(35, 65, 25, 58)
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              shadowBlur={2}
              fill="pink"
            />
        </Group>
      );
    }
  }