document.addEventListener('DOMContentLoaded', (event) => {
    const toggleDarkModeButton = document.getElementById('toggle-dark-mode');

    toggleDarkModeButton.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
    });

    const widgets = document.querySelectorAll('.widget');
    widgets.forEach(widget => {
        widget.addEventListener('click', () => {
            const details = widget.querySelector('.details');
            if (details.style.display === 'block') {
                details.style.display = 'none';
            } else {
                details.style.display = 'block';
            }
        });
    });
});

