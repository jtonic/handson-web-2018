console.log('============================');
console.log('array destruction');
console.log('============================');

function exec() {

  let fn = new Function('amount = 1000', "console.log('dynamic function', amount);");
  fn();
}

export default exec;
