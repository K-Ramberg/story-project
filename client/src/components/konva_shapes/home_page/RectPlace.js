import React, { Component } from "react";
import Konva from "konva";
import { Rect } from "react-konva";

 export default class RectPlace extends React.Component {
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
        <Rect
            height={60}
            Width={60}
            fill={this.state.color}
            shadowBlur={5}
            onClick={this.handleClick}
            draggable={true}
            x={270}
            y={60}
        />
      );
    }
  }