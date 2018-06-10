let didScroll = false;

const tocData = document.getElementById('toc-data');
let headings;
let lastHeading;

const fabElem = document.getElementById('fab-btn');
const mobileTopElem = document.getElementById('mobile-nav-top');
let fabDown = false;

if(tocData !== null) {
	// Add stuff to TOC sidebar
	document.getElementById('table-o-contents').innerHTML = tocData.innerHTML;
	document.getElementById('header-links').classList = '';
	document.getElementById('right-bar').classList = '';

	// Add stuff to mobile TOC
	document.getElementById('mobile-table-o-contents').innerHTML = tocData.innerHTML;
	document.getElementById('mobile-toc-script').style.display = 'block';
	document.getElementById('mobile-toc-noscript').style.display = 'none';

	tocData.parentNode.removeChild(tocData);

	// Headings scroll stuff
	headings = document.querySelector('article').querySelectorAll('h2, h3');
	lastHeading = null;
}

// Heading stuff
function checkHeadings() {
	let i = 0;
	for(i = headings.length - 1; i > 0; i--) {
		let rect = headings[i].getBoundingClientRect();
		if(rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) break;
	}

	if(lastHeading != headings[i]) {
		if(lastHeading != null) {
			let elems = document.querySelectorAll(`[href="#${lastHeading.id}"]`);
			for(let i = 0; i < elems.length; i++) {
				elems[i].classList = '';
			}
		}

		lastHeading = headings[i];
		
		let elems = document.querySelectorAll(`[href="#${lastHeading.id}"]`);
		for(let i = 0; i < elems.length; i++) {
			elems[i].classList = 'active';
		}
	}
} 

function fabButton() {
	if(getScrollPercent() > 50) {
		if(!fabDown) {
			fabDown = true;
			fabElem.href = "#top";
			fabElem.classList = 'flex up';

			mobileTopElem.href = '#top';
			mobileTopElem.classList = 'up';
		}
	} else {
		if(fabDown) {
			fabDown = false;
			fabElem.href = "#footer";
			fabElem.classList = 'flex';

			mobileTopElem.href = '#footer';
			mobileTopElem.classList = '';
		}
	}

	let windowWidth = window.innerWidth
	|| document.documentElement.clientWidth
	|| document.body.clientWidth;

	if(windowWidth > 500) {
		let angle = getScrollPercent() / 100 * 360 - 0.1;
		let paddedRadius = 50 + 1;
		let radians = (angle * Math.PI / 180);
		let x = Math.sin(radians) * paddedRadius;
		let y = Math.cos(radians) * -paddedRadius;
		let mid = (angle > 180) ? 1 : 0;
		let pathData = 'M 0 0 v -%@ A %@ %@ 1 '.replace(/%@/gi, paddedRadius)
						+ mid + ' 1 '
						+ x + ' '
						+ y + ' z';

		let bar = document.getElementsByClassName('progress-radial-bar')[0];
		bar.setAttribute('d', pathData);
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

window.addEventListener('load', function() {
	if(tocData !== null)
		checkHeadings();

	fabButton();
});

setInterval(function() {
	if(didScroll) {
		//console.log(getScrollPercent());
		if(tocData !== null)
			checkHeadings();
		
		fabButton();

		didScroll = false;
	}
})