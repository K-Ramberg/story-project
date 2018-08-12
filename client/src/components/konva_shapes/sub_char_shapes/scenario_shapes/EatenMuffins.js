import React from "react";
import Konva from "konva";
import { Shape, Group } from "react-konva";

 export default class EatenMuffins extends React.Component {
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
                context.moveTo(-25, 143);
                context.lineTo(35, 143);
                context.lineTo(45, 140)
                context.lineTo(-35, 140)
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              shadowBlur={2}
              fill="Silver"
            />
            <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(-30, 140);
                context.lineTo(-10, 140);
                context.lineTo(-7, 134);
                context.lineTo(-32, 134);
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              shadowBlur={2}
              fill="#F5CE7E"
            />
            <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(-35, 134);
                context.quadraticCurveTo(-18, 110, -5, 134);
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              shadowBlur={2}
              fill="#F5CE7E"
            />
            <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(0, 140);
                context.lineTo(20, 140);
                context.lineTo(23, 134);
                context.lineTo(-2, 134);
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              shadowBlur={2}
              fill="#F5CE7E"
            />
            <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(-5, 134);
                context.quadraticCurveTo(10, 110, 25, 134);
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              shadowBlur={2}
              fill="#F5CE7E"
            />
            <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(20, 140);
                context.lineTo(40, 140);
                context.lineTo(43, 134);
                context.lineTo(18, 134);
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              shadowBlur={2}
              fill="#F5CE7E"
            />
            <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(15, 134);
                context.quadraticCurveTo(30, 110, 45, 134);
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              shadowBlur={2}
              fill="#F5CE7E"
            />
        </Group>
      );
    }
  }