
let wishlist = [];

function addToWishlist(title, author) {
  const item = { title, author };
  wishlist.push(item);
  document.getElementById('wishlist-count').textContent = wishlist.length;
  displayWishlist();
  alert(`✅ "${title}" added to wishlist!`);
}

function displayWishlist() {
  const wishlistDisplay = document.getElementById('wishlistDisplay');
  
  if (wishlist.length === 0) {
    wishlistDisplay.innerHTML = '<p class="empty-message">Your wishlist is empty. Add books to get started!</p>';
    return;
  }

  wishlistDisplay.innerHTML = wishlist.map((item, index) => `
    <div class="wishlist-item">
      <div class="wishlist-item-info">
        <h4>${item.title}</h4>
        <p>by ${item.author}</p>
      </div>
      <button onclick="removeFromWishlist(${index})">Remove</button>
    </div>
  `).join('');
}

function removeFromWishlist(index) {
  wishlist.splice(index, 1);
  document.getElementById('wishlist-count').textContent = wishlist.length;
  displayWishlist();
}


function searchBooks() {
  const searchInput = document.getElementById('searchInput').value.toLowerCase();
  const books = document.querySelectorAll('.book-card');

  books.forEach(book => {
    const title = book.getAttribute('data-title').toLowerCase();
    const author = book.getAttribute('data-author').toLowerCase();

    if (title.includes(searchInput) || author.includes(searchInput)) {
      book.style.display = 'block';
    } else {
      book.style.display = 'none';
    }
  });
}


