import React from "react";
import Konva from "konva";
import { Shape, Group } from "react-konva";

 export default class CabinDoor extends React.Component {
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
                context.moveTo(-90, -40);
                context.lineTo(100, -40);
                context.lineTo(100, 256);
                context.lineTo(-90, 256);
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              shadowBlur={3}
              fill="#2F2D28"
            />
            <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(100, -40);
                context.lineTo(235, -43);
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
                context.moveTo(99, -20);
                context.lineTo(236, -23);
                context.lineTo(236, -3);
                context.lineTo(99, 0);
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
                context.lineTo(236, 207);
                context.lineTo(236, 187);
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