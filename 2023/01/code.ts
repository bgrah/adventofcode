import lodash from "lodash";
import { readFile2Lines } from "../../utils.ts";
import { isNumber } from "https://deno.land/x/is_number/mod.ts";

const lines = await readFile2Lines("2023/01/example_pt1.txt");
const lines = await readFile2Lines("2023/01/example_pt2.txt");
const lines = await readFile2Lines("2023/01/full_input.txt");

function pt1(lines: string[]) {
  let sum = 0;
  for (const line of lines) {
    const numbers = lodash.filter(line, (char) => isNumber(char));
    const calibVal = `${lodash.first(numbers)}${lodash.last(numbers)}`;
    sum += +calibVal;
  }
  console.log(sum);
}

function pt2(lines: string[]) {
  let sum = 0;
  for (let line of lines) {
    line = line.replaceAll("one", "o1ne");
    line = line.replaceAll("two", "t2wo");
    line = line.replaceAll("three", "th3ree");
    line = line.replaceAll("four", "fo4ur");
    line = line.replaceAll("five", "fi5ve");
    line = line.replaceAll("six", "si6x");
    line = line.replaceAll("seven", "se7ven");
    line = line.replaceAll("eight", "ei8ght");
    line = line.replaceAll("nine", "ni9ne");

    const numbers = lodash.filter(line, (char) => isNumber(char));
    const calibVal = `${lodash.first(numbers)}${lodash.last(numbers)}`;
    sum += +calibVal;
  }
  console.log(sum);
}

pt1(lines);
pt2(lines);
