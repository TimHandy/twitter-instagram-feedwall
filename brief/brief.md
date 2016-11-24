## Background

Bullring Birmingham will be hosting their annual Autumn Fashion Fix event in the coming weeks. In a bid to drum up some excitement around the event, they want to create a “social wall” where they can post examples of latest trends as well as collate relevant pieces of social media from Twitter and Instagram. This wall will be viewable on mobile, tablet, as well as being pulled through to their main website via an iframe.

An admin area has already been created by the Back End Developer to consume this stream, provide moderation tools, as well as adding a function for Bullring to add their own custom messages (either with or without an image). It then provides a normalised data structure via the basic endpoint below.

*SEE ATTACHED JSON FILE*

## Task

Using the data source, your task is to create a static page which calls for the data, formats it as necessary and display posts in a grid like structure (think Pinterest) as per the rough wireframe provided on the last page. 

### Requirements:

Page should be fully responsive to accommodate any screen width, from mobile up to desktop.
Updating/refreshing doesn’t need to be live or automated, but there should be a “load more”  button to load older posts.
Links within post text should all go somewhere in another window.
There should be a filter to narrow down the type of posts displayed if the user is only interested in “Instagram” for example. (HINT: types of posts are defined in the “service_name” key for an item in the API response)

The design of the elements is not too important at this stage, as long as they show all the requisite details. Our designer has quickly mocked up the following individual posts to 
give you a visualisation of how the blocks could appear.

The following assumptions can be made:

There are only 20 results in the mock response, but you may call the endpoint numerous time to create the “paging” effect for your load more (don’t worry about displaying the same data over and over). We will look at what parameters you send...you may assume the real API would be a standard limit/offset.

All code will be front end HTML/CSS/JS - No server side code will be necessary to complete this task.

Whilst not a design task, an appreciation of colors/typography, functionality of the filtering system and general aesthetics would help your work stand out.

Create a repo on GIT so that you can version your work appropriately. (Don’t worry about committing small and often, we won’t look at this until you tell us you are finished!)

Other ideas, if you have time

* @mentions, #hashtags could be parsed and linked.
* Include a relative timestamp on each post.
* Provide user feedback when something asynchronous is taking place.
* Show us your best slider/cycle for a header (can be just some random appropriate stock images - we all know clients love a good cycle!!).
* Lazy load all post imagery.
