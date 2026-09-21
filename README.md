# Simon Game

A browser-based version of the classic memory game **Simon**. The game plays a sequence of colors/sounds, and the player must click the buttons back in the same order. Each successful round adds one more step to the sequence.

## Tech Stack

- **HTML5** – page structure (`index.html`)
- **CSS3** – styling and layout (`styles.css`)
- **JavaScript (Vanilla JS)** – core game logic (`game.js`)
- **jQuery (3.7.1, via CDN)** – DOM manipulation and event handling
- **Google Fonts** – `Press Start 2P` for the retro arcade look
- **Audio files** (`./sounds/*.mp3`) – one sound per color, plus a "wrong" sound for game over

## Project Structure

```
├── index.html      # Page markup: title, 4 colored buttons, script/style links
├── styles.css       # Colors, button grid layout, pressed/game-over states
├── game.js          # Game logic: sequence generation, input checking, state
└── sounds/          # red.mp3, blue.mp3, green.mp3, yellow.mp3, wrong.mp3
```

## How It Works

### 1. Starting the Game
The game starts the moment the player presses **any key** on the keyboard:
```js
$(document).keydown(function(){
    if(!started){
        nextSequence();
        started=true;
    }
});
```
A `started` flag makes sure this only triggers once per game session.

### 2. Generating the Sequence
Each round, `nextSequence()`:
- Increments the `level` counter and updates the on-screen title.
- Picks a random color from `buttoncolours = ["red","blue","green","yellow"]` using `Math.floor(Math.random() * 4)`.
- Pushes that color onto `gamePattern` (the growing sequence the player must repeat).
- Flashes the corresponding button (`fadeIn`/`fadeOut`) and plays its sound.

### 3. Capturing Player Input
Every button click:
- Reads the clicked button's `id` (which doubles as the color name).
- Pushes it into `userClickedPattern`.
- Plays the matching sound and a brief "pressed" animation.
- Immediately calls `checkanswer()` to validate that specific click.

### 4. Checking the Answer
`checkanswer(currentlevel)` compares the player's latest click against the same index in `gamePattern`:
- **Correct so far, and the full pattern is matched** → wait 1 second, then call `nextSequence()` to add a new step.
- **Correct so far, but pattern isn't complete yet** → nothing happens; wait for the next click.
- **Wrong** → play the error sound, flash the background red (`game-over` class) for 2 seconds, show "Game Over" text, and reset via `startover()`.

### 5. Resetting
`startover()` clears `gamePattern` and `userClickedPattern`, resets `level` to 0, and sets `started` back to `false` so the game can be restarted with a keypress.

## Core Game Loop Summary

```
Press any key
   → nextSequence() generates + shows next color
      → player clicks buttons to repeat the sequence
         → checkanswer() validates each click
            → correct & complete → nextSequence() (longer sequence)
            → incorrect → game over → startover()
```

## Possible Improvements (Part 2 ideas)
- Add a restart/reset button instead of requiring a keypress.
- Show the current score/high score.
- Add difficulty levels (faster flashes, more colors).
- Disable button clicks while the sequence is being played back, to prevent cheating.
- Add mobile touch support styling/testing.
