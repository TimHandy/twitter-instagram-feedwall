// without this file and it's associated "--require src/test/setup.js" line in package.json for the script and the jsdom npm module, Mocha complains that "$.getJson is not a function". I have not a scooby what this file does or why it should be required!!!! It's probably witchcraft, or maybe even sorcery... who knows?!

import { jsdom } from 'jsdom'

let exposedProperties = ['window', 'navigator', 'document']

global.document = jsdom('')
global.window = document.defaultView
Object.keys(document.defaultView).forEach((property) => {
    if (typeof global[property] === 'undefined') {
        exposedProperties.push(property)
        global[property] = document.defaultView[property]
    }
})

global.navigator = {
    userAgent: 'node.js'
}
