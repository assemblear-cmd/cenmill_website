# Cenmill — сайт-портфолио архитектурной студии

Минималистичный статический сайт-портфолио: Next.js (App Router, статический экспорт), TypeScript, Tailwind CSS. Без UI-библиотек и CSS-in-JS — проект совместим с визуальным редактором [Onlook](https://onlook.com).

## Запуск локально

```bash
npm install
npm run dev
```

Сайт откроется на [http://localhost:3000](http://localhost:3000).

Продакшн-сборка (статический экспорт в папку `out/`):

```bash
npm run build
```

## Как добавить новый проект

1. Создайте папку `public/projects/<slug>/` и положите туда фотографии (jpg, png, webp, svg).
2. Добавьте объект в массив `projects` в файле [`src/data/projects.ts`](src/data/projects.ts):

```ts
{
  slug: "new-project",                 // URL: /projects/new-project
  title: "New Project",
  year: 2026,
  location: "City, State",
  shortDescription: "Одна фраза для карточки и метатегов.",
  fullDescription: "Полное описание на странице проекта.",
  coverImage: "/projects/new-project/cover.jpg",
  gallery: [
    "/projects/new-project/01.jpg",
    "/projects/new-project/02.jpg",
  ],
},
```

Больше ничего не нужно: страница `/projects/<slug>` генерируется автоматически (`generateStaticParams`), карточка появляется в сетке, ссылки «Previous / Next project» подхватывают порядок массива.

## Деплой на GitHub Pages

Каждый push в ветку `main` запускает workflow [`.github/workflows/nextjs.yml`](.github/workflows/nextjs.yml) (стандартный workflow GitHub для Next.js): сборка, экспорт в `out/` и публикация через `actions/deploy-pages`.

Pages должен быть включён в настройках репозитория: **Settings → Pages → Source: GitHub Actions**.

`basePath`/`assetPrefix` (`/cenmill_website`) применяются только при сборке в CI (по переменной `GITHUB_ACTIONS`); локально и в Onlook сайт работает от корня домена.

## Подключение к Onlook

1. Запушьте репозиторий на GitHub (уже настроен remote `assemblear-cmd/cenmill_website`).
2. На [onlook.com](https://onlook.com) выберите **Import → GitHub repository** и укажите этот репозиторий.
3. Onlook сам поднимет dev-сервер и позволит редактировать страницы визуально — проект использует чистый Next.js + Tailwind (utility-классы), что Onlook понимает без адаптации.

## Структура

```
src/
  app/            — страницы (App Router): /, /projects, /projects/[slug], /about, /contact, 404
  components/     — Header, Footer, ProjectCard, ProjectsGrid
  data/projects.ts — все данные проектов (единственный источник)
  lib/paths.ts    — префикс basePath для изображений
public/projects/  — фотографии проектов (сейчас SVG-заглушки)
```
