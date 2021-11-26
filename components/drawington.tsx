import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Konva from "konva";
import BGPattern from "../public/mendes.svg";
import { Rect } from "konva/lib/shapes/Rect";
import { Image } from "konva/lib/shapes/Image";
import $ from "jquery";
import BottomNavigationBar from "./bottom-navigation-bar";

type DrawingtonProps = {
  backgroundColor: string;
  backgroundType: "default";
};

type DrawingtonState = {
  positionX: number;
  positionY: number;
};

export default class Drawington extends Component<
  DrawingtonProps,
  DrawingtonState
> {
  static propTypes = {
    backgroundColor: PropTypes.string.isRequired,
    backgroundType: PropTypes.oneOf(["default"]).isRequired,
  };

  componentDidMount() {
    var drawingtonStage = new Konva.Stage({
      container: "drawington-canvas",
      width: window.innerWidth,
      height: window.innerHeight,
    });
    window.addEventListener("resize", () => {
      drawingtonStage.width(window.innerWidth);
      drawingtonStage.height(window.innerHeight);
    });
    require("@material/mwc-icon-button");
    console.log(this.createRandomNoteColor());
    $("#addnote").click(() => {
      var newNotePad = new Konva.Layer({
        width: 250,
        height: 250,
        x: (window.innerWidth - 250) / 2,
        y: (window.innerWidth - 250) / 2,
        draggable: true,
      });
      var randomColor = this.createRandomNoteColor();
      var notePadBackground = new Konva.Rect({
        cornerRadius: 24,
        fill: randomColor,
        width: 250,
        height: 250,
        x: 0,
        y: 0,
        draggable: false,
      });
      var notePadDelete = new Konva.Ellipse({
        fill: "black",
        stroke: "white",
        strokeWidth: 3,
        x: 250 - 16,
        y: 16,
        width: 16,
        height: 16,
        radiusX: 8,
        radiusY: 8,
      });
      newNotePad.add(notePadBackground);
      newNotePad.add(notePadDelete);
      drawingtonStage.add(newNotePad);
    });
  }

  decimalToHexString(number: number) {
    if (number < 0) {
      number = 0xffffffff + number + 1;
    }

    return new Number(number.toFixed(0)).toString(16).toUpperCase();
  }

  createRandomNoteColor(): string {
    var redValue = 0;
    var greenValue = 0;
    var blueValue = 0;
    var redFull = Math.random() < 0.5;
    if (!redFull) redValue = Math.random() < 0.5 ? 198 : Math.random() * 255;
    else redValue = 255;
    greenValue =
      redValue != 255
        ? Math.random() < 0.5
          ? 255
          : Math.random() < 0.5
          ? 198
          : Math.random() * 255
        : Math.random() < 0.5
        ? 198
        : Math.random() * 255;
    blueValue =
      redValue != 255 && greenValue != 255
        ? 255
        : redValue != 198 && greenValue != 198
        ? 198
        : Math.random() * 255;
    return (
      "#" +
      this.decimalToHexString(redValue) +
      this.decimalToHexString(greenValue) +
      this.decimalToHexString(blueValue)
    );
  }

  render() {
    return (
      <div
        className={classNames("w-full", "h-full")}
        style={{
          backgroundColor: this.props.backgroundColor,
        }}
      >
        <div id="drawington-canvas" />
      </div>
    );
  }
}
