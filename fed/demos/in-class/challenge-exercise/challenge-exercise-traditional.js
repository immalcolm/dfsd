let movies = [
  { id: 1, title: "Inception", price: 4.99 },
  { id: 2, title: "The Matrix", price: 3.99 },
  { id: 3, title: "Interstellar", price: 5.99 },
  { id: 4, title: "Tenet", price: 4.99 },
  { id: 5, title: "Dunkirk", price: 3.49 },
  { id: 6, title: "Avatar", price: 4.49 },
  { id: 7, title: "The Godfather", price: 3.99 },
  { id: 8, title: "The Dark Knight", price: 4.99 }
];

let rentals = [
  {
    customerId: 1001,
    name: "Alice Johnson",
    movieIds: [1, 2]
  },
  {
    customerId: 1002,
    name: "Bob Smith",
    movieIds: [3, 4, 5]
  },
  {
    customerId: 1003,
    name: "Cathy Brown",
    movieIds: [6]
  },
  {
    customerId: 1004,
    name: "David Wilson",
    movieIds: [7, 8]
  }
];

function getMovieTitlesTraditional(movieIds) {
  let titles = [];
  for (let i = 0; i < movieIds.length; i++) {
    for (let j = 0; j < movies.length; j++) {
      if (movies[j].id === movieIds[i]) {
        titles.push(movies[j].title);
        break; // Stop inner loop once match is found
      }
    }
  }
  return titles;
}

let movietitles = getMovieTitlesTraditional(rentals[1].movieIds)

console.log(movietitles); // Bob Smith’s rentals



function getCustomerTotalPriceTraditional(movieIds) {
  let total = 0;
  for (let i = 0; i < movieIds.length; i++) {
    for (let j = 0; j < movies.length; j++) {
      if (movies[j].id === movieIds[i]) {
        total += movies[j].price;
        break;
      }
    }
  }
  return total.toFixed(2);
}

console.log(`$ ${getCustomerTotalPriceTraditional(rentals[2].movieIds)}`); // Cathy Brown’s total price