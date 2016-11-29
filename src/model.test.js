//let assert = require('assert')
import { expect } from 'chai'
const model = require('./index.js')

//console.log(model.shuffle([1,2,3]))

console.log('model: ', model)

describe('model', function() {
    describe('getJson function', function() {

        it('should retrieve json data from a source file', function() {
            const source = './posts.json'
            console.log(source)

            expect( model.getJson() ).to.be.a('object')
            // assert.notDeepEqual(model.shuffle([1, 2, 3, 4]), [1, 2, 3, 4])  // not a valid test
        })

    })
})

