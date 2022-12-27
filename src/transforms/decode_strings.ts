import * as parser from "@babel/parser";
import * as t from "@babel/types";
import traverse from "@babel/traverse";

//@ts-ignore
function _0x1e5b(_0x3c286e, _0xdf76d1) {
  var Arr = [
    "C3rHDhvZ",
    "ChjVDMLKzxjFC2vJCMv0x3b1yMXPyW",
    "Bg9HzgvUza",
    "yxbWzw5Kq2HPBgq",
    "CMvHzhLtDgf0zq",
    "yNjHBMrPBMDFDhLWzq",
    "C2nYB2XSAw5N",
    "C3bSAxq",
    "CMvZCg9UC2vuzxH0",
    "y3j5ChrV",
    "C2v0qxr0CMLIDxrL",
    "y2XVBMu",
    "C2vJlxrLEhqTy29UDgfPBMvY",
    "p2r1CMf0Aw9Upq",
    "mJK4otiXt0fhs25Y",
    "DxjS",
    "DgHLBG",
    "y2fWDgnOyv9YzxnWB25Zzq",
    "C3jJ",
    "C3r5Bgu",
    "ANnVBG",
    "Cg9ZDe1LC3nHz2u",
    "l19ZzwmVy3bFy2HHBgXLBMDLl3zLCMLMEq",
    "mtaXmJyYD0fmAMjs",
    "CMvZCg9UC2vuExbL",
    "z2v0qxr0CMLIDxrL",
    "zNjHBwvcB3jKzxi",
    "C3rHDgvFCMvZCg9UC2u",
    "yMXVy2S",
    "B3bLBG",
    "CMvHzhLZDgf0zwnOyw5Nzq",
    "CMvZCg9UC2u",
    "zMLYC3rdAgLSza",
    "AgfZt3DUuhjVCgvYDhK",
    "yNjHBMrPBMDFDxjSx2nVBNrLBNq",
    "y3jLyxrLrwXLBwvUDa",
    "BgvUz3rO",
    "C3vJy2vZCW",
    "y2XHC3m",
    "D2L0AenYzwrLBNrPywXZ",
    "CgfYC2u",
    "C2vJlwLMlwnVBNrHAw5LCG",
    "yxr0ywnOrxzLBNq",
    "z2v0rwXLBwvUDej5swq",
    "ChjVDMLKzxi",
    "y29UDgvUDfDPBMrVDW",
    "C2vUza",
    "ntzZEvblCM0",
    "ChjVDg90ExbL",
    "C2v0sxrLBq",
    "zgf0ys1OB3n0BMfTzq",
    "mJbpBNb3Bw0",
    "otzUz3rwuuW",
    "y3vZDg9Tx2jYyw5KAw5N",
    "mJbTA2XoBeC",
    "zgf0yq",
    "C2vJlwnVBNrHAw5LCG",
    "ltmToc5ODg0",
    "CMvZDwX0",
    "nte5ntm2Axzgu3Px",
    "yMXVyG",
    "zgL2",
    "zgLZCgXHEq",
    "mtCXotqZEfPbq05O",
    "BM9Uzq",
    "AwzYyw1L",
    "B2jQzwn0",
    "mJmWmZe5mxL5DvDkzG",
    "ywrKrxzLBNrmAxn0zw5LCG",
    "zNvUy3rPB24",
    "zgf0ys1RzxK",
    "C2vJlwnWlwnOywXSzw5Nzq",
    "C3rYAw5NAwz5",
    "mZG1otzTsxrPqwq",
    "y2HSz19KDxjHDgLVBG",
    "yxbWBhK",
    "zMv0y2G",
    "zgf0ys1KDxjHDgLVBG",
    "l19ZzwmVy3bFy2HHBgXLBMDLlW",
    "Aw5KzxHpzG",
    "Ag9ZDg5HBwu",
    "Dhj1zq",
    "l19ZzwmVy3bFy2HHBgXLBMDLl2fRlwnOywXSzw5Nzs0ZltGUAhrT",
    "BwvZC2fNzq",
    "r0vu",
    "C3vIC3rYAw5N",
    "C2vJlwnWDc1PzG",
    "mteXotzqCgTkEey",
  ];
  return (
    //@ts-ignore
    (_0x1e5b = function (_0x3c286e, _0xdf76d1) {
      _0x3c286e = _0x3c286e - 0x1d3;
      var _0x53d967 = Arr[_0x3c286e];
      //@ts-ignore
      if (_0x1e5b["ocrXjs"] === undefined) {
        //@ts-ignore
        var decodeString = function (_0x1c6a14) {
          var _0x50cfb1 =
            "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
          var _0x84b94c = "",
            _0x34f884 = "";
          for (
            var _0x3a3d34 = 0x0, _0x328579, _0x5432c0, _0x1c6a81 = 0x0;
            (_0x5432c0 = _0x1c6a14["charAt"](_0x1c6a81++));
            ~_0x5432c0 &&
            ((_0x328579 =
              //@ts-ignore
              _0x3a3d34 % 0x4 ? _0x328579 * 0x40 + _0x5432c0 : _0x5432c0),
            _0x3a3d34++ % 0x4)
              ? (_0x84b94c += String["fromCharCode"](
                  0xff & (_0x328579 >> ((-0x2 * _0x3a3d34) & 0x6))
                ))
              : 0x0
          ) {
            _0x5432c0 = _0x50cfb1["indexOf"](_0x5432c0);
          }
          for (
            var _0x504cb0 = 0x0, _0x158951 = _0x84b94c["length"];
            _0x504cb0 < _0x158951;
            _0x504cb0++
          ) {
            _0x34f884 +=
              "%" +
              ("00" + _0x84b94c["charCodeAt"](_0x504cb0)["toString"](0x10))[
                "slice"
              ](-0x2);
          }
          return decodeURIComponent(_0x34f884);
        };
        //@ts-ignore
        (_0x1e5b["LGJlZJ"] = decodeString), (_0x3c286e = arguments);
        //@ts-ignore
        //(_0x1e5b["ocrXjs"] = !![]);
      }
      var _0x197546 = Arr[0x0],
        _0x4fcdf1 = _0x3c286e + _0x197546,
        _0x54205e = _0x3c286e[_0x4fcdf1];
      return (
        !_0x54205e
          ? //@ts-ignore
            ((_0x53d967 = _0x1e5b["LGJlZJ"](_0x53d967)),
            (_0x3c286e[_0x4fcdf1] = _0x53d967))
          : (_0x53d967 = _0x54205e),
        _0x53d967
      );
    }),
    _0x1e5b(_0x3c286e, _0xdf76d1)
  );
}

export function decodeString(ast: parser.ParseResult<t.File>) {
  doShit(ast, "_0x1e5b");
}

function doShit(ast: parser.ParseResult<t.File>, name: string) {
  traverse(ast, {
    VariableDeclarator(path) {
      if (t.isIdentifier(path.node.init)) {
        if (path.node.init.name === name) {
          if (t.isIdentifier(path.node.id)) {
            const variableName = path.node.id.name;
            path.scope
              .getBinding(variableName)
              ?.referencePaths.forEach((ref) => {
                if (ref.parentPath) {
                  //   console.log(generate(ref.parentPath.node).code);
                  // case if proxy
                  doShit(ast, variableName);
                  // case if function call
                  if (t.isCallExpression(ref.parentPath.node)) {
                    if (t.isNumericLiteral(ref.parentPath.node.arguments[0])) {
                      ref.parentPath.replaceWith(
                        t.stringLiteral(
                          _0x1e5b(ref.parentPath.node.arguments[0].value, "")
                        )
                      );
                    }
                  }
                }
              });
          }
        }
      }
    },
  });
}
