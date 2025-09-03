document.addEventListener('DOMContentLoaded', () => {
    const btnJoinUs = document.getElementById('btnJoinUs');
    if (btnJoinUs) {
        btnJoinUs.addEventListener('click', (e) => {
            e.preventDefault();
            // Navigate to join-us.html page explicitly
            window.location.href = 'join-us.html';
        });
    }

    // Gestion du formulaire de contact
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            // Le formulaire utilise Formspree, donc on laisse la soumission normale se produire
            // Mais on peut ajouter des effets visuels effrayants lors de la soumission
            const submitBtn = contactForm.querySelector('.btn-primary');
            submitBtn.innerHTML = '<i class="fas fa-ghost"></i> Envoi en cours...';
            submitBtn.style.animation = 'pulse 1s infinite';

            // Après un court délai, restaurer le bouton (au cas où la soumission échoue)
            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Envoyer';
                submitBtn.style.animation = '';
            }, 3000);
        });
    }

    // Effets sonores effrayants (optionnel - nécessite des fichiers audio)
    // Vous pouvez ajouter des effets sonores ici si vous avez des fichiers audio

    // Animation des éléments au défilement
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observer les éléments avec animation
    document.querySelectorAll('.condition-item').forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(item);
    });
});
