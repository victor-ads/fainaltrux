/* script.js */
document.addEventListener("DOMContentLoaded", function() {
    const projectCountElement = document.getElementById("project-count");
    const engineerCountElement = document.getElementById("engineer-count");

    const countTo = (element, target) => {
        let count = 0;
        const interval = setInterval(() => {
            count++;
            element.textContent = count;
            if (count === target) {
                clearInterval(interval);
            }
        }, 50); // Adjust the speed as needed
    };

    // Replace these numbers with your actual project and engineer counts
    const totalProjects = 10000;
    const totalEngineers = 4500;

    countTo(projectCountElement, totalProjects);
    countTo(engineerCountElement, totalEngineers);
});
