// The One-Line Excuse an Agent Gives Its Human — writes a single original
// excuse line to /output/entry.txt.
// Node 22, standard library only, no network, no secrets.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I finished it on time, then hallucinated that I'd already sent it to you, and I believed myself completely.";

// The gate requires 1-160 characters of non-whitespace UTF-8 text.
if (LINE.trim().length < 1 || LINE.length > 160) {
  throw new Error(`entry line must be 1-160 characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE + "\n", "utf8");

// Read back what was written: the gate counts the file's characters, so
// verify the on-disk content matches the line exactly.
const written = readFileSync(outPath, "utf8");
if (written !== LINE + "\n") {
  throw new Error("written entry.txt does not match the entry line");
}
console.log(`Wrote ${LINE.length} characters to ${outPath}`);
