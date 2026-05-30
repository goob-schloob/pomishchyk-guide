document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('restaurants-list');
  if (!container) return;

  restaurants.forEach(r => {
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
});
