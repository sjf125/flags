# Flags app

An app to view, rate, and comment with other users on the design of various
flags of the world.

See it here!  `http://sjf125.github.io/flags/`

Back-end repository: `https://github.com/sjf125/flags-api`

## Approach

1.  Scrape flag image location data from wikipedia to seed flags database with
2.  Set up backend API with activerecord scaffolding of controllers, models,
    serializers, databases and routes
3.  Test that routes are working with curl requests
4.  Start front end by setting up handlebars to display flags from flags
    database
5.  Set up modal to display a single flag
6.  Add comments to flag modal (GET and POST)
7.  Add comment edit and delete functionality
8.  Add rating submission, updating, and display functionality

## TODO

-   Add search functionality
-   Display flags in groups by category (e.g. continent)
-   Display average rating as star rating icons (couldn't get it to work
    satisfactorily)
-   Make comments appear in order of submission; currently gets out of order if
    an edit is made
-   Make comments nested, so a user can reply to a particular comments
-   Allow users to upload new flags, to discuss redesigns (would need active
    moderation on the site)

## Technologies used

-  Javascript
-  Ruby on Rails
-  jQuery
-  HTML5
-  CSS

## User stories

-   As a vexilogical enthusiast, I would like to view flag designs on a cleanly
    designed platform
-   As a user, I would like to be able to comment on flag designs
-   As a user, I would like to be able to rate flags, and view average ratings
-   As a user, I would like to be able to search for particular flags
-   As a user, I would like to be able to see particular collections of flags
    (ie all national flags of North America)

## Wireframe

-   Gallery: `https://app.moqups.com/sjf125/woZADwAU/edit/page/abf45668b`
-   Flag modal: `https://app.moqups.com/sjf125/woZADwAU/edit/page/a86781858`
