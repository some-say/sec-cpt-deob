import * as parser from "@babel/parser";
import * as t from "@babel/types";
import traverse from "@babel/traverse";
import generate from "@babel/generator";

export function unrollSequence(ast: parser.ParseResult<t.File>) {
  traverse(ast, {
    SequenceExpression(path) {
      if (t.isExpressionStatement(path.parentPath.node)) {
        path.parentPath.replaceWithMultiple(path.node.expressions);
      }
      if (t.isIfStatement(path.parentPath.node)) {
        // path.parentPath.replaceWithMultiple(path.node.expressions);
        let nonConditionals = path.node.expressions.slice(0, -1);
        for (const expression of nonConditionals) {
          path.parentPath.insertBefore(expression);
        }
        path.parentPath.node.test = path.node.expressions.slice(-1)[0];
      }
    },
  });
}
