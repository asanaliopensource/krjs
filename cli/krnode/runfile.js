const fs = require('fs');
const path = require('path');
const Kernel = require('../../kernel');

function runKrFile(filePath) {
  const absolutePath = path.resolve(process.cwd(), filePath);

  if (!fs.existsSync(absolutePath)) {
    console.error(`❌ 파일 없음: ${absolutePath}`);
    process.exit(1);
  }

  const krCode = fs.readFileSync(absolutePath, 'utf-8');

  try {
    Kernel.execute(krCode, { filename: path.basename(filePath) });
  } catch (err) {
    console.error('💥 실행 중 예외 발생:');
    console.error(err.stack || err.message);
    process.exit(1);
  }
}

module.exports = runKrFile;