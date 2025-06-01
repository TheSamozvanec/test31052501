function rad(deg) { return (Math.PI / 180) * deg; }
;
export let getRotate = function ({ x, y }, deg) {
    let l = Math.sqrt(x ** 2 + y ** 2);
    let cos = l == 0 ? 1 : x / l;
    let deg0 = y < 0 ? Math.acos(cos) * -1 : Math.acos(cos);
    let degI = deg0 + rad(deg);
    let res = {
        x: l * Math.cos(degI),
        y: l * Math.sin(degI)
    };
    return res;
};
export let user001 = {
    name: 'Olya',
    login: 'Olala',
    age: 20,
    level: 'medium',
    greeting: 'Comrade, who are you?'
};
