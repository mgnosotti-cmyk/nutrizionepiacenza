# nutrizionepiacenza.it — prototipo Astro

Progetto locale per il restyling Editoriale personale di Maria Giulia Nosotti.

## Cosa contiene
- Homepage responsive sviluppata in Astro, ispirata al rendering approvato.
- Sei pagine interne navigabili.
- Fotografia allegata, utilizzata senza modificare il volto (è lo screenshot disponibile, non il file fotografico originale ad alta risoluzione).
- Due rendering conservati in `riferimenti-design/`.
- Stili, palette e struttura di navigazione.

## Come aprire sul Mac
1. Decomprimi lo ZIP nella cartella `~/Documents/Siti/` (creala se non esiste).
2. Apri Terminale e digita `cd ~/Documents/Siti/nutrizionepiacenza`.
3. Esegui `npm install` (richiede Node.js 20.3+ o 22+ a seconda della versione Astro risolta).
4. Esegui `npm run dev` e apri l'indirizzo locale indicato.
5. Per generare i file statici: `npm run build`.

## Cloudflare Pages
Connetti il repository GitHub a Cloudflare Pages, framework Astro, comando `npm run build`, directory di output `dist`.
Non modificare il dominio Register finché non è stato approvato lo staging.

## Da completare prima della pubblicazione
- Verifica contenuti, incarichi, abilitazioni e denominazioni professionali.
- Inserire recapiti ufficiali, sedi e dati professionali obbligatori.
- Privacy, cookie e gestione di eventuali form.
- Verificare vecchi URL Register e preparare redirect 301.
- Sostituire lo screenshot con la foto originale HD quando disponibile.
- Inserire immagini editoriali autorizzate per le card, evitando ritratti artificiali.
- Articoli e CMS da realizzare: quelli attuali sono placeholder editoriali, non articoli pubblicati.
- Rimuovere `noindex,nofollow` dal layout e `Disallow: /` da robots.txt solo al lancio pubblico.

**Il sito esistente su Register e le email non sono stati modificati.**
