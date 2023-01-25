import { Observer } from "./helpers/observable.js";
import { onTick, pauseGame, startGame } from "./services/timer.js";
import { closeBuilder } from "./services/game-builder.js";
import { log, runAsync } from "./helpers/helpers.js";

const gameFlow = new Observer();
onTick.subscribe(gameFlow);

runAsync(() => {
  document.querySelector("#pause").addEventListener('click', () => pauseGame());
  document.querySelector("#continue").addEventListener('click', () => startGame());
})

