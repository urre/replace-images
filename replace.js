const CAGE = [
	'https://res.cloudinary.com/urre/image/upload/v1552595135/m5hovfcep9xonzxmmkmt.jpg',
	'https://www.gp.se/image/policy:1.38357377:1607605578/COMe9DyK3zbjThe5bueXoiULGFg-jpg.jpg?f=Wide&w=1024&$p$f$w=82834ac',
	'https://www.hollywoodreporter.com/wp-content/uploads/2022/03/20211211_AH_THR_ActorsRoundtable_1230-copy-SPLASH-2022.jpg?w=2000&h=1126&crop=1',
	'https://assets-prd.ignimgs.com/2022/07/19/nicolas-cage-in-con-air-1658251738731.jpg',
	'https://pyxis.nymag.com/v1/imgs/bef/c87/6359a2a35db664d45ac31794d122d4c8a7-15-nic-cage.rsocial.w1200.jpg'
]

const MEME = [
	'https://assets.entrepreneur.com/content/3x2/2000/20180703190744-rollsafe-meme.jpeg?width=700&crop=2:1',
	'http://ichef.bbci.co.uk/news/976/cpsprodpb/17CF4/production/_98842579_distracted_boyfriend.jpg',
	'https://res-3.cloudinary.com/revolttv/image/upload/w_800/c_crop,f_auto,fl_lossy.force_strip,q_auto:best,h_450,w_800,x_0,y_0/eda26h7gxnsjmxwhhwm5.jpg',
	'https://i.kym-cdn.com/entries/icons/original/000/016/546/hidethepainharold.jpg',
	'https://sayingimages.com/wp-content/uploads/Wtf-granma-meme.jpg.webp',
	'https://i.kym-cdn.com/entries/icons/facebook/000/018/012/this_is_fine.jpg',
	'https://imgflip.com/s/meme/Evil-Toddler.jpg'
]

const PLACEHOLDER = [
	'https://www.logistec.com/wp-content/uploads/2017/12/placeholder.png'
]

const PATTERN = ['https://source.unsplash.com/featured/300x201']

var SELECTED = ''


chrome.storage.sync.get(['key'], function(result) {
	console.log('Selected option is: ' + result.key)

	switch (result.key) {
		case 'MEME':
			SELECTED = MEME
			break
		case 'CAGE':
			SELECTED = CAGE
			break
		case 'PATTERN':
			SELECTED = PATTERN
			break
		case 'PLACEHOLDER':
			SELECTED = PLACEHOLDER
			break
		default:
			SELECTED = 'none'
	}
})

var images = document.querySelectorAll('a, img, picture, div, figure')

Array.prototype.randomElement = function() {
	return this[Math.floor(Math.random() * this.length)]
}

setTimeout(() => {

	if(SELECTED === 'none') return

	for (let img of images) {
		img.src = `${SELECTED.randomElement()}`
		img.style.objectFit = 'cover'
		img.style.objectPosition = '50%'

		if (img.getAttribute('srcset')) {
			img.setAttribute('srcset', `${SELECTED.randomElement()}`)
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
			img
				.querySelector('img')
				.setAttribute('srcset', `${SELECTED.randomElement()}`)
		}

		if (img.style.backgroundImage) {
			img.style.backgroundImage = `url(${SELECTED.randomElement()})`
		}
	}
}, 100)
