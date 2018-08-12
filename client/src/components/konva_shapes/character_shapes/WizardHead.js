import React from "react";
import Konva from "konva";
import { Shape, Group, Circle } from "react-konva";

 export default class WizardHead extends React.Component {
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
                context.moveTo(5, 30);
                context.quadraticCurveTo(50, -30, 0, 80)
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              fill="#D7DBDD"
              shadowBlur={4}
            />
            <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(55, 30);
                context.quadraticCurveTo(70, 10, 70, 80)
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              fill="#D7DBDD"
              shadowBlur={2}
            />
            <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(15, 15);
                context.lineTo(-10, 33);
                context.lineTo(80, 33);
                context.lineTo(55, 15);
                context.lineTo(45, -5);
                context.lineTo(20, -20);
                context.lineTo(25, 0);
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              fill="Gray"
              shadowBlur={2}
              onClick={this.handleClick}
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
                context.moveTo(30, 55);
                context.lineTo(20, 58);
                context.lineTo(10, 85);
                context.lineTo(25, 80);
                context.lineTo(35, 90);
                context.lineTo(45, 95);
                context.lineTo(50, 80);
                context.lineTo(65, 75);
                context.lineTo(50, 58);
                context.lineTo(45, 55);
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              shadowBlur={2}
              fill="#D7DBDD"
            />
            <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(30, 63);
                context.lineTo(30, 67);
                context.lineTo(45, 63);
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              shadowBlur={2}
              fill="Gray"
            />
        </Group>
      );
    }
  }