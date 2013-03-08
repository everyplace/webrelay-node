#WebRelay-Door
=============================

##Questionably useful, quick and dirty, "security through obscurity" app for providing web-based entry to WebRelay triggers.

###Prerequisites and Assumptions
* You have a [WebRelay](http://controlbyweb.com/webrelay/)WebRelay, or some other hardware api that you want to trigger via a web interface.
* You have a [heroku](http://heroku.com) account.
* You have used terminal before.

###Installation
Once you've cloned this repo, cd into the cloned folder, and start setting up heroku.

```shell
heroku create
heroku rename <pithy name that references the object in question that will be manipulated>
heroku config:set ACTION_URL=<url to hit once the web interface has been triggered>
git push heroku master
```

Images can easily be replaced by replacing landscape.jpg and portrait.jpg, located in /public/images.

###Security Concerns
Yep, this is all public. Easiest way of locking this down is by requiring users to be on a password-protected wifi before being able to get to where you've hosted this. That kind-of defeats the purpose of using heroku, but any node setup can run this with foreman.

###Optional Configurations
A debug mode exists, which outputs a little bit more information than normal. When used in conjunction with an alternate url, you can test how your app will behave.

```shell
heroku config:set DEBUG=true
heroku config:set DEBUG_ACTION_URL=<alternate url>
```

When in debug mode, an alternate POST-listening debug route is created at '/trigger', for just tossing arbitrary post data to.

###Acknowledgments
Based on the [apartm.net door](http://apartm.net/door) project, by [Nicholas Hall](http://github.com/inck) and [Erin Sparling](http://github.com/everyplace).