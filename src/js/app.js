import { holeField } from "./createHTML";

const createHTML = new holeField();
createHTML.renderField();

(() => {
  let activeHole = 1,
    previouslyHole = activeHole,
    playing = true,
    getHole = (index) => document.getElementById(`hole${index}`),
    deactivateHole = (index) => (getHole(index).className = "hole"),
    activateHole = (index) => (getHole(index).className = "hole hole_has-mole"),
    holeGame = document.querySelector(".hole-game");

  let nextRun;
  const next = () => {
    if (!playing) {
      return;
    }
    if (createHTML.sleep === 5) {
      clearInterval(nextRun);
      holeGame.classList.add("hidden");
      createHTML.gameOver.classList.remove("hidden");
      return;
    }

    deactivateHole(activeHole);
    while (activeHole === previouslyHole) {
      previouslyHole = Math.floor(1 + Math.random() * 16);
    }
    activeHole = previouslyHole;
    activateHole(activeHole);
    createHTML.sleep += 1;
  };

  nextRun = setInterval(next, 1000);
})();
