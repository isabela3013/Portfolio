document.addEventListener('DOMContentLoaded', () => {
    const languageToggle = document.getElementById('language-toggle');
    const elementsToTranslate = document.querySelectorAll('[data-en], [data-es], [data-en-placeholder], [data-es-placeholder]');

    let currentLanguage = 'en'; // Default language

    const updateText = () => {
        elementsToTranslate.forEach(element => {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                const placeholder = element.getAttribute(`data-${currentLanguage}-placeholder`);
                if (placeholder) {
                    element.setAttribute('placeholder', placeholder);
                }
            } else {
                const text = element.getAttribute(`data-${currentLanguage}`);
                if (text) {
                    element.textContent = text;
                }
            }
        });
        languageToggle.textContent = currentLanguage === 'en' ? 'ES' : 'EN';
        document.documentElement.lang = currentLanguage; // Update HTML lang attribute for accessibility
    };

    languageToggle.addEventListener('click', () => {
        currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
        updateText();
    });

    // Initial update on page load
    updateText();
});