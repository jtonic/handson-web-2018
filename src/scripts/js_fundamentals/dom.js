function exec() {

    console.log('============================');
    console.log('DOM (document object model)');
    console.log('============================');

    const f = document.getElementById('first');
    console.log(f);
    const els = document.getElementsByClassName('ps');
    console.log(els);
    console.log(els[1]);

    const ps = document.getElementsByTagName('p');
    console.log(ps);
    console.log(ps[2]);

    f.textContent = 'First paragraph modified';
    f.setAttribute('att1', 'att1 value');
    f.classList.add('ps2');
    f.style.color = 'blue';
    console.log(f);
}

export default exec;
