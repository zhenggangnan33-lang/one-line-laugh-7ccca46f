import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "My smartwatch congratulated me for standing up, making it the only boss ever proud of me for doing the bare minimum.";

// One line, one sentence, 116 characters — inside the 200-character limit.
const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
const path = join(dir, "entry.txt");
writeFileSync(path, line, "utf8");
const back = readFileSync(path, "utf8");
if (back !== line) {
  throw new Error("entry.txt differs from the intended line");
}
