const shuffledFragments = [
  { id: 15, text: "and, after a time, passed the place where the Hare was sleeping." },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 11, text: "and to make the Tortoise feel very deeply how ridiculous it was for him to try a race with a Hare," },
  { id: 7, text: "but for the fun of the thing he agreed." },
  { id: 19, text: "The Hare now ran his swiftest," },
  ,
  { id: 1, text: "A Hare was making fun of the Tortoise one day for being so slow." },
  { id: 14, text: "The Tortoise meanwhile kept going slowly but steadily," },
  { id: 9, text: "marked the distance and started the runners off." },
  ,
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 17, text: "and when at last he did wake up," },
  { id: 2, text: '"Do you ever get anywhere?" he asked with a mocking laugh.' },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 8, text: "So the Fox, who had consented to act as judge," },
  { id: 20, text: "but he could not overtake the Tortoise in time." },
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 6, text: "The Hare was much amused at the idea of running a race with the Tortoise," },
  ,
  { id: 13, text: "until the Tortoise should catch up." },
  { id: 10, text: "The Hare was soon far out of sight," },
  { id: 12, text: "he lay down beside the course to take a nap" },
  { id: 18, text: "the Tortoise was near the goal." },
];

//1. Compact the Fragments
//Function thatfilter out the empty slots (undefined) and log a message if any were removed
function compactFragments(arr) {
  const result = [];
  let hasUndefined = false;

  // Loop through the array and filter out undefined elements
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== undefined) {
      result.push(arr[i]);
    } else {
      hasUndefined = true;
    }
  }
  
  if (hasUndefined) {
    console.log("[COMPACTED] Removed undefined elements.");
  }
  return result;
}

const compactedShuffledFragments = compactFragments(shuffledFragments);


//2. Sort the Fragments
//Function that sorts the fragments by their id in ascending order and log a message if any were sorted
function sortFragments(arr) {
  const result = [...arr]; // Copy array to prevent mutation
  const n = result.length;
  
  //
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (result[j].id > result[j + 1].id) {
        // Swap elements
        const temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }
  return result;
}

const sortedFragments = sortFragments(compactedShuffledFragments);

//3. Deduplicate the Fragments
function dedupeFragments(arr) {
  const result = [];
  const seenIds = {};

  // Loop through the array and add unique fragments to the result
  for (let i = 0; i < arr.length; i++) {
    const currentId = arr[i].id;
    if (!seenIds[currentId]) {
      seenIds[currentId] = true;
      result.push(arr[i]);
    } else {
      console.log(`[DEDUPED] Removed duplicate id: ${currentId}`);
    }
  }
  return result;
}

const dedupedFragments = dedupeFragments(sortedFragments);

//4. Fill in Missing Fragments
function fillMissingFragments(arr) {
  if (arr.length === 0) return [];
  
  const result = [];
  let currentId = arr[0].id;
  let i = 0;

  // Loop through the array and fill in missing fragments
  while (i < arr.length) {
    if (arr[i].id === currentId) {
      result.push(arr[i]);
      i++;
    } else {
      console.log(`[FILLED] Added missing id: ${currentId}`);
      result.push({ id: currentId, text: "[...]" });
    }
    currentId++;
  }
  return result;
}

const filledFragments = fillMissingFragments(dedupedFragments);

//5. Assemble the Story
function assembleStory(arr) {
  let story = "";
  for (let i = 0; i < arr.length; i++) {
    story += arr[i].text;
    if (i < arr.length - 1) {
      story += "\n";
    }
  }
  return story;
}

console.log(assembleStory(filledFragments));