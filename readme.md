#  Zadanie rekrutacyjne

##  Opis

Projekt demonstruje prosty system rejestracji, logowania i pobierania danych użytkownika, zbudowany w Node.js + Express + PostgreSQL + Prisma. Frontend to zwykły HTML + CSS + JS. JWT służy do autoryzacji, dane użytkownika pobierane są z endpointu `/auth/me`.

---

##  Użyte technologie

- Node.js + Express
- TypeScript
- PostgreSQL (Docker)
- Prisma ORM
- JWT (jsonwebtoken)
- `zod` do walidacji
- Frontend: HTML + CSS + JS

---

##  Uruchomienie lokalne z Dockerem

### 1. Skopiuj plik `.env.example`:

```bash
cp .env.example .env
```

### 2. Skopiuj plik .env.example jako .env

```bash
cp .env.example .env
```

### 3. Uruchom bazę danych PostgreSQL

```bash
docker-compose up -d
```
### 4. Wygeneruj klienta Prisma i utwórz tabelę User

```bash
npx prisma generate
npx prisma migrate dev --name init
```

### 5. Uruchom backend

```bash
npx ts-node src/index.ts
```
### 6. Uruchom frontend

```bash
cd frontend
```

po czym dwukrotnie kliknij index html by go uruchomić