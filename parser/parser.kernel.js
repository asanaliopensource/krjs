const generate = require('@babel/generator').default;
const SyntaxParser = require('../Syntax/parser');
const ASTParser = require('../ast/parser');

class ParserKernel {
  static compile(krCode, filename = 'main.krjs') {
    const preprocessedJs = SyntaxParser.preprocess(krCode);

    const babelAST = ASTParser.parseToBabelAST(preprocessedJs);

    const output = generate(
      babelAST,
      {
        sourceMaps: true,
        sourceFileName: filename,
        retainLines: true
      },
      krCode
    );

    return {
      code: output.code,
      map: output.map,
      ast: babelAST
    };
  }
}

module.exports = ParserKernel;