const { execSync } = require('child_process');

function installPackages(packages) {
  if (!packages || packages.length === 0) {
    console.log('⚠️ 패키지 이름을 입력하세요!');
    return;
  }

  console.log(`📦 패키지 설치 중…: ${packages.join(', ')}...`);
  try {
    execSync(`npm install ${packages.join(' ')}`, { stdio: 'inherit' });
    console.log('✅ 설치가 완료되었습니다!');
  } catch (error) {
    console.error('❌ 설치 오류:', error.message);
  }
}

module.exports = installPackages;