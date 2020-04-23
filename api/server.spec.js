const request = require('supertest');

const server = require('./server.js');

describe('server', function () {
    describe('/', function () {
        it('should return 200 OK', function () {
            // make a GET request to the '/' endpoint on the server
            request(server)
            .get('/')
            .then(res => {
                // assert that the HTTP status code is 200
                expect(res.status).toBe(200);
            });
        });

        describe('Post /hobbits', function () {
            it.todo("return 201 on success");
            it.todo("add the hobbit to the db");
            it.todo('should return a message saying "Hobbit created successfully!"');
        });
    });
});