---
layout: post
title: "Bonfire Devlog 1. - Starting a Project"
date: 2018-07-01 16:20:56 -0500
categories: devlog python mongodb nodejs vue vuetify
stylesheet: styles/post.css
short_summary: Bonfire is a tool I am currently building to help Boy Scout troops in day to day administration. Here's the first post in a short series where I log how I go about building it, problems encountered, and how to solve them.
---
Bonfire is the large project I am working currently on in my spare time. Bonfire is a site I am creating for Boy Scout troops to easily administer their troops. It is basically like a CMS/Wordpress type thing but already configured and tailor made for day to day administration. This is the start of my log into how I build this product from which technologies I use and why to code snippets, examples, problems, and how I solve them.

## Step 1. Create a list of objectives
The very first step prior to starting any project is to create a list of objectives you are trying to solve. My current Boy Scout troop had a very poor system for event signups. I wanted to build a system where scouts could easily signup for events. Webmaster and Scoutmasters should be able to create and manage these events easily. I would like a way to easily communicate with all the scouts as not everyone checks their email consistently. There needs to be a way to share photos. Etc, etc.

## Step 2. Basic Design Mockups
I started making mockups on how I would like the website to look on graph paper. I would do this in class after finishing whatever work I was supposed to be doing because why not.

Then I transitioned to Photoshop design mockups. One of my high school classes this year was a Photoshop class and I had a lot of free time. I made basically all my mockups in there.

Here are some examples:

![Image of mockup 1](assets/bonfire-devlog-1-starting-a-project/photo_2018-06-30_23-37-35.jpg)
![Image of mockup 2](assets/bonfire-devlog-1-starting-a-project/photo_2018-06-30_23-37-40.jpg)
![Image of mockup 3](assets/bonfire-devlog-1-starting-a-project/photo_2018-06-30_23-37-21.jpg)
![Image of mockup 4](assets/bonfire-devlog-1-starting-a-project/photo_2018-06-30_23-36-22.jpg)
![Image of mockup 5](assets/bonfire-devlog-1-starting-a-project/photo_2018-06-30_23-36-15.jpg)

## Step 3. Decide Tech Stack
I need to decide the programming stack I am going to use. Even though this is a full stack application, I am decoupling my front end logic from my backend. The backend will run solely on it's own and not take part in any frontend. This allows each part of the stack to be easily managed independently rather than taking the route of something like Jinja or express rendering where the backend also handles the frontend rendering. Changes in the backend will not affect any frontend application.

For the backend, I decide to go with Python and Flask serving a REST API. This will make it easy to expand into mobile or switch frontend frameworks in the future. I have chosen to use MongoDB as my database as I am experienced in it and the JSON NoSQL format is a personal preference. The REST endpoints will use JSON Web Tokens (JWT) for authentication. JWT is a more secure alternative to cookies and sessions as it requires a token to be exchanged with every request. Even if a middleman were to seize the tokens, the tokens will expire every 15 minutes requiring a new token to be authorized. Tokens also have the benefit of storing information in them which essentially serves as a cache for data without constantly making requests to the server.

For the frontend I decide to go with a Vue SPA as that is where my experience primarily lies. Vue is a frontend reactive framework making large scale applications easy to build. I find Vue much easier and cleaner to work with than React. Vue is paired with Vuetify which provides ready made, beautiful material design components. This saves a trememendous amount of time in frontend styling and development work.

### Current stack:
- Backend: Python + Flask
  - Pro: Flask much easier to use than Django
  - Pro: So many libraries available
  - Pro: Lightweight, super customizable
  - Con: Doesn't come with as many out of the box things like admin dashboard like Django
  - Con: No ORM (If that's a con to you)
  - Serves REST API
    - Pro: Makes expanding to other platforms like mobile easy
- Authentication: JWT
  - Forces token exchange on REST requests
    - Pro: More secure
    - Pro: beneficial for SPA
    - Pro: Allows for data in token
    - Con: Annoying sometimes
    - Con: Forces to make back and forth server requests on token expiration
- Datbase: MongoDB
  - Pro: Familiary with it
  - Pro: Really easy to use
  - Pro: I like the JSON NoSQL format
  - Pro: Flexible schema
  - Pro: Mlabs provides easy free hosting for testing
  - Con: Probably performance
  - Con: Bigger db size
  - Con: Less querying flexibility (No JOINs)
- Frontend: Vue
  - Pro: Easy to use. Much easier than React
  - Pro: allows for easy splitting of applications into smaller components
  - Pro: Nice CLI tools
  - Pro: More performant than React
  - Con: Not as big as React
  - Con: Probably not as easy to hire for as React
- Frontend Styling: Vuetify
  - Provides ready made Material Design components for Vue. Super easy out of the box beautiful designs

## Conclusion
This concludes the first dev log where I go over the very first steps into how I started building this product. I scope the problem. Then designed some product mockups. And then decided the technology stack. Next is to start programming. See you next log!

<script id="toc-data" type="text/template">
  <li><a href="#step-1-create-a-list-of-objectives">1. Create a list of objectives</a></li>
  <li><a href="#step-2-basic-design-mockups">2. Basic design mockups</a></li>
  <li><a href="#step-3-decide-tech-stack">3. Decide tech stack</a>
    <ul>
      <li><a href="#current-stack">Current stack</a></li>
    </ul>
  </li>
  <li><a href="#conclusion">Conclusion</a></li>
</script>