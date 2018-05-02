function sendMail() {
    $.ajax({
        type: 'POST',
        url: 'https://mandrillapp.com/api/1.0/messages/send.json',
        data: {
            'key': '567439078f620b993722fd4b957dcd3f-us18',
            'message': {
                'from_email': '9150108@eseig.ipp.pt',
                'to': [{
                    'email': 'RECIPIENT@EMAIL.HERE',
                    'name': 'RECIPIENT NAME (OPTIONAL)',
                    'type': 'to'
                }],
                'autotext': 'true',
                'subject': 'YOUR SUBJECT HERE!',
                'html': 'YOUR EMAIL CONTENT HERE! YOU CAN USE HTML!'
            }
        }
    }).done(function (response) {
        console.log(response); // if you're into that sorta thing
    });
}