'use strict'

let $ = require('jquery')
require('./style.css')
const posts = require('./posts.json')
//require('file-loader')
const Mustache = require('mustache')

const controller = {

    init: function() {
        model.getJson(posts, function() {
            console.log('got here')
            console.log(model.jsonData)
            model.dateSort(model.jsonData)
            view.renderCards(model.jsonData)
        })
    },
    // these build* functions should go in the view
    buildManual: function(image, text, url, linkText) {
        const view = {text: text, image: image, url: url, linkText: linkText}
        const manualCard = document.getElementById('manualCard').innerHTML
        $('#cards').append(Mustache.render(manualCard, view))
    }
}


const view = {
    renderCards: function(jsonData, startPostsIndex = 0) {
        
        let endPost = Math.min(jsonData.items.length, (startPostsIndex + 10))
        
        for (let i = startPostsIndex; i < endPost; i++) {
            
            const jsonItems = jsonData.items
            const text = jsonItems[i].item_data.text
            const image = jsonItems[i].item_data.image_url
            const url = jsonItems[i].item_data.link
            const linkText = jsonItems[i].item_data.link_text
            const type = jsonItems[i].service_name
        
           // this is logic that should be in the controller!
            // build the template if its a Manual
            if (type === 'Manual') {
                controller.buildManual(image, text, url, linkText)
            // build the template if its a Twitter
            } else if (type === 'Twitter') {
                const user = jsonItems[i].item_data.user
                const userName = user.usernamefunction
                const tweet = jsonItems[i].item_data.tweet
                view.buildTwitter(userName, tweet)
            // build the template if its an Instagram
            } else if (type === 'Instagram') {
                const userName = jsonItems[i].item_data.user.username
                const image = jsonItems[i].item_data.image.medium
                const caption = jsonItems[i].item_data.caption
                view.buildInstagram(image, userName, caption)
            } 
        }
    },

    buildTwitter: function(userName, tweet) {
        tweet = tweet.replace(/(http:\/\/.+)\s/, '<a target="_blank" href="$1">$1</a> ')
                    .replace(/@(\w+)/g, '<a target="_blank" href="https://www.twitter.com/$1">@$1</a>')
                    .replace(/#(\w+)/g, '<a target="_blank" href="https://www.twitter.com/search?q=%23$1&src=typd&lang=en">#$1</a>')
                    
                    //https://twitter.com/search?q=%23world&src=typd&lang=en
                    
        const view = {userName: userName, tweet: tweet}
        const twitterCard = document.getElementById('twitterCard').innerHTML
        
        $('#cards').append(Mustache.render(twitterCard, view))
    },

    buildInstagram: function(image, userName, caption) {
        caption = caption.replace(/#(\w+)/g, '<a target="_blank" href="https://www.instagram.com/explore/tags/$1/">#$1</a>' )
        const view = {image: image, userName: userName, caption: caption}
        const instagramCard = document.getElementById('instagramCard').innerHTML
        
        $('#cards').append(Mustache.render(instagramCard, view))
    }
}

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


controller.init()


/* ========================= Click Handlers ======================================= */
// can I put these inside the view model? how to do that and make them run? do you make them IIFE's somehow?

let manualInstData
let twitInstData
let twitManualData

$('#manual-button').click(() => {
    if (twitInstData) {
        $('#cards').append(twitInstData)
        twitInstData = ''
    } else {
        if (manualInstData || twitManualData) {
            $('#cards').append(manualInstData).append(twitManualData)
            manualInstData = ''
            twitManualData = ''
        }
        twitInstData = $('div').filter('.twitter, .instagram').detach()
    }
})

$('#twitter-button').click(() => {
    if (manualInstData) {
        $('#cards').append(manualInstData)
        manualInstData = ''
    } else {
        if (twitInstData || twitManualData) {
            $('#cards').append(twitInstData).append(twitManualData)
            twitInstData = ''
            twitManualData = ''
        } 
        manualInstData = $('div').filter('.manual, .instagram').detach()
    }
})

$('#instagram-button').click(() => {
    if (twitManualData) {
        $('#cards').append(twitManualData)
        twitManualData = ''
    } else {
        if (twitInstData || manualInstData) {
            $('#cards').append(twitInstData).append(manualInstData)
            twitInstData = ''
            manualInstData = ''
        } 
        twitManualData = $('div').filter('.twitter, .manual').detach()
    }
})

$('#load-more-button').click(function() {
    $(this).text('Loading...').prop('disabled', true)
    let counter = $(this).data('counter')
    counter = Number(counter)
    view.renderCards(model.jsonData, counter)
    counter += 10
    $(this).data('counter', counter)
            .text('Load More').prop('disabled', false)
})
