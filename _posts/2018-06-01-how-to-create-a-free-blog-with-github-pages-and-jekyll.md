---
layout: post
title:  "How to create a free blog with Github Pages and Jekyll"
date:   2018-06-01 16:26:39 -0500
categories: jekyll github-pages tutorial
stylesheet: styles/post.css
---
So you want to start a blog. Maybe spread your newfound programming knowledge. Or maybe you're posting a writeup about one of your projects. Or writing a cool baking recipe. But you don't want to manage your own CMS like WordPress, or hosting, or DNS, or all that manual labour work. You want something that just works. You stumble upon [Medium][medium-link]. Medium is great. Huge fan. But you want more. You don't want to fit into the cookie cutter mold. You want your own site. Your own *style*. A little <span class="flair"><span>flair</span><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></span>. The answer?
<!--more-->

## Jekyll + Github Pages
Or as I like to call it: Jekhub Pages. The name needs a little work.

### So what's Jekyll?

[Jekyll][jekyll-link] is a blogging framework written in Ruby. It's super simple and easy to set up. You can have it up and running in 10 minutes. And then spend hours customizing everything to your hearts content.
Jekyll allows you to write your blog posts in markdown and will automatically convert it to a web page. Jekyll also comes with some sweet [themes][theme-link] which you can customize or build yourself.

### How does Github come into play?

Great question. Github is the magical glue that binds this together. Github offers a wonderful service called [Github Pages][github-pages-link]. Github Pages offers a free webpage linked to your Github account based on a Github repo. Hosting is free and everything is updated with a simple `git push`.

## Sounds cool. How do I start?

*Before you start: If you are not vaguely familiar with Github or the command line, I would recommend learning about those first*

### 1. [Signup for Github][github-signup-link]
<div class="window-wrap">
	<div class="window-top">
		<div class="window-addressbar">
			<a href="https://github.com/join"><span class="https">https</span>://<span class="baseurl">github.com</span>/join</a>
		</div>
	</div>
	<video class="window-video" width="700" autoplay="autoplay" loop>
		<source src="assets/how-to-create-a-free-blog-with-github-pages-and-jekyll/github-signup-compress.mp4">
			Your browser does not support HTML5 video.
	</video>
</div>

### 2. Create a Github repo
Create a Github repo named *[yourusername].github.io*

<div class="window-wrap">
	<div class="window-top">
		<div class="window-addressbar">
			<a href="https://github.com/new"><span class="https">https</span>://<span class="baseurl">github.com</span>/new</a>
		</div>
	</div>
	<video class="window-video" width="700" autoplay="autoplay" loop>
		<source src="assets/how-to-create-a-free-blog-with-github-pages-and-jekyll/github-create-repo-compress.mp4">
			Your browser does not support HTML5 video.
	</video>
</div>

In my case this would be [***noahbres**.github.io*](noahbres.github.io). This will also be the URL for your new website so choose wisely.

### 3. Install Jekyll

So there's a few steps to this. But once you get this out of the way then everything will be smooth sailing.

I will be providing a super summarized version of the install instructions. Please visit the [jekyll install instrucitons][jekyll-install-link] for proper instructions

1. Download Ruby
  - If on Windows: [follow this link][ruby-install-link]
  - If on MacOS: MacOS should have Ruby pre-installed
  - If on Linux: You probably already know what to do just visit the jekyll install page for the package name
2. Open the command prompt and run `gem install jekyll bundler`
  - This will install Jekyll and Bundler
3. Check if Jekyll was installed properly. Run `jekyll -v` in the command prompt
4. Install git
  - If on Windows: [follow this link][git-install-link]
  - If on MacOS: [follow this link][git-macos-install-link] or install via Homebrew
  - If on Linux: Use your favorite package manager and install

### 4. New Jekyll Project

Run `jekyll new username.github.io` in your preferred directory and move into that directory (`dir` for windows, `cd` otherwise)

<div class="terminal-window">
	<div class="terminal-window-top flex"></div>
	<div class="terminal-content">
	 	<pre class="line"><span class="green">jekyll</span> new username.github.io</pre>
	 	<pre class="output">username.github.io created</pre>
	 	<pre class="line"><span class="green">dir</span> username.github.io</pre>
	</div>
</div>

You will be in a folder containing the foundation for your blog. It should contain the following files: `.gitignore`, `404.html`, `about.md`, `Gemfile`, `index.md`, `_config.yml`, a `_posts` and `_site` folder. (The `_site` folder may not appear until you run `bundle exec jekyll serve`)
The `404.html` is the page that the user is redirected to when a page isn't found. The `.gitignore` file lists files and directories that Git should ignore. `Gemfile` is used by Ruby to manage your libraries. `index.md` is the main page. `about.md` is an about page. `_config.yml` is used to configure your blog. The default theme is `minima` provided by Jekyll.


### 5. Configure Jekyll

Open the `config.yml` in a chosen text editor (I highly recommend [Sublime Text][sublime-text-link]). You will see something like this:

{% highlight yaml linenos %}
title: Noah Bresler
email: noahbres@gmail.com
description: Noah Bresler. Frontend developer, designer, student.
baseurl: "" # the subpath of your site, e.g. /blog
url: "" # the base hostname & protocol for your site, e.g. http://example.com
twitter_username: noahbres
github_username:  noahbres

# Build settings
markdown: kramdown
theme: minima
plugins:
  - jekyll-feed
{% endhighlight %}

Customize the data to fit your own blog. Fill in your own name, email, etc etc. You get it. Ignore the build settings for now.

### 6. Run Jekyll

With your basic configuration done, run `bundle exec jekyll serve` and you should see something like this:

<div class="terminal-window">
	<div class="terminal-window-top flex"></div>
	<div class="terminal-content">
	 	<pre class="line"><span class="green">bundle</span> exec jekyll serve</pre>
	 	<pre class="output">Configuration file: C:/Users/Pedro/Desktop/username.github.io/_config.yml</pre>
	 	<pre class="output">            Source: C:/Users/Pedro/Desktop/username.github.io</pre>
	 	<pre class="output">       Destination: C:/Users/Pedro/Desktop/username.github.io/_site</pre>
	 	<pre class="output"> Incremental Build: disabled. Enable with --incremental</pre>
	 	<pre class="output">      Generating...</pre>
	 	<pre class="output">                    Done in 4.3 seconds.</pre>
	 	<pre class="output"> Auto-regeneration: enabled for 'C:/Users/Pedro/Desktop/username.github.io'</pre>
	 	<pre class="output">    Server address: http://127.0.0.1:4000/</pre>
	 	<pre class="output">  Server running... press ctrl-c to stop.</pre>
	</div>
</div>

Your Jekyll server is now running and serving your blog at `127.0.0.1:4000` which is the localhost server. Type [127.0.0.1:4000](http://localhost:4000) in a browser and visit to see your blog. It should look something like this.

![Image of blog](assets/how-to-create-a-free-blog-with-github-pages-and-jekyll/site-first-run.jpg)

### 7. Writing your first post
In the directory containg your blog, navigate to the `_posts` folder. If it doesn't exist just create one. All your posts live here. The files use the pattern `YYY-MM-DD-name-of-post.md` for their naming scheme. Y is year, M is month, D is day. (ISO 8601 woop woop).

Here's a typical post:

{% highlight markdown linenos %}
--------
layout: post
title: " \"Welcome to Jekyll!\""
date:   2015-11-17 16:16:01 -0600
categories: jekyll update
--------

You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `bundle exec jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.
{% endhighlight %}

The text between the dotted lines is the information about the blog post. You specify the layout, the title, the date, the categories, etc, within this top area.

### 8. Host on Github Pages
Finally you have your first post up and running. You want to share it with the world. What do you do?

Remember that Github repository we created earlier? You'll be pushing all your code to that.

Close the `bundle exec jekyll serve` command if it's still running by typing `ctrl + c`. Initialize the directory as a local Git repo by running `git init`. Then stage the content by running `git add .` (Make sure the period is there). Commit everything with `git commit -m "Launching blog! 🚀"`. Customize the message as you wish. Finally, connect your local repo to the remote repo. Use the command `git remote add origin https://github.com/username/repo-name.git`. Replace repo-name with the name of the repository (in this case *username.github.io*). Push the local repo content to the remote repo by running the command `git push -u origin master`.


<div class="terminal-window">
	<div class="terminal-window-top flex"></div>
	<div class="terminal-content">
	 	<pre class="line"><span class="green">git</span> init</pre>
	 	<pre class="output">Initialized empty Git repository in C:/Users/Noah/Desktop/noahbres.github.io</pre>
	 	<pre class="line"><span class="green">git</span> add .</pre>
	 	<pre class="line"><span class="green">git</span> commit -m "Launching blog! 🚀"</pre>
	 	<pre class="output">[master (root-comit) 6612d7d] "Launching blog! 🚀"</pre>
	 	<pre class="output"> 1 file changed, 0 insertions(+), 0 deletions(-)</pre>
	 	<pre class="output"> create mode 100644 index.md</pre>
	 	<pre class="line"><span class="green">git</span> remote add origin https://github.com/NoahBres/noahbres.github.io</pre>
	 	<pre class="line"><span class="green">git</span> push -u origin master</pre>
	 	<pre class="output">Username for 'https://github.com': noahbres</pre>
	 	<pre class="output">Password for 'https://noahbres@github.com':</pre>
	 	<pre class="output">Counting objects: 3, done.</pre>
	 	<pre class="output">Writing objects: 100% (3/3), 22d bytes | 223.00 KiB/s, done.</pre>
	 	<pre class="output">Total 3 (delta 0), reused 0 (delta 0)</pre>
	 	<pre class="output">To https://github.com/NoahBres/noahbres.github.io</pre>
	 	<pre class="output"> * [new branch]       master -> master</pre>
	 	<pre class="output">Branch 'master' set up to track remote branch 'master' from 'origin'</pre>
	</div>
</div>

Congrats you're done! Github will now publish your page at the url *https://username.github.io*. It may take a few minutes for Github to get up and running though.

Want to get deeper into customizing Jekyll? Check out the [docs][jekyll-docs]. Enjoy your new blog?

Need any help? Happy to help on Twitter [@NoahBres][my-twitter]

<style>
	@keyframes bang {
	  from {
	    transform: translate3d(0, 0, 0);
	    opacity: 1;
	  }
	}

	.flair {
	  cursor: pointer;
	  position: relative;
	}

	.flair span {
		position: relative;
	}

	.flair span:after {
		content: '';
		position: absolute;
		bottom: -3px;
		left: 0;
		width: 100%;
		height: 3px;
		background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
		background-size: 400% 400%;
		animation: gradient 15s ease infinite;
	}

	.flair i {
	  position: absolute;
	  display: block;
	  left: 50%;
	  top: 15px;
	  width: 3px;
	  height: 5px;
	  background: red;
	  opacity: 0;
	}
	.flair:hover i:nth-of-type(1) {
	  transform: translate3d(30px, -56px, 0) rotate(204deg);
	  background: #ffbf00;
	  animation: bang 700ms ease-out forwards;
	  opacity: 0;
	}
	.flair:hover i:nth-of-type(2) {
	  transform: translate3d(63px, -57px, 0) rotate(198deg);
	  background: #008cff;
	  animation: bang 700ms ease-out forwards;
	  opacity: 0;
	}
	.flair:hover i:nth-of-type(3) {
	  transform: translate3d(-7px, -75px, 0) rotate(127deg);
	  background: #ff007b;
	  animation: bang 700ms ease-out forwards;
	  opacity: 0;
	}
	.flair:hover i:nth-of-type(4) {
	  transform: translate3d(-55px, -84px, 0) rotate(190deg);
	  background: #ff004d;
	  animation: bang 700ms ease-out forwards;
	  opacity: 0;
	}
	.flair:hover i:nth-of-type(5) {
	  transform: translate3d(-69px, -75px, 0) rotate(97deg);
	  background: #55ff00;
	  animation: bang 700ms ease-out forwards;
	  opacity: 0;
	}
	.flair:hover i:nth-of-type(6) {
	  transform: translate3d(71px, -85px, 0) rotate(354deg);
	  background: #ff0084;
	  animation: bang 700ms ease-out forwards;
	  opacity: 0;
	}
	.flair:hover i:nth-of-type(7) {
	  transform: translate3d(-10px, -93px, 0) rotate(179deg);
	  background: #a6ff00;
	  animation: bang 700ms ease-out forwards;
	  opacity: 0;
	}
	.flair:hover i:nth-of-type(8) {
	  transform: translate3d(28px, -53px, 0) rotate(339deg);
	  background: #1eff00;
	  animation: bang 700ms ease-out forwards;
	  opacity: 0;
	}
	.flair:hover i:nth-of-type(9) {
	  transform: translate3d(85px, -66px, 0) rotate(40deg);
	  background: #8800ff;
	  animation: bang 700ms ease-out forwards;
	  opacity: 0;
	}
	.flair:hover i:nth-of-type(10) {
	  transform: translate3d(59px, -56px, 0) rotate(43deg);
	  background: #ff9100;
	  animation: bang 700ms ease-out forwards;
	  opacity: 0;
	}
	.flair:hover i:nth-of-type(11) {
	  transform: translate3d(-79px, -98px, 0) rotate(268deg);
	  background: #6200ff;
	  animation: bang 700ms ease-out forwards;
	  opacity: 0;
	}
	.flair:hover i:nth-of-type(12) {
	  transform: translate3d(52px, -90px, 0) rotate(2deg);
	  background: #ff9d00;
	  animation: bang 700ms ease-out forwards;
	  opacity: 0;
	}
	.flair:hover i:nth-of-type(13) {
	  transform: translate3d(2px, -70px, 0) rotate(32deg);
	  background: #ff007b;
	  animation: bang 700ms ease-out forwards;
	  opacity: 0;
	}
	.flair:hover i:nth-of-type(14) {
	  transform: translate3d(-51px, -66px, 0) rotate(84deg);
	  background: #00fffb;
	  animation: bang 700ms ease-out forwards;
	  opacity: 0;
	}
	.flair:hover i:nth-of-type(15) {
	  transform: translate3d(9px, -57px, 0) rotate(334deg);
	  background: #99ff00;
	  animation: bang 700ms ease-out forwards;
	  opacity: 0;
	}
	.flair:hover i:nth-of-type(16) {
	  transform: translate3d(-7px, -62px, 0) rotate(313deg);
	  background: #33ff00;
	  animation: bang 700ms ease-out forwards;
	  opacity: 0;
	}
	.flair:hover i:nth-of-type(17) {
	  transform: translate3d(-48px, -94px, 0) rotate(51deg);
	  background: #ff0073;
	  animation: bang 700ms ease-out forwards;
	  opacity: 0;
	}
	.flair:hover i:nth-of-type(18) {
	  transform: translate3d(67px, -68px, 0) rotate(286deg);
	  background: #00ddff;
	  animation: bang 700ms ease-out forwards;
	  opacity: 0;
	}
	.flair:hover i:nth-of-type(19) {
	  transform: translate3d(69px, -62px, 0) rotate(6deg);
	  background: #4800ff;
	  animation: bang 700ms ease-out forwards;
	  opacity: 0;
	}
	.flair:hover i:nth-of-type(20) {
	  transform: translate3d(82px, -63px, 0) rotate(277deg);
	  background: #ff003c;
	  animation: bang 700ms ease-out forwards;
	  opacity: 0;
	}
	.flair:hover i:nth-of-type(21) {
	  transform: translate3d(49px, -74px, 0) rotate(91deg);
	  background: #005eff;
	  animation: bang 700ms ease-out forwards;
	  opacity: 0;
	}
	.flair:hover i:nth-of-type(22) {
	  transform: translate3d(-10px, -90px, 0) rotate(179deg);
	  background: #00ff48;
	  animation: bang 700ms ease-out forwards;
	  opacity: 0;
	}
	.flair:hover i:nth-of-type(23) {
	  transform: translate3d(64px, -64px, 0) rotate(111deg);
	  background: #00fff2;
	  animation: bang 700ms ease-out forwards;
	  opacity: 0;
	}
	.flair:hover i:nth-of-type(24) {
	  transform: translate3d(-4px, -92px, 0) rotate(205deg);
	  background: #00ff11;
	  animation: bang 700ms ease-out forwards;
	  opacity: 0;
	}
	.flair:hover i:nth-of-type(25) {
	  transform: translate3d(-41px, -75px, 0) rotate(313deg);
	  background: #fff700;
	  animation: bang 700ms ease-out forwards;
	  opacity: 0;
	}
	.flair:hover i:nth-of-type(26) {
	  transform: translate3d(-4px, -54px, 0) rotate(348deg);
	  background: #ffd900;
	  animation: bang 700ms ease-out forwards;
	  opacity: 0;
	}
	.flair:hover i:nth-of-type(27) {
	  transform: translate3d(25px, -64px, 0) rotate(85deg);
	  background: #ff6f00;
	  animation: bang 700ms ease-out forwards;
	  opacity: 0;
	}
	.flair:hover i:nth-of-type(28) {
	  transform: translate3d(74px, -77px, 0) rotate(157deg);
	  background: #ff4000;
	  animation: bang 700ms ease-out forwards;
	  opacity: 0;
	}
	.flair:hover i:nth-of-type(29) {
	  transform: translate3d(-8px, -52px, 0) rotate(52deg);
	  background: #ff00d9;
	  animation: bang 700ms ease-out forwards;
	  opacity: 0;
	}
	.flair:hover i:nth-of-type(30) {
	  transform: translate3d(-84px, -69px, 0) rotate(137deg);
	  background: #0400ff;
	  animation: bang 700ms ease-out forwards;
	  opacity: 0;
	}
	.flair:hover i:nth-of-type(31) {
	  transform: translate3d(31px, -82px, 0) rotate(50deg);
	  background: #00ffd0;
	  animation: bang 700ms ease-out forwards;
	  opacity: 0;
	}
	.flair:hover i:nth-of-type(32) {
	  transform: translate3d(81px, -93px, 0) rotate(76deg);
	  background: #002bff;
	  animation: bang 700ms ease-out forwards;
	  opacity: 0;
	}
	.flair:hover i:nth-of-type(33) {
	  transform: translate3d(-65px, -62px, 0) rotate(338deg);
	  background: #00ff7b;
	  animation: bang 700ms ease-out forwards;
	  opacity: 0;
	}
	.flair:hover i:nth-of-type(34) {
	  transform: translate3d(-66px, -88px, 0) rotate(292deg);
	  background: #ff4000;
	  animation: bang 700ms ease-out forwards;
	  opacity: 0;
	}
	.flair:hover i:nth-of-type(35) {
	  transform: translate3d(58px, -99px, 0) rotate(358deg);
	  background: #ff00f2;
	  animation: bang 700ms ease-out forwards;
	  opacity: 0;
	}
	.flair:hover i:nth-of-type(36) {
	  transform: translate3d(-80px, -63px, 0) rotate(300deg);
	  background: #00e6ff;
	  animation: bang 700ms ease-out forwards;
	  opacity: 0;
	}
	.flair:hover i:nth-of-type(37) {
	  transform: translate3d(-58px, -61px, 0) rotate(173deg);
	  background: #48ff00;
	  animation: bang 700ms ease-out forwards;
	  opacity: 0;
	}
	.flair:hover i:nth-of-type(38) {
	  transform: translate3d(-91px, -88px, 0) rotate(349deg);
	  background: #00ccff;
	  animation: bang 700ms ease-out forwards;
	  opacity: 0;
	}
	.flair:hover i:nth-of-type(39) {
	  transform: translate3d(11px, -83px, 0) rotate(160deg);
	  background: #b300ff;
	  animation: bang 700ms ease-out forwards;
	  opacity: 0;
	}
	.flair:hover i:nth-of-type(40) {
	  transform: translate3d(-34px, -52px, 0) rotate(344deg);
	  background: #77ff00;
	  animation: bang 700ms ease-out forwards;
	  opacity: 0;
	}
	.flair:hover i:nth-of-type(41) {
	  transform: translate3d(-74px, -55px, 0) rotate(309deg);
	  background: #ff002b;
	  animation: bang 700ms ease-out forwards;
	  opacity: 0;
	}
	.flair:hover i:nth-of-type(42) {
	  transform: translate3d(12px, -59px, 0) rotate(29deg);
	  background: #55ff00;
	  animation: bang 700ms ease-out forwards;
	  opacity: 0;
	}
	.flair:hover i:nth-of-type(43) {
	  transform: translate3d(40px, -66px, 0) rotate(122deg);
	  background: #ff0026;
	  animation: bang 700ms ease-out forwards;
	  opacity: 0;
	}
	.flair:hover i:nth-of-type(44) {
	  transform: translate3d(-57px, -90px, 0) rotate(308deg);
	  background: #59ff00;
	  animation: bang 700ms ease-out forwards;
	  opacity: 0;
	}
	.flair:hover i:nth-of-type(45) {
	  transform: translate3d(45px, -53px, 0) rotate(251deg);
	  background: #00a2ff;
	  animation: bang 700ms ease-out forwards;
	  opacity: 0;
	}
	.flair:hover i:nth-of-type(46) {
	  transform: translate3d(-26px, -71px, 0) rotate(178deg);
	  background: #ff0037;
	  animation: bang 700ms ease-out forwards;
	  opacity: 0;
	}
	.flair:hover i:nth-of-type(47) {
	  transform: translate3d(-9px, -55px, 0) rotate(110deg);
	  background: #00ff3c;
	  animation: bang 700ms ease-out forwards;
	  opacity: 0;
	}
	.flair:hover i:nth-of-type(48) {
	  transform: translate3d(9px, -61px, 0) rotate(323deg);
	  background: #ffc400;
	  animation: bang 700ms ease-out forwards;
	  opacity: 0;
	}
	.flair:hover i:nth-of-type(49) {
	  transform: translate3d(-80px, -65px, 0) rotate(339deg);
	  background: #9d00ff;
	  animation: bang 700ms ease-out forwards;
	  opacity: 0;
	}
	.flair:hover i:nth-of-type(50) {
	  transform: translate3d(-21px, -88px, 0) rotate(81deg);
	  background: #00ff99;
	  animation: bang 700ms ease-out forwards;
	  opacity: 0;
	}

	@keyframes gradient {
	0% {
		background-position: 0% 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0% 50%
	}
}
</style>

[jekyll-link]: https://jekyllrb.com
[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
[medium-link]: https://medium.com
[theme-link]: https://pages.github.com/themes/
[github-pages-link]: https://pages.github.com/
[github-signup-link]: https://github.com/join
[ruby-install-link]: https://rubyinstaller.org/
[jekyll-install-link]: https://jekyllrb.com/docs/installation/
[git-install-link]: https://git-scm.com/download/win
[git-macos-install-link]: https://git-scm.com/download/mac
[sublime-text-link]: https://www.sublimetext.com/
[my-twitter]: https://twitter.com/NoahBres