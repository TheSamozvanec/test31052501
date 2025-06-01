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