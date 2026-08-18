const { KOREAN_KEYWORDS, KOREAN_GLOBALS } = require('./korean');

class SyntaxAnalyzer {
  static isKeyword(word) {
    return Object.prototype.hasOwnProperty.call(KOREAN_KEYWORDS, word);
  }

  static isGlobal(word) {
    return Object.prototype.hasOwnProperty.call(KOREAN_GLOBALS, word);
  }

  static escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
}

module.exports = SyntaxAnalyzer;