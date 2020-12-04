# Frontend debvelopment workflow

This project is built with the following technologies:

- **[Gatsby]:** The site was generated with Gatsby
[Learn more about Gatsby here](https://www.gatsbyjs.com/)

- **[React]** Coding Nexus is build entirely in React. We use most of the modern React features such as Hooks, Context, and much more.
[Learn more about React here](https://reactjs.org/)

- **[Storybook]** We are using Storybook as our way of visually testing all components and sections of the website
[Learn more about Storybook here](https://storybook.js.org/docs/react/get-started/introduction/)

- **[Jest]** We have chosen Jest as our way of Unit testing our React and JavaScript code
[Learn more about Jest Testing here](https://jestjs.io/en/)

- **[TailwindCSS]** All styles are coded using TailwindCSS, in addition to using PostCSS for more detailed styling
[Learn more about TailwindCSS here](https://tailwindcss.com/)

## Creating Ticket Branches

### When starting a new branch there are a few guidelines to follow.

- Always start your new branch from your master branch
- Always start your branch name with a word describing the goal of the thing youre building/fixing
- `git branch -b component-componentName`If youre adding a new visual component, such as a standalone element such as button, link, dropdown, etc 
- `git branch -b feature-featureItem` If youre building a new visual feature such as a header, footer, complete form, a new page, any element that is much larger in size than a standalone component
- `git branch -b functionality-example` If youre building or updating any new piece of functionality to the site, whether that is new font sets, new styles, integrating a backend, or connecting the front end with Graphql queries
- If you find yourself building a feature that also contains one or the other then just label it as a feature branch. The same for component branches. Functionality branches should stick to only adding in the required piece of functionality. All components or feature should be present before then

## Keeping your project updated with the original repo you forked your project from

- Periodically make sure to update your master branch with the ORIGINAL repos master branch. All code will eventually end back up in master, so before making a new branch off of master go ahead with a `git pull origin master`
- If you received an update from origin master branch please do not forget to push those updates back to your remote repo with `git push <your project repo> master`

## Making a pull request when your code is complete

- When your code is complete and you have pushed your local branch to your forked repository you will be ready to submit a PR to the original repo for code review
- To submit a PR click on the correct branch in your github located in a dropdown button near the center top of your page
- Once on the correct branch click on the "Pull request" button
- This will bring you to a new page where you can play with some drop downs of where you want to make your PR to
- You need to make sure the left dropdown arrows are pointing to "base respository: Coding-Nexus/codingnexus" and then for the branch dropdown right next to it select "development". Note Master branch is never for pushing code to until the code has proven to not break the project, which is why we push to development instead of straight to master
- Now on the right side, this is your own repository which should have the branch you are try to make a PR from for example "feature-header"
- Once those are all selected correctly you will get a new dropdown which will let you update your title, please give a slightly descript title for what the branches purpose is
- Under that in leave a comment, please describe breifly what was done in your branch. For example what you updated, if you removed or added anyting unrelated to your branch or if you added any tests or storybook code
- On the right column you will see Reviewers, please mark your mentor Kevin Napier as the code reviewer
- Once all that is complete click the create pull request
- If you are not the reviewer do not continue past this point. Don't merge anyting in or approve the pull request. If there are issues with the code it will be sent back to you and once updated your pull request should still be acceptable with the updates made, so dont close any pull requests
- Any feedback on your code will be left in the pull request so please comment back in there if needed as apposed to reaching out to code reviewings through other channels
