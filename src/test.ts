//test file
console.log("hello!");
//пример создания интерфейса
// сам интерфейс не компилируется в JS, но объекты созданные по типу интерфейса будут проверяться в TS
// на соответствие всех обязательных ключей и типов данных
interface IUser {
   name:string;
   login:string;
   level:'junior'|'medium'|'profi'; 
   age:number;
   target?:string; //необязательный ключ
   greeting?:string; //необязательный ключ
}
// объект созданный при помощи интерфейса
// любое несоотвеетствие типов данных объявленных в интерфейсе приведет к ошибке
// отсутствие обязательных полей (ключей) также приведет к ошибке
let user01:IUser={
    name:'Ivan',
    login:'Vantuz',
    level:'junior',
    target:'GAME',
    age:15
}
// просто объект. После создания объекта в TS невозможно присвоить объявленному имени
// объект с иной структурой данных, включая типы и состав.
let obj={a:10,b:20,c:15}
// obj={a:'a',b:0,c:0};// - данная операция приведет к ошибке, в ключе a не должно быть строки
// obj={a:0,b:0};// - данная операция приведет к ошибке, отсутствует ключ "с"
// obj.a='a';// - здесь тоже ошибка при попытке изменения данных в ключе "a", 
            // в ключь а было переано значение number и тип данных определен именно number
obj.b=35; // допустимое действие
let i:keyof IUser; // данная запись необходима для использования i в качестве индекса 
for (i in user01){
    console.log(i+':'+user01[i]);
}
for (let n in user01){
    console.log(n);
    //console.log(user01[n]); // в данном случае это будет ошибка, так как тип "n" не объявлен ключом "user01"
}
type fnstr = (x:number,y:number) => string; // определение типа функции 
let fn1:fnstr = function(x,y){
    let str:string=String(x*y);
    let res:number=0;
    for (let i=0;i<str.length;i++){
        res+=Number(str[i]);
    }
    return String(res)
}
// определение типов возможно в момент деклорирования функции
function square(x:number):number{ // function name(arg1:type, arg2:type):typeres{return res}
    return x**2;
}
// функция без результата, необходимо указывать тип ":void"
function privet():void{
    console.log('Привет!');
}
console.log(fn1(124,83));
// test new commit