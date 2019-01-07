function exec() {

    console.log('============================');
    console.log('Try catch throw finally');
    console.log('============================');

    try {
        const url = location.href;
        console.log(url);
        throw new Error("Thrown by jtonic...");
    } catch (e) {
        console.log(`Caught error ${e}`);
    } finally {
        console.log(`always executed`);
    }
}

export default exec;

