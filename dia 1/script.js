const panels = document.querySelectorAll('.panel');
panels.forEach((panel) => {
	panel.addEventListener('click', () => {
		removeActiveClasess();
		panel.classList.add('active');
	});
});

const removeActiveClasess = () => {
	panels.forEach((panel, index, arr) => {
		panel.classList.remove('active');
	});
};
