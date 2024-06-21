// Data for FAQs
const faqData = [
    {
        question: "What services do you offer?",
        answer: "We offer a range of construction services including residential, commercial, and industrial projects. We handle everything from initial design to final construction."
    },
    {
        question: "How long have you been in business?",
        answer: "We have been in the construction industry for over 20 years, delivering quality projects to satisfied clients."
    },
    // Add more FAQs as needed
];

// Function to create FAQ elements
function createFAQ(faq) {
    // Create container for each FAQ
    const faqDiv = document.createElement('div');
    faqDiv.classList.add('faq');

    // Create the question element
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('faq-question');
    questionDiv.innerHTML = `<h3>${faq.question}</h3>`;
    questionDiv.onclick = function() {
        const answer = this.nextElementSibling;
        answer.style.display = answer.style.display === "block" ? "none" : "block";
    };

    // Create the answer element
    const answerDiv = document.createElement('div');
    answerDiv.classList.add('faq-answer');
    answerDiv.innerHTML = `<p>${faq.answer}</p>`;

    // Append question and answer to the FAQ container
    faqDiv.appendChild(questionDiv);
    faqDiv.appendChild(answerDiv);

    return faqDiv;
}

// Function to load FAQs
function loadFAQs() {
    const faqContainer = document.getElementById('faq-container');
    faqData.forEach(faq => {
        const faqElement = createFAQ(faq);
        faqContainer.appendChild(faqElement);
    });
}

// Load FAQs when the page loads
window.onload = loadFAQs;
