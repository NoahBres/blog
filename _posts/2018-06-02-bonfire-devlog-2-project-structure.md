---
layout: post
title: "Bonfire Devlog 2. - Project Structure"
date: 2018-07-02 16:20:56 -0500
categories: devlog python mongodb nodejs vue vuetify
stylesheet: styles/post.css
short_summary: Bonfire is a large project I am currently working on in my spare time. It is a site I am creating for Boy Scout troops to easily administer their troops. In this devlog, I'll explore how I decided to structure my application.
---
Bonfire is a large project I am currently working on in my spare time. It is a site I am creating for Boy Scout troops to easily administer their troops. In this devlog, I'll explore how I decided to structure my application.

## Project structure
First off, I am keeping everything in a folder called `Bonfire` in my `/home/Dev/` directory. I am currently keeping both frontend and backend in the same folder and git repository. I realize that I should probably split them up into separate git repos but that will come down the line.

I created a folder called `frontend` and `backend` to split up the main logic. So far my file structure is as follows:
<ul class="directory-tree">
	<li class="folder">Bonfire
		<ul>
			<li class="folder">frontend</li>	
			<li class="folder">backend</li>	
		</ul>
		<li>README.md <span class="comment">(README for Git)</span></li>	
		<li class="folder">.git <span class="comment">(Git stuff)</span></li>	
		<li>.gitignore <span class="comment">(Git stuff)</span></li>	
	</li>
</ul>

### Structuring the backend
As am I using Flask for my python backend, I basically have the freedom and flexibility to structure the folders however I want. But I would like to keep it standardized. Flask-RESTful and Flask both provide a [project-structure guide][flask-structure-link] which I have incorporated into my structure.

Here's how I am structuring my Python-Flask backend

<ul class="directory-tree">
	<li class="folder">backend
		<ul>
			<li class="folder">models
				<ul>
					<li>__init__.py</li>
					<li>user.py</li>		
					<li>event.py</li>		
				</ul>
			</li>	
			<li class="folder">resources
				<ul>
					<li>__init__.py</li>		
					<li>user_endpoints.py</li>		
					<li>event_endpoints.py</li>		
				</ul>
			</li>
			<li>db.py</li>
			<li>secrets.py</li>
			<li>views.py</li>
			<li>run.py</li>
			<li>requirements.txt <span class="comment">(Pip package info)</span></li>
			<li class="folder">venv <span class="comment">(Virtualenv stuff)</span></li>
			<li class="folder">__pycache__ <span class="comment">(Python cache)</span></li>
		</ul>
	</li>
</ul>

The `models` folder contains all the models for the MongoDB database. This includes users, events, etc. You can see that I currently have a `user.py` and `event.py` to hold the model schemas.

The `resources` folder contains all the REST endpoints. Initially I kept all of them in a file called `resources.py` however it got a little too unwieldly. So I separated my Flask-RESTful endpoints into separate files to make them more manageable.

`db.py` is just a little file that contains some boilerplate code to connect to the database. `secrets.py` contains all the passwords and secret keys. The keys are not actually stored in the file. `secrets.py` handles the retrieval of the keys from environmental variables so no actual passwords are stored. `views.py` holds a minimal amount of flask views (as I am not using Jinja rendering). `run.py` is the main Flask runner.

`requirements.txt` is used to keep track of pip installed packages. This is generated by running a `pip freeze > requirements.txt`. Then if you are moving your project onto a new machine, you can simply run `pip install -r requirements.txt` and immediately have all your packages running. `venv` is generated by the virtual environment so the project pip packages don't interfere with system installed pip packages. This is a must for any python project.

### Structuring the frontend
The frontend is basically just a standard node.js directory structure created by `vue-cli`


<ul class="directory-tree">
	<li class="folder">frontend
		<ul>
			<li class="folder">build <span class="comment">(Webpack generated)</span></li>	
			<li class="folder">config <span class="comment">(Webpack generated)</span></li>	
			<li class="folder">dist <span class="comment">(Webpack generated)</span></li>
			<li class="folder">src
				<ul>
					<li class="folder">assets
						<ul>
							<li>logo.jpg</li>		
							<li>header.jpg</li>		
						</ul>
					</li>	
					<li class="folder">components
						<ul>
							<li class="folder">dashboard
								<ul>
									<li>widget1.vue</li>
									<li>widget2.vue</li>
								</ul>
							</li>
							<li class="folder">event_page</li>
							<li class="folder">events</li>
							<li>Dashboard.vue</li>
							<li>EventPage.vue</li>
							<li>Events.vue</li>
							<li>Home.vue</li>
							<li>NotFound.vue</li>
						</ul>
					</li>	
					<li class="folder">router
						<ul>
							<li>index.js</li>
						</ul>
					</li>	
					<li class="folder">store
						<ul>
							<li>index.js</li>
						</ul>
					</li>	
					<li>main.js</li>	
					<li>App.vue</li>	
				</ul>
			</li>
			<li class="folder">static  <span class="comment">(Webpack generated)</span></li>
			<li class="folder">node_modules <span class="comment">(Node.js generated)</span></li>
			<li>.babelrc <span class="comment">(Webpack generated)</span></li>
			<li>.editorconfig <span class="comment">(Webpack generated)</span></li>
			<li>package.json <span class="comment">(Node.js generated)</span></li>
			<li>.gitignore <span class="comment">(Git generated)</span></li>
			<li>.postcssrc.js <span class="comment">(Webpack generated)</span></li>
		</ul>
	</li>
</ul>

There's a lot in here but most of it is just Webpack and Node.js generated config file junk that we can ignore for now. The important stuff is in the `/frontend/src/` folder. Assets like logos and images are kept in the `assets` folder. Vue router and Vuex store are kept in their own folders.

All the Vue components are split up into their own single file vue components. For example `Dashboard.vue`, `Events.vue`, etc. These are all their own pages in the SPA. Then to batch them even further, each SPA page gets it's own folder with the Vue component widgets it uses. You can see that dashboard has 2 widgets that is embedded on the page. This makes it very helpful in compartmentalizing application logic. Making changes to the widget does not alter the rest of the code.

## Conclusion
And that's how I decided to structure Bonfire. It may undergo changes in the future. If you have any suggestions please [tweet me](https://twitter.com/NoahBres)!

<style>
	.directory-tree ul {
		border-left: 1px dashed #ddd;
		margin-left: 10px;
		padding-left: 1.3em;
	}

	.directory-tree .folder {
		color: #777;
		font-weight: bold;
	}

	.directory-tree .folder:before {
		background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><path fill='lightblue' d='M96.429,37.5v39.286c0,3.423-1.228,6.361-3.684,8.817c-2.455,2.455-5.395,3.683-8.816,3.683H16.071 c-3.423,0-6.362-1.228-8.817-3.683c-2.456-2.456-3.683-5.395-3.683-8.817V23.214c0-3.422,1.228-6.362,3.683-8.817 c2.455-2.456,5.394-3.683,8.817-3.683h17.857c3.422,0,6.362,1.228,8.817,3.683c2.455,2.455,3.683,5.395,3.683,8.817V25h37.5 c3.422,0,6.361,1.228,8.816,3.683C95.201,31.138,96.429,34.078,96.429,37.5z' /></svg>");
		background-position: center top;
		background-size: 75% auto;
	}

	.directory-tree li {
		list-style: none;
		color: #888;
		font-style: italic;
		font-weight: normal;
		font-family: "times new roman", serif;
	}

	.directory-tree li .comment {
		font-style: normal;
		font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Cantarell,"Helvetica Neue",sans-serif;
		font-weight: normal;
		font-size: 0.8em;
		margin-left: 0.7em;
		user-select: none;
		color: #777;
	}

	.directory-tree li:before {
		content: "";
		margin-right: 10px;
		vertical-align: middle;
		width: 20px;
		height: 20px;

		background-repeat: no-repeat;
		display: inline-block;
		background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><path fill='lightgrey' d='M85.714,42.857V87.5c0,1.487-0.521,2.752-1.562,3.794c-1.042,1.041-2.308,1.562-3.795,1.562H19.643 c-1.488,0-2.753-0.521-3.794-1.562c-1.042-1.042-1.562-2.307-1.562-3.794v-75c0-1.487,0.521-2.752,1.562-3.794 c1.041-1.041,2.306-1.562,3.794-1.562H50V37.5c0,1.488,0.521,2.753,1.562,3.795s2.307,1.562,3.795,1.562H85.714z M85.546,35.714 H57.143V7.311c3.05,0.558,5.505,1.767,7.366,3.627l17.41,17.411C83.78,30.209,84.989,32.665,85.546,35.714z' /></svg>");
		background-position: center 2px;
		background-size: 60% auto;
	}
</style>

<script id="toc-data" type="text/template">
  <li><a href="#project-structure">Project Structure</a>
    <ul>
      <li><a href="#structuring-the-backend">Structuring the backend</a></li>
      <li><a href="#structuring-the-frontend">Structuring the frontend</a></li>
    </ul>
  </li>
  <li><a href="#conclusion">Conclusion</a></li>
</script>

[flask-structure-link]: http://exploreflask.com/en/latest/organizing.html