// Example gadget data with images
const gadgets = [
    { name: "USB Fingerprint Reader", link: "https://amzn.to/3TK7zf1", image: "USB Fingerprint Reader.jpg" },
    { name: "Door Sealing Guard", link: "https://amzn.to/3U6uMta", image: "door sealing guard.png" },
    { name: "Sink Organizer", link: "https://amzn.to/3POL0EW", image: "sink organizer.jpg" },
    { name: "Mini Bluetooth Printer", link: "https://amzn.to/3xqr7Oh", image: "mini bluetooth printer.jpg" },
    { name: "Door Sealing Guard", link: "https://amzn.to/3U6uMta", image: "door sealing guard.png" },
    { name: "Sink Organizer", link: "https://amzn.to/3POL0EW", image: "sink organizer.jpg" },
    { name: "USB Fingerprint Reader", link: "https://amzn.to/3TK7zf1", image: "USB Fingerprint Reader.jpg" },
    { name: "Door Sealing Guard", link: "https://amzn.to/3U6uMta", image: "door sealing guard.png" },
    { name: "Sink Organizer", link: "https://amzn.to/3POL0EW", image: "sink organizer.jpg" },
	

];

// Function to create gadget links
function createGadgetLinks() {
    const gadgetList = document.getElementById('gadgetList');

    gadgets.forEach(gadget => {
        const linkContainer = document.createElement('div');
        linkContainer.classList.add('gadget-item');

        const linkElement = document.createElement('a');
        linkElement.href = gadget.link;
        linkElement.target = "_blank"; // Open links in a new tab

        const imageElement = document.createElement('img');
        imageElement.src = gadget.image;
        imageElement.alt = gadget.name;
        linkElement.appendChild(imageElement);

        const nameElement = document.createElement('p');
        nameElement.textContent = gadget.name;
        linkElement.appendChild(nameElement);

        linkContainer.appendChild(linkElement);
        gadgetList.appendChild(linkContainer);
    });
}

// Call the function to create gadget links when the page loads
window.onload = createGadgetLinks;
