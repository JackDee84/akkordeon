
// Wähle alle Elemente mit der Klasse .BTN aus
const btns = document.querySelectorAll('.BTN');

// Iteriere über alle ausgewählten Elemente und füge den Event-Listener hinzu
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const cardplus = btn.nextElementSibling; // Wähle das nächste Element nach .BTN aus
        //mit nextElementSibling umgehe ich querySelector weil querySelector nicht funktioniert bei mehreren Tags. :)

        cardplus.classList.toggle('cardminus');

        const plus = btn.querySelector('.plus');
        const minus = btn.querySelector('.minus');

        // Ändern der Sichtbarkeit der Symbole basierend auf dem Zustand der cardplus-Klasse
        if (cardplus.classList.contains('cardminus')) {
            plus.style.display = 'block';
            minus.style.display = 'none';
        } else {
            plus.style.display = 'none';
            minus.style.display = 'block';
        }
    });
});