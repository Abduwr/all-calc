// Recursive descent parser; no eval or dynamic code execution.
export function calculate(source){
 const tokens=source.match(/(?:\d+\.?\d*|\.\d+)(?:e[+-]?\d+)?|[a-z]+|[+\-*/^()]|\S/gi)||[];
 if(tokens.length>200)throw Error('Expression too long');
 let i=0; const peek=()=>tokens[i]; const take=()=>tokens[i++];
 const functions={sin:x=>Math.sin(x*Math.PI/180),cos:x=>Math.cos(x*Math.PI/180),tan:x=>Math.abs(Math.cos(x*Math.PI/180))<1e-12?NaN:Math.tan(x*Math.PI/180),sqrt:Math.sqrt,log:Math.log10,ln:Math.log,abs:Math.abs};
 function primary(){const t=take();if(t==='('){const x=sum();if(take()!==')')throw Error('Expected closing parenthesis');return x;}if(t==='pi')return Math.PI;if(t==='e')return Math.E;if(Object.hasOwn(functions,t)){if(take()!=='(')throw Error('Expected opening parenthesis');const x=sum();if(take()!==')')throw Error('Expected closing parenthesis');return functions[t](x);}if(t&&/^(?:\d|\.)/.test(t)&&Number.isFinite(Number(t)))return Number(t);throw Error('Invalid expression');}
 function power(){const x=primary();return peek()==='^'?(take(),x**unary()):x;}
 function unary(){if(peek()==='+'){take();return unary();}if(peek()==='-'){take();return -unary();}return power();}
 function product(){let x=unary();while(peek()==='*'||peek()==='/'){const op=take(),y=unary();x=op==='*'?x*y:x/y;}return x;}
 function sum(){let x=product();while(peek()==='+'||peek()==='-'){const op=take(),y=product();x=op==='+'?x+y:x-y;}return x;}
 const x=sum();if(i!==tokens.length)throw Error('Unexpected token');if(!Number.isFinite(x))throw Error('Result is undefined or out of range');return x;
}
export function percentage(p,n){return p*n/100;}
const units={m:1,km:1000,cm:.01,mm:.001,in:.0254,ft:.3048,mi:1609.344};
export function convert(n,from,to){if(!Object.hasOwn(units,from)||!Object.hasOwn(units,to))throw Error('Unknown unit');return n*units[from]/units[to];}
export function solve(a,b,c){return a===0?(b===c?'Infinitely many solutions':'No solution'):(c-b)/a;}
