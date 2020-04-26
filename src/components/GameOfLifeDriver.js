import React from "react";
import { mount } from "enzyme";
import Game from "../components/Game";

const dataHook = (hook) => `[data-hook="${hook}"]`;

class GameOfLifeDriver {
  constructor(wrapper) {
    this.wrapper = wrapper;
  }
  mountTable(table) {
    this.wrapper = mount(<Game initTable={table} />);
  }
  callAt(rowIdx, colIdx) {
    return this.wrapper.find(dataHook(`${rowIdx}-${colIdx}`)).text();
  }
  getTitle() {
    return this.wrapper.find("h1").text();
  }
  getButton() {
    return this.wrapper.find(".next-button").text();
  }
  clickCell() {
    this.wrapper.find(".board-piece").first().simulate("click");
  }
  findFirstBoardPiece() {
    return this.wrapper.find(".board-piece").first().text();
  }
  clickNextButton() {
    this.wrapper.find(".next-button").first().simulate("click");
  }
  checkAllCellsFor(element) {
    this.wrapper.find(".board-piece").forEach((node) => {
      expect(node.text()).toBe(element);
    });
  }
}

export default GameOfLifeDriver;
