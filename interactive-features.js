// ==============================================
// FONCTIONNALITÉS INTERACTIVES POUR INDEX.HTML
// ==============================================

// Animation des statistiques
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');

    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const duration = 2000; // 2 secondes
        const increment = target / (duration / 16); // 60 FPS
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                stat.textContent = target;
                clearInterval(timer);
            } else {
                stat.textContent = Math.floor(current);
            }
        }, 16);
    });
}

// Timeline Interactive
function initTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineContainer = document.querySelector('.timeline-container');

    // Animation au scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.3 });

    timelineItems.forEach(item => {
        observer.observe(item);
    });

    // Navigation par année
    timelineItems.forEach(item => {
        item.addEventListener('click', () => {
            // Retirer la classe active de tous les items
            timelineItems.forEach(i => i.classList.remove('active'));
            // Ajouter la classe active à l'item cliqué
            item.classList.add('active');

            // Animation de scroll vers l'item
            item.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        });
    });
}

// Quiz Interactif
let currentQuestionIndex = 0;
let score = 0;

const quizData = [
    {
        question: "Quelle est la principale cause des arnaques au Sénégal ?",
        options: [
            "Les appels téléphoniques frauduleux",
            "Les emails de phishing",
            "Les faux comptes sur les réseaux sociaux",
            "Les virus informatiques"
        ],
        correct: 2,
        explanation: "Les faux comptes sur Facebook, WhatsApp et autres réseaux sociaux sont devenus le principal vecteur d'arnaques au Sénégal."
    },
    {
        question: "Que devez-vous faire si vous recevez un message suspect ?",
        options: [
            "Cliquer sur le lien pour vérifier",
            "Répondre immédiatement",
            "Vérifier auprès de la source officielle",
            "Partager avec vos amis"
        ],
        correct: 2,
        explanation: "Toujours vérifier auprès de la source officielle avant de prendre toute action."
    },
    {
        question: "Quel est le danger principal du WiFi public ?",
        options: [
            "La vitesse de connexion lente",
            "L'interception de vos données",
            "Les publicités intrusives",
            "La batterie qui se décharge vite"
        ],
        correct: 1,
        explanation: "Le WiFi public peut être contrôlé par des hackers qui interceptent toutes vos données."
    },
    {
        question: "Pourquoi l'authentification à deux facteurs (2FA) est-elle importante ?",
        options: [
            "Elle rend la connexion plus lente",
            "Elle protège même si votre mot de passe est compromis",
            "Elle coûte de l'argent",
            "Elle n'est pas nécessaire"
        ],
        correct: 1,
        explanation: "Le 2FA ajoute une couche de sécurité supplémentaire même si votre mot de passe est volé."
    },
    {
        question: "Que faire en cas de suspicion d'arnaque sur mobile money ?",
        options: [
            "Continuer la transaction",
            "Arrêter immédiatement et contacter votre opérateur",
            "Demander conseil à vos amis",
            "Ignorer et continuer"
        ],
        correct: 1,
        explanation: "Arrêtez immédiatement et contactez votre opérateur pour signaler l'incident."
    }
];

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
    document.getElementById('progress-text').textContent = `Question 1/5`;
    document.getElementById('progress-fill').style.width = '0%';
}

function showQuestion() {
    const questionElement = document.getElementById('question-text');
    const optionsElement = document.getElementById('quiz-options');

    if (currentQuestionIndex < quizData.length) {
        const currentQuestion = quizData[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;

        optionsElement.innerHTML = '';
        currentQuestion.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'quiz-option';
            button.textContent = option;
            button.onclick = () => selectAnswer(index);
            optionsElement.appendChild(button);
        });

        // Animation d'entrée
        setTimeout(() => {
            optionsElement.classList.add('show');
        }, 100);
    } else {
        showResult();
    }
}

function selectAnswer(selectedIndex) {
    const currentQuestion = quizData[currentQuestionIndex];
    const options = document.querySelectorAll('.quiz-option');

    // Désactiver tous les boutons
    options.forEach(option => option.disabled = true);

    // Colorer la réponse sélectionnée
    if (selectedIndex === currentQuestion.correct) {
        options[selectedIndex].classList.add('correct');
        score++;
    } else {
        options[selectedIndex].classList.add('incorrect');
        options[currentQuestion.correct].classList.add('correct');
    }

    // Afficher l'explication après un délai
    setTimeout(() => {
        alert(currentQuestion.explanation);
        currentQuestionIndex++;
        updateProgress();
        showQuestion();
    }, 1000);
}

function updateProgress() {
    const progress = ((currentQuestionIndex) / quizData.length) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
    document.getElementById('progress-text').textContent = `Question ${Math.min(currentQuestionIndex + 1, 5)}/5`;
}

function showResult() {
    const resultDiv = document.getElementById('quiz-result');
    const titleElement = document.getElementById('result-title');
    const messageElement = document.getElementById('result-message');

    document.getElementById('quiz-options').style.display = 'none';
    document.getElementById('question-text').style.display = 'none';
    resultDiv.style.display = 'block';

    const percentage = (score / quizData.length) * 100;

    if (percentage >= 80) {
        titleElement.textContent = '🎉 Excellent ! Vous êtes un expert !';
        messageElement.textContent = `Score : ${score}/${quizData.length} (${percentage}%). Vous maîtrisez bien les bases de la cybersécurité !`;
    } else if (percentage >= 60) {
        titleElement.textContent = '👍 Bon travail !';
        messageElement.textContent = `Score : ${score}/${quizData.length} (${percentage}%). Vous avez de bonnes connaissances, mais il y a encore des points à améliorer.`;
    } else {
        titleElement.textContent = '📚 À améliorer';
        messageElement.textContent = `Score : ${score}/${quizData.length} (${percentage}%). N'hésitez pas à consulter nos ressources pour en apprendre davantage sur la cybersécurité.`;
    }
}

function restartQuiz() {
    document.getElementById('quiz-result').style.display = 'none';
    document.getElementById('quiz-options').style.display = 'flex';
    document.getElementById('question-text').style.display = 'block';
    startQuiz();
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    // Observer pour déclencher l'animation des stats
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.stats-grid');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }

    // Initialiser la timeline
    initTimeline();
});
// Gestion du menu hamburger sur toutes les pages
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const primaryNav = document.getElementById('primary-navigation');

    if (navToggle && primaryNav) {
        navToggle.addEventListener('click', () => {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !isExpanded);
            primaryNav.classList.toggle('active');
        });

        document.querySelectorAll('#primary-navigation .nav-link').forEach(function(link) {
            link.addEventListener('click', function() {
                primaryNav.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }
});
  
