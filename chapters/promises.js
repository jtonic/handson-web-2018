function exec() {
  console.log('============================');
  console.log('Promises');
  console.log('============================');

  let promise = new Promise(function (resolve, reject) {
    setTimeout(resolve, 500, 'value');
    // setTimeout(reject, 500, 'value');
  });

  promise.then(
      (v) => console.log(`On success the value is '${v}'`),
      (e) => console.log(`On reject the value is '${e}'`)
  );
}

export default exec;
