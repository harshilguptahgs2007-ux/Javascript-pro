# Drum Kit

A browser-based drum kit built with vanilla JavaScript, HTML, and CSS. Each drum pad can be triggered by clicking the corresponding button on screen or by pressing the matching key on the keyboard.

## How It Works

The page renders a row of drum pad buttons. Each button is labeled with a keyboard key. When a button is clicked or the corresponding key is pressed, the application plays an audio sample and briefly animates the button with a highlight effect.

The keyboard keys and their mapped drum sounds are:

| Key | Sound |
|-----|-------|
| w | Tom 1 |
| a | Tom 2 |
| s | Tom 3 |
| d | Tom 4 |
| j | Snare |
| k | Kick Bass |
| l | Crash Cymbal |

## Project Structure

```
Project-2/
├── index.html
├── index.js
├── styles.css
├── images/
│   ├── crash.png
│   ├── kick.png
│   ├── snare.png
│   ├── tom1.png
│   ├── tom2.png
│   ├── tom3.png
│   └── tom4.png
└── sounds/
    ├── crash.mp3
    ├── kick-bass.mp3
    ├── snare.mp3
    ├── tom-1.mp3
    ├── tom-2.mp3
    ├── tom-3.mp3
    └── tom-4.mp3
```

## Files

**index.html** — Defines the page structure. Renders the title and a set of drum pad buttons, each assigned a class and label corresponding to a keyboard key.

**index.js** — Contains all application logic. Attaches click event listeners to every drum button and a keydown listener to the document. On either input, it calls `makeSound` to play the correct audio file and `buttonAnimation` to apply a temporary visual highlight to the pressed button.

**styles.css** — Styles the page with a dark background and centers the drum pad buttons. Each button displays a drum image as its background and is styled to visually respond to animation class changes.

**images/** — Contains PNG images used as the visual face of each drum pad button.

**sounds/** — Contains MP3 audio files played when each drum pad is activated.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES5)

## Usage

Open `index.html` in any modern web browser. Press the keyboard keys listed above or click the buttons directly to play drum sounds.

## Repository

https://github.com/harshilguptahgs2007-ux/Javascript-pro/tree/main/Project-2
