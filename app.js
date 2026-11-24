import {calculate,percentage,convert,solve} from './engine.mjs';
const $=id=>document.getElementById(id);
const format=x=>typeof x==='number'?Number.isFinite(x)?String(Number(x.toPrecision(12))):'Result out of range':x;
const number=id=>{const x=$(id).valueAsNumber;if(!Number.isFinite(x))throw Error('Enter valid numbers');return x;};
const run=(id,fn)=>{try{$(id).textContent=format(fn());}catch(e){$(id).textContent=e.message;}};
for(const key of ['7','8','9','/','4','5','6','*','1','2','3','-','0','.','^','+','(',')','pi','e','sin(','cos(','tan(','sqrt(','log(','ln(','abs(','⌫']){const b=document.createElement('button');b.textContent=key;b.addEventListener('click',()=>{const input=$('expr');input.value=key==='⌫'?input.value.slice(0,-1):input.value+key;input.focus();});$('keys').append(b);}
function compute(){run('result',()=>{const x=calculate($('expr').value.trim().toLowerCase());const li=document.createElement('li');li.textContent=$('expr').value+' = '+format(x);$('history').prepend(li);if($('history').children.length>10)$('history').lastChild.remove();return x;});}
$('calculate').onclick=compute;$('expr').addEventListener('keydown',e=>{if(e.key==='Enter')compute();});$('clear').onclick=()=>{$('expr').value='';$('result').textContent='0';};
$('pct').onclick=()=>run('pctout',()=>percentage(number('percent'),number('base')));
$('convert').onclick=()=>run('conversion',()=>convert(number('amount'),$('from').value,$('to').value));
$('solve').onclick=()=>run('solution',()=>solve(number('a'),number('b'),number('c')));
$('theme').onclick=()=>document.body.classList.toggle('dark');
