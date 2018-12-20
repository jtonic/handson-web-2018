function exec() {

  console.log('============================');
  console.log('BOM (browser object model)');
  console.log('============================');

  let xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      let respose = this.responseText;
      let rObj = JSON.parse(respose);
      console.log(rObj);
    }
  };
  xhttp.open("GET",
      "http://5c1a57c81bf6300013c7df9b.mockapi.io/jtonic/api/v1/users");
  xhttp.send();
}

export default exec;
