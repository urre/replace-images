function setCategory() {
	var genders = document.getElementsByName('kind')
	var selectedGender

	for (var i = 0; i < genders.length; i++) {
		if (genders[i].checked) selectedGender = genders[i].value
	}

	chrome.storage.sync.set({ key: selectedGender }, function() {
		console.log('Value is set to ' + selectedGender)
	})
}

function retrieveOptions() {
	chrome.storage.sync.get(['key'], function(result) {
		console.log('Value currently is ' + result.key)
		return result.key
	})
}

document.addEventListener('DOMContentLoaded', function() {

	chrome.storage.sync.get(['key'], function(result) {
		console.log('Value currently is ' + result.key)

		radiobtn = document.getElementById(result.key)
		radiobtn.checked = true

	})


	var radios = document.querySelectorAll('input')

	for (radio of radios) {w
		radio.addEventListener('change', function() {
			setCategory()
		})
	}
})
