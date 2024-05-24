export class holeField {
  constructor() {
    this._element = document.body;
    this.deadCounter = document.getElementById("dead");
    this.sleep = 0;

    this.onHoleClick = this.onHoleClick.bind(this);
    this.gameOver = document.createElement("div");
    this.gameContainer = document.createElement("div");
    this.gameContainer.addEventListener("click", this.onHoleClick);
  }

  renderHole(i) {
    const hole = document.createElement("div");
    hole.classList.add("hole");
    hole.id = `hole${i}`;

    if (i === 1) {
      hole.classList.add("hole_has-mole");
    }

    return hole;
  }

  renderField() {
    this.gameContainer.classList.add("hole-game");
    for (let i = 1; i <= 16; i++) {
      const hole = this.renderHole(i);
      this.gameContainer.appendChild(hole);
    }
    this.gameOver.classList.add("gameOver", "hidden");
    this.gameOver.textContent = "Игра Окончена";
    let status = document.querySelector(".status");
    status.appendChild(this.gameOver);
    this._element.appendChild(this.gameContainer);
  }

  onHoleClick(event) {
    const divItem = event.target.closest(".hole");
    if (divItem && divItem.className.includes("hole_has-mole")) {
      this.deadCounter.textContent = +this.deadCounter.textContent + 1;
      divItem.style.backgroundImage = "none";
      this.sleep = 0;
    }
  }
}
