---
layout: post
title: "Bonfire Devlog 2. - Project Structure"
date: 2018-07-02 16:20:56 -0500
categories: devlog python mongodb nodejs vue vuetify
stylesheet: styles/post.css
short_summary: Test
---
Bonfire is a large project I am currently working on in my spare time. It is a site I am creating for Boy Scout troops to easily administer their troops. In this devlog, I'll explore how I decided to structure my application.

## Project structure
First off, I am keeping everything in a folder called `Bonfire` in my `/home/Dev/` directory. I am currently keeping both frontend and backend in the same folder and git repository. I realize that I should probably split them up into separate git repos but that will come down the line.

I created a folder called `frontend` and `backend` to split up the main logic. So far my file structure is as follows:
<ul>
	<li class="folder">Bonfire
		<ul>
			<li class="folder">frontend</li>	
			<li class="folder">backend</li>	
		</ul>
		<li>README.md</li>	
		<li class="folder">.git</li>	
		<li>.gitignore</li>	
	</li>
</ul>