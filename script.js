const blastButton = document.getElementById('blastButton');
const field = document.getElementById('field');
const destroyedCount = document.getElementById('destroyedCount');
let count = 0;
let activeGhosts = 0;

// Configurables
const GHOST_LIFETIME = 7000; // ms
const SPAWN_INTERVAL = 2200; // ms
const MAX_ACTIVE_GHOSTS = 12;
const MIN_GHOST_SIZE = 80; // px
const MAX_GHOST_SIZE = 160; // px
const MAX_SPAWN_PER_ROUND = 4;

function createGhost() {
  const ghost = document.createElement('button');
  ghost.className = 'ghost-card';
  ghost.setAttribute('type', 'button');
  ghost.setAttribute('aria-label', 'Objetivo: fantasma');
  ghost.setAttribute('title', 'Fantasma');
  ghost.innerHTML = '<span>Fantasma</span>';
  ghost.addEventListener('click', () => destroyGhost(ghost));
  // allow keyboard activation
  ghost.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      destroyGhost(ghost);
    }
  });
  field.appendChild(ghost);
  activeGhosts += 1;

  requestAnimationFrame(() => {
    const fieldRect = field.getBoundingClientRect();
    // random size
    const size = Math.floor(Math.random() * (MAX_GHOST_SIZE - MIN_GHOST_SIZE + 1)) + MIN_GHOST_SIZE;
    ghost.style.setProperty('--ghost-size', `${size}px`);
    const ghostRect = ghost.getBoundingClientRect();
    const maxX = Math.max(0, fieldRect.width - ghostRect.width - 8);
    const maxY = Math.max(0, fieldRect.height - ghostRect.height - 8);
    const x = Math.floor(Math.random() * (maxX + 1));
    const y = Math.floor(Math.random() * (maxY + 1));
    ghost.style.left = `${x}px`;
    ghost.style.top = `${y}px`;
  });

  ghost._timeout = setTimeout(() => {
    if (field.contains(ghost)) {
      field.removeChild(ghost);
      activeGhosts -= 1;
    }
  }, GHOST_LIFETIME);
}

function destroyGhost(ghost) {
  if (!field.contains(ghost)) return;
  ghost.classList.add('destroyed');
  if (ghost._timeout) {
    clearTimeout(ghost._timeout);
    delete ghost._timeout;
  }
  setTimeout(() => {
    if (field.contains(ghost)) {
      field.removeChild(ghost);
      activeGhosts -= 1;
    }
  }, 240);
  count += 1;
  destroyedCount.textContent = count;
}

function spawnGhosts() {
  if (activeGhosts >= MAX_ACTIVE_GHOSTS) return;
  const spawnCount = Math.max(1, Math.min(MAX_SPAWN_PER_ROUND, Math.floor(Math.random() * 3) + 1));
  for (let i = 0; i < spawnCount; i += 1) {
    createGhost();
  }
}

blastButton.addEventListener('click', () => {
  spawnGhosts();
  blastButton.textContent = 'Disparar de nuevo';
});

setInterval(() => {
  if (activeGhosts < Math.floor(MAX_ACTIVE_GHOSTS * 0.8)) {
    spawnGhosts();
  }
}, SPAWN_INTERVAL);
