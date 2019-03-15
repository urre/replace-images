CAGE = [
		'https://res.cloudinary.com/urre/image/upload/v1552595135/m5hovfcep9xonzxmmkmt.jpg',
		'https://cdn3.spiegel.de/images/image-33406-galleryV9-sdjn-33406.jpg',
		'https://www.haz.de/var/storage/images/haz/nachrichten/panorama/uebersicht/schauspieler-nicolas-cage-muss-angeblich-wegen-steuerschulden-zur-miete-wohnen/251391452-1-ger-DE/Nicolas-Cage-wohnt-zur-Miete_big_teaser_article.jpg',
		'https://www.desktop-background.com/download/o/2011/12/14/312126_nicolas-cage-wallpapers_1920x1080_h.jpg',
		'https://cdn.japantimes.2xx.jp/wp-content/uploads/2015/12/f-cage-a-20151224-870x579.jpg'
	]

MEME = [
	'https://assets.entrepreneur.com/content/3x2/2000/20180703190744-rollsafe-meme.jpeg?width=700&crop=2:1',
	'http://ichef.bbci.co.uk/news/976/cpsprodpb/17CF4/production/_98842579_distracted_boyfriend.jpg',
	'https://res-3.cloudinary.com/revolttv/image/upload/w_800/c_crop,f_auto,fl_lossy.force_strip,q_auto:best,h_450,w_800,x_0,y_0/eda26h7gxnsjmxwhhwm5.jpg',
	'https://i.kym-cdn.com/entries/icons/original/000/016/546/hidethepainharold.jpg'
]

PLACEHOLDER = [
	'https://www.logistec.com/wp-content/uploads/2017/12/placeholder.png'
]

PATTERN = [
	'https://designshack.net/wp-content/uploads/svg-background.jpg'
]

CONSID = [
	'https://imengine.hall.infomaker.io/imengine/image.php?uuid=0026e3ba-5805-5c0e-b588-c94eb018423a&type=preview&source=false&function=hardcrop&width=980&height=653&q=80',
	'https://imengine.lrf.infomaker.io/?uuid=47027ac4-74b6-467e-b201-e60b6b669398&type=preview&source=&function=fit&width=630&height=434&q=80&maxsize=630&name=consid2-jpg',
	'https://marknadsforeningen.org/wp-content/uploads/2017/08/consid-forvarvar-imentum-2016-08-12-085752.jpg',
	'http://ssk.lokalnytt.se/uploads/images/20227/2453_full.jpg'
]

if (typeof SELECTED === 'undefined') {
	let SELECTED = null
} else {
	SELECTED = null
}

	chrome.storage.sync.get(['key'], function(result) {
		console.log('Selected option is: ' + result.key)

		switch(result.key) {
			case 'MEME':
				SELECTED = MEME
				break;
			case 'CAGE':
				SELECTED = CAGE
				break;
			case 'PATTERN':
				SELECTED = PATTERN
				break;
			case 'PLACEHOLDER':
				SELECTED = PLACEHOLDER
				break;
			case 'CONSID':
				SELECTED = CONSID
				break;
		}

	})


images = document.querySelectorAll('img, picture, div, figure')

Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
}

setTimeout(() => {

for (let img of images) {
	if (img.tagName === 'IMG') {
		img.src = `${SELECTED.randomElement()}`
		img.style.objectFit = 'cover'
		img.style.objectPosition = '50%'

		if (img.getAttribute('srcset')) {
			img.setAttribute('srcset', `${SELECTED.randomElement()}`)
		}
	}

	if (img.tagName === 'PICTURE') {
		if (img.querySelector('source')) {
			const sources = img.querySelectorAll('source')

			for (source of sources) {
				if (source.hasAttribute('srcset')) {
					source.setAttribute('srcset', `${SELECTED.randomElement()}`)
				}
			}
		}
	}

	if (
		img.querySelector('img') &&
		img.querySelector('img').getAttribute('srcset')
	) {
		img.querySelector('img').setAttribute('srcset', `${SELECTED.randomElement()}`)
	}
	if (img.style.backgroundImage) {
		img.style.backgroundImage = `url(${SELECTED.randomElement()})`
	}
}

}, 600)
