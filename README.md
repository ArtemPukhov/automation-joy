# Automation Joy landing

Одностраничный сайт (landing) для сервиса автоматизации бизнес‑процессов, собранный на стеке Vite + React + TypeScript + Tailwind CSS + shadcn-ui.

## Локальная разработка

Требуется установленный Node.js и npm (или bun/pnpm/yarn по желанию).

```sh
# Установка зависимостей
npm install

# Запуск dev-сервера
npm run dev

# Сборка продакшен-бандла
npm run build

# Локальный просмотр собранной версии
npm run preview
```

## Технологии

- Vite
- React
- TypeScript
- Tailwind CSS
- shadcn-ui

## Деплой

В репозитории настроен GitHub Actions workflow `.github/workflows/deploy.yml`, который при пуше в ветку `main` подключается по SSH к серверу, делает `git pull`, собирает Docker-образы и поднимает сервисы с помощью `docker compose`.
