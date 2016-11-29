'use strict'

import model from './model.js'
import view from './view.js'
const posts = require('./posts.json')

const controller = {

    init: function() {
        model.getJson(posts, function() {
            console.log('got here')
            console.log(model.jsonData)
            model.dateSort(model.jsonData)
            view.renderCards(model.jsonData)
        })
    }
}

module.exports = controller
