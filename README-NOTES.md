My notes on the task
======================

The json file was invalid, had to make it valid before I could parse it. This had me confused for some time as to why the ajax request wasn't working. The error message (lack of one!) was not helpful at all.

Used Mustache to render the cards on the page. 

Not sure whether bootstrap is being more of a hiderance? Especially for the breakpoints that don't look good for this app. 


TODO: some of the twitter pages have duplicate tags... think there's something wrong with the regex, maybe needs to be more specific and only grab the bits required... maybe a $ at end after a space?

TODO: could I make the app retrieve the next x cards from the json file when the 'load more' button is pressed, rather than retrieving all in one go?

FIXME: in index.js eslint is saying Mustache is not defined. Is this normal? 