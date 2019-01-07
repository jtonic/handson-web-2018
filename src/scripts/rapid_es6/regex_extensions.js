export default function () {

    console.log('============================');
    console.log('[ES6] RegEx extensions');
    console.log('============================');

    console.log("\u{1f3c4}");
    const pattern1 = /\u{1f3c4}/;
    const pattern2 = /\u{1f3c4}/u;
    console.log(pattern1.test('🏄'));
    console.log(pattern2.test('🏄'));

    const pattern3 = /^.surfer/;
    const pattern4 = /^.surfer/u;
    console.log(pattern3.test('🏄surfer'));
    console.log(pattern4.test('🏄surfer'));

    const pattern5 = /900/y;
    console.log(pattern5.lastIndex);
    console.log(pattern5.test('800900'));
    pattern5.lastIndex = 3;
    console.log(pattern5.test('800900'));
    console.log(pattern5.flags);
}
