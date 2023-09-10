// Get cookie and as JSON
var cookie = localStorage.getItem("flexible-funnel-last-access-data");
var cookieJSON = JSON.parse(cookie);

// Catching error when user isnt on question page or is on unanswered question page
try {
    // If the answer is not granted, remove cookie and reload the page
    if (cookieJSON["status"] != "granted") {
        localStorage.removeItem(cookie);
        location.reload();
    }
} catch {
    console.log("You are not on an answered question page.")
}

// Loop through local storage and remove all items that starts with "flexible-funnel"
for (var item in localStorage) {
    if (item.startsWith("flexible-funnel")) {
        localStorage.removeItem(item);
    };
};

console.log("\n\n\n\n\n\n\n\n\n\n https://github.com/0e8/brainly-unlocker \n made with ❤️ by macius \n\n\n\n\n\n\n\n\n\n");