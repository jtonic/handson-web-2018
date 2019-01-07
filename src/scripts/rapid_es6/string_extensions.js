export default function () {

    console.log('============================');
    console.log('String extensions');
    console.log('============================');

    const a1 = "jtonic is \u{1f3c4} quite bad";
    console.log(a1);
    const a2 = "\u{1f30a}\u{1f3c4}\u{1f40b}";
    console.log(a2, Array.from(a2).length);

    const city = "Gal\u{0301}ti";
    console.log(city, city.normalize().length);

    const surfer = String.raw `Surfer \u{1f3c4}\n`;
    console.log(surfer);
    const surfer2 = String.fromCodePoint(0x1f3c4);
    console.log(surfer2);

    const wave = "\u{1f30a}";
    console.log(wave.repeat(10));
};
