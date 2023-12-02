import lodash from "lodash";
import { readFile2Lines } from "../../utils.ts";
import { isNumber } from "https://deno.land/x/is_number/mod.ts";

const lines = await readFile2Lines("2023/03/example_pt1.txt");
// const lines = await readFile2Lines("2023/03/example_pt2.txt");
// const lines = await readFile2Lines("2023/03/full_input.txt");

function pt1(lines: string[]) {
  let result = 0;
  for (const line of lines) {
  }
  console.log(result);
}

function pt2(lines: string[]) {
  let result = 0;
  for (const line of lines) {
  }
  console.log(result);
}

pt1(lines);
pt2(lines);
