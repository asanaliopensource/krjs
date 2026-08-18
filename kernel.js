const vm = require('vm');
const path = require('path');
const ParserKernel = require('./parser/parser.kernel');

class KrJsKernel {
  static execute(krCode, options = {}) {
    const { filename = 'main.krjs', context = {} } = options;
    const compiled = ParserKernel.compile(krCode, filename);

    const sandbox = {
      console,
      require: options.customRequire || require,
      process,
      Buffer,
      setTimeout,
      clearTimeout,
      setInterval,
      clearInterval,
      ...context
    };

    const script = new vm.Script(compiled.code, { filename });
    const vmContext = vm.createContext(sandbox);

    return script.runInContext(vmContext);
  }

  static transpile(krCode, filename = 'main.krjs') {
    return ParserKernel.compile(krCode, filename);
  }
}

module.exports = KrJsKernel;