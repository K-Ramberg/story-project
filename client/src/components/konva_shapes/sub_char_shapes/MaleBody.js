import React from "react";
import { Shape, Group } from "react-konva";

 export default class MaleBody extends React.Component {
    render() {
      return (
        <Group
          x={380}
          y={20}
        >
          <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(10, 157);
                context.lineTo(9, 255);
                context.lineTo(35, 255);
                context.lineTo(35, 187);
                context.lineTo(37, 187);
                context.lineTo(37, 255);
                context.lineTo(61, 255);
                context.lineTo(60, 157)
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              shadowBlur={2}
              fill="#362101"
            />
            <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(37, 255);
                context.lineTo(81, 255);
                context.lineTo(81, 245);
                context.lineTo(61, 235);
                context.lineTo(61, 225);
                context.lineTo(37, 225)
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              shadowBlur={3}
              fill="#272003"
            />
            <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(9, 255);
                context.lineTo(56, 255);
                context.lineTo(56, 245);
                context.lineTo(36, 235);
                context.lineTo(36, 225);
                context.lineTo(9, 225)
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              shadowBlur={3}
              fill="#272003"
            />
            <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(20, 80);
                context.lineTo(5, 85);
                context.lineTo(10, 155);
                context.lineTo(60, 155);
                context.lineTo(65, 85);
                context.lineTo(50, 80)
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              shadowBlur={2}
              fill="#362101"
            />
            <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(25, 80);
                context.lineTo(25, 155);
                context.lineTo(45, 155);
                context.lineTo(45, 80)
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              shadowBlur={2}
              fill="#FFF2B7"
            />
            <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(8, 145);
                context.lineTo(10, 155);
                context.lineTo(60, 155);
                context.lineTo(62, 145)
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              shadowBlur={2}
              fill="#272003"
            />
        </Group>
      );
    }
  }