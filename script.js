const appData = {
    threats: [
        {
            id: 1,
            term: "Phishing (Hameçonnage)",
            definition: "Technique d'arnaque où les criminels se font passer pour des organismes de confiance pour voler vos informations personnelles.",
            example: "SMS prétendant venir d'Orange Money : 'Votre compte sera bloqué dans 24h, cliquez ici pour le débloquer'. Le lien mène vers un faux site qui ressemble à Orange Money.",
            prevention: "• Vérifiez toujours l'expéditeur\n• Orange Money ne demande jamais vos codes par SMS\n• Contactez directement Orange en cas de doute\n• Ne cliquez jamais sur des liens suspects",
            severity: "high",
            keywords: ["sms", "orange money", "lien", "hameçonnage"]
        },
        {
            id: 2,
            term: "Scam (Arnaque)",
            definition: "Escroquerie en ligne pour soutirer de l'argent ou des informations personnelles en utilisant diverses techniques de manipulation.",
            example: "Appel d'un faux agent Wave qui se présente comme technicien et demande votre code PIN pour 'vérifier la sécurité de votre compte'.",
            prevention: "• Aucun opérateur légitime ne demande votre code PIN\n• Raccrochez et appelez le service client officiel\n• Ne donnez jamais vos codes personnels\n• Méfiez-vous des appels non sollicités",
            severity: "high",
            keywords: ["wave", "code pin", "appel", "agent"]
        },
        {
            id: 3,
            term: "Malware (Logiciel malveillant)",
            definition: "Programme informatique conçu pour endommager, infiltrer ou prendre le contrôle de votre appareil sans votre permission.",
            example: "Application 'WhatsApp Gold' ou 'WhatsApp Plus' téléchargée en dehors du Play Store qui promet des fonctionnalités supplémentaires mais vole vos messages et contacts.",
            prevention: "• Téléchargez uniquement depuis Play Store ou App Store\n• Évitez les APK de sources inconnues\n• Maintenez vos applications à jour\n• Utilisez un antivirus mobile",
            severity: "medium",
            keywords: ["whatsapp", "application", "play store", "apk"]
        },
        {
            id: 4,
            term: "Ingénierie sociale",
            definition: "Technique de manipulation psychologique utilisée pour obtenir des informations confidentielles ou faire réaliser des actions compromettantes.",
            example: "Quelqu'un se présente au téléphone comme technicien Sonatel et demande votre mot de passe WiFi pour 'améliorer la connexion' ou 'résoudre un problème technique'.",
            prevention: "• Demandez toujours une identification officielle\n• Vérifiez auprès de l'entreprise directement\n• Ne donnez jamais d'infos sensibles par téléphone\n• Soyez sceptique face aux urgences",
            severity: "high",
            keywords: ["sonatel", "wifi", "technicien", "mot de passe"]
        },
        {
            id: 5,
            term: "Wi-Fi piège (Evil Twin)",
            definition: "Réseau WiFi malveillant créé par des cybercriminels pour ressembler à un hotspot légitime et intercepter vos données.",
            example: "Hotspot 'WiFi gratuit Café de Rome' ou 'Teranga WiFi' dans un lieu public où ces établissements n'offrent pas réellement le WiFi gratuit.",
            prevention: "• Vérifiez toujours avec l'établissement\n• Évitez les réseaux ouverts pour des transactions\n• Utilisez votre data mobile si possible\n• Activez le VPN sur réseaux publics",
            severity: "medium",
            keywords: ["wifi", "hotspot", "café", "gratuit"]
        },
        {
            id: 6,
            term: "Ransomware (Rançongiciel)",
            definition: "Type de malware qui chiffre vos fichiers et demande une rançon pour les débloquer.",
            example: "Votre téléphone se bloque subitement avec un message : 'Vos fichiers sont chiffrés. Envoyez 50 000 CFA en mobile money pour récupérer vos photos et contacts'.",
            prevention: "• Sauvegardez régulièrement vos données\n• Ne téléchargez pas d'applications douteuses\n• Maintenez votre système à jour\n• Ne payez jamais de rançon",
            severity: "high",
            keywords: ["chiffré", "rançon", "fichiers", "mobile money"]
        },
        {
            id: 7,
            term: "Smishing (SMS Phishing)",
            definition: "Phishing réalisé par SMS pour voler des informations ou de l'argent.",
            example: "SMS : 'Félicitations ! Vous avez gagné 500 000 CFA à la loterie Senegal. Envoyez 5000 CFA de frais pour débloquer votre gain'.",
            prevention: "• Aucune loterie légitime ne demande de frais\n• Ignorez les gains non sollicités\n• Bloquez les numéros suspects\n• Signalez aux autorités",
            severity: "high",
            keywords: ["sms", "loterie", "gain", "frais"]
        },
        {
            id: 8,
            term: "SIM Swapping",
            definition: "Technique où un criminel transfère votre numéro de téléphone vers sa propre carte SIM pour accéder à vos comptes.",
            example: "Vous perdez subitement le signal téléphonique, puis recevez des notifications de connexions à vos comptes bancaires que vous n'avez pas effectuées.",
            prevention: "• Protégez vos informations personnelles\n• Utilisez l'authentification à double facteur\n• Contactez immédiatement votre opérateur si perte de signal\n• Surveillez vos comptes régulièrement",
            severity: "high",
            keywords: ["sim", "numéro", "signal", "opérateur"]
        },
        {
            id: 9,
            term: "Hacking (Piratage informatique)",
            definition: "Accès non autorisé à un système informatique pour voler, modifier ou détruire des données.",
            example: "Un hacker accède à votre compte bancaire en ligne après avoir deviné votre mot de passe faible.",
            prevention: "• Utilisez des mots de passe forts et uniques\n• Activez l'authentification à deux facteurs\n• Mettez à jour vos logiciels régulièrement\n• Évitez les réseaux WiFi publics pour les transactions sensibles",
            severity: "high",
            keywords: ["hacking", "piratage", "mot de passe", "système"]
        },
        {
            id: 10,
            term: "Virus informatique",
            definition: "Programme malveillant qui se propage en infectant d'autres programmes et qui peut endommager ou détruire des données.",
            example: "Un email contenant un fichier infecté que vous ouvrez, qui ensuite supprime tous vos documents.",
            prevention: "• N'ouvrez pas les pièces jointes d'emails suspects\n• Utilisez un antivirus à jour\n• Évitez de télécharger des fichiers de sources inconnues\n• Sauvegardez vos données régulièrement",
            severity: "medium",
            keywords: ["virus", "email", "pièce jointe", "antivirus"]
        },
        {
            id: 11,
            term: "Trojan (Cheval de Troie)",
            definition: "Logiciel malveillant qui se fait passer pour un programme légitime pour infiltrer votre système.",
            example: "Une fausse mise à jour de Windows qui installe un logiciel espion sur votre ordinateur.",
            prevention: "• Téléchargez uniquement depuis des sources officielles\n• Vérifiez les signatures numériques\n• Utilisez un firewall\n• Soyez vigilant avec les téléchargements",
            severity: "high",
            keywords: ["trojan", "cheval de troie", "logiciel espion", "mise à jour"]
        },
        {
            id: 12,
            term: "Spyware (Logiciel espion)",
            definition: "Logiciel qui surveille secrètement vos activités et collecte des informations sans votre consentement.",
            example: "Une application gratuite qui enregistre vos frappes au clavier pour voler vos mots de passe.",
            prevention: "• Installez un logiciel anti-spyware\n• Lisez les conditions d'utilisation avant installation\n• Évitez les applications douteuses\n• Utilisez un VPN pour la navigation",
            severity: "medium",
            keywords: ["spyware", "logiciel espion", "surveillance", "mot de passe"]
        },
        {
            id: 13,
            term: "Adware (Logiciel publicitaire)",
            definition: "Logiciel qui affiche des publicités indésirables et peut ralentir votre système.",
            example: "Une extension de navigateur qui remplit votre écran de pop-ups publicitaires.",
            prevention: "• Désactivez les extensions suspectes\n• Utilisez un bloqueur de publicités\n• Évitez les téléchargements gratuits\n• Nettoyez régulièrement votre navigateur",
            severity: "low",
            keywords: ["adware", "publicité", "extension", "navigateur"]
        },
        {
            id: 14,
            term: "Rootkit",
            definition: "Ensemble d'outils qui permettent à un attaquant de maintenir un accès privilégié à un système compromis.",
            example: "Un malware qui se cache dans le système d'exploitation et permet à un hacker de contrôler votre ordinateur à distance.",
            prevention: "• Maintenez votre système d'exploitation à jour\n• Utilisez des outils de détection de rootkits\n• Évitez les sites web suspects\n• Utilisez un antivirus avancé",
            severity: "high",
            keywords: ["rootkit", "accès privilégié", "système", "contrôle"]
        },
        {
            id: 15,
            term: "Keylogger (Enregistreur de frappe)",
            definition: "Logiciel ou matériel qui enregistre les touches frappées sur un clavier pour voler des informations sensibles.",
            example: "Un dispositif USB connecté à votre ordinateur qui capture vos mots de passe bancaires.",
            prevention: "• Utilisez un clavier virtuel pour les informations sensibles\n• Installez un logiciel anti-keylogger\n• Soyez vigilant avec les périphériques USB\n• Utilisez l'authentification biométrique",
            severity: "high",
            keywords: ["keylogger", "enregistreur", "frappe", "mot de passe"]
        },
        {
            id: 16,
            term: "Botnet",
            definition: "Réseau d'appareils infectés contrôlés à distance par un cybercriminel.",
            example: "Des milliers d'ordinateurs zombies utilisés pour envoyer des spams ou lancer des attaques DDoS.",
            prevention: "• Protégez votre réseau domestique\n• Utilisez un firewall\n• Mettez à jour vos appareils\n• Évitez les infections par malware",
            severity: "high",
            keywords: ["botnet", "réseau", "zombie", "ddos"]
        },
        {
            id: 17,
            term: "DDoS (Déni de service distribué)",
            definition: "Attaque qui surcharge un serveur avec un trafic massif pour le rendre indisponible.",
            example: "Un site web de e-commerce sénégalais rendu inaccessible pendant des heures par une attaque coordonnée.",
            prevention: "• Utilisez des services de protection DDoS\n• Surveillez le trafic réseau\n• Ayez un plan de continuité\n• Utilisez des CDN",
            severity: "medium",
            keywords: ["ddos", "déni de service", "serveur", "trafic"]
        },
        {
            id: 18,
            term: "Man-in-the-Middle (Attaque de l'homme du milieu)",
            definition: "Attaque où un tiers intercepte et potentiellement modifie les communications entre deux parties.",
            example: "Sur un WiFi public, un attaquant intercepte vos données bancaires pendant une transaction en ligne.",
            prevention: "• Utilisez HTTPS pour toutes les transactions\n• Évitez les réseaux WiFi publics\n• Utilisez un VPN\n• Vérifiez les certificats SSL",
            severity: "high",
            keywords: ["man-in-the-middle", "interception", "communication", "wifi"]
        },
        {
            id: 19,
            term: "Zero-Day Exploit",
            definition: "Exploitation d'une vulnérabilité inconnue des développeurs du logiciel.",
            example: "Un hacker découvre une faille dans une application populaire avant que les développeurs ne la corrigent.",
            prevention: "• Mettez à jour immédiatement les logiciels\n• Utilisez des solutions de sécurité avancées\n• Évitez les logiciels obsolètes\n• Soyez prudent avec les nouvelles applications",
            severity: "high",
            keywords: ["zero-day", "exploit", "vulnérabilité", "faille"]
        },
        {
            id: 20,
            term: "Cryptojacking",
            definition: "Utilisation non autorisée des ressources informatiques d'autrui pour miner des cryptomonnaies.",
            example: "Un site web infecté qui utilise le processeur de votre ordinateur pour miner du Bitcoin sans votre connaissance.",
            prevention: "• Utilisez un bloqueur de scripts\n• Surveillez l'utilisation du CPU\n• Installez des extensions anti-cryptojacking\n• Évitez les sites suspects",
            severity: "medium",
            keywords: ["cryptojacking", "cryptomonnaie", "miner", "processeur"]
        },
        {
            id: 21,
            term: "Deepfake",
            definition: "Contenu multimédia falsifié utilisant l'intelligence artificielle pour faire croire à une réalité inexistante.",
            example: "Une vidéo falsifiée montrant un homme politique sénégalais disant des choses qu'il n'a jamais dites.",
            prevention: "• Vérifiez les sources d'information\n• Utilisez des outils de détection de deepfakes\n• Soyez sceptique face aux vidéos virales\n• Croisez les informations",
            severity: "medium",
            keywords: ["deepfake", "intelligence artificielle", "vidéo", "falsification"]
        },
        {
            id: 22,
            term: "Pharming",
            definition: "Technique qui redirige les utilisateurs vers des sites web frauduleux en manipulant la résolution DNS.",
            example: "Vous tapez 'orange.sn' dans votre navigateur mais êtes redirigé vers un faux site bancaire.",
            prevention: "• Utilisez des DNS sécurisés\n• Vérifiez l'URL dans la barre d'adresse\n• Utilisez des extensions de sécurité\n• Évitez les liens suspects",
            severity: "high",
            keywords: ["pharming", "dns", "redirection", "site web"]
        },
        {
            id: 23,
            term: "Vishing (Voice Phishing)",
            definition: "Phishing réalisé par téléphone vocal pour voler des informations.",
            example: "Un appel prétendant venir de votre banque demandant de confirmer votre numéro de carte de crédit.",
            prevention: "• Ne donnez jamais d'informations sensibles par téléphone\n• Raccrochez et appelez le numéro officiel\n• Utilisez des services d'identification d'appel\n• Soyez vigilant avec les appels inconnus",
            severity: "high",
            keywords: ["vishing", "voice phishing", "téléphone", "appel"]
        },
        {
            id: 24,
            term: "Clickjacking",
            definition: "Technique qui trompe l'utilisateur en le faisant cliquer sur quelque chose de différent de ce qu'il croit cliquer.",
            example: "Un bouton 'J'aime' sur Facebook qui en réalité valide un paiement ou partage des informations.",
            prevention: "• Soyez vigilant avec les iframes\n• Utilisez des extensions anti-clickjacking\n• Vérifiez avant de cliquer\n• Utilisez des navigateurs sécurisés",
            severity: "medium",
            keywords: ["clickjacking", "clic", "iframe", "bouton"]
        },
        {
            id: 25,
            term: "Watering Hole Attack",
            definition: "Attaque qui cible un site web légitime fréquenté par une communauté spécifique pour infecter ses visiteurs.",
            example: "Un site d'actualité sénégalais compromis pour infecter les visiteurs intéressés par l'actualité locale.",
            prevention: "• Utilisez un antivirus à jour\n• Évitez les sites suspects\n• Utilisez des extensions de sécurité\n• Mettez à jour votre navigateur",
            severity: "high",
            keywords: ["watering hole", "site web", "communauté", "infection"]
        },
        {
            id: 26,
            term: "Brute Force Attack",
            definition: "Méthode d'attaque qui consiste à essayer toutes les combinaisons possibles pour deviner un mot de passe.",
            example: "Un programme qui teste des millions de mots de passe par minute sur un compte email.",
            prevention: "• Utilisez des mots de passe longs et complexes\n• Activez la limitation de tentatives\n• Utilisez l'authentification à deux facteurs\n• Changez régulièrement vos mots de passe",
            severity: "medium",
            keywords: ["brute force", "mot de passe", "combinaison", "deviner"]
        },
        {
            id: 27,
            term: "Dictionary Attack",
            definition: "Variante de l'attaque par force brute utilisant une liste de mots courants ou de mots de passe connus.",
            example: "Un attaquant utilise une liste de mots de passe courants comme '123456' ou 'password'.",
            prevention: "• Évitez les mots de passe évidents\n• Utilisez des gestionnaires de mots de passe\n• Combinez lettres, chiffres et symboles\n• Utilisez des phrases de passe",
            severity: "medium",
            keywords: ["dictionary attack", "liste", "mot de passe", "commun"]
        },
        {
            id: 28,
            term: "Rainbow Table Attack",
            definition: "Attaque utilisant des tables précalculées de hachages de mots de passe pour cracker rapidement des mots de passe hachés.",
            example: "Un hacker utilise une table contenant des milliards de hachages pour retrouver votre mot de passe original.",
            prevention: "• Utilisez du sel dans le hachage\n• Utilisez des algorithmes de hachage forts\n• Changez régulièrement vos mots de passe\n• Utilisez l'authentification à deux facteurs",
            severity: "high",
            keywords: ["rainbow table", "hachage", "table", "cracker"]
        },
        {
            id: 29,
            term: "SQL Injection",
            definition: "Attaque qui exploite les vulnérabilités dans les requêtes SQL pour accéder à des données non autorisées.",
            example: "Un formulaire de connexion où l'attaquant entre du code SQL malveillant au lieu d'un nom d'utilisateur.",
            prevention: "• Utilisez des requêtes préparées\n• Validez et échappez les entrées utilisateur\n• Utilisez des ORM\n• Limitez les privilèges de la base de données",
            severity: "high",
            keywords: ["sql injection", "requête", "base de données", "formulaire"]
        },
        {
            id: 30,
            term: "Cross-Site Scripting (XSS)",
            definition: "Attaque qui injecte du code malveillant dans une page web pour voler des informations ou modifier le comportement du site.",
            example: "Un commentaire sur un forum qui contient du JavaScript malveillant exécuté par tous les visiteurs.",
            prevention: "• Échappez les entrées utilisateur\n• Utilisez des en-têtes de sécurité HTTP\n• Validez les entrées côté serveur\n• Utilisez des frameworks sécurisés",
            severity: "high",
            keywords: ["xss", "cross-site scripting", "injection", "javascript"]
        },
        {
            id: 31,
            term: "Cross-Site Request Forgery (CSRF)",
            definition: "Attaque qui force un utilisateur authentifié à effectuer une action non désirée sur un site web.",
            example: "Un email contenant un lien qui, si cliqué, effectue un transfert d'argent depuis votre compte bancaire.",
            prevention: "• Utilisez des tokens CSRF\n• Vérifiez l'origine des requêtes\n• Utilisez des cookies sécurisés\n• Déconnectez-vous après utilisation",
            severity: "medium",
            keywords: ["csrf", "cross-site request forgery", "token", "requête"]
        },
        {
            id: 32,
            term: "Session Hijacking",
            definition: "Vol de session d'un utilisateur pour prendre le contrôle de son compte.",
            example: "Un attaquant intercepte le cookie de session d'un utilisateur sur un WiFi public.",
            prevention: "• Utilisez HTTPS\n• Régénérez les IDs de session\n• Utilisez des cookies sécurisés\n• Déconnectez-vous des sessions publiques",
            severity: "high",
            keywords: ["session hijacking", "session", "cookie", "contrôle"]
        },
        {
            id: 33,
            term: "Credential Stuffing",
            definition: "Attaque utilisant des identifiants volés d'une brèche de données pour essayer de se connecter à d'autres services.",
            example: "Utilisation de votre email et mot de passe volés d'un site pour essayer d'accéder à votre compte bancaire.",
            prevention: "• Utilisez des mots de passe uniques par service\n• Activez l'authentification à deux facteurs\n• Surveillez vos comptes\n• Changez vos mots de passe compromis",
            severity: "high",
            keywords: ["credential stuffing", "identifiant", "brèche", "mot de passe"]
        },
        {
            id: 34,
            term: "Business Email Compromise (BEC)",
            definition: "Arnaque ciblant les emails d'entreprise pour effectuer des transferts frauduleux.",
            example: "Un email falsifié du PDG demandant un virement urgent vers un compte fournisseur.",
            prevention: "• Vérifiez l'adresse email de l'expéditeur\n• Confirmez verbalement les demandes inhabituelles\n• Utilisez des signatures email\n• Formez les employés à la reconnaissance des BEC",
            severity: "high",
            keywords: ["bec", "business email compromise", "email", "transfert"]
        },
        {
            id: 35,
            term: "Typosquatting",
            definition: "Enregistrement de noms de domaine similaires aux sites légitimes pour tromper les utilisateurs.",
            example: "Un site 'g00gle.com' au lieu de 'google.com' qui vole vos informations de connexion.",
            prevention: "• Vérifiez l'URL attentivement\n• Utilisez des favoris pour les sites importants\n• Activez les avertissements de sécurité du navigateur\n• Utilisez des extensions de vérification d'URL",
            severity: "medium",
            keywords: ["typosquatting", "nom de domaine", "url", "favoris"]
        },
        {
            id: 36,
            term: "Drive-by Download",
            definition: "Téléchargement automatique de malware simplement en visitant un site web compromis.",
            example: "Visiter un site d'actualité qui télécharge automatiquement un virus sur votre ordinateur.",
            prevention: "• Maintenez votre navigateur à jour\n• Utilisez des extensions de sécurité\n• Évitez les sites suspects\n• Utilisez un antivirus en temps réel",
            severity: "high",
            keywords: ["drive-by download", "téléchargement", "site web", "virus"]
        },
        {
            id: 37,
            term: "Malvertising",
            definition: "Utilisation de publicités en ligne pour diffuser des malware.",
            example: "Une bannière publicitaire sur un site légitime qui redirige vers un site malveillant.",
            prevention: "• Utilisez un bloqueur de publicités\n• Évitez de cliquer sur les publicités\n• Utilisez des extensions anti-malware\n• Mettez à jour votre navigateur",
            severity: "medium",
            keywords: ["malvertising", "publicité", "bannière", "redirection"]
        },
        {
            id: 38,
            term: "Rogue Software",
            definition: "Logiciel qui prétend être utile mais qui est en réalité malveillant.",
            example: "Un 'nettoyeur de registre' qui prétend accélérer votre ordinateur mais installe des spyware.",
            prevention: "• Téléchargez uniquement depuis des sources fiables\n• Lisez les avis des utilisateurs\n• Utilisez des outils de vérification\n• Évitez les logiciels 'miracle'",
            severity: "medium",
            keywords: ["rogue software", "logiciel", "nettoyeur", "spyware"]
        },
        {
            id: 39,
            term: "Worm (Ver informatique)",
            definition: "Programme malveillant qui se propage automatiquement d'un ordinateur à un autre sans intervention humaine.",
            example: "Un ver qui se répand via les réseaux sociaux en infectant les contacts de l'utilisateur.",
            prevention: "• Mettez à jour vos logiciels\n• Utilisez un firewall\n• Évitez d'ouvrir les pièces jointes suspectes\n• Utilisez un antivirus",
            severity: "high",
            keywords: ["worm", "ver", "propagation", "réseau"]
        },
        {
            id: 40,
            term: "Backdoor (Porte dérobée)",
            definition: "Mécanisme caché qui permet un accès non autorisé à un système.",
            example: "Un développeur malveillant laisse une porte dérobée dans une application pour y accéder plus tard.",
            prevention: "• Auditez le code source\n• Utilisez des outils de détection de backdoors\n• Mettez à jour régulièrement\n• Utilisez des certificats de sécurité",
            severity: "high",
            keywords: ["backdoor", "porte dérobée", "accès", "code source"]
        },
        {
            id: 41,
            term: "Logic Bomb",
            definition: "Code malveillant qui s'active lorsqu'une condition spécifique est remplie.",
            example: "Un employé licencié programme un code qui efface toutes les données de l'entreprise le lendemain.",
            prevention: "• Auditez régulièrement le code\n• Utilisez des contrôles d'accès stricts\n• Surveillez les modifications de code\n• Formez les développeurs à la sécurité",
            severity: "high",
            keywords: ["logic bomb", "code", "condition", "effacement"]
        },
        {
            id: 42,
            term: "Macro Virus",
            definition: "Virus contenu dans les macros des documents Office qui s'exécute automatiquement à l'ouverture.",
            example: "Un document Word infecté qui vole vos informations lorsque vous l'ouvrez.",
            prevention: "• Désactivez les macros par défaut\n• N'ouvrez que les documents de sources fiables\n• Utilisez des versions récentes d'Office\n• Utilisez un antivirus",
            severity: "medium",
            keywords: ["macro virus", "document", "office", "macro"]
        },
        {
            id: 43,
            term: "Boot Sector Virus",
            definition: "Virus qui infecte le secteur de démarrage d'un disque dur.",
            example: "Un virus qui se charge avant le système d'exploitation et vole vos données au démarrage.",
            prevention: "• Évitez les disques externes suspects\n• Utilisez des antivirus avec protection boot\n• Mettez à jour votre BIOS\n• Sauvegardez régulièrement",
            severity: "high",
            keywords: ["boot sector virus", "secteur", "démarrage", "disque"]
        },
        {
            id: 44,
            term: "Polymorphic Virus",
            definition: "Virus qui change son code à chaque infection pour éviter la détection.",
            example: "Un virus qui modifie son apparence à chaque propagation pour tromper les antivirus.",
            prevention: "• Utilisez des antivirus avec détection heuristique\n• Mettez à jour régulièrement les signatures\n• Utilisez plusieurs couches de sécurité\n• Soyez prudent avec les téléchargements",
            severity: "high",
            keywords: ["polymorphic virus", "code", "infection", "détection"]
        },
        {
            id: 45,
            term: "Stealth Virus",
            definition: "Virus qui se cache et modifie les rapports du système pour paraître inoffensif.",
            example: "Un virus qui cache ses fichiers et modifie la taille des disques rapportée par le système.",
            prevention: "• Utilisez des outils de détection avancés\n• Surveillez les performances du système\n• Utilisez plusieurs scanners\n• Mettez à jour régulièrement",
            severity: "high",
            keywords: ["stealth virus", "cache", "rapport", "système"]
        },
        {
            id: 46,
            term: "Multipartite Virus",
            definition: "Virus qui infecte plusieurs parties d'un système informatique simultanément.",
            example: "Un virus qui infecte à la fois les fichiers exécutables et le secteur de démarrage.",
            prevention: "• Utilisez des antivirus complets\n• Évitez les sources d'infection multiples\n• Mettez à jour tous les composants\n• Utilisez des backups réguliers",
            severity: "high",
            keywords: ["multipartite virus", "partie", "système", "infection"]
        },
        {
            id: 47,
            term: "File Infector Virus",
            definition: "Virus qui s'attache aux fichiers exécutables et se propage lors de leur exécution.",
            example: "Un virus qui infecte vos programmes et se répand quand vous les utilisez.",
            prevention: "• N'exécutez que des fichiers de sources fiables\n• Utilisez un antivirus en temps réel\n• Scannez avant l'exécution\n• Mettez à jour régulièrement",
            severity: "medium",
            keywords: ["file infector virus", "fichier", "exécutable", "propagation"]
        },
        {
            id: 48,
            term: "Companion Virus",
            definition: "Virus qui crée un fichier malveillant avec le même nom qu'un fichier légitime.",
            example: "Un virus qui crée 'notepad.exe' malveillant à côté du vrai Bloc-notes.",
            prevention: "• Vérifiez les propriétés des fichiers\n• Utilisez des chemins complets\n• Scannez régulièrement\n• Soyez vigilant avec les téléchargements",
            severity: "medium",
            keywords: ["companion virus", "fichier", "nom", "légitime"]
        },
        {
            id: 49,
            term: "Link Virus",
            definition: "Virus qui modifie les liens symboliques ou les raccourcis pour pointer vers du code malveillant.",
            example: "Un raccourci Desktop modifié pour lancer un virus au lieu de l'application légitime.",
            prevention: "• Vérifiez les propriétés des raccourcis\n• Utilisez des outils de vérification\n• Évitez les raccourcis suspects\n• Scannez votre système",
            severity: "low",
            keywords: ["link virus", "lien", "raccourci", "symbole"]
        },
        {
            id: 50,
            term: "Cryptomining Malware",
            definition: "Malware qui utilise les ressources de l'ordinateur victime pour miner des cryptomonnaies.",
            example: "Votre ordinateur devient lent car il mine du Bitcoin pour un cybercriminel sans votre connaissance.",
            prevention: "• Surveillez l'utilisation du CPU\n• Utilisez des bloqueurs de scripts\n• Installez des extensions anti-cryptojacking\n• Mettez à jour votre navigateur",
            severity: "medium",
            keywords: ["cryptomining", "cryptomonnaie", "miner", "cpu"]
        },
        {
            id: 51,
            term: "Ransomware-as-a-Service (RaaS)",
            definition: "Modèle où les cybercriminels louent des ransomware à d'autres criminels moins techniques.",
            example: "Des groupes criminels proposent des kits de ransomware clé en main sur le dark web.",
            prevention: "• Sauvegardez régulièrement vos données\n• Utilisez des solutions de sécurité avancées\n• Éduquez-vous sur les menaces actuelles\n• Ne payez jamais de rançon",
            severity: "high",
            keywords: ["raas", "ransomware", "service", "location"]
        },
        {
            id: 52,
            term: "Supply Chain Attack",
            definition: "Attaque qui compromet un fournisseur ou un partenaire pour atteindre la cible finale.",
            example: "Un logiciel de comptabilité populaire est compromis pour infecter toutes ses entreprises clientes.",
            prevention: "• Vérifiez la sécurité de vos fournisseurs\n• Utilisez des contrôles d'intégrité\n• Diversifiez vos sources d'approvisionnement\n• Mettez à jour régulièrement",
            severity: "high",
            keywords: ["supply chain", "chaîne d'approvisionnement", "fournisseur", "compromission"]
        },
        {
            id: 53,
            term: "AI-Powered Attacks",
            definition: "Attaques utilisant l'intelligence artificielle pour automatiser et optimiser les cyberattaques.",
            example: "Des bots IA qui adaptent automatiquement leurs techniques d'attaque en fonction des défenses détectées.",
            prevention: "• Utilisez des solutions de sécurité IA\n• Mettez à jour vos défenses régulièrement\n• Surveillez les anomalies\n• Formez-vous aux nouvelles menaces",
            severity: "high",
            keywords: ["ai", "intelligence artificielle", "automatisation", "optimisation"]
        },
        {
            id: 54,
            term: "IoT Vulnerabilities",
            definition: "Failles de sécurité dans les objets connectés qui peuvent être exploitées pour des attaques.",
            example: "Une caméra de surveillance domestique compromise permet à un hacker de surveiller votre maison.",
            prevention: "• Changez les mots de passe par défaut des IoT\n• Segmentez votre réseau domestique\n• Mettez à jour le firmware\n• Désactivez les fonctionnalités inutiles",
            severity: "medium",
            keywords: ["iot", "objets connectés", "caméra", "domotique"]
        },
        {
            id: 55,
            term: "Cloud Security Risks",
            definition: "Risques liés à la sécurité des données stockées dans le cloud.",
            example: "Des données sensibles stockées sur un serveur cloud sont exposées à cause d'une mauvaise configuration.",
            prevention: "• Utilisez le chiffrement des données\n• Configurez correctement les permissions\n• Surveillez l'accès aux données\n• Choisissez des fournisseurs fiables",
            severity: "medium",
            keywords: ["cloud", "nuage", "stockage", "données"]
        },
        {
            id: 56,
            term: "Insider Threats",
            definition: "Menaces provenant de personnes internes à l'organisation (employés, contractors).",
            example: "Un employé mécontent copie des données confidentielles avant de quitter l'entreprise.",
            prevention: "• Contrôlez l'accès aux données\n• Surveillez les activités internes\n• Formez les employés à la sécurité\n• Mettez en place des politiques claires",
            severity: "high",
            keywords: ["insider", "interne", "employé", "données"]
        },
        {
            id: 57,
            term: "Advanced Persistent Threats (APT)",
            definition: "Attaques sophistiquées et persistantes menées par des acteurs étatiques ou criminels organisés.",
            example: "Un groupe espion étatique s'infiltre dans les systèmes d'une entreprise pendant des mois pour voler des secrets industriels.",
            prevention: "• Utilisez des solutions de détection avancées\n• Segmentez votre réseau\n• Formez votre équipe de sécurité\n• Mettez en place une réponse aux incidents",
            severity: "high",
            keywords: ["apt", "persistent", "espionnage", "étatique"]
        },
        {
            id: 58,
            term: "Social Engineering Attacks",
            definition: "Techniques de manipulation psychologique pour obtenir des informations sensibles.",
            example: "Un attaquant se fait passer pour le PDG et demande à un employé de transférer de l'argent urgent.",
            prevention: "• Vérifiez l'identité des demandeurs\n• Utilisez des protocoles de vérification\n• Formez les employés\n• Soyez sceptique face aux urgences",
            severity: "high",
            keywords: ["social engineering", "manipulation", "psychologique", "identité"]
        },
        {
            id: 59,
            term: "Zero Trust Architecture",
            definition: "Modèle de sécurité qui suppose que toutes les demandes d'accès sont potentiellement malveillantes.",
            example: "Chaque tentative d'accès à un système nécessite une vérification continue, même pour les utilisateurs internes.",
            prevention: "• Implémentez une authentification multi-facteurs\n• Utilisez des contrôles d'accès granulaire\n• Surveillez en continu\n• Minimisez les privilèges",
            severity: "low",
            keywords: ["zero trust", "architecture", "accès", "vérification"]
        },
        {
            id: 60,
            term: "Data Breach",
            definition: "Incident où des données sensibles sont exposées, volées ou divulguées sans autorisation.",
            example: "Une base de données client contenant des millions d'adresses email et mots de passe est publiée sur le dark web.",
            prevention: "• Chiffrez les données sensibles\n• Utilisez des contrôles d'accès stricts\n• Auditez régulièrement\n• Réagissez rapidement aux incidents",
            severity: "high",
            keywords: ["data breach", "fuite de données", "exposition", "divulgation"]
        }
    ],

    presentations: [
        {
            id: 1,
            title: "Sécurité Mobile Money - Formation Grand Public",
            audience: "Utilisateurs mobile money",
            duration: "30 minutes",
            level: "Débutant",
            topics: ["Codes PIN sécurisés", "Reconnaître faux agents", "Signaler fraudes", "Bonnes pratiques quotidiennes"],
            objectives: [
                "Comprendre les risques du mobile money",
                "Adopter des pratiques sécurisées",
                "Savoir réagir face aux arnaques"
            ],
            content: {
                intro: "Le mobile money a transformé les habitudes financières au Sénégal. Avec plus de 12 millions d'utilisateurs, il est devenu une cible privilégiée des cybercriminels.",
                modules: [
                    {
                        title: "Module 1 : Les bases de la sécurité",
                        content: "• Créer un code PIN robuste (éviter dates de naissance)\n• Ne jamais partager son code PIN\n• Vérifier l'identité des agents\n• Garder son téléphone en main lors des transactions"
                    },
                    {
                        title: "Module 2 : Reconnaître les arnaques",
                        content: "• SMS de 'blocage de compte' urgents\n• Fausses promotions avec gains exceptionnels\n• Agents demandant de composer des codes\n• Appels prétendant résoudre des 'problèmes'"
                    },
                    {
                        title: "Module 3 : Que faire en cas de problème",
                        content: "• Contacter immédiatement l'opérateur\n• Changer ses codes d'accès\n• Porter plainte si nécessaire\n• Informer son entourage"
                    }
                ],
                casStudies: [
                    {
                        title: "Cas réel : Arnaque agent Orange Money",
                        description: "Mamadou reçoit un appel d'un supposé agent Orange Money qui lui demande de composer *144*1234# pour 'activer une promotion'. Ce code transfère en réalité son crédit.",
                        lesson: "Orange Money ne demande jamais de composer des codes par téléphone."
                    }
                ]
            }
        },
        {
            id: 2,
            title: "Cybersécurité pour les Jeunes",
            audience: "Écoles, associations de jeunesse",
            duration: "45 minutes",
            level: "Débutant",
            topics: ["Réseaux sociaux", "Cyberharcèlement", "Vie privée", "Contenus inappropriés"],
            objectives: [
                "Sensibiliser aux risques des réseaux sociaux",
                "Promouvoir un usage responsable d'internet",
                "Savoir réagir face au cyberharcèlement"
            ],
            content: {
