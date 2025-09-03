#!/bin/bash

# 🚀 Script de Déploiement CyberSecure Sénégal
# Utilisation : ./deploy.sh [platform]
# Platforms supportées : github, vercel, netlify

PLATFORM=${1:-github}

echo "🚀 Déploiement CyberSecure Sénégal"
echo "=================================="

# Vérifier que tous les fichiers sont présents
echo "📋 Vérification des fichiers..."
required_files=("index.html" "style.css" "script.js" "logo.svg")
for file in "${required_files[@]}"; do
    if [ ! -f "$file" ]; then
        echo "❌ Fichier manquant : $file"
        exit 1
    fi
done
echo "✅ Tous les fichiers requis sont présents"

case $PLATFORM in
    "github")
        echo "📦 Déploiement sur GitHub Pages"
        echo "1. Créez un repository sur GitHub nommé 'cybersecure-senegal'"
        echo "2. Initialisez Git dans ce dossier :"
        echo "   git init"
        echo "   git add ."
        echo "   git commit -m 'Initial commit'"
        echo "3. Ajoutez le remote :"
        echo "   git remote add origin https://github.com/VOTRE-NOM/cybersecure-senegal.git"
        echo "4. Poussez les fichiers :"
        echo "   git push -u origin main"
        echo "5. Activez GitHub Pages dans Settings > Pages"
        echo "   Source: Deploy from a branch"
        echo "   Branch: main"
        echo ""
        echo "🌐 URL finale : https://votre-nom.github.io/cybersecure-senegal/"
        ;;

    "vercel")
        echo "📦 Déploiement sur Vercel"
        if ! command -v vercel &> /dev/null; then
            echo "Installation de Vercel CLI..."
            npm install -g vercel
        fi
        echo "Déploiement en cours..."
        vercel --prod
        ;;

    "netlify")
        echo "📦 Déploiement sur Netlify"
        if ! command -v netlify &> /dev/null; then
            echo "Installation de Netlify CLI..."
            npm install -g netlify-cli
        fi
        echo "Connexion à Netlify..."
        netlify login
        echo "Déploiement en cours..."
        netlify deploy --prod --dir .
        ;;

    *)
        echo "❌ Platform non supportée. Utilisez : github, vercel, ou netlify"
        echo "Exemple : ./deploy.sh github"
        exit 1
        ;;
esac

echo ""
echo "🎉 Déploiement terminé !"
echo "📖 Consultez DEPLOYMENT-GUIDE.md pour plus de détails"
