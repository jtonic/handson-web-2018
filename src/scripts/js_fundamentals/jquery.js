import $ from 'jquery';

function exec() {

    console.log('============================');
    console.log('jquery');
    console.log('============================');

    const data = {
        name: 'Liviu',
        avatar: 'liviu.jpeg'
    };

    const promisePost = $.post('http://5c1a57c81bf6300013c7df9b.mockapi.io/jtonic/api/v1/users', data);
    promisePost.then(
        (data) => console.log(data),
        (err) => console.log(err)
    );


    const promise = $.get(
        'http://5c1a57c81bf6300013c7df9b.mockapi.io/jtonic/api/v1/users');
    promise.then(
        (data) => {
            console.log(`jquery get: ${data}`);
        },
        (err) => console.log(err)
    );
}

export default exec;
