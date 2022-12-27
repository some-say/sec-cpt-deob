import * as parser from "@babel/parser";
import * as t from "@babel/types";
import traverse from "@babel/traverse";

export function unwrapTernary(ast: parser.ParseResult<t.File>) {
  traverse(ast, {
    ConditionalExpression(path) {
      if (t.isReturnStatement(path.parentPath.node)) {
        const test = path.node.test;
        const consequent = path.get("consequent");
        const alternate = path.get("alternate");

        // Replace the ternary with an if statement
        path.parentPath.replaceWith(
          t.ifStatement(
            test,
            t.blockStatement([t.returnStatement(consequent.node)]),
            t.blockStatement([t.returnStatement(alternate.node)])
          )
        );
      }
      if (t.isExpressionStatement(path.parentPath.node)) {
        const test = path.node.test;
        const consequent = path.get("consequent");
        const alternate = path.get("alternate");

        // Replace the ternary with an if statement
        path.parentPath.replaceWith(
          t.ifStatement(
            test,
            t.blockStatement([t.expressionStatement(consequent.node)]),
            t.blockStatement([t.expressionStatement(alternate.node)])
          )
        );
      }
    },
  });
}
