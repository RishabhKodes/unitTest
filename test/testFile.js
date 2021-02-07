const assert = require('chai').assert;
const app = require('../app');

//writing a test
describe('App', function(){
    it('should return object', function(){
        assert.equal(app({
            "2020-01-01":4,
            "2020-01-02":4,
            "2020-01-03":6,
            "2020-01-04":8,
            "2020-01-05":2,
            "2020-01-06":-6,
            "2020-01-07":2,
            "2020-01-08":-2
        }), {
            Wednesday: 2,
            Thursday: 4,
            Friday: 6,
            Saturday: 8,
            Sunday: 2,
            Monday: -6,
            Tuesday: 2
          });
    })
})