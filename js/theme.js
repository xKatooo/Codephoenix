const btnSwitch = document.querySelector('#switch');


btnSwitch.addEventListener('click', () => {
	document.body.classList.toggle('dark');
	btnSwitch.classList.toggle('active');

	// Guardar el modo del tema en localstorage
	if (document.body.classList.contains('dark')) {
		localStorage.setItem('dark-mode', 'true');
	}else{
		localStorage.setItem('dark-mode', 'false');
	}

});

 // modo actual
	if (localStorage.getItem('dark-mode') === 'true') {
		document.body.classList.toggle('dark');
		btnSwitch.classList.toggle('active');
	}else{
		document.body.classList.remove('dark');
		btnSwitch.classList.remove('active');
	}