(function() {
	// Create a div to print the window size to
	const __ffr_boxToPrintSizeOn = document.createElement('DIV');

	// Set styles
	const __ffr_styles = {
		backgroundColor: '#393939',
		borderRadius: '0 0 7px 7px',
		color: '#fafafa',
		fontSize: '14px',
		left: '50%',
		maxHeight: '70px',
		maxWidth: '140px',
		opacity: '0',
		padding: '7px 14px',
		pointerEvents: 'none',
		position: 'absolute',
		top: '0',
		transform: 'translateX(-50%)',
		transition: 'opacity 0.35s ease-out',
		zIndex: '999'
	}

	// Apply styles
	Object.entries(__ffr_styles).forEach(([key, value]) => {
		__ffr_boxToPrintSizeOn.style[key] = value;
	});

	// Append box to body
	document.body.appendChild(__ffr_boxToPrintSizeOn);

	// Listen for resize changes and print out the window size
	let __ffr_timeout = null;
	window.addEventListener('resize', () => {
		__ffr_boxToPrintSizeOn.style.opacity = 1;
		__ffr_boxToPrintSizeOn.innerText = `${window.innerWidth} x ${window.innerHeight}`;

		// Hide box after a short delay
		__ffr_timeout = __ffr_timeout || setTimeout(() => {
			__ffr_boxToPrintSizeOn.style.opacity = '0';
			clearTimeout(__ffr_timeout);
			__ffr_timeout = null;
		}, 1000);
	});
})();