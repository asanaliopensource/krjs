const { KOREAN_KEYWORDS } = require('./korean');
const SyntaxAnalyzer = require('./syntax');

class SyntaxParser {
  static preprocess(code) {
    const tokenRegex = /(\/\/[^\n]*|\/\*[\s\S]*?\*\/|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`|[\u3131-\uD79D\w]+|[^\s\w\u3131-\uD79D]+)/g;

    return code.replace(tokenRegex, (match) => {
      if (
        match.startsWith('//') ||
        match.startsWith('/*') ||
        match.startsWith('"') ||
        match.startsWith("'") ||
        match.startsWith('`')
      ) {
        return match;
      }

      if (SyntaxAnalyzer.isKeyword(match)) {
        return KOREAN_KEYWORDS[match];
      }

      return match;
    });
  }
}

module.exports = SyntaxParser;