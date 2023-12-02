import lodash from "lodash";
import { readFile2Lines } from "../../utils.ts";

// const lines = await readFile2Lines("2023/02/example_pt1.txt");
const lines = await readFile2Lines("2023/02/full_input.txt");

type Game = { gameId: number; rounds: Round[] };
type Round = { red: number; blue: number; green: number };

function parseGame(line: string): Game {
  const a = lodash.split(line, ": ");
  const b = lodash.split(a[0], " ");
  const gameId = +b[1];
  const rounds: Round[] = [];
  const c = lodash.split(a[1], ";");
  for (const take of c) {
    const round: Round = { red: 0, green: 0, blue: 0 };
    const d = lodash.map(lodash.split(take, ","), lodash.trim);
    for (const element of d) {
      const cnt = +(lodash.split(element, " ")[0]);
      switch (lodash.last(element)) {
        case "d":
          round.red = Math.max(round.red, cnt);
          break;
        case "e":
          round.blue = Math.max(round.blue, cnt);
          break;
        case "n":
          round.green = Math.max(round.green, cnt);
          break;
        default:
          throw new Error("??" + element + line);
      }
    }
    rounds.push(round);
  }

  return {
    gameId,
    rounds,
  };
}

// only 12 red cubes, 13 green cubes, and 14 blue cubes
function checkIfGameIsValid(game: Game): boolean {
  for (const round of game.rounds) {
    if (round.red > 12 || round.green > 13 || round.blue > 14) {
      return false;
    }
  }
  return true;
}

function pt1(lines: string[]) {
  let result = 0;
  for (const line of lines) {
    const game = parseGame(line);
    const isValid = checkIfGameIsValid(game);
    if (isValid) {
      result += game.gameId;
    }
    // console.log(game.gameId, isValid);
  }
  console.log(result);
}

function gamePower(game: Game): number {
  const maxCubes: Round = { red: 0, green: 0, blue: 0 };
  for (const round of game.rounds) {
    maxCubes.red = Math.max(maxCubes.red, round.red);
    maxCubes.green = Math.max(maxCubes.green, round.green);
    maxCubes.blue = Math.max(maxCubes.blue, round.blue);
  }
  return maxCubes.red * maxCubes.green * maxCubes.blue;
}

function pt2(lines: string[]) {
  let result = 0;
  for (const line of lines) {
    const game = parseGame(line);
    const power = gamePower(game);
    result += power;
  }
  console.log(result);
}

pt1(lines);
pt2(lines);
