My notes on the task
======================

The json file was invalid, had to make it valid before I could parse it. This had me confused for some time as to why the ajax request wasn't working. The error message (lack of one!) was not helpful at all.

Used Mustache to render the cards on the page. 

Not sure whether bootstrap is being more of a hiderance? Especially for the breakpoints that don't look good for this app. 


TODO: some of the twitter pages have duplicate tags... think there's something wrong with the regex, maybe needs to be more specific and only grab the bits required... maybe a $ at end after a space?

TODO: could I make the app retrieve the next x cards from the json file when the 'load more' button is pressed, rather than retrieving all in one go?

FIXME: in index.js eslint is saying Mustache is not defined. Is this normal? 

TODO: click handlers are not part of a module... they're just hanging out in the main app. Can I change this?




STATUS: functioning app, running via live-server. There is no webpack giving any ES6 transpiling so cannot use babel or ES6 module styles. 

Refactored to MVC.

now playing with the CONTROLLER to attempt to make it exportable via ES5 so that it can be imported and used in tests. 
    Used a revealing module pattern? module is an IIFE that returns the publicly available functions. Function methods do NOT have the same syntax as a standard object. 
    1st thing is to move the build* functions from the controller to the view, and likewise, move the logic that currently resides in the view.renderCards, to the controller.

es5 modules: need to make notes on https://coryrylan.com/blog/javascript-module-pattern-basics
https://www.airpair.com/javascript/posts/the-mind-boggling-universe-of-javascript-moduleshttps://github.com/addyosmani/es6-equivalents-in-es5
https://medium.freecodecamp.com/javascript-modules-a-beginner-s-guide-783f7d7a5fcc#.9in2xk3qe
https://css-tricks.com/how-do-you-structure-javascript-the-module-pattern-edition/
Maybe this by Addy: https://github.com/addyosmani/es6-equivalents-in-es5
https://sazzer.github.io/blog/2015/05/12/Javascript-modules-ES5-vs-ES6/
https://nicolas.perriault.net/code/2013/testing-frontend-javascript-code-using-mocha-chai-and-sinon/

https://www.sitepoint.com/understanding-module-exports-exports-node-js/


Eloquent on modules
http://eloquentjavascript.net/10_modules.html


Running npm test results in complaint about $ not being available. is this because I need to have the https://github.com/addyosmani/es6-equivalents-in-es5jquery in the view, not these controller methods? 


Dave's stuff:
https://github.com/rinse0ut/scrabble/blob/master/test/actions/quiz.spec.js

Safaribooks temp account:
https://www.safaribooksonline.com/library/view/learning-behavior-driven-development/9781784392642/
https://www.safaribooksonline.com/library/view/test-driving-javascript-applications/9781680502305/
https://www.safaribooksonline.com/library/view/javascript-unit-testing/9781771374569/ - maybe, think it's jasmine, but has videos on Mocha to jump to.

Mocha: this guys stuff maybe... he responded to a question I posed on gitter Mocha channel. He's leading some course on Mocha testing.
https://github.com/Code-Craftsmanship-Saturdays
https://github.com/Code-Craftsmanship-Saturdays/software-testing
https://github.com/Code-Craftsmanship-Saturdays/code-craftsmanship-saturdays

http://jamesknelson.com/testing-in-es6-with-mocha-and-babel-6/