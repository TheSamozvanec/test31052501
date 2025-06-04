import { getRotate,koord, user001 } from "./modules";

console.log(user001);
let plot:koord={
    x:500,
    y:0
}
let div=document.querySelector('div'),
    bt=document.querySelector('button'),
    can=document.querySelector('canvas'),
    ctx=can?.getContext('2d'),
    deg:number=0,
    usKey:keyof IUser;
for (usKey in user001){
 if(div){
    div.innerHTML+=usKey+': '+user001[usKey]+'<br>'
 }
    }
//console.log(ctx);
if(ctx)console.log('y!!!');
if(ctx){
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(plot.x,plot.y);
    ctx.strokeStyle='red';
    ctx.lineWidth=3;
    ctx.stroke();
}
bt?.addEventListener('click',function(ev){
   if(ctx){
    deg=deg<90? deg+5:deg-89;
    let plot1=getRotate(plot,deg);
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(plot1.x,plot1.y);
    ctx.strokeStyle='red';
    ctx.lineWidth=3;
    ctx.stroke();
} 
} )
div?.addEventListener('mouseover', function(ev){
    div.classList.add('tog')
});
div?.addEventListener('mouseout' , function(ev){
    div.classList.remove('tog')
});
div?.addEventListener('click',function(ev){
    div.classList.toggle('color')
});
let div01=document.createElement('div');
div01.style.position='relative';
div01.textContent='div'
div01.style.top='300px';
div01.style.left='600px';
document.body.appendChild(div01);
// test 
let peremennaya:number=1000;
// это тест
console.log(peremennaya);
type fn2= (n:number,m:number)=>number;
let fn20:fn2= function(n,m){return n+m};
console.log(fn20(peremennaya,150));
