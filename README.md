# Koło Emocji — instrukcja wdrożenia na GitHub Pages

Ten projekt jest gotowy do wrzucenia na GitHub i automatycznego opublikowania
przez GitHub Pages. Poniżej znajdziesz instrukcję krok po kroku,
dopasowaną do pracy z **GitHub Desktop** (bez terminala).

## Wymagania wstępne

- Zainstalowany [GitHub Desktop](https://desktop.github.com/)
- Zainstalowany [Node.js](https://nodejs.org/) (wersja LTS) — potrzebny tylko,
  jeśli chcesz przetestować aplikację lokalnie przed publikacją
  (`npm install` + `npm run dev`). **Do samej publikacji na GitHub Pages
  Node.js nie jest konieczny** — zbuduje ją za Ciebie GitHub Actions w chmurze.

## Krok 1 — Utwórz repozytorium na GitHub

1. Wejdź na [github.com/new](https://github.com/new)
2. Nadaj repozytorium nazwę, np. `emotion-wheel`
3. Zostaw "Public" (Pages w darmowym planie działa dla repo publicznych,
   chyba że masz GitHub Pro/Team/Enterprise)
4. **Nie** zaznaczaj "Add a README" — masz go już w tym folderze
5. Kliknij "Create repository"

## Krok 2 — WAŻNE: dopasuj nazwę repo w kodzie

Jeśli nazwałeś/aś repozytorium inaczej niż `emotion-wheel`, otwórz plik
`vite.config.ts` i zmień linię:

```ts
base: '/emotion-wheel/',
```

na nazwę Twojego repozytorium, np.:

```ts
base: '/nazwa-twojego-repo/',
```

To jest kluczowy krok — bez niego strona wczyta się z pustym ekranem
(błędne ścieżki do plików CSS/JS).

## Krok 3 — Dodaj projekt w GitHub Desktop

1. Otwórz GitHub Desktop
2. `File → Add local repository...`
3. Wskaż ten folder (`emotion-wheel`)
4. Jeśli Desktop zapyta, czy zainicjować repozytorium Git — potwierdź
5. W polu "Summary" na dole wpisz np. "Pierwszy commit" i kliknij
   **"Commit to main"**
6. Kliknij **"Publish repository"** (albo "Push origin", jeśli już
   podpiąłeś/aś zdalne repo z Kroku 1)

## Krok 4 — Włącz GitHub Pages

1. Wejdź na stronę repozytorium na github.com
2. `Settings → Pages`
3. W sekcji "Build and deployment" → "Source" wybierz **"GitHub Actions"**
   (nie "Deploy from a branch")
4. Gotowe — workflow (`.github/workflows/deploy.yml`) uruchomi się
   automatycznie przy każdym pushu do gałęzi `main`

## Krok 5 — Sprawdź status i adres strony

1. Zakładka **"Actions"** w repozytorium — tam zobaczysz postęp builda
   (zwykle 1-2 minuty)
2. Po zakończeniu (zielony ✓) wróć do `Settings → Pages` — na górze
   pojawi się link, pod którym działa Twoja aplikacja, w formacie:

   `https://twoja-nazwa-uzytkownika.github.io/emotion-wheel/`

## Aktualizacje w przyszłości

Za każdym razem, gdy zmienisz coś w kodzie:
1. Zapisz plik
2. W GitHub Desktop zrób commit ("Commit to main")
3. Kliknij "Push origin"

Strona sama się przebuduje i zaktualizuje w ciągu 1-2 minut — nic więcej
nie musisz robić.

## Testowanie lokalne (opcjonalne, przed zajęciami)

Jeśli masz zainstalowany Node.js:

```bash
npm install
npm run dev
```

Otworzy się adres typu `http://localhost:5173` z podglądem na żywo.

Żeby przetestować dokładnie tę wersję, która trafi na GitHub Pages:

```bash
npm run build
npm run preview
```
