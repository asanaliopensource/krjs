const babelParser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const t = require('@babel/types');
const { KOREAN_GLOBALS } = require('../Syntax/korean');

class ASTParser {
  static parseToBabelAST(jsCode) {
    const ast = babelParser.parse(jsCode, {
      sourceType: 'module',
      allowReturnOutsideFunction: true,
      plugins: ['asyncGenerators', 'classProperties', 'dynamicImport']
    });

    // Трансформация глобальных корейских идентификаторов (например: 로그 -> console.log)
    traverse(ast, {
      Identifier(path) {
        const name = path.node.name;
        if (KOREAN_GLOBALS[name]) {
          const target = KOREAN_GLOBALS[name];
          if (target.includes('.')) {
            const [obj, prop] = target.split('.');
            path.replaceWith(
              t.memberExpression(t.identifier(obj), t.identifier(prop))
            );
          } else {
            path.replaceWith(t.identifier(target));
          }
        }
      }
    });

    return ast;
  }
}

module.exports = ASTParser;