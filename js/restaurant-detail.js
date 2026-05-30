document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug');
  const restaurant = restaurants.find(r => r.slug === slug);

  const container = document.getElementById('restaurant-detail');
  if (!container) return;

  if (!restaurant) {
    container.innerHTML = `
      <div class="empty-page">
        <h2>Ресторан не знайдено</h2>
        <p>На жаль, ресторан із таким ідентифікатором не знайдено. <a href="restaurants.html">Повернутися до списку</a></p>
      </div>
    `;
    document.title = 'Ресторан не знайдено — Pomishchyk Guide';
    return;
  }

  document.title = `${restaurant.name} — Pomishchyk Guide`;
  document.getElementById('page-title').textContent = restaurant.name;

  const photoUrl = restaurant.photo || `https://placehold.co/800x400/3E4A56/C59B6D?text=${encodeURIComponent(restaurant.name)}`;

  container.innerHTML = `
    <div class="row g-4">
      <div class="col-lg-6">
        <img src="${photoUrl}" class="restaurant-detail-img w-100" alt="${restaurant.name}">
      </div>
      <div class="col-lg-6 restaurant-detail-info">
        <h2>${restaurant.name}</h2>
        <div class="d-flex align-items-center gap-3 mb-3">
          <span class="rating-lg">${restaurant.rating}</span>
          <span style="color: var(--primary); font-family: 'Russo One', sans-serif;">${restaurant.ratingLabel}</span>
        </div>
        <p style="color: #555; line-height: 1.8; font-size: 1.02rem;">${restaurant.fullDescription || restaurant.description}</p>
        <a href="restaurants.html" class="btn" style="background: var(--primary); color: var(--accent); font-family: 'Russo One', sans-serif; text-transform: uppercase; letter-spacing: 1px;">← До списку</a>
      </div>
    </div>
  `;
});
