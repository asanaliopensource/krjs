const KOREAN_KEYWORDS = {
  '변수': 'let',
  '상수': 'const',
  '함수': 'function',
  '반환': 'return',

  '만약': 'if',
  '아니면만약': 'else if',
  '아니면': 'else',
  '선택': 'switch',
  '경우': 'case',
  '기본': 'default',

  '반복': 'for',
  '동안': 'while',
  '실행': 'do',
  '중지': 'break',
  '계속': 'continue',

  '시도': 'try',
  '잡기': 'catch',
  '마지막으로': 'finally',
  '던지기': 'throw',

  '비동기': 'async',
  '기다리기': 'await',

  // ООП
  '클래스': 'class',
  '생성자': 'constructor',
  '확장': 'extends',
  '새로운': 'new',
  '이것': 'this',
  'супер': 'super',

  '가져오기': 'import',
  '내보내기': 'export',

  '참': 'true',
  '거짓': 'false',
  '없음': 'null',
  '정의안됨': 'undefined',
  'NaN': 'NaN'
};

const KOREAN_GLOBALS = {
  '로그': 'console.log',
  '오류로그': 'console.error',
  '경고로그': 'console.warn',
  '정보로그': 'console.info',
  '문자열': 'String',
  '숫자': 'Number',
  '불리언': 'Boolean',
  '배열': 'Array',
  '객체': 'Object',
  '약속': 'Promise',
  '수학': 'Math',
  '날짜': 'Date',
  'JSON': 'JSON'
};

module.exports = {
  KOREAN_KEYWORDS,
  KOREAN_GLOBALS
};