#!/usr/bin/env node

const fs = require('node:fs');
const path = require('node:path');
const { buildAllWeights } = require('../font_factory/build-engine');
const { getOutputDir } = require('../font_factory/runtime-paths');

async function main() {
  const outputDir = getOutputDir();
  const cssPath = path.join(outputDir, 'my-icon-font.css');

  if (fs.existsSync(cssPath)) {
    console.log('[harness] font artifacts already present');
    return;
  }

  console.log('[harness] generating font artifacts for test preflight');
  await buildAllWeights();
  console.log('[harness] font artifact generation complete');
}

main().catch((error) => {
  console.error('[harness] failed to generate font artifacts');
  console.error(error);
  process.exit(1);
});
