'use strict'

const $ = require('jquery')

const model = {
    
    getJson: function(source, callback) {
        $.getJSON(source, function(data) {
            console.log('data :', data)
            model.jsonData = data
            console.log('model jsonData: ', model.jsonData)
            if (callback) {
                callback()
            }
        })
    },

    dateSort: function(jsonData) {
        let sorted = jsonData.items.sort((postA, postB) => {
            const postADate = new Date(postA.item_created)
            const postBDate = new Date(postB.item_created)
            return postBDate - postADate
        })
        // just used to verify correct ordering, newest first
        sorted.forEach(function(item) {
            console.log(item.item_created)
        })
        return sorted
    }
}

module.exports = model
