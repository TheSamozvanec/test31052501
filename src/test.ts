//test file
console.log("hello!");
interface IUser {
   name:string;
   login:string;
   level:'junior'|'medium'|'profi'; 
   age:number;
   target?:string;
   greeting?:string;
}
let user01:IUser={
    name:'Ivan',
    login:'Vantuz',
    level:'junior',
    target:'GAME',
    age:15
}
let obj={a:10,b:20,c:15}
let i:keyof IUser;
for (i in user01){
    console.log(i+':'+user01[i]);
}
type fnstr = (x:number,y:number) => string;
let fn1:fnstr = function(x,y){
    let str:string=String(x*y);
    let res:number=0;
    for (let i=0;i<str.length;i++){
        res+=Number(str[i]);
    }
    return String(res)
}
console.log(fn1(124,83));
// test new commit