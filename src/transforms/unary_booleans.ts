import * as parser from "@babel/parser";
import * as t from "@babel/types";
import traverse from "@babel/traverse";

export function unaryBooleans(ast: parser.ParseResult<t.File>) {
  traverse(ast, {
    UnaryExpression(path) {
      if (
        path.node.operator === "void" &&
        path.node.argument.type === "NumericLiteral"
      ) {
        path.replaceWith(t.identifier("undefined"));
      }

      if (
        path.node.operator === "!" &&
        path.node.argument.type === "NumericLiteral"
      ) {
        if (path.node.argument.value === 0) {
          path.replaceWith(t.booleanLiteral(true));
        } else {
          path.replaceWith(t.booleanLiteral(false));
        }
      }
    },
  });
}
