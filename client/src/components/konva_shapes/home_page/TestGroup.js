import React from "react";
import Konva from "konva";
import { Group } from "react-konva";
import LeftParenth from "./LeftParenth";
import RightParenth from "./RightParenth";

 export default class TestGroup extends React.Component {
    render() {
      return (
        <Group
          draggable={true}
          x={60}
          y={430}
        >
        <LeftParenth/>
        <RightParenth/>
        </Group>
      );
    }
  }