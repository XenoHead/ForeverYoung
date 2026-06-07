# Add Audio Elements (Sound Effects & Music)

The goal is to enhance the website's immersive, nostalgic atmosphere by adding dynamic audio elements: a buzzing sound for the neon flicker, white noise for the TV, and a background music player.

## User Review Required

> [!WARNING]
> **Browser Autoplay Policies**
> Modern web browsers (Chrome, Safari, Firefox) strictly block audio from playing automatically when a user visits a page. A user **must** interact with the page (like clicking a button) before any sound is allowed to play.
> 
> **Proposed Solution**: We can add an "Unmute / Play Audio" toggle button to the navigation bar, or a "Click to Enter" overlay when the site first loads. Once the user clicks this, we can safely play the neon buzz, the TV static, and the background music. Which approach do you prefer?

## Proposed Changes

### Global Audio Controller (New JavaScript File)
- **`audio-controller.js`**: Create a global JavaScript file that we can include across the site to handle the audio context.
- Will manage an "Unmute" state stored in `localStorage` so the user's preference persists as they navigate between pages.

### Sound Effects
- **Neon Flicker (`index.html`)**: We will use JavaScript to synchronize a short electrical "bzzt" audio file with the visual CSS flicker animation.
- **TV Static (`contact.html`)**: We will play a brief 1-2 second "white noise/static" audio clip whenever a user clicks a TV channel button to switch feeds.
- **TV Flicker (`contact.html`)**: We can optionally sync a subtle zap sound to the random CRT screen flicker.

### Background Music Player
- We can build a small, unobtrusive music player (perhaps resting in the bottom corner of the screen or in the nav bar).
- It will randomly shuffle through a playlist of songs. 
- *Note*: We will need a few audio files to serve as the music tracks. (I can use some placeholder royalty-free tracks for now, or you can upload specific tracks you'd like to use).

## Open Questions

> [!IMPORTANT]
> 1. **Interaction Prompt**: Do you prefer an "Unmute" button always visible in the navigation bar, or a full-page "Click to Enter" screen when someone first visits the site?
> 2. **Audio Files**: Do you have specific MP3/WAV files for the neon buzz, TV static, and the songs you want to use, or should I generate/find some placeholder sounds for us to build the system with?
> 3. **Music Player Location**: Should the background music player be hidden entirely (just playing in the background once unmuted), or should we have a visible mini-player so users can pause/skip tracks?

## Verification Plan
1. Add the audio logic and test that browsers successfully block the audio until the user interacts.
2. Verify the visual "flicker" matches the timing of the audio buzz.
3. Ensure navigating to different pages doesn't break the audio experience.
