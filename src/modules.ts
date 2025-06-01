interface IUser {
   name:string;
   login:string;
   level:'junior'|'medium'|'profi'; 
   age:number;
   target?:string; //необязательный ключ
   greeting?:string; //необязательный ключ
}
export interface koord{
    x:number,
    y:number
}
type degFn = (obj:koord,deg:number)=>koord;
function rad(deg:number):number{return (Math.PI/180)*deg};
export let getRotate:degFn = function({x,y},deg){
  let l:number=Math.sqrt(x**2+y**2);
  let cos:number=l==0? 1: x/l;
  let deg0:number=y<0? Math.acos(cos)*-1:Math.acos(cos);
  let degI:number=deg0+rad(deg);
  let res:koord={
    x:l*Math.cos(degI),
    y:l*Math.sin(degI)
  }
  return res;
}
export let user001:IUser={
    name:'Olya',
    login:'Olala',
    age:20,
    level:'medium',
    greeting:'Comrade, who are you?'
}
