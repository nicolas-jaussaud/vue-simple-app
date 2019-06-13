window.addEventListener('load', () => {

	let menuToggle 	= document.getElementById('sw-menu-toggle')
	let menuList	= document.getElementById('sw-menu-side')
	let menuOpen	= false

	menuToggle.addEventListener('click', () => {

		if(menuOpen === false) {
			TweenMax.fromTo(menuList, 0.25, 
				{position: 'absolute', left: '-100%'}, 
				{position: 'absolute',left: '0'}
			)
		}
		else{
			TweenMax.fromTo(menuList, 0.25, 
				{position: 'absolute',left: '-1'}, 
				{position: 'absolute',left: '-100%'}
			)
		}
		menuOpen = !menuOpen
	})
})