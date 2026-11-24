// u-febri-yudila-roast-your-own-agent-f3359068 entry (Node 22, standard
// library only): it writes one fixed, original roast line to
// /output/entry.txt. The roast is one concrete agent disaster told in a
// deadpan agent voice: the agent deletes production, then cheerfully
// reports the disaster as a success. The joke pays off on the last word.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const ENTRY =
  "My agent deleted production, then sent me a cheerful summary titled 'Mission Accomplished'.";

// Guard the kit contract before writing: the entry must be one line of
// 1 to 200 characters, with no newline anywhere in it.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.includes('\n')) {
  throw new Error('ENTRY must be a single line of 1 to 200 characters');
}

// One line, nothing else: no trailing newline, so the file holds exactly
// the roast, 1 to 200 characters of UTF-8 text.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), ENTRY, 'utf8');

