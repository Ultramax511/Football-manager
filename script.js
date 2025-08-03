// === GLOBAL STORAGE ===
const matches = [];
const players = [];
const comments = [];

// === SECTION SWITCHING ===
function showSection(id) {
  document.querySelectorAll("section").forEach(sec => sec.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");

  if (id === 'history') renderHistory();
  if (id === 'profile') renderPlayers();
  if (id === 'comments') renderComments();
}

// === MATCH RECORDER ===
function addMatch() {
  const team1 = document.getElementById("team1").value.trim();
  const team2 = document.getElementById("team2").value.trim();
  const matchType = document.getElementById("matchType").value;
  const date = document.getElementById("date").value;

  if (!team1 || !team2 || !date) {
    alert("Please fill in all fields!");
    return;
  }

  matches.push({ team1, team2, matchType, date });
  alert("Match recorded!");
  clearInputs();
}

function clearInputs() {
  document.getElementById("team1").value = "";
  document.getElementById("team2").value = "";
  document.getElementById("date").value = "";
}

// === MATCH HISTORY ===
function renderHistory() {
  const list = document.getElementById("matchList");
  list.innerHTML = "";

  matches.forEach((match, i) => {
    const item = document.createElement("li");
    item.textContent = `${match.date}: ${match.team1} vs ${match.team2} [${match.matchType}]`;
    list.appendChild(item);
  });
}

// === TEAM PROFILE ===
function addPlayerSlot() {
  const name = prompt("Enter player's name:");
  if (name) {
    players.push(name);
    renderPlayers();
  }
}

function renderPlayers() {
  const slotDiv = document.getElementById("playerSlots");
  slotDiv.innerHTML = "";

  players.forEach((p, i) => {
    const tag = document.createElement("div");
    tag.textContent = `Player ${i + 1}: ${p}`;
    slotDiv.appendChild(tag);
  });
}

// === COMMENT SYSTEM ===
function addComment() {
  const commentInput = document.getElementById("commentInput");
  const comment = commentInput.value.trim();
  if (comment) {
    comments.push(comment);
    commentInput.value = "";
    renderComments();
  }
}

function renderComments() {
  const list = document.getElementById("commentList");
  list.innerHTML = "";

  comments.forEach((text, i) => {
    const li = document.createElement("li");
    li.textContent = text;
    list.appendChild(li);
  });
  }
