// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var List = require("rescript/lib/js/list.js");
var Caml_obj = require("rescript/lib/js/caml_obj.js");

function $$eval(_expr, _env) {
  while(true) {
    var env = _env;
    var expr = _expr;
    switch (expr.TAG | 0) {
      case /* Cst */0 :
          return expr._0;
      case /* Add */1 :
          return $$eval(expr._0, env) + $$eval(expr._1, env) | 0;
      case /* Mul */2 :
          return Math.imul($$eval(expr._0, env), $$eval(expr._1, env));
      case /* Var */3 :
          return List.assoc(expr._0, env);
      case /* Let */4 :
          _env = {
            hd: [
              expr._0,
              $$eval(expr._1, env)
            ],
            tl: env
          };
          _expr = expr._2;
          continue ;
      
    }
  };
}

var Name = {
  $$eval: $$eval
};

function $$eval$1(_expr, _env) {
  while(true) {
    var env = _env;
    var expr = _expr;
    switch (expr.TAG | 0) {
      case /* Cst */0 :
          return expr._0;
      case /* Add */1 :
          return $$eval$1(expr._0, env) + $$eval$1(expr._1, env) | 0;
      case /* Mul */2 :
          return Math.imul($$eval$1(expr._0, env), $$eval$1(expr._1, env));
      case /* Var */3 :
          return List.nth(env, expr._0);
      case /* Let */4 :
          _env = {
            hd: $$eval$1(expr._0, env),
            tl: env
          };
          _expr = expr._1;
          continue ;
      
    }
  };
}

var Nameless = {
  $$eval: $$eval$1
};

function index(cenv, x) {
  if (cenv) {
    if (Caml_obj.equal(cenv.hd, x)) {
      return 0;
    } else {
      return index(cenv.tl, x) + 1 | 0;
    }
  }
  throw {
        RE_EXN_ID: "Assert_failure",
        _1: [
          "class1.res",
          52,
          24
        ],
        Error: new Error()
      };
}

function comp(expr, cenv) {
  switch (expr.TAG | 0) {
    case /* Cst */0 :
        return {
                TAG: /* Cst */0,
                _0: expr._0
              };
    case /* Add */1 :
        return {
                TAG: /* Add */1,
                _0: comp(expr._0, cenv),
                _1: comp(expr._1, cenv)
              };
    case /* Mul */2 :
        return {
                TAG: /* Mul */2,
                _0: comp(expr._0, cenv),
                _1: comp(expr._1, cenv)
              };
    case /* Var */3 :
        return {
                TAG: /* Var */3,
                _0: index(cenv, expr._0)
              };
    case /* Let */4 :
        return {
                TAG: /* Let */4,
                _0: comp(expr._1, cenv),
                _1: comp(expr._2, {
                      hd: expr._0,
                      tl: cenv
                    })
              };
    
  }
}

var Name2Nameless = {
  index: index,
  comp: comp
};

function $$eval$2(_instrs, _stk) {
  while(true) {
    var stk = _stk;
    var instrs = _instrs;
    if (instrs) {
      var i = instrs.hd;
      if (typeof i === "number") {
        switch (i) {
          case /* Add */0 :
              if (stk) {
                var match = stk.tl;
                if (match) {
                  _stk = {
                    hd: stk.hd + match.hd | 0,
                    tl: match.tl
                  };
                  _instrs = instrs.tl;
                  continue ;
                }
                
              }
              break;
          case /* Mul */1 :
              if (stk) {
                var match$1 = stk.tl;
                if (match$1) {
                  _stk = {
                    hd: Math.imul(stk.hd, match$1.hd),
                    tl: match$1.tl
                  };
                  _instrs = instrs.tl;
                  continue ;
                }
                
              }
              break;
          case /* Pop */2 :
              if (stk) {
                _stk = stk.tl;
                _instrs = instrs.tl;
                continue ;
              }
              break;
          case /* Swap */3 :
              if (stk) {
                var match$2 = stk.tl;
                if (match$2) {
                  _stk = {
                    hd: match$2.hd,
                    tl: {
                      hd: stk.hd,
                      tl: match$2.tl
                    }
                  };
                  _instrs = instrs.tl;
                  continue ;
                }
                
              }
              break;
          
        }
      } else {
        if (i.TAG === /* Cst */0) {
          _stk = {
            hd: i._0,
            tl: stk
          };
          _instrs = instrs.tl;
          continue ;
        }
        _stk = {
          hd: List.nth(stk, i._0),
          tl: stk
        };
        _instrs = instrs.tl;
        continue ;
      }
    } else if (stk) {
      return stk.hd;
    }
    throw {
          RE_EXN_ID: "Assert_failure",
          _1: [
            "class1.res",
            95,
            15
          ],
          Error: new Error()
        };
  };
}

var StackVM = {
  $$eval: $$eval$2
};

exports.Name = Name;
exports.Nameless = Nameless;
exports.Name2Nameless = Name2Nameless;
exports.StackVM = StackVM;
/* No side effect */
