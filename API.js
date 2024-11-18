document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".more-info-btn");

    const fetchMangaDetails = async (name) => {
        const query = `
            query {
                Media(search: "${name}", type: MANGA) {
                    genres
                    averageScore
                }
            }
        `;

        try {
            const response = await fetch("https://graphql.anilist.co", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ query }),
            });

            const data = await response.json();
            return data.data.Media;
        } catch (error) {
            console.error(`Error fetching details for ${name}:`, error);
            return null;
        }
    };

    buttons.forEach((button) => {
        button.addEventListener("click", async () => {
            const mangaName = button.dataset.mangaName;
            const extraInfoDiv = button.nextElementSibling;

            if (extraInfoDiv.style.display === "block") {
                extraInfoDiv.style.display = "none";
                button.textContent = "More information";
                return;
            }

            button.textContent = "Loading...";
            button.disabled = true;

            const mangaDetails = await fetchMangaDetails(mangaName);

            if (mangaDetails) {
                extraInfoDiv.innerHTML = `
                    <p><strong>Genres:</strong> ${mangaDetails.genres.join(", ")}</p>
                    <p><strong>Average Score:</strong> ${mangaDetails.averageScore || "N/A"}</p>
                `;
                extraInfoDiv.style.display = "block";
            } else {
                extraInfoDiv.innerHTML = `<p style="color: red;">Failed to load details.</p>`;
                extraInfoDiv.style.display = "block";
            }

            button.textContent = "Hide information";
            button.disabled = false;
        });
    });
});
