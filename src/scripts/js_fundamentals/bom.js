function exec() {

    console.log('============================');
    console.log('BOM (browser object model)');
    console.log('============================');

    window.year = 1970;
    window.authorName = 'jtonic';
    console.log(`${window.innerWidth}: ${window.innerHeight}`);
    console.log(`${window.authorName}, ${window.year}`);

    console.log(`${location.href}, ${location.protocol}, ${location.port}, ${location.hostname}, ${location.pathname}, ${location.search}`);

    const interval = setInterval(function () {
        console.log("1 sec passed!!!");
    }, 1000);

    setTimeout(function () {
        clearInterval(interval);
    }, 3100);

    // alert("This is an alert message!!")
}

export default exec;
