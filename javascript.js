function toggleDarkMode() {
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark'); // save dans le cache du navigateur
    updateThemeIcons();
}

function toggleLightMode() {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light'); // save dans le cache du navigateur
    updateThemeIcons();
}

function updateThemeIcons() {
    const darkBtn = document.getElementById('dark-mode');
    const lightBtn = document.getElementById('light-mode');
    if (document.body.classList.contains('dark-mode')) {
        if (darkBtn) darkBtn.style.display = 'none';
        if (lightBtn) lightBtn.style.display = 'inline-flex';
    } else {
        if (darkBtn) darkBtn.style.display = 'inline-flex';
        if (lightBtn) lightBtn.style.display = 'none';
    }
}

// Appliquer le thème au chargement
window.onload = () => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
    updateThemeIcons();
};
