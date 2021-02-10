# The Scroll 

# App Description

The Scroll is a blogging site where users can create, read, update, and delete their own posts. 

## Instructions

1. Fork and clone this repository.
2. On your terminal, navigate to the file in your directory.
3. Use the command, `npm start` to open your local host in the browser.
4. Use the command, `code .` to open your files in the text editor of your choice.(please include the space between code and the period)

## Technologies used

- HTML5 was used to frame the website, CSS to style the website, JavaScript for some interactivity,and the React library for UI. 
- Mongo is used to create the database, Express handles the multiple http request for the URL, Node for the server functionality, and  Heroku for deployment.

Link to the project website: http://www.the-scroll-front-end.herokuapp.com/

# Project Issues

- We had trouble keeping our branches synced, and we had a difficult time with our form acceptung PUT requests.

## Your Error

- CONFLICT (content): Merge conflict in package.json. error: Failed to merge in the changes. Patch failed at 0001 updating files.
- src/components/home.jsx line 21:5 react hook useeffect has a missing dependency: 'getposts'. either include it or remove the dependency array.

## Why you think you're getting this error

- Originally, we did not use the recommended gitflow but we found out that not committing often was one issue and syncing up branches that are similar was another.
- We were not completely sure about the issue with the missing dependency which was causing an infinite loop. 

## Everything you've tried

- We had to git add and git rebase often until we fixed all errors. 
- We changed our git flow to what was recommended by our instructors.
- We removed a variable called getPosts with another called htttp in the useEffect hook. 
- Plenty of Google searches 


## User stories
- As a user I want to be able to post my digital journal.
- As a user I want to view other peoples posts.
- As a user I want to be able to delete or update my post if I don’t like it anymore.
- As a user I want to be able to see my follower count.
- As a user I would like to be able to use images in my posts.

## 1. Design
![wireframe 1](<blockquote class="imgur-embed-pub" lang="en" data-id="a/Yqmo8rw" data-context="false" ><a href="//imgur.com/a/Yqmo8rw"></a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>)


## 2. MVP Goals

- As a user, I want a timeline feature.
- As a user, I want a profile. 

## 3. Stretch Goals

- As a programmer, I want to implement account creation.
- As a programmer, I want to implement the follower/following feature.
- As a programmer, I want to implement the DM feature.
- As a designer, I want to implement beautiful UI.

