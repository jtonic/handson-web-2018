import $ from 'jquery';

function exec() {

  console.log('============================');
  console.log('html form');
  console.log('============================');

  let form = document.getElementById('user-form');

  let user = document.getElementById('user');
  let userError = document.getElementById('user-error');
  user.style.borderColor = 'black';
  let userAvatar = document.getElementById('user-avatar-name');
  userAvatar.style.borderColor = 'black';


  form.addEventListener('submit', (ev) => {


    let userNameValue = form.elements[0].value;
    let userAvatarValue = form.elements[1].value;

    if (userNameValue.length < 4) {
      userError.style.color = 'red';
      userError.textContent = 'User name is invalid';
      user.style.borderColor = 'red';
      user.focus();
    } else {
      userError.style.color = 'none';
      userError.textContent = '';
      user.style.borderColor = 'black';

      let data = {
        name: userNameValue,
        avatar: userAvatarValue
      };

      let postPromise = $.post('http://5c1a57c81bf6300013c7df9b.mockapi.io/jtonic/api/v1/users', data);
      postPromise.then(
          (data) => console.log(`Data has been published ${data}`),
          (err) => console.log(`An error occurred while posting data to server ${err}`)
      );
    }

    ev.preventDefault();
  });
}

export default exec;

