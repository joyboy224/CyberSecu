#!/bin/bash

# 🚀 Configuration Rapide des Analytics pour CyberSecure Sénégal
# Utilisation : ./setup-analytics.sh [GA_ID]

echo "📊 Configuration des Analytics - CyberSecure Sénégal"
echo "=================================================="

# Demander l'ID Google Analytics si pas fourni
if [ -z "$1" ]; then
    echo "Entrez votre ID Google Analytics (format: GA-XXXXXXXXXX) :"
    read -r GA_ID
else
    GA_ID=$1
fi

# Vérifier le format de l'ID
if [[ ! $GA_ID =~ ^GA-[A-Z0-9]+$ ]]; then
    echo "❌ Format d'ID invalide. Utilisez le format GA-XXXXXXXXXX"
    echo "Exemple : GA-123456789"
    exit 1
fi

echo "✅ ID Analytics : $GA_ID"

# Code Google Analytics à ajouter
GA_CODE="<script async src=\"https://www.googletagmanager.com/gtag/js?id=$GA_ID\"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '$GA_ID', {
        'anonymize_ip': true,
        'allow_google_signals': false,
        'allow_ad_features': false
      });
    </script>"

# Compteur de pages modifiées
MODIFIED=0

# Ajouter GA à toutes les pages HTML
for file in *.html; do
    if [ -f "$file" ]; then
        # Vérifier si GA est déjà présent
        if grep -q "googletagmanager" "$file"; then
            echo "⚠️  Analytics déjà présent dans $file"
        else
            # Ajouter le code avant </head>
            sed "/<\/head>/i\\
    <!-- Google Analytics -->\
    $GA_CODE" "$file" > temp && mv temp "$file"
            echo "✅ Analytics ajouté à $file"
            ((MODIFIED++))
        fi
    fi
done

echo ""
echo "🎉 Configuration terminée !"
echo "📊 Pages modifiées : $MODIFIED"
echo ""
echo "📋 Prochaines étapes :"
echo "1. Remplacez 'GA_MEASUREMENT_ID' par '$GA_ID' dans le code ci-dessus"
echo "2. Déployez votre site"
echo "3. Attendez 24-48h pour voir les premières données"
echo ""
echo "🔗 Liens utiles :"
echo "- Google Analytics : https://analytics.google.com"
echo "- Documentation : https://support.google.com/analytics"
echo ""
echo "📞 Support : fnoir9394@gmail.com"
