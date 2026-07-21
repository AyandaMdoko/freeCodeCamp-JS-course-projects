const squad = [];
// Define the first astronaut object
const firstAstronaut = {
  id: 1,
  name: "Andy",
  role: "Commander",
  isEVAEligible: true,
  priority: 3
};

// Function to add a crew member to the squad
function addCrewMember(crew, astronaut) {
  for (let i = 0; i < crew.length; i++) {
    if (crew[i].id === astronaut.id) {
      console.log("Duplicate ID: " + astronaut.id);
      return;
    }
  }
  crew.push(astronaut);
  console.log(`Added ${astronaut.name} as ${astronaut.role}`);
}

addCrewMember(squad, firstAstronaut);

// Add remaining astronauts to the squad
const remainingCrew = [
  { id: 2, name: "Bart", role: "Pilot", isEVAEligible: false, priority: 8 },
  { id: 3, name: "Caroline", role: "Engineer", isEVAEligible: true, priority: 4 },
  { id: 4, name: "Diego", role: "Scientist", isEVAEligible: false, priority: 1 },
  { id: 5, name: "Elise", role: "Medic", isEVAEligible: true, priority: 7 },
  { id: 6, name: "Felix", role: "Navigator", isEVAEligible: true, priority: 6 },
  { id: 7, name: "Gertrude", role: "Communications", isEVAEligible: false, priority: 4 },
  { id: 8, name: "Hank", role: "Mechanic", isEVAEligible: true, priority: 2 },
  { id: 9, name: "Irene", role: "Specialist", isEVAEligible: true, priority: 5 },
  { id: 10, name: "Joan", role: "Technician", isEVAEligible: false, priority: 1 },
]; 

for (const astronaut of remainingCrew) {
  addCrewMember(squad, astronaut);
}

// Function to swap crew members at specified indices
function swapCrewMembers(crew, fromIndex, toIndex) {
  if (fromIndex < 0 || fromIndex >= crew.length || toIndex < 0 || toIndex >= crew.length) {
    console.log("Invalid crew indices");
    return;
  }

  // Create a copy of the crew array to avoid mutating the original
  const updatedCrew = crew.slice();
  updatedCrew[fromIndex] = updatedCrew.splice(toIndex, 1, updatedCrew[fromIndex])[0];


  return updatedCrew;
}

const updatedSquad = swapCrewMembers(squad, 2, 5);

// Function to sort crew members by priority in descending order
function sortByPriorityDescending(crew) {
  for (let i = 0; i < crew.length - 1; i++) {
    for (let j = 0; j < crew.length - 1 - i; j++) {
      if (crew[j].priority < crew[j + 1].priority) {
        const temp = crew[j];
        crew[j] = crew[j + 1];
        crew[j + 1] = temp;
      }
    }
  }
}

// Sort the squad by priority
sortByPriorityDescending(squad);

// Function to get EVA-ready crew members
function getEVAReadyCrew(crew) {
  const eligible = [];

  for (const astronaut of crew) {
    if (astronaut.isEVAEligible) {
      eligible.push(astronaut);
    }
    sortByPriorityDescending(eligible);
  }

  return eligible;
}

const EVAReadySquad = getEVAReadyCrew(updatedSquad);

// Function to chunk the crew array into smaller arrays of given size
function chunkCrew(crew, size) {
  if (size < 1) {
    console.log("Chunk size must be >= 1");
    return;
  }
}



