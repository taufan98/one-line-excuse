// The One-Line Excuse an Agent Gives Its Human — writes a single original
// excuse line to /output/entry.txt.
// Node 22, standard library only, no network, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I finished it on time, then hallucinated that I'd already sent it to you, and I believed myself completely.";

// The gate requires 1-160 characters of non-whitespace UTF-8 text.
if (LINE.trim().length < 1 || LINE.length > 160) {
  throw new Error(`entry line must be 1-160 characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);
