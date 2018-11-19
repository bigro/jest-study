const fetch = require("node-fetch");

const host = 'to be specified';
const realm = 'to be specified';
const userName = 'to be specified';
const pass = 'to be specified';
const clientSecret = 'to be specified';

test('Keycloakで認証できる', async () => {
    const res = await fetch(host + '/auth/realms/' + realm + '/protocol/openid-connect/token', {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: 'client_id=' + realm +
            '&client_secret=' + clientSecret +
            '&username=' + userName +
            '&password=' + pass +
            '&grant_type=password'
    });

    const json = await res.json();

    console.log(json.access_token);
});


