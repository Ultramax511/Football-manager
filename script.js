let matches = [];
let playerSlots = [];

function showSection(id) {
  document.querySelectorAll("section").forEach(s => s.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");

  if (id === 'history') renderHistory();
  if (id === 'profile') renderPlayerSlots();
}

function addMatch() {
  const team1 = document.getElementById("team1").value;
  const team2 = document.getElementById("team2").value;
  const type = document.getElementById("matchType").value;
  const date = document.getElementById("date").value;

  matches.push({ team1, team2, type, date });
  alert("Match Saved!");
  document.getElementById("team1").value = "";
  document.getElementById("team2").value = "";
  document.getElementById("date").value = "";
}

function renderHistory() {
  const list = document.getElementById("matchList");
  list.innerHTML = "";
  matches.forEach((match, i) => {
    const li = document.createElement("li");
    li.innerHTML = `${match.date} – ${match.type.toUpperCase()}: ${match.team1} vs ${match.team2} 
    <button onclick="deleteMatch(${i})">🗑</button>`;
    list.appendChild(li);
  });
}

function deleteMatch(index) {
  matches.splice(index, 1);
  renderHistory();
}

function addPlayerSlot() {
  playerSlots.push({ name: "", position: "", remark: "" });
  renderPlayerSlots();
}

function deletePlayer(index) {
  playerSlots.splice(index, 1);
  renderPlayerSlots();
}

function renderPlayerSlots() {
  const container = document.getElementById("playerSlots");
  container.innerHTML = "";
  playerSlots.forEach((player, i) => {
    container.innerHTML += `
      <div class="player-slot">
        <input placeholder="Name" value="${player.name}" oninput="playerSlots[${i}].name=this.value">
        <input placeholder="Position" value="${player.position}" oninput="playerSlots[${i}].position=this.value">
        <input placeholder="Remark" value="${player.remark}" oninput="playerSlots[${i}].remark=this.value">
        <button class="delete-btn" onclick="deletePlayer(${i})">Remove</button>
      </div>
    `;
  });
}