let currentData = [];

function render(list) {
  const container = document.getElementById('restaurants-list');
  container.innerHTML = '';

  list.forEach(r => {
    const photoUrl = `images/${r.slug}.jpg`;

    const col = document.createElement('div');
    col.className = 'col-md-6 col-lg-4';

    col.innerHTML = `
      <div class="card restaurant-card h-100" data-slug="${r.slug}">
        <img src="${photoUrl}" class="card-img-top" alt="${r.name}" loading="lazy">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${r.name}</h5>
          <p class="card-text flex-grow-1">${r.description}</p>
          <div class="d-flex justify-content-between align-items-center mt-2">
            <span class="rating-badge" title="${r.ratingLabel}">${r.rating}</span>
            <small class="text-muted">${r.ratingLabel}</small>
          </div>
        </div>
      </div>
    `;

    col.querySelector('.restaurant-card').addEventListener('click', () => {
      window.location.href = `restaurant.html?slug=${r.slug}`;
    });

    container.appendChild(col);
  });
}

function filterAndSort() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const sort = document.getElementById('sortSelect').value;

  let list = currentData.filter(r => r.name.toLowerCase().includes(query));

  switch (sort) {
    case 'az':
      list.sort((a, b) => a.name.localeCompare(b.name, 'uk'));
      break;
    case 'za':
      list.sort((a, b) => b.name.localeCompare(a.name, 'uk'));
      break;
    case 'rating-desc':
      list.sort((a, b) => b.ratingValue - a.ratingValue);
      break;
    case 'rating-asc':
      list.sort((a, b) => a.ratingValue - b.ratingValue);
      break;
  }

  render(list);
}

document.addEventListener('DOMContentLoaded', () => {
  currentData = [...restaurants];
  filterAndSort();

  document.getElementById('searchInput').addEventListener('input', filterAndSort);
  document.getElementById('sortSelect').addEventListener('change', filterAndSort);
});
