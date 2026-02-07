# Programma Magazzino (GitHub Pages + Firebase)

Questa è una web-app statica (HTML/CSS/JS) pensata per essere caricata su GitHub Pages e usare Firebase (Auth + Firestore)
per condividere dati tra più PC/dispositivi.

## 1) Crea progetto Firebase
- Vai su Firebase Console → Create project
- Abilita Authentication → Email/Password
- Crea Firestore Database (in modalità Production)

## 2) Configurazione Firebase
Apri `js/firebase-config.js` e incolla i valori del tuo progetto (firebaseConfig).

Poi in Firebase Console → Authentication → Settings → Authorized domains:
aggiungi il dominio GitHub Pages (es: `TUOUTENTE.github.io`)

## 3) Dati iniziali
La prima volta, entra in SETUP e:
- inserisci dipendenti
- imposta gli orari dei 2 turni per ogni reparto

I reparti sono "fissi" in `js/constants.js` ma vengono salvati anche in Firestore e possono essere riordinati.

## 4) Pubblicazione su GitHub Pages
- Crea una repo (es: `programma-magazzino`)
- Carica questi file
- Settings → Pages → Deploy from branch → main / root
- Apri il link

## Note su sicurezza (consigliato)
Per prototipo: chiunque loggato può leggere/scrivere.
In produzione: imposta regole Firestore con ruoli (admin/editor/viewer).
