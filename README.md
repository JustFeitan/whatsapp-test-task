# Тестовое задание для Junior Frontend Developer

Web приложение для переписки, сделанное на основе ватсапа.
Сылка на развернутую на хостинге версию(
Netify): [mini-whatsapp.netlify.app](https://mini-whatsapp.netlify.app)

## Инструкции для локального запуска:
!!!ВАЖНО!!! Для использования возможностей требуются данные с [green-api](https://green-api.com)(idInstance, apiTokenInstance)
Перед началом работы требуется выполнить следующие шаги: [https://green-api.com/docs/before-start/](https://green-api.com/docs/before-start/)
### Docker:

1. `git clone https://github.com/JustFeitan/whatsapp-test-task.git`;
2.  Перейти в дерикторию `whatsapp-test-task`
3. `docker-compose -f docker-compose.yml -f  docker-compose.dev.yml up`
4. Перейти на `https://localhost:3000`

### Без докера:

1. `git clone https://github.com/JustFeitan/whatsapp-test-task.git`;
2.  Перейти в дерикторию `client`
3. `npm i`
5  `npm start`
6.  Перейти на `https://localhost:3000`

## Техническое задание:

1. Страница авторизации. Данные с green-api с помощью которых будут осуществляться переписки
2. Страница с чатами, по дизайну похожая на ватсап веб, необходимо релиазовать переписку
   только с помощью текста. Также необходима возможность добавлять новые чаты

## Использеумый стэк

### Front-end:

- React
- Typescript
- Redux + Redux Toolkit + RTKQ
- CSS/Scss
- react-hook-form
- jest/React Testing Library

### Сборка:

- Webpack
- Docker

### Back-end:

- [green-api](https://green-api.com)

## Available Scripts

### `npm start`

Запустить приложение локально

### `npm run build-dev`

Запустить сборку девелопмент версии приложения

### `npm run build-prod`

Запустить сборку продакшен версии приложения

### `npm run test`

Запустить тесты

### `npm run clean`

Удалить dist директорию
