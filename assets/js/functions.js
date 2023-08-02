//create alert

const createAlert = (msg, type = "danger") => {
  return `<p class="alert alert-${type} d-flex justify-content-between">
  ${msg}
  <button class="btn btn-close" data-bs-dismiss="alert"></button>
</p>`;
};

// sent LS data
const setLsData = (key, valu) => {
  localStorage.setItem(key, JSON.stringify(valu));
};

//get LS data
const getLsData = (key) => {
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key));
  }
  return [];
};

// time ago function
function timeAgo(date) {
  const currentDate = new Date();
  const timeDifference = currentDate - date;

  // Define the time units and their respective millisecond values
  const timeUnits = [
    { unit: "year", milliseconds: 31536000000 }, // 365 days
    { unit: "month", milliseconds: 2592000000 }, // 30 days
    { unit: "day", milliseconds: 86400000 }, // 24 hours
    { unit: "hour", milliseconds: 3600000 }, // 60 minutes
    { unit: "minute", milliseconds: 60000 }, // 60 seconds
    { unit: "second", milliseconds: 1000 }, // 1000 milliseconds
  ];

  // Find the appropriate time unit to use
  const unit = timeUnits.find((unit) => timeDifference >= unit.milliseconds);

  if (!unit) {
    return "just now";
  }

  // Calculate the number of units ago
  const unitsAgo = Math.floor(timeDifference / unit.milliseconds);

  // Add "s" to the unit if the count is plural
  const plural = unitsAgo > 1 ? "s" : "";

  return `${unitsAgo} ${unit.unit}${plural} ago`;
}
