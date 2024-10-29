document.addEventListener("DOMContentLoaded", function () {
    const popularityButton = document.getElementById('filter-popularity');
    const ratingButton = document.getElementById('filter-rating');
    const sectionTitle = document.getElementById('section-title');
    const animeGrid = document.getElementById('anime-grid');
    const items = Array.from(animeGrid.children);
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    function setActiveButton(button) {
        popularityButton.classList.remove('active');
        ratingButton.classList.remove('active');
        button.classList.add('active');
    }

    function sortItems(sortType) {
        if (sortType === 'popularity') {
            items.sort((a, b) => Number(a.dataset.popularity) - Number(b.dataset.popularity));
            sectionTitle.textContent = 'Most Popular';
            setActiveButton(popularityButton);
        } else if (sortType === 'rating') {
            items.sort((a, b) => Number(b.dataset.rating) - Number(a.dataset.rating));
            sectionTitle.textContent = 'Most Rated';
            setActiveButton(ratingButton);
        }

        items.forEach(item => animeGrid.appendChild(item));

        if (loggedInUser) {
            localStorage.setItem(`${loggedInUser.username}_sortType`, sortType);
        }
    }

    const savedSortType = loggedInUser ? localStorage.getItem(`${loggedInUser.username}_sortType`) || 'popularity' : 'popularity';
    sortItems(savedSortType);

    popularityButton.addEventListener('click', function () {
        sortItems('popularity');
    });

    ratingButton.addEventListener('click', function () {
        sortItems('rating');
    });
});
