const players = {
  "messi": {
    name: "Lionel Messi",
    club: "Inter Miami",
    country: "Argentina",
    goals: 819,
    assists: 361
  },
  "ronaldo": {
    name: "Cristiano Ronaldo",
    club: "Al-Nassr",
    country: "Portugal",
    goals: 873,
    assists: 250
  },
  "mbappe": {
    name: "Kylian Mbappé",
    club: "PSG",
    country: "France",
    goals: 284,
    assists: 125
  }
};

function searchPlayer() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const player = players[input];

  const infoDiv = document.getElementById("playerInfo");
  if (player) {
    infoDiv.innerHTML = `
      <h2>${player.name}</h2>
      <p><strong>Club:</strong> ${player.club}</p>
      <p><strong>Country:</strong> ${player.country}</p>
      <p><strong>Goals:</strong> ${player.goals}</p>
      <p><strong>Assists:</strong> ${player.assists}</p>
    `;
  } else {
    infoDiv.innerHTML = `<p style="color:red;">Player not found!</p>`;
  }
}
