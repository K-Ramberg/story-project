import React from "react";
import Konva from "konva";
import { Shape, Group, Circle } from "react-konva";

 export default class PrincessHead extends React.Component {
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
          draggable={true}
          x={60}
          y={430}
        >
        <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(50, 30);
                context.lineTo(-5, 70)
                context.lineTo(65, 70)
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              fill="pink"
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
                context.moveTo(20, 45);
                context.quadraticCurveTo(30, 25, 35, 45)
                context.fillStrokeShape(shape);
              }}
              shadowBlur={2}
              fill="Beige"
            />
            <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(10, 30);
                context.quadraticCurveTo(70, -10, -10, 80)
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              fill="pink"
            />
        <Shape
            sceneFunc={(context, shape) => {
              context.beginPath();
              context.moveTo(0,10);
              context.lineTo(10, 30);
              context.lineTo(60, 30);
              context.lineTo(70, 10);
              context.lineTo(50, 20);
              context.lineTo(35, 0);
              context.lineTo(25, 20);
              context.closePath();
              context.fillStrokeShape(shape);
            }}
          fill="Gold"
          shadowBlur={2}
          onClick={this.handleClick}
          />
            <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(40, 45);
                context.quadraticCurveTo(50, 25, 55, 45)
                context.fillStrokeShape(shape);
              }}
              shadowBlur={2}
              fill="Beige"
            />
            <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(25, 58);
                context.lineTo(50, 58);
                context.quadraticCurveTo(30, 80, 25, 58)
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