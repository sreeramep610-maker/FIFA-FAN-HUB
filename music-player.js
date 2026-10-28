/* ============================================================
FIFA FAN HUB — BACKGROUND MUSIC PLAYER
============================================================
HOW TO ADD YOUR OWN TRACKS:
Edit the WC_TRACKS array below. Each entry needs:
- name: the title shown in the player
- src:  the path to YOUR OWN audio file (mp3/ogg/wav)

Put your audio files in a folder next to your HTML pages,
e.g. /assets/music/track1.mp3, and reference them below.
You must supply files you own or have the rights to use —
this script does not include any audio itself.

HOW TO USE ON EVERY PAGE:
Add these two lines before </body> on each of your 5 pages:

<link rel="stylesheet" href="music-player.css">
<script src="music-player.js" defer></script>

The player will appear as a small floating widget and will
remember the current track + playback position across page
navigations (using localStorage), so it feels continuous.
============================================================ */

/* ============================================================
FIFA FAN HUB — BACKGROUND MUSIC PLAYER
============================================================ */

// Automatically detect the location of music-player.js
const MUSIC_BASE = new URL(
    "music/",
    document.currentScript
        ? document.currentScript.src
        : window.location.href
).href;

const WC_TRACKS = [
    { name: "Track 1 — Official FIFA World Cup 2026 Anthem 'DNA'", src: MUSIC_BASE + "track 1.mp3" },
    { name: "Track 2 — Goals", src: MUSIC_BASE + "track 2.mp3" },
    { name: "Track 3 — Bring It On Home to Me", src: MUSIC_BASE + "track 3.mp3" },
    { name: "Track 4 — Illuminate", src: MUSIC_BASE + "track 4.mp3" },
    { name: "Track 5 — Wild Things and Here", src: MUSIC_BASE + "track 5.mp3" },
    { name: "Track 6 — Wonder", src: MUSIC_BASE + "track 6.mp3" },
    { name: "Track 7 — Siir Siir", src: MUSIC_BASE + "track 7.mp3" },
    { name: "Track 8 — Dai Dai", src: MUSIC_BASE + "track 8.mp3" },
    { name: "Track 9 — One Heartbeat (Spoken Word)", src: MUSIC_BASE + "track 9.mp3" },
    { name: "Track 10 — Oye Mi Amor", src: MUSIC_BASE + "track 10.mp3" },
    { name: "Track 11 — Partidazo", src: MUSIC_BASE + "track 11.mp3" },
    { name: "Track 12 — Por Ella", src: MUSIC_BASE + "track 12.mp3" },
    { name: "Track 13 — A Medley of Hits", src: MUSIC_BASE + "track 13.mp3" },
    { name: "Track 14 — Post Malone", src: MUSIC_BASE + "track 14.mp3" },
    { name: "Track 15 — Tom Cruise", src: MUSIC_BASE + "track 15.mp3" },
    { name: "Track 16 — Jennifer Hudson", src: MUSIC_BASE + "track 16.mp3" },
    { name: "Track 17 — Robbie Williams, Laura Pausini & Nicole Scherzinger", src: MUSIC_BASE + "track 17.mp3" },
    { name: "Track 18 — iShowSpeed", src: MUSIC_BASE + "track 18.mp3" },
    { name: "Track 19 — BTS", src: MUSIC_BASE + "track 19.mp3" },
    { name: "Track 20 — Dreamers", src: MUSIC_BASE + "track 20.mp3" },
    { name: "Track 21 — Wavin Flag", src: MUSIC_BASE + "track 21.mp3" },
    { name: "Track 22 —  Haya Haya", src: MUSIC_BASE + "track 22.mp3" },
    { name: "Track 23 — Seven Nation Army", src: MUSIC_BASE + "track 23.mp3" }


];

(function initWorldCupMusicPlayer(){

const STATE_KEY = 'wc_music_state';
let audio = new Audio();
audio.volume = 0.5;

let state = {
trackIndex: 0,
currentTime: 0,
isPlaying: false,
muted: false,
volume: 0.5,
collapsed: false
};

function loadState(){
try{
const saved = localStorage.getItem(STATE_KEY);
if(saved) state = { ...state, ...JSON.parse(saved) };
} catch(err){
console.error('Could not load music player state:', err);
}
}

function saveState(){
try{
localStorage.setItem(STATE_KEY, JSON.stringify(state));
} catch(err){
console.error('Could not save music player state:', err);
}
}

function buildWidget(){
const wrap = document.createElement('div');
wrap.id = 'wcMusicPlayer';
wrap.innerHTML = `
<div class="wc-header" id="wcHeader">
<div class="wc-title">
<span class="wc-mini-icon">🎵</span>
<span class="wc-title-text">WORLD CUP RADIO</span>
</div>
<span class="wc-toggle-icon" id="wcToggleIcon">▾</span>
</div>
<div class="wc-body" id="wcBody">
<div class="wc-track-name" id="wcTrackName">—</div>
<div class="wc-track-count" id="wcTrackCount">—</div>
<div class="wc-progress-wrap" id="wcProgressWrap">
<div class="wc-progress-fill" id="wcProgressFill"></div>
</div>
<div class="wc-controls">
<button class="wc-btn" id="wcPrev" title="Previous">⏮</button>
<button class="wc-btn wc-play" id="wcPlayPause" title="Play/Pause">▶</button>
<button class="wc-btn" id="wcNext" title="Next">⏭</button>
</div>
<div class="wc-volume-row">
<button class="wc-btn" id="wcMute" title="Mute">🔊</button>
<input type="range" id="wcVolume" min="0" max="1" step="0.01">
</div>
</div>
`;
document.body.appendChild(wrap);
return wrap;
}

function formatTrackLabel(){
const t = WC_TRACKS[state.trackIndex];
return t ? t.name : 'No tracks configured';
}

function updateUI(){
const trackNameEl = document.getElementById('wcTrackName');
const trackCountEl = document.getElementById('wcTrackCount');
const playBtn = document.getElementById('wcPlayPause');
const muteBtn = document.getElementById('wcMute');
const volumeSlider = document.getElementById('wcVolume');
const wrap = document.getElementById('wcMusicPlayer');
const toggleIcon = document.getElementById('wcToggleIcon');

if(trackNameEl) trackNameEl.textContent = formatTrackLabel();
if(trackCountEl) trackCountEl.textContent = WC_TRACKS.length ? `Track ${state.trackIndex+1} of ${WC_TRACKS.length}` : '';
if(playBtn) playBtn.textContent = state.isPlaying ? '⏸' : '▶';
if(muteBtn) muteBtn.textContent = state.muted ? '🔇' : '🔊';
if(volumeSlider) volumeSlider.value = state.volume;
if(wrap) wrap.classList.toggle('collapsed', state.collapsed);
if(toggleIcon) toggleIcon.textContent = state.collapsed ? '▸' : '▾';
}

function updateProgress(){
const fill = document.getElementById('wcProgressFill');
if(!fill || !audio.duration) return;
const pct = (audio.currentTime / audio.duration) * 100;
fill.style.width = pct + '%';
}

function loadTrack(index, autoplay){
if(!WC_TRACKS.length) return;
state.trackIndex = ((index % WC_TRACKS.length) + WC_TRACKS.length) % WC_TRACKS.length;
audio.src = WC_TRACKS[state.trackIndex].src;
audio.currentTime = 0;
updateUI();
if(autoplay){
attemptPlay();
}
}

function attemptPlay(){
const playPromise = audio.play();
if(playPromise !== undefined){
playPromise.then(() => {
state.isPlaying = true;
updateUI();
saveState();
hideResumePrompt();
}).catch(() => {
// Autoplay blocked by browser — wait for user interaction
state.isPlaying = false;
updateUI();
showResumePrompt();
});
}
}

function pauseTrack(){
audio.pause();
state.isPlaying = false;
updateUI();
saveState();
}

function showResumePrompt(){
if(document.getElementById('wcResumePrompt')) return;
const btn = document.createElement('div');
btn.id = 'wcResumePrompt';
btn.textContent = '🔊 Tap to resume World Cup music';
btn.onclick = () => {
attemptPlay();
};
document.body.appendChild(btn);
}

function hideResumePrompt(){
const el = document.getElementById('wcResumePrompt');
if(el) el.remove();
}

function attachEvents(){
document.getElementById('wcHeader').addEventListener('click', () => {
state.collapsed = !state.collapsed;
updateUI();
saveState();
});

document.getElementById('wcPlayPause').addEventListener('click', (e) => {
e.stopPropagation();
if(state.isPlaying){
pauseTrack();
} else {
attemptPlay();
}
});

document.getElementById('wcNext').addEventListener('click', (e) => {
e.stopPropagation();
loadTrack(state.trackIndex + 1, true);
});

document.getElementById('wcPrev').addEventListener('click', (e) => {
e.stopPropagation();
loadTrack(state.trackIndex - 1, true);
});

document.getElementById('wcMute').addEventListener('click', (e) => {
e.stopPropagation();
state.muted = !state.muted;
audio.muted = state.muted;
updateUI();
saveState();
});

document.getElementById('wcVolume').addEventListener('input', (e) => {
e.stopPropagation();
state.volume = parseFloat(e.target.value);
audio.volume = state.volume;
saveState();
});
document.getElementById('wcVolume').addEventListener('click', (e) => e.stopPropagation());

document.getElementById('wcProgressWrap').addEventListener('click', (e) => {
e.stopPropagation();
if(!audio.duration) return;
const rect = e.currentTarget.getBoundingClientRect();
const pct = (e.clientX - rect.left) / rect.width;
audio.currentTime = pct * audio.duration;
});

audio.addEventListener('timeupdate', updateProgress);

audio.addEventListener('ended', () => {
loadTrack(state.trackIndex + 1, true);
});

// Persist state periodically and on unload
setInterval(() => {
if(state.isPlaying){
state.currentTime = audio.currentTime;
saveState();
}
}, 2000);

window.addEventListener('beforeunload', () => {
state.currentTime = audio.currentTime;
saveState();
});

// Some browsers only unlock autoplay after ANY user gesture on the page
document.addEventListener('click', function resumeOnFirstGesture(){
if(state.isPlaying && audio.paused){
audio.play().catch(()=>{});
}
}, { once:false });
}

function init(){
if(!WC_TRACKS.length) return;

loadState();
buildWidget();
attachEvents();

audio.volume = state.volume;
audio.muted = state.muted;

audio.src = WC_TRACKS[state.trackIndex].src;
audio.addEventListener('loadedmetadata', () => {
if(state.currentTime && state.currentTime < audio.duration){
audio.currentTime = state.currentTime;
}
}, { once:true });

updateUI();

if(state.isPlaying){
attemptPlay();
}
}

if(document.readyState === 'loading'){
document.addEventListener('DOMContentLoaded', init);
} else {
init();
}

})();