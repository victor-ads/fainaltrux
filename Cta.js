// Data for CTA
const ctaData = {
    title: "Ready to Start Your Project?",
    description: "Contact us today to get a free quote and consultation for your next construction project.",
    buttonText: "Get a Free Quote",
    buttonLink: "contact.html" // Link to the contact page or relevant URL
};

// Function to create CTA elements
function createCTA(cta) {
    const ctaDiv = document.createElement('div');

    const titleElement = document.createElement('h2');
    titleElement.innerText = cta.title;

    const descriptionElement = document.createElement('p');
    descriptionElement.innerText = cta.description;

    const buttonElement = document.createElement('button');
    buttonElement.innerText = cta.buttonText;
    buttonElement.onclick = function() {
        window.location.href = cta.buttonLink;
    };

    ctaDiv.appendChild(titleElement);
    ctaDiv.appendChild(descriptionElement);
    ctaDiv.appendChild(buttonElement);

    return ctaDiv;
}

// Function to load CTA
function loadCTA() {
    const ctaContainer = document.getElementById('cta-container');
    const ctaElement = createCTA(ctaData);
    ctaContainer.appendChild(ctaElement);
}

// Load CTA when the page loads
window.onload = loadCTA;
