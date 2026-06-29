function normalizeUnits(manifest) {
  const normalizedManifest = { ...manifest };

  if (normalizedManifest.unit === "lb") {
    normalizedManifest.weight = normalizedManifest.weight * 0.45;
  }

  normalizedManifest.unit = "kg";
  return normalizedManifest;
}

// Validate the cargo manifest
function validateManifest(manifest) {
  const validationErrors = {};

  if (!manifest.hasOwnProperty("containerId")) {
    validationErrors.containerId = "Missing";
  } else if (
    !Number.isInteger(manifest.containerId) ||
    manifest.containerId <= 0
  ) {
    validationErrors.containerId = "Invalid";
  }

  if (!manifest.hasOwnProperty("destination")) {
    validationErrors.destination = "Missing";
  } else if (
    typeof manifest.destination !== "string" ||
    manifest.destination.trim() === ""
  ) {
    validationErrors.destination = "Invalid";
  }

  if (!manifest.hasOwnProperty("weight")) {
    validationErrors.weight = "Missing";
  } else if (
    typeof manifest.weight !== "number" ||
    Number.isNaN(manifest.weight) ||
    manifest.weight <= 0
  ) {
    validationErrors.weight = "Invalid";
  }

  if (!manifest.hasOwnProperty("unit")) {
    validationErrors.unit = "Missing";
  } else if (manifest.unit !== "kg" && manifest.unit !== "lb") {
    validationErrors.unit = "Invalid";
  }

  if (!manifest.hasOwnProperty("hazmat")) {
    validationErrors.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    validationErrors.hazmat = "Invalid";
  }

  return validationErrors;
}

// Process the cargo manifest
function processManifest(manifest) {
  const validationErrors = validateManifest(manifest);

  if (Object.keys(validationErrors).length === 0) {
    const normalizedManifest = normalizeUnits(manifest);

    console.log(`Validation success: ${manifest.containerId}`);
    console.log(`Total weight: ${normalizedManifest.weight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(validationErrors);
  }
}
