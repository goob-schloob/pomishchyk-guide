document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('restaurants-list');
  if (container) {
    restaurants.forEach(r => {
      const card = document.createElement('div');
      card.className = 'restaurant-card';
      card.innerHTML = `
        <div class="info">
          <h3>${r.name}</h3>
          <p class="description">${r.description}</p>
        </div>
        <div class="rating-badge" title="${r.ratingLabel}">${r.rating}</div>
      `;
      container.appendChild(card);
    });
  }
});
