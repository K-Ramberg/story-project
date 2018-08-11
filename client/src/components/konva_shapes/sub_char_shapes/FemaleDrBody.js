import React from "react";
import Konva from "konva";
import { Shape, Group } from "react-konva";

 export default class FemaleDrBody extends React.Component {
    render() {
      return (
        <Group
          draggable={true}
          x={220}
          y={20}
        >
          <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(10, 157);
                context.lineTo(15, 255);
                context.lineTo(30, 255);
                context.lineTo(35, 185);
                context.lineTo(37, 185);
                context.lineTo(40, 255);
                context.lineTo(55, 255);
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
                context.moveTo(40, 255);
                context.lineTo(79, 255);
                context.lineTo(79, 250);
                context.lineTo(57, 239);
                context.lineTo(58, 225);
                context.lineTo(38, 225)
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              shadowBlur={3}
              fill="#272003"
            />
            <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(15, 255);
                context.lineTo(53, 255);
                context.lineTo(53, 250);
                context.lineTo(31, 239);
                context.lineTo(33, 225);
                context.lineTo(13, 225)
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              shadowBlur={3}
              fill="#272003"
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
                context.moveTo(20, 80);
                context.lineTo(8, 85);
                context.lineTo(5, 215);
                context.lineTo(25, 217);
                context.lineTo(25, 80);
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              shadowBlur={2}
              fill="White"
            />
            <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(45, 80);
                context.lineTo(45, 217);
                context.lineTo(65, 215);
                context.lineTo(62, 85);
                context.lineTo(50, 80)
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              shadowBlur={2}
              fill="white"
            />
            <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(25, 80);
                context.lineTo(15, 85);
                context.lineTo(25, 125);
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              shadowBlur={2}
              fill="White"
            />
            <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(45, 80);
                context.lineTo(45, 125);
                context.lineTo(55, 85);
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              shadowBlur={2}
              fill="White"
            />
        </Group>
      );
    }
  }