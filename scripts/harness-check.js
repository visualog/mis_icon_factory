#!/usr/bin/env node

const { spawnSync } = require('node:child_process');

const mode = process.argv[2] || 'all';

function run(cmd, args) {
  const result = spawnSync(cmd, args, { stdio: 'inherit', shell: false });
  if (result.status !== 0) {
    process.exit(result.status || 1);
  }
}

function getOutput(cmd, args) {
  const result = spawnSync(cmd, args, { encoding: 'utf8', shell: false });
  if (result.status !== 0) {
    return '';
  }
  return (result.stdout || '').trim();
}

function getChangedFiles(currentMode) {
  if (currentMode === 'staged') {
    return getOutput('git', ['diff', '--name-only', '--cached'])
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean);
  }

  if (currentMode === 'push') {
    const upstream = getOutput('git', ['rev-parse', '--abbrev-ref', '--symbolic-full-name', '@{u}']);
    if (upstream) {
      return getOutput('git', ['diff', '--name-only', `${upstream}...HEAD`])
        .split('\n')
        .map((line) => line.trim())
        .filter(Boolean);
    }
  }

  return getOutput('git', ['diff', '--name-only', 'HEAD'])
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);
}

function hasPrefix(files, prefixes) {
  return files.some((file) => prefixes.some((prefix) => file.startsWith(prefix)));
}

function hasAny(files, names) {
  return files.some((file) => names.includes(file));
}

const changedFiles = getChangedFiles(mode);
const shouldRunFull =
  mode === 'push' ||
  changedFiles.length === 0 ||
  hasPrefix(changedFiles, ['test/', 'font_factory/', 'frontend/src/', 'frontend/public/']) ||
  hasAny(changedFiles, ['package.json', 'package-lock.json', 'vite.config.mjs']);

const shouldBuildReact =
  mode === 'push' ||
  hasPrefix(changedFiles, ['frontend/src/', 'frontend/public/']) ||
  hasAny(changedFiles, ['package.json', 'package-lock.json', 'vite.config.mjs']);

const shouldBuildAgentation =
  mode === 'push' ||
  hasPrefix(changedFiles, ['frontend/src/']) ||
  hasAny(changedFiles, ['package.json', 'package-lock.json', 'vite.config.mjs']);

console.log(`[harness] mode=${mode}`);
if (changedFiles.length > 0) {
  console.log(`[harness] changed files: ${changedFiles.length}`);
} else {
  console.log('[harness] changed files: none detected (running safe defaults)');
}

if (shouldRunFull) {
  console.log('[harness] ensuring required font artifacts');
  run('node', ['scripts/ensure-font-artifacts.js']);
  console.log('[harness] running tests');
  run('npm', ['test']);
} else {
  console.log('[harness] skipping tests (no relevant changes)');
}

if (shouldBuildReact) {
  console.log('[harness] running React build');
  run('npm', ['run', 'build:react']);
} else {
  console.log('[harness] skipping React build');
}

if (shouldBuildAgentation) {
  console.log('[harness] running Agentation build');
  run('npm', ['run', 'build:react:agentation']);
} else {
  console.log('[harness] skipping Agentation build');
}

console.log('[harness] checks passed');
