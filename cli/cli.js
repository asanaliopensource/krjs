#!/usr/bin/env node

const { Command } = require('commander');
const readline = require('readline');
const runKrFile = require('./krnode/runfile');
const installPackages = require('./krnode/install-pkgs');
const Kernel = require('../kernel');
const pkg = require('../package.json');

const program = new Command();

program
  .name('krnode')
  .description('자바스크립트 (Korean JS) CLI & Runtime')
  .version(pkg.version);

program
  .command('run <file>')
  .description('.krjs 파일을 실행하세요')
  .action((file) => {
    runKrFile(file);
  });

program
  .command('install [pkgs...]')
  .alias('i')
  .description('패키지 설치하기')
  .action((pkgs) => {
    installPackages(pkgs);
  });

program
  .command('repl')
  .description('인터랙티브 콘솔 실행하기')
  .action(() => {
    console.log(`🇰🇷 자바스크립트 REPL v${pkg.version}`);
    console.log('KRJS: 코드를 입력하거나 Ctrl+C를 눌러 종료하세요.');

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: '자바> '
    });

    rl.prompt();

    rl.on('line', (line) => {
      const trimmed = line.trim();
      if (trimmed) {
        try {
          const res = Kernel.execute(trimmed, { filename: 'repl' });
          if (res !== undefined) console.log(res);
        } catch (e) {
          console.error('❌ ' + e.message);
        }
      }
      rl.prompt();
    });
  });

if (process.argv.length === 2) {
  program.help();
} else if (process.argv.length === 3 && !process.argv[2].startsWith('-')) {
  runKrFile(process.argv[2]);
} else {
  program.parse(process.argv);
}