1. Go to folder 
2. grunt watch - This will start the unit test auto runner and live reload server with a change monitor
3. open the karma unit test monitor on http://localhost:9018/
3. open the build/index.html on the browser (as a file no need of server)
4. Click on live reload icon (Chrome Extension) - this will connect the browser tab to live reload server
5. Change in sublime and see unit tests being run on git console and browser being auto refreshed


* If source is freshly cloned from git, all the npm-modules has to be locally installed using;

optional : $ sudo npm -g install grunt-cli karma bower 

$ npm install //Local installation of npm modules
$ bower install
before step #1 above