let movies = [
  { id: 1, title: "Inception", price: 4.99 },
  { id: 2, title: "The Matrix", price: 3.99 },
  { id: 3, title: "Interstellar", price: 5.99 },
  { id: 4, title: "Tenet", price: 4.99 },
  { id: 5, title: "Dunkirk", price: 3.49 },
  { id: 6, title: "Avatar", price: 4.49 },
  { id: 7, title: "The Godfather", price: 3.99 },
  { id: 8, title: "The Dark Knight", price: 4.99 },
];

let rentals = [
  {
    customerId: 1001,
    name: "Alice Johnson",
    movieIds: [1, 2],
  },
  {
    customerId: 1002,
    name: "Bob Smith",
    movieIds: [3, 4, 5, 10],
  },
  {
    customerId: 1003,
    name: "Cathy Brown",
    movieIds: [6],
  },
  {
    customerId: 1004,
    name: "David Wilson",
    movieIds: [7, 8],
  },
];

//what happens if undefined title
function getMovieTitles(movieIds) {
  return (
    movieIds
      //.map(id => movies.find((movie) => movie.id === id).title // this will throw an error if movie is not found
      .map((id) => movies.find((movie) => movie.id === id))
      .filter((movie) => movie) //fasly values will be filtered out
      .map((movie) => movie.title)
  ); // this will return an array of titles
}

// Example Usage: Get movie titles of a selected customer's lists
console.log("Example: Get Movie Titles of a Selected Customer's Rentals");
const movieList = getMovieTitles(rentals[2].movieIds);
console.log(movieList);
console.log(`Movies rented by ${rentals[2].name}: ${movieList.join(", ")}`);

console.log("Example: Get Total Price of Movies Rented by a Customer");
const rentalTotal = getCustomerTotalPrice(rentals[2].movieIds);
console.log(
  `Total price of movies rented by ${rentals[2].name}: $${rentalTotal.toFixed(2)}`
);
function getCustomerTotalPrice(rentalList) {
  return rentalList
    .map((id) => movies.find((movie) => movie.id === id))
    .filter((movie) => movie) //fasly values will be filtered out
    .reduce((total, movie) => total + movie.price,0)
}

/*
function getCustomerTotalPrice(rentalList){
    return rentalList
        .filter (rental =>{movieList.includes(rental)})
        
}
*/
