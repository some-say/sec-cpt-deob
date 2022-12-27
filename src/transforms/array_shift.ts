import * as parser from "@babel/parser";
import * as t from "@babel/types";
import traverse from "@babel/traverse";
import generate from "@babel/generator";
const vm = require("node:vm");

export function shiftArray(ast: parser.ParseResult<t.File>) {
  traverse(ast, {
    WhileStatement(path) {
      const parent = path.findParent((path) => path.isExpressionStatement());
      if (parent) {
        console.log(generate(parent.node).code);
      }
    },
  });
}
