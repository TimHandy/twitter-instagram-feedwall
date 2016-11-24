Task
====

This is a pre-interview task exercise. 

In essence the task was to build a page to be used in an iframe that pulled tweets, instagram images, and custom cards from a json file into the app. The cards for each of the items were to be formatted as per a designer mockup and wireframe.

The full brief and associated mockups and wireframe docs can be found in the 'brief' dir.


# Installation and Usage

1. Clone the repo

1. cd into the dir

1. Install dependencies:

        npm install

1. Start the server:

        npm start
        
1. Access the app from: 
        
        http://127.0.0.1:8080/src/index.html

The app uses a basic no-config http server (live-server) in order to serve the posts.json file. The app does not work without this simulated server due to security restrictions of Chrome accessing local resources. https://www.npmjs.com/package/live-server

The command used in package.json to launch the server is simply: "live-server --open=/src/"

# Notable Features

* a 'More' button that loads the next 10 cards, or x cards if less than 10 remaining. The more button displays 'loading...' until the images have loaded.

