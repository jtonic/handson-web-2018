export default function () {

    console.log('============================');
    console.log('[ES6] Iterators');
    console.log('============================');

    const arr1 = [1, 2, 3];
    console.log(typeof arr1[Symbol.iterator]);
    const it = arr1[Symbol.iterator]();
    it.next();
    it.next();
    const last = it.next();
    console.log(last.value, last.done);
    console.log(it.next());

    const markerId = {
        [Symbol.iterator]() {
            let nextId = 8000;
            return {
                next() {
                    const value = nextId > 8002 ? undefined : nextId++;
                    const done = !value;
                    return {value, done};
                }
            };
        }
    };

    for (const v of markerId) {
        console.log(v);
    }
};
