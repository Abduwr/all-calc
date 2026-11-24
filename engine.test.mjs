import test from 'node:test';
import assert from 'node:assert/strict';
import {calculate,percentage,convert,solve} from './engine.mjs';
test('precedence and parentheses',()=>{assert.equal(calculate('2+3*4'),14);assert.equal(calculate('(2+3)*4'),20);});
test('powers and unary signs',()=>{assert.equal(calculate('2^3^2'),512);assert.equal(calculate('-2^2'),-4);assert.equal(calculate('2^-2'),.25);});
test('scientific functions',()=>{assert.ok(Math.abs(calculate('sin(30)')-.5)<1e-12);assert.equal(calculate('sqrt(81)+log(100)'),11);});
test('invalid expressions',()=>{for(const s of ['1/0','sqrt(-1)','2+','2 3','alert(1)','tan(90)'])assert.throws(()=>calculate(s));});
test('utilities',()=>{assert.equal(percentage(15,200),30);assert.equal(convert(1,'km','m'),1000);assert.equal(solve(2,3,7),2);assert.equal(solve(0,1,2),'No solution');assert.equal(solve(0,2,2),'Infinitely many solutions');});
