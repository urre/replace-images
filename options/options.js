const setCategory = () => {
	const categories = document.getElementsByName('kind')
	var selected

	for(const category of categories) {
		if(category.checked)
			selected = category.value
	}

	chrome.storage.sync.set({ key: selected }, function() {
		console.log(selected)
	})
}

document.addEventListener('DOMContentLoaded', () => {
	chrome.storage.sync.get(['key'], function(result) {
		console.log(result)

		let radiobtn = document.getElementById(result.key)
		radiobtn.checked = true
	})

	var radios = document.querySelectorAll('input')

	for (radio of radios) {
		radio.addEventListener('change', function() {
			setCategory()
		})
	}
})
