function exec() {

    console.log('============================');
    console.log("Conversions");
    console.log('============================');

    let n1 = Number.parseInt('123');
    let n2 = Number.parseInt('20ABC');
    let n3 = Number.parseInt('X20ABC');
    console.log(n1, n2, n3);
    console.log(typeof (n1));
    let s1 = (1 / 0).toString();
    console.log(s1, typeof (s1));

    let s2 = n1.toString();
    console.log(typeof (s2), s2);
}

export default exec;

