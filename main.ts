import { readFile2Lines } from "./utils.ts";

const lines = await readFile2Lines(".gitignore");
console.log(lines);
