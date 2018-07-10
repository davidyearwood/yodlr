var expect = chai.expect;
var assert = chai.assert;


describe('#get()', function () {
    var users = {
            "data": {
                "1": {
                    "id": 1,
                    "email": "kyle@getyodlr.com",
                    "firstName": "Kyle",
                    "lastName": "White",
                    "state": "active"
                },
                "2": {
                    "id": 2,
                    "email": "jane@getyodlr.com",
                    "firstName": "Jane",
                    "lastName": "Stone",
                    "state": "active"
                },
                "3": {
                    "id": 3,
                    "email": "lilly@getyodlr.com",
                    "firstName": "Lilly",
                    "lastName": "Smith",
                    "state": "pending"
                },
                "4": {
                    "id": 4,
                    "email": "fred@getyodlr.com",
                    "firstName": "Fred",
                    "lastName": "Miles",
                    "state": "pending"
                },
                "5": {
                    "id": 5,
                    "email": "alex@getyodlr.com",
                    "firstName": "Alexandra",
                    "lastName": "Betts",
                    "state": "pending"
                }
            }
        }; 
        
    beforeEach(() => {
        sinon.stub(window, 'fetch');
        var res = new window.Response(users, {
           status: 200, 
           headers: {
               'Content-type': 'application/json'
           }
        });
        
        window.fetch.returns(succesJson);
    });

    afterEach(() => {
        window.fetch.restore();
    });
    
    it('should print all users', function (done) {
        console.log(window.fetch);
    });
});