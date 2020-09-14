let chai = require('chai');
let chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);
let app = require('../api');

describe('Weather data', () => {
    describe('/GET', () => {
     it('It should get all the weather data', (done) => {
        chai.request(app)
            .get('/')
                .end((err, res) => {
                    (res).should.have.status(200);
                    (res.body).should.be.a('object');
                  
                    done();
                });
            })
        })
    })