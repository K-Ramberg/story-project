import React from "react";
import Konva from "konva";
import { Shape, Group } from "react-konva";

 export default class CastleDoor extends React.Component {
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
                context.moveTo(-60, 60);
                context.quadraticCurveTo(-70, -40, 20, -40);
                context.quadraticCurveTo(125, -40, 100, 60);
                context.lineTo(100, 256);
                context.lineTo(-60, 256);
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              shadowBlur={3}
              fill="#2F2D28"
            />
            <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(100, 5);
                context.quadraticCurveTo(105, -40, 145, -41)
                context.lineTo(190, -42);
                context.quadraticCurveTo(230, -45, 235, 2);
                context.lineTo(235, 255);
                context.lineTo(100, 252);
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              shadowBlur={10}
              fill="#403822"
            />
            <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(145, -41);
                context.lineTo(190, -42);
                context.lineTo(190, 254);
                context.lineTo(145, 253);
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              shadowBlur={5}
              fill="#403822"
            />
            <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(99, 5);
                context.lineTo(236, 2);
                context.lineTo(236, 22);
                context.lineTo(99, 25);
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              shadowBlur={15}
              fill="#403822"
            />
            <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(99, 210);
                context.lineTo(236, 209);
                context.lineTo(236, 189);
                context.lineTo(99, 190);
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              shadowBlur={15}
              fill="#403822"
            />
            <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(119, 25);
                context.lineTo(99, 25);
                context.lineTo(216, 188);
                context.lineTo(236, 188);
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              shadowBlur={2}
              fill="#403822"
            />
            <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(210, 100);
                context.quadraticCurveTo(200, 100, 210, 135);
                context.lineTo(218, 135);
                context.quadraticCurveTo(200, 100, 218, 100);
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              shadowBlur={8}
              fill="Black"
            />
        </Group>
      );
    }
  }