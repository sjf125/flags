# Flags app

An app to view, rate, and comment with other users on the design of various
flags of the world.

See it here!  `http://sjf125.github.io/flags/`

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
-   Make comments nested, so a user can reply to a particular comments
-   Allow users to upload new flags, to discuss redesigns (would need active
    moderation on the site)

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

## Routes

-   Prefix Verb   URI Pattern                    Controller#Action
-    ratings GET    /ratings(.:format)             ratings#index
-            POST   /ratings(.:format)             ratings#create
-     rating GET    /ratings/:id(.:format)         ratings#show
-            PATCH  /ratings/:id(.:format)         ratings#update
-            PUT    /ratings/:id(.:format)         ratings#update
-            DELETE /ratings/:id(.:format)         ratings#destroy
-   comments GET    /comments(.:format)            comments#index
-            POST   /comments(.:format)            comments#create
-    comment GET    /comments/:id(.:format)        comments#show
-            PATCH  /comments/:id(.:format)        comments#update
-            PUT    /comments/:id(.:format)        comments#update
-            DELETE /comments/:id(.:format)        comments#destroy
-      flags GET    /flags(.:format)               flags#index
-       flag GET    /flags/:id(.:format)           flags#show
-    sign_up POST   /sign-up(.:format)             users#signup
-    sign_in POST   /sign-in(.:format)             users#signin
-            DELETE /sign-out/:id(.:format)        users#signout
-            PATCH  /change-password/:id(.:format) users#changepw
-      users GET    /users(.:format)               users#index
-       user GET    /users/:id(.:format)           users#show

## [License](LICENSE)

Source code distributed under the MIT license. Text and other assets copyright
General Assembly, Inc., all rights reserved.
