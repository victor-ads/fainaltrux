document.addEventListener('DOMContentLoaded', function() {
    const engineersData = [
        { 
            name: "John Doe", 
            role: "Software Engineer", 
            skypeId: "john.doe", 
            picture: "./image/expert/1.png",
        },
        { 
            name: "Jane Smith", 
            role: "Systems Architect", 
            skypeId: "jane.smith", 
            picture: "./image/expert/images (1).jpg",
        },
        { 
            name: "Bob Johnson", 
            role: "DevOps Engineer", 
            skypeId: "bob.johnson", 
            picture: "./image/expert/1 (6).jpg",
        },
        { 
            name: "Alice Brown", 
            role: "Frontend Developer", 
            skypeId: "alice.brown", 
            picture: "./image/expert/images (1).jpg",
        },
        { 
            name: "Eve Green", 
            role: "Backend Developer", 
            skypeId: "eve.green", 
            picture: "./image/expert/33447_hd.jpg",
        }
    ];

    const engineersContainer = document.getElementById('engineers-container');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    let currentPage = 0;
    let cardsPerPage = calculateCardsPerPage();

    function displayEngineers() {
        engineersContainer.innerHTML = '';

        const startIndex = currentPage * cardsPerPage;
        const endIndex = startIndex + cardsPerPage;

        const engineersToShow = engineersData.slice(startIndex, endIndex);

        engineersToShow.forEach(engineer => {
            const card = document.createElement('div');
            card.classList.add('engineer-card');
            card.innerHTML = `
                <div class="engineer-picture">
                    <img src="${engineer.picture}" alt="${engineer.name}">
                </div>
                <div class="engineer-info">
                    <h3>${engineer.name}</h3>
                    <p>${engineer.role}</p>
                    <button class="hire-me-btn" data-skype-id="${engineer.skypeId}">Hire Me</button>
                </div>
            `;
            engineersContainer.appendChild(card);

            const hireMeBtn = card.querySelector('.hire-me-btn');
            hireMeBtn.addEventListener('click', () => {
                const skypeId = hireMeBtn.getAttribute('data-skype-id');
                if (skypeId) {
                    window.location.href = `skype:${skypeId}?chat`;
                }
            });
        });

        prevBtn.disabled = currentPage === 0;
        nextBtn.disabled = endIndex >= engineersData.length;
    }

    prevBtn.addEventListener('click', () => {
        if (currentPage > 0) {
            currentPage--;
            displayEngineers();
        }
    });

    nextBtn.addEventListener('click', () => {
        const totalPages = Math.ceil(engineersData.length / cardsPerPage);
        if (currentPage < totalPages - 1) {
            currentPage++;
            displayEngineers();
        }
    });

    function calculateCardsPerPage() {
        const viewportWidth = window.innerWidth;
        if (viewportWidth >= 1024) {
            return 3;
        } else if (viewportWidth >= 768) {
            return 2;
        } else {
            return 1;
        }
    }

    window.addEventListener('resize', () => {
        cardsPerPage = calculateCardsPerPage();
        displayEngineers();
    });

    displayEngineers();
});
