# 🎸 Guitar Chord Master

An interactive web application for learning and practicing guitar chords. Built with React, TypeScript, and CSS.

## ✨ Features

### 📚 Chord Library

- Browse and explore various guitar chords
- Visual fretboard representation showing finger positions
- Filter by chord type (Major, Minor, 7th, Power)
- Filter by difficulty level (Easy, Medium, Hard)
- Search functionality
- Audio playback for each chord

### 🎵 Chord Progression Builder

- Create custom chord progressions
- Work in different musical keys
- Popular preset progressions (I-V-vi-IV, ii-V-I, etc.)
- Visual feedback of available chords in selected key
- Play entire progressions with audio
- Add/remove chords dynamically

### 🎮 Chord Recognition Quiz

- Interactive game to test your chord recognition skills
- Visual fretboard display
- Multiple choice answers
- Score tracking with percentage
- Audio hints available
- Instant feedback on answers

### 🎸 Guitar Tabs

- Learn to play famous songs with guitar tablature
- Browse collection of popular songs across different difficulty levels
- Visual tab display showing string and fret positions
- Filter songs by difficulty (Easy, Medium, Hard)
- Multiple famous songs included:
  - Radioactive (Imagine Dragons)
  - Hotel California (Eagles)
  - How You Remind Me (Nickelback)
  - Numb (Linkin Park)
  - Smells Like Teen Spirit (Nirvana)
  - Mama I'm Coming Home (Ozzy Osbourne)

### 🎨 Modern UI/UX

- Beautiful gradient designs
- Smooth animations and transitions
- Responsive design for all devices
- Dark theme optimized for long practice sessions
- Intuitive navigation

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or pnpm

### Installation

1. Navigate to the guitar directory:

```bash
cd guitar
```

2. Install dependencies (already done during setup):

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🎯 How to Use

### Learning Chords

1. Go to **Chord Library**
2. Browse available chords or use filters
3. Click on any chord to see detailed fingering
4. Click "Play Chord" to hear how it sounds

### Building Progressions

1. Go to **Progression Builder**
2. Select a musical key
3. Choose from preset progressions or build your own
4. Add chords by clicking them
5. Click "Play" to hear your progression

### Testing Your Knowledge

1. Go to **Chord Quiz**
2. Look at the fretboard diagram
3. Select the correct chord name
4. Use the "Play Chord" button if you need help
5. Track your score and improve!

### Learning Songs

1. Go to **Tabs**
2. Browse available songs by difficulty
3. Click on any song to view the tablature
4. Follow the fret numbers on each string to play the song
5. Practice playing along with your favorite songs!

## 🎼 Technical Details

### Audio Generation

- Uses Web Audio API for chord playback
- Real-time synthesis of guitar tones
- ADSR envelope for realistic sound
- Supports chord strumming and arpeggios

### Chord Data

- 15+ common guitar chords included
- Fingering diagrams with proper finger numbers
- Musical theory integration (keys, scales, progressions)
- Difficulty ratings for learners

### Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **CSS3** - Styling with animations
- **Web Audio API** - Sound generation

## 📱 Responsive Design

The application works seamlessly on:

- Desktop computers
- Tablets
- Mobile phones

## 🎨 Color Scheme

- Primary: `#4ecdc4` (Turquoise)
- Secondary: `#667eea` (Purple)
- Accent: `#764ba2` (Deep Purple)
- Background: Dark gradient theme
- Difficulty colors:
  - Easy: `#4ecdc4` (Turquoise)
  - Medium: `#f9ca24` (Yellow)
  - Hard: `#ff6b6b` (Red)

## 🔊 Audio Features

- **Chord Playback**: Synthesized guitar sounds
- **Arpeggios**: Individual note playback
- **Strumming**: Realistic strum effect
- **Volume Control**: Optimized levels

## 🎓 Educational Value

This application helps guitarists:

- Learn proper finger positions
- Understand chord construction
- Practice chord recognition
- Build muscle memory
- Understand chord progressions in different keys
- Improve musical ear training
- Learn to read guitar tablature
- Practice playing real songs

## 📄 License

This project was created as a creative coding task demonstrating:

- Interactive visualization
- Audio synthesis
- Game mechanics
- Educational tools
- Modern web development practices

## 🙏 Acknowledgments

- Chord data based on standard guitar chord fingerings
- Popular progressions from music theory
- Built with modern web technologies

---

**Made with ♥ for guitar learners everywhere**

🎸 Happy Playing! 🎸
