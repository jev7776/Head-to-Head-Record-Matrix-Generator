const fs = require("fs");

function loadData(path) {
  return JSON.parse(fs.readFileSync(path, "utf8"));
}

function getTeams(data) {
  const teams = new Set(Object.keys(data));
  Object.values(data).forEach(opponents => {
    Object.keys(opponents).forEach(t => teams.add(t));
  });
  return Array.from(teams).sort();
}

function printMatrix(data) {
  const teams = getTeams(data);

  // Header
  let header = "Tm ".padEnd(4);
  teams.forEach(t => header += t.padStart(5));
  console.log(header);

  // Rows
  teams.forEach(team => {
    let row = team.padEnd(4);
    teams.forEach(opp => {
      if (team === opp) {
        row += "--".padStart(5);
      } else {
        row += String(data[team][opp].W).padStart(5);
      }
    });
    console.log(row);
  });
}

const data = loadData("data.json");
printMatrix(data);
