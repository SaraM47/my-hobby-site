# Moment 1 - Fritidsintresse webbplatsen med React och TypeScript

Moment 1 handlar om att skapa en enkel React-applikation som är byggd med TypeScript som visar ett fritidsintresse. Denna webbplatsen presenterar fritidsintresse för konstböcker (artbooks). Applikationen är uppdelad i flera komponenter och demonstrerar användning av props, JSX, map-funktion för dynamisk rendering, conditional rendering, komponentspecifik samt responsiv CSS. Varje konstbok visas med textinformation samt en tillhörande bild.

## Publicerad webbplats
Länk till publicerad webbplats via GitHub Pages: [här](https://saram47.github.io/my-hobby-site/)

## Funktioner
- Header med titel som skickas via props samt bannerbild
- Huvudinnehåll med en lista av artbooks som renderas dynamiskt med `map()`
- Conditional operator för status
- Responsiv layout för mobil och desktop

## Komponentstruktur och datahantering
Applikationen är uppdelad i flera React-komponenter:
- Header
- ArtBookCard
- Footer
- App (huvudkomponent)

Varje artbook representeras av ett objekt som följer ett TypeScript-interface.
`ArtBookCard`-komponenten tar emot en artbook via props och ansvarar för presentationen.

### ArtBook interface
Artbooks definieras med ett TypeScript-interface som säkerställer korrekt struktur på datan. Varje objekt innehåller string (titel och författare), integer (utgivningsår), boolean (läst eller ej) och bild (lokalt importerad):

```ts
export interface ArtBook {
  id: number;
  title: string;
  author: string;
  releaseYear: number;
  isRead: boolean;
  image: string;
}
```
----

## Starta lokalt
Steg 1: Installera beroenden
```
npm install
```
Steg 2: Starta utvecklingsservern
```
npm run dev
```
