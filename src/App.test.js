import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Game from "./components/Game";
//import GameOfLifeDriver from "./components/GameOfLifeDriver";

configure({ adapter: new Adapter() });
describe("game of life testing", () => {
  let wrapper;
  const table = [
    ["e", "e", "e"],
    ["e", "f", "e"],
    ["e", "e", "e"],
  ];

  // let driver = new GameOfLifeDriver(wrapper); to be implemented
  // beforeEach(() => {
  //   wrapper = mount(<Game initTable={table} />);
  // });

  test("renders the title of the game", () => {
    wrapper = mount(<Game initTable={table} />);
    expect(wrapper.find("h1").text()).toContain("game of life");
  });

  test("render a button with text of `next`", () => {
    wrapper = mount(<Game initTable={table} />);
    expect(wrapper.find(".next-button").text()).toBe("Next");
  });

  test("render a board piece ", () => {
    wrapper = mount(<Game initTable={table} />);
    expect(wrapper.find(".board-piece").first().text()).toEqual("e");
  });

  test("change state of board piece", () => {
    wrapper = mount(<Game initTable={table} />);
    wrapper.find(".board-piece").first().simulate("click");
    expect(wrapper.find(".board-piece").first().text()).toEqual("f");
    wrapper.find(".board-piece").first().simulate("click");
    expect(wrapper.find(".board-piece").first().text()).toEqual("e");
  });

  test("check if one cell dissapears", () => {
    wrapper = mount(<Game initTable={table} />);
    expect(wrapper.find(`[data-hook="1-1"]`).text()).toBe("f");
    wrapper.find(".next-button").first().simulate("click");
    expect(wrapper.find(`[data-hook="1-1"]`).text()).toBe("e");
  });

  test("check if no cells were created", () => {
    wrapper = mount(<Game initTable={table} />);
    wrapper.find(".next-button").first().simulate("click");
    wrapper.find(".board-piece").forEach((node) => {
      expect(node.text()).toBe("e");
    });
  });

  test("check if cell spawned when it has 3 neighbours", () => {
    const spawnTable = [
      ["e", "e", "e"],
      ["e", "f", "e"],
      ["e", "f", "f"],
    ];
    wrapper = mount(<Game initTable={spawnTable} />);
    wrapper.find(".next-button").first().simulate("click");
    expect(wrapper.find(`[data-hook="1-2"]`).text()).toBe("f");
  });

  test("check if cell destroyed when it has 4 neighbours", () => {
    const spawnTable = [
      ["f", "e", "e"],
      ["e", "f", "f"],
      ["e", "f", "f"],
    ];
    wrapper = mount(<Game initTable={spawnTable} />);
    wrapper.find(".next-button").first().simulate("click");
    expect(wrapper.find(`[data-hook="1-1"]`).text()).toBe("e");
  });
});
