import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Game from "./components/Game";
import GameOfLifeDriver from "./components/GameOfLifeDriver";

configure({ adapter: new Adapter() });
describe("game of life testing", () => {
  let wrapper;
  const table = [
    ["e", "e", "e"],
    ["e", "f", "e"],
    ["e", "e", "e"],
  ];
  const spawnTable = [
    ["e", "e", "e"],
    ["e", "f", "e"],
    ["e", "f", "f"],
  ];
  const destroyTable = [
    ["f", "e", "e"],
    ["e", "f", "f"],
    ["e", "f", "f"],
  ];

  let driver = new GameOfLifeDriver(wrapper);

  test("renders the title of the game", () => {
    driver.mountTable(table);
    expect(driver.getTitle()).toContain("game of life");
  });

  test("render a button with text of `next`", () => {
    driver.mountTable(table);
    expect(driver.getButton()).toBe("Next");
  });

  test("render a board piece ", () => {
    driver.mountTable(table);
    expect(driver.findFirstBoardPiece()).toEqual("e");
  });

  test("change state of board piece", () => {
    driver.mountTable(table);
    driver.clickCell();
    expect(driver.findFirstBoardPiece()).toEqual("f");
    driver.clickCell();
    expect(driver.findFirstBoardPiece()).toEqual("e");
  });

  test("check if one cell dissapears", () => {
    driver.mountTable(table);
    expect(driver.callAt(1, 1)).toBe("f");
    driver.clickNextButton();
    expect(driver.callAt(1, 1)).toBe("e");
  });

  test("check if no cells were created", () => {
    driver.mountTable(table);
    driver.clickNextButton();
    driver.checkAllCellsFor("e");
  });

  test("check if cell spawned when it has 3 neighbours", () => {
    driver.mountTable(spawnTable);
    driver.clickNextButton();
    expect(driver.callAt(1, 2)).toBe("f");
  });

  test("check if cell destroyed when it has 4 neighbours", () => {
    driver.mountTable(destroyTable);
    driver.clickNextButton();
    expect(driver.callAt(1, 1)).toBe("e");
  });
});
