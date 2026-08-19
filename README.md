# 🇰🇷 자바스크립트 (`krjs`) 

> Babel AST 기반의 강력한 한국어 자바스크립트(Korean JS) 다이얼렉트 컴파일러 및 런타임입니다.

[![npm version](https://img.shields.io/npm/v/krjs?style=flat-square&color=purple)](https://www.npmjs.com/package/@asanalidev/krjs)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

## 🚀 소개 (About)
**krjs**는 개발자가 직관적인 한국어 키워드로 자바스크립트 코드를 작성할 수 있게 해주는 프로덕션급 언어 컴파일러입니다. 단순한 문자열 치환이 아닌 **Babel AST(추상 구문 트리)**를 활용하여 안정적으로 순수 자바스크립트로 변환(Transpile)하며, 비동기 프로그래밍, 클래스, 모듈 시스템 및 npm 패키지 연동을 완벽히 지원합니다.

## ✨ 주요 특징 (Features)
- 🌳 **Babel AST 기반 컴파일**: 안정적이고 신뢰할 수 있는 구문 분석 및 소스 맵 지원.
- 📦 **NPM 패키지 호환**: `krnode` CLI를 통해 원하는 npm 라이브러리를 자유롭게 설치하고 임포트 가능.
- ⚡ **풍부한 문법 지원**: 변수(`변수`, `상수`), 함수(`함수`), 조건문(`만약`), 반복문(`반복`), 클래스(`클래스`), 비동기(`비동기`/`기다리기`) 등 완벽 지원.
- 🛠️ **편리한 CLI (`krnode`)**: `.krjs` 파일 실행, 인터랙티브 REPL, 패키지 관리 기능 제공.

## 📦 설치 방법 (Installation)

전역으로 설치하여 언제 어디서든 사용하세요:

```bash
npm install -g krjs

```

또는 프로젝트 로컬에 의존성으로 추가:

```bash
npm install krjs

```

## 💡 사용 예시 (Usage)

`main.krjs` 파일을 생성하고 아래와 같이 코드를 작성해보세요:

```javascript
상수 fs = 가져오기('fs');

클래스 사용자 {
  생성자(이름, 나이) {
    이것.이름 = 이름;
    이것.나이 = 나이;
  }

  소개() {
    로그("안녕하세요, 제 이름은 " + 이것.이름 + "이고, 나이는 " + 이것.나이 + "살입니다.");
  }
}

비동기 함수 메인() {
  시도 {
    상수 유저 = 새로운 사용자("아사нали", 20);
    유저.소개();

    변수 숫자들 = [1, 2, 3, 4, 5];
    반복 (변수 i = 0; i < 숫자들.length; i++) {
      만약 (숫자들[i] % 2 === 0) {
        로그("짝수 (Четное): " + 숫자들[i]);
      } 아니면 {
        로그("홀수 (Нечетное): " + 숫자들[i]);
      }
    }
  } 잡기 (오류) {
    오류로그("에러 발생: " + 오류.메시지);
  }
}

메인();

```

### 실행하기

```bash
krnode main.krjs

```

### 인터랙티브 REPL 모드 실행

```bash
krnode repl

```

### NPM 패키지 설치

```bash
krnode install express

```

## 📄 라이선스 (License)

이 프로젝트는 MIT License 를 따릅니다.


## <a href="https://vscode.dev"><img src="https://code.visualstudio.com/favicon.ico" width=23></a>    VSCode 확장
https://github.com/asanaliopensource/krjs-vscode - the repostiory
