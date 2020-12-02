# Coding Nexus

## Welcome to the Coding Nexus. Please read the instructions below for getting the project up and running on your local machine

### To get this project installed on your local machine

* Fork the repository. This button is located on the top right part of this webpage. Look for the button that says **fork**. Please do not clone directly from this repo.All pull requests will be against your forked repo, not by cloning the repository directly.
* Once the project is forked and you can find it in your github account, go to your coding nexus repo
* Clone the repository by clicking the button that says copy the code this copied url will be used to clone your repo
* Open your terminal, navigate where you want the project location to be
* If you're using the terminal built into VScode use the shortcut control + ~ to bring up the terminal
* Type `git clone <past in the repo url you copied>`


### start up the project

* CD into the project from your VScode or regular terminal window on your computer. If you're not familiar with terminal commands [click here](https://www.youtube.com/watch?v=5XgBd6rjuDQ)
* Type in the terminal `npm install` once you're inside your project (this will install all required dependencies to start up the website)
* You're now able to run `gatsby develop` to load the actual website
* The project page should load automatically but if it doesnt just navigate to localhost:8000

### Set up a new URL in your git to point to the "original" repo so that you can update your forked repo when needed

* Type `git remote add codingnexus git@github.com:Coding-Nexus/codingnexus.git`
* Note that you can change the name codingnexus to whatever name you want to let you know that points to the original repo
* For example when you need to update your fork from the original you would type `git pull codingnexus master`
* Afterwhich you would type `git push origin master` to update your forked branch to the branch you pulled
### to start up storybook

* Go into your terminal either from VScode or a regular terminal window
* Type `npm run storybook`
* The Storybook website should load automatically. If it doesn't navigate to localhost:6006