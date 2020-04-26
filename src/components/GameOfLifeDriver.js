const dataHook = (hook) => `[data-hook="${hook}"]`;

class GameOfLifeDriver {
  constructor(wrapper) {
    this.wrapper = wrapper;
  }
  callAt(rowIdx, colIdx) {
    this.wrapper.find(dataHook(`${rowIdx}-${colIdx}`));
  }
  getButton() {
    const button = this.wrapper.find(".next-button");
    return {
      click: () => button.simulate("click"),
    };
  }
}

export default GameOfLifeDriver;
