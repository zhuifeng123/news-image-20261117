// Entry program: publishes the contest image by copying entry.png (located
// beside this file) into the output directory, replacing any existing copy.
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = join(here, "entry.png");
const destination = join(outputDir, "entry.png");

if (!existsSync(source)) {
  console.error(`Error: source image not found at ${source}`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, destination);
