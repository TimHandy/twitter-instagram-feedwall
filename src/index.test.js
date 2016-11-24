let assert = require('assert')
let model = require('./index.js')

//console.log(model.shuffle([1,2,3]))

describe('Shuffle()', function() {
    let shuffled = model.shuffle([1, 2, 3, 4])

    it('should return an array', function() {
        assert( Array.isArray(shuffled), 'is not an array')
        // assert.notDeepEqual(model.shuffle([1, 2, 3, 4]), [1, 2, 3, 4])  // not a valid test
    })

    it('should return a shuffled array', function() {
        assert( Array.isArray(shuffled), 'is not an array')
        assert.equal(shuffled.length, 4, 'is not the correct length')
        assert.deepEqual(shuffled.sort(), [1, 2, 3, 4], 'array elements are not the same')
    })
})
