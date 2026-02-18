// ----- Scripts -----
const scriptsContainer = document.getElementById('scriptsContainer');

scripts.forEach((script, index) => {
  const card = document.createElement('div');
  card.classList.add('script-card');

  const owner = document.createElement('p');
  owner.classList.add('owner');
  owner.textContent = `Owner: ${script.owner}`;

  const pre = document.createElement('pre');
  pre.textContent = script.code;

  const button = document.createElement('button');
  button.classList.add('copy-btn');
  button.textContent = 'Copy Script';
  button.addEventListener('click', () => {
    navigator.clipboard.writeText(script.code).then(() => showNotification());
  });

  card.appendChild(owner);
  card.appendChild(pre);
  card.appendChild(button);
  scriptsContainer.appendChild(card);
});

// ----- Notification -----
const notification = document.getElementById('notification');
function showNotification() {
  notification.style.display = 'block';
  setTimeout(() => {
    notification.style.display = 'none';
  }, 1500);
}

// ----- Videos -----
const videosContainer = document.getElementById('videosContainer');

// Add your video names here (without extension)
const videoFiles = ["Video1"]; // Add "Video2", "Video3", etc.

videoFiles.forEach(name => {
  const card = document.createElement('div');
  card.classList.add('video-card');

  const title = document.createElement('p');
  title.textContent = name;

  const video = document.createElement('video');
  video.width = 320;
  video.controls = true;

  const source = document.createElement('source');
  source.src = `videos/${name}.mp4`;
  source.type = 'video/mp4';

  video.appendChild(source);
  card.appendChild(title);
  card.appendChild(video);
  videosContainer.appendChild(card);
});