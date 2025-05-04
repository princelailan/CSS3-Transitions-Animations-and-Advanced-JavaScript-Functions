document.addEventListener('DOMContentLoaded', () => {
    const elements = {
        box: document.getElementById('animatedBox'),
        toggleButton: document.getElementById('toggleAnimation'),
        themeCycle: document.getElementById('themeCycle'),
        body: document.body
    };

    const themes = ['theme-1', 'theme-2', 'theme-3', 'theme-4'];
    let currentThemeIndex = 0;

    const loadPreferences = () => {
        const savedTheme = localStorage.getItem('theme');
        const savedAnimation = localStorage.getItem('animation');
        if (savedTheme && themes.includes(savedTheme)) {
            elements.body.classList.add(savedTheme);
            currentThemeIndex = themes.indexOf(savedTheme);
        } else {
            elements.body.classList.add(themes[0]);
        }
        if (savedAnimation === 'active') {
            elements.box.classList.add('animate');
            elements.toggleButton.querySelector('span').textContent = 'Stop Animation';
        }
    };

    const toggleAnimation = () => {
        elements.box.classList.toggle('animate');
        const isActive = elements.box.classList.contains('animate');
        elements.toggleButton.querySelector('span').textContent = isActive ? 'Stop Animation' : 'Activate Animation';
        localStorage.setItem('animation', isActive ? 'active' : 'inactive');
    };

    const cycleTheme = () => {
        elements.body.classList.remove(themes[currentThemeIndex]);
        currentThemeIndex = (currentThemeIndex + 1) % themes.length;
        elements.body.classList.add(themes[currentThemeIndex]);
        localStorage.setItem('theme', themes[currentThemeIndex]);
    };

    loadPreferences();
    elements.toggleButton.addEventListener('click', toggleAnimation);
    elements.themeCycle.addEventListener('click', cycleTheme);
});
