const fetch = require('node-fetch')

const url = 'http://localhost:5000/users'

describe('GET /users', function() {
    let response 

    beforeAll(async function () {
        response = await fetch( url + '/5f87bc3f025bf904ead3468d', {
            method: 'GET'
        })
    });

    it('should be STATUS 200', async function() {
        console.log(await response.body.name);
        
        expect(await response.status).toBe(200);
    });

    // it('should say Hello World!', () => {
    //     expect(response.body.username).toBe('Hello World!');
    // });
});
