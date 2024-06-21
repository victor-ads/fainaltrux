document.addEventListener("DOMContentLoaded", function() {
    const newsContainer = document.getElementById("news-container");

    // Sample news articles
    const newsArticles = [
        {
            title: "Breaking News: Market Hits Record Highs",
            content: "Today, the stock market reached new record highs as investors reacted positively to the latest economic data.",
            date: "June 20, 2024"
        },
        {
            title: "Local News: Community Garden Blooms",
            content: "The community garden project has seen unprecedented growth this season, thanks to the efforts of local volunteers.",
            date: "June 19, 2024"
        },
        {
            title: "Tech News: New Smartphone Released",
            content: "The latest smartphone model features groundbreaking technology, making it the most advanced device on the market.",
            date: "June 18, 2024"
        }
    ];

    // Function to create news article elements
    function createNewsArticle(article) {
        const articleDiv = document.createElement("div");
        articleDiv.classList.add("news-article");

        const title = document.createElement("h3");
        title.textContent = article.title;
        articleDiv.appendChild(title);

        const date = document.createElement("p");
        date.textContent = article.date;
        articleDiv.appendChild(date);

        const content = document.createElement("p");
        content.textContent = article.content;
        articleDiv.appendChild(content);

        return articleDiv;
    }

    // Inject news articles into the container
    newsArticles.forEach(article => {
        const articleElement = createNewsArticle(article);
        newsContainer.appendChild(articleElement);
    });
});
