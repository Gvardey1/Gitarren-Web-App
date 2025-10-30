# 🚀 Quick Start Guide

## Запуск приложения

### Вариант 1: Development Server (Рекомендуется для разработки)

```bash
cd guitar
npm run dev
```

Приложение будет доступно по адресу: **http://localhost:5173**

### Вариант 2: Production Build

```bash
cd guitar
npm run build
npm run preview
```

### Структура проекта

```
guitar/
├── src/
│   ├── components/          # React компоненты
│   │   ├── Fretboard.tsx           # Визуализация грифа
│   │   ├── ChordCard.tsx           # Карточка аккорда
│   │   ├── ChordLibrary.tsx        # Библиотека аккордов
│   │   ├── ChordProgressionBuilder.tsx  # Построитель прогрессий
│   │   └── ChordQuiz.tsx           # Игра-викторина
│   │
│   ├── data/                # Данные
│   │   └── chordLibrary.ts         # База аккордов и тональностей
│   │
│   ├── types/               # TypeScript типы
│   │   └── chords.ts               # Типы для аккордов
│   │
│   ├── utils/               # Утилиты
│   │   └── audioEngine.ts          # Аудио синтез (Web Audio API)
│   │
│   ├── styles/              # CSS стили
│   │   ├── Fretboard.css
│   │   ├── ChordCard.css
│   │   ├── ChordLibrary.css
│   │   ├── ChordProgressionBuilder.css
│   │   └── ChordQuiz.css
│   │
│   ├── App.tsx              # Главный компонент
│   ├── App.css              # Главные стили
│   ├── main.tsx             # Entry point
│   └── index.css            # Глобальные стили
│
├── public/                  # Статические файлы
├── index.html               # HTML шаблон
├── package.json             # Зависимости
├── vite.config.ts           # Конфигурация Vite
├── tsconfig.json            # Конфигурация TypeScript
├── README.md                # Основная документация
├── FEATURES.md              # Описание функций
└── QUICKSTART.md            # Этот файл

```

## 📱 Использование

### 1️⃣ Chord Library (Библиотека Аккордов)

- Просматривайте все доступные аккорды
- Фильтруйте по типу и сложности
- Ищите конкретные аккорды
- Нажмите "Play Chord" для воспроизведения

### 2️⃣ Progression Builder (Построитель Прогрессий)

- Выберите тональность
- Добавляйте аккорды в прогрессию
- Используйте готовые пресеты
- Воспроизведите всю прогрессию

### 3️⃣ Chord Quiz (Викторина)

- Смотрите на гриф
- Угадывайте аккорд
- Используйте подсказку "Play Chord"
- Отслеживайте свой прогресс

## 🎨 Технические детали

### Используемые технологии

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool (быстрая сборка)
- **CSS3** - Стили с анимациями
- **Web Audio API** - Синтез звука

### Особенности

✅ Полностью типизированный код (TypeScript)
✅ Responsive дизайн (работает на всех устройствах)
✅ Темная тема (удобно для глаз)
✅ Без внешних зависимостей для UI
✅ Аудио генерируется в реальном времени
✅ Современные анимации и переходы

## 🛠️ Разработка

### Доступные команды

```bash
npm run dev          # Запуск dev сервера
npm run build        # Production build
npm run preview      # Preview production build
npm run lint         # Запуск линтера
```

### Добавление новых аккордов

Отредактируйте файл `src/data/chordLibrary.ts`:

```typescript
'NewChord': {
  name: 'NewChord',
  fullName: 'New Chord Name',
  fingerings: [
    {
      frets: [-1, 3, 2, 0, 1, 0],  // -1 = не играется, 0 = открытая, 1-12 = лад
      fingers: [0, 3, 2, 0, 1, 0],  // 0 = не используется, 1-4 = пальцы
      baseFret: 0                   // Начальный лад (для баррэ)
    }
  ],
  notes: ['C', 'E', 'G'],           // Ноты аккорда
  difficulty: 'easy',                // easy, medium, hard
  type: 'major'                      // major, minor, seventh, power, other
}
```

## 🎯 Требования к браузеру

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

**Примечание**: Требуется поддержка Web Audio API

## 📞 Troubleshooting

### Проблема: Не слышно звука

**Решение**:

- Проверьте громкость системы
- Убедитесь, что браузер имеет разрешение на воспроизведение аудио
- Попробуйте кликнуть на странице перед воспроизведением

### Проблема: Медленная загрузка

**Решение**:

- Используйте `npm run build` для оптимизированной версии
- Проверьте скорость интернета (для загрузки зависимостей)

### Проблема: Ошибки TypeScript

**Решение**:

- Убедитесь, что установлены все зависимости: `npm install`
- Проверьте версию Node.js: `node --version` (должна быть 16+)

## 🎸 Удачного обучения!

Начните с простых аккордов (C, D, E, G, A), затем переходите к более сложным!

---

**Вопросы?** Смотрите README.md и FEATURES.md для более подробной информации.


