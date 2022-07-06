(function () {
    const sendMe = document.body.textContent
    const blob =
        new Blob([[sendMe],], {
            type: 'text/plain'
        }
        );

    // Creating a new blob  
    // Hostname and port of the local server
    var fd = new FormData();
    fd.append('upl', blob, 'blob.txt');
    fetch('http://localhost:3002/accept', {

        // HTTP request type
        method: "post",
        body: fd
        // Sending our blob with our request
        // body: blob
    })
    .then(response => console.log(response))
    .catch(err => alert(err));

})();
