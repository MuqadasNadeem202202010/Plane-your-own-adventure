// Open modal and display content based on the package clicked
function openModal(packageName) {
    // Get the modal element
    var modal = document.getElementById("modal");

    // Get the modal title and details elements
    var modalTitle = document.getElementById("modal-title");
    var modalDetails = document.getElementById("modal-details");

    // Check if modal is found
    if (!modal) {
        console.error("Modal element not found!");
        return;
    }

    // Set content based on the package clicked
    if (packageName === 'hunza') {
        modalTitle.innerHTML = "Hunza Valley Adventure Package";
        modalDetails.innerHTML = "Highlights: Explore the breathtaking beauty of Hunza Valley. Visit famous spots like Altit and Baltit Forts. Traditional Hunza culture and food experience. Adventure activities like hiking and sightseeing.";
    } else if (packageName === 'neelum') {
        modalTitle.innerHTML = "Neelum Valley Serenity Package";
        modalDetails.innerHTML = "Highlights: Discover the serene beauty of Neelum Valley. Visit Kutton, Keran, and Sharda. Relax by the crystal-clear Neelum River. Peaceful accommodation with scenic views.";
    } else if (packageName === 'skardu') {
        modalTitle.innerHTML = "Skardu Majestic Peaks Package";
        modalDetails.innerHTML = "Highlights: Stunning views of Skardu’s majestic mountains. Visit Shangrila Resort, Sheosar Lake, and Deosai Plains. Camping and bonfire by Skardu Lake. Comfortable stays in premium hotels.";
    } else if (packageName === 'swat') {
        modalTitle.innerHTML = "Swat Valley Exploration Package";
        modalDetails.innerHTML = "Highlights: Explore the 'Switzerland of Pakistan' – Swat Valley. Visit Mingora, Malam Jabba, and Saidu Sharif. Adventure activities like skiing, hiking, and rafting. Cozy accommodation with Swat’s hospitality.";
    } else if (packageName === 'murree') {
        modalTitle.innerHTML = "Murree Hill Station Family Package";
        modalDetails.innerHTML = "Highlights: Perfect getaway for families to the cool hills of Murree. Visit Patriata, Mall Road, and Kashmir Point. Fun activities for kids and adults alike. Family-friendly hotels and meals included. Transport from Islamabad and back.";
    } else {
        console.error("Package not found!");
        return;
    }

    // Show the modal
    modal.style.display = "block";
}

// Close modal when cross button is clicked
function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Close modal when clicked outside the modal content
window.onclick = function(event) {
    var modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
