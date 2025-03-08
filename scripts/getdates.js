// Get the last modified date and format it
const lastModifiedDate = new Date(document.lastModified);
const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };

document.getElementById("last-modified").textContent = "Last Modified: " + lastModifiedDate.toLocaleString('en-US', options);
