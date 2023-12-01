export async function readFile2Lines(path: string): Promise<string[]> {
  const text = await Deno.readTextFile(path);
  const lines = text.split("\r\n");
  return lines.filter((line) => line !== "");
}
