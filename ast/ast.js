class ASTNode {
  constructor(type, value = null, children = []) {
    this.type = type;
    this.value = value;
    this.children = children;
    this.loc = null;
  }

  setLoc(line, column) {
    this.loc = { line, column };
    return this;
  }
}

class ProgramNode extends ASTNode {
  constructor() {
    super('Program');
  }
}

module.exports = { ASTNode, ProgramNode };