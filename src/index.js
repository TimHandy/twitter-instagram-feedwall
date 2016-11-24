/* global $ */

'use strict';

$.getJSON('/src/posts.json', function(json) {
    
    function buildManual(image, text, url, linkText) {
        const view = {text: text, image: image, url: url, linkText: linkText};
        const manualCard = document.getElementById('manualCard').innerHTML;
        
        $('#cards').append(Mustache.render(manualCard, view));
    }
    
    function buildTwitter(userName, tweet) {
        tweet = tweet.replace(/(http:\/\/.+)\s/, '<a target="_blank" href="$1">$1</a> ')
                    .replace(/@(\w+)/g, '<a target="_blank" href="https://www.twitter.com/$1">@$1</a>')
                    .replace(/#(\w+)/g, '<a target="_blank" href="https://www.twitter.com/search?q=%23$1&src=typd&lang=en">#$1</a>');
                    
                    //https://twitter.com/search?q=%23world&src=typd&lang=en
                    
        const view = {userName: userName, tweet: tweet};
        const twitterCard = document.getElementById('twitterCard').innerHTML;
        
        $('#cards').append(Mustache.render(twitterCard, view));
    }
    
    function buildInstagram(image, userName, caption) {
        caption = caption.replace(/#(\w+)/g, '<a target="_blank" href="https://www.instagram.com/explore/tags/$1/">#$1</a>' );
        const view = {image:image, userName: userName, caption: caption};
        const instagramCard = document.getElementById('instagramCard').innerHTML;
        
        $('#cards').append(Mustache.render(instagramCard, view));
    }
    
    var twitInstData;
    var manualInstData;
    var twitManualData;
    
    $("#manual-button").click(() => {
        if (twitInstData) {
            $('#cards').append(twitInstData)
            twitInstData = '';
        } else {
            if (manualInstData || twitManualData) {
                $('#cards').append(manualInstData).append(twitManualData);
                manualInstData = '';
                twitManualData = '';
            }
            twitInstData = $('div').filter('.twitter, .instagram').detach();
        }
        
    });
    
    
    $("#twitter-button").click(() => {
        if (manualInstData) {
            $('#cards').append(manualInstData);
            manualInstData = '';
        } else {
            if (twitInstData || twitManualData) {
                $('#cards').append(twitInstData).append(twitManualData);
                twitInstData = '';
                twitManualData = '';
            } 
            
            manualInstData = $('div').filter('.manual, .instagram').detach();
        }
    });
    
    $("#instagram-button").click(() => {
        if (twitManualData) {
            $('#cards').append(twitManualData);
            twitManualData = '';
        } else {
             if (twitInstData || manualInstData) {
                $('#cards').append(twitInstData).append(manualInstData);
                twitInstData = '';
                manualInstData = '';
            } 
            
            twitManualData = $('div').filter('.twitter, .manual').detach();
        }
    });
    
    
    json.items.sort((postA, postB) => {
        const postADate = new Date(postA.item_created);
        const postBDate = new Date(postB.item_created);
        return postADate - postBDate;
        
    });
    
    function renderCards(startPostsIndex) {
        
        let endPost = Math.min(json.items.length, (startPostsIndex + 10));
        
        for (let i = startPostsIndex; i < endPost; i++) {
            
            const jsonItems = json.items;
            const text = jsonItems[i].item_data.text;
            const image = jsonItems[i].item_data.image_url;
            const url = jsonItems[i].item_data.link;
            const linkText = jsonItems[i].item_data.link_text;
            const type = jsonItems[i].service_name;
        
           
            // build the template if its a Manual
            if (type === "Manual") {
                buildManual(image, text, url, linkText);
            } else if (type === "Twitter") {
                const user = jsonItems[i].item_data.user;
                const userName = user.username;
                const tweet = jsonItems[i].item_data.tweet;
                 
                buildTwitter(userName, tweet);
            } else if (type === "Instagram") {
                const userName = jsonItems[i].item_data.user.username;
                const image = jsonItems[i].item_data.image.medium;
                const caption = jsonItems[i].item_data.caption;
                
                buildInstagram(image, userName, caption);
            } 
        }
    }
    
    $('#load-more-button').click(function() {
        $(this).text('Loading...').prop('disabled', true);
        let counter = $(this).data('counter');
        counter = Number(counter);
        renderCards(counter);
        counter += 10;
        $(this).data('counter', counter)
            .text('Load More').prop('disabled', false);
    
    });
    
    
    renderCards(0);

});




