let tocData = document.getElementById('toc-data');


if(tocData !== null) {
	// Add stuff to TOC sidebar
	document.getElementById('table-o-contents').innerHTML = tocData.innerHTML;
	document.getElementById('header-links').classList = '';
	document.getElementById('right-bar').classList = '';

	tocData.parentNode.removeChild(tocData);

	// Headings scroll stuff
	let headings = document.querySelector('article').querySelectorAll('h2, h3');
	let lastHeading = null;

	// Scroll stuff
	let didScroll = false;

	// Heading stuff
	function checkHeadings() {
		let i = 0;
		for(i = headings.length - 1; i > 0; i--) {
			let rect = headings[i].getBoundingClientRect();
			if(rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) break;
		}

		if(lastHeading != headings[i]) {
			if(lastHeading != null)
				document.querySelector(`[href="#${lastHeading.id}"]`).classList = '';

			lastHeading = headings[i];
			
			let element = document.querySelector(`[href="#${lastHeading.id}"]`);
			element.classList = 'active';
		}
	}

	function getScrollPercent() {
		let h = document.documentElement, 
    		b = document.body,
    		st = 'scrollTop',
    		sh = 'scrollHeight';

			return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
	}

	window.addEventListener('scroll', function() {
		didScroll = true;
	});

	setInterval(function() {
		if(didScroll) {
			//console.log(getScrollPercent());
			checkHeadings();

			didScroll = false;
		}
	})
}