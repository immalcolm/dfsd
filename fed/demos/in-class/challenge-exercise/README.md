# Challenge Exercise
A movie rental store has a database records of movies and it’s customers.
Create a function `getMovieTitles()` to get all the movies and print out in an array of
a particular customer. 

**Sample output of:**
`['Interstellar', 'Tenet', 'Dunkirk']`

[hint: use `map()`, `find()`]

```js
let movies = [
    {id: 1, title: "Inception", price: 4.99},
    {id: 2, title: "The Matrix", price: 3.99},
    {id: 3, title: "Interstellar", price: 5.99},
    {id: 4, title: "Tenet", price: 4.99},
    {id: 5, title: "Dunkirk", price: 3.49},
    {id: 6, title: "Avatar", price: 4.49},
    {id: 7, title: "The Godfather", price: 3.99},
    {id: 8, title: "The Dark Knight", price: 4.99},

]
```

Create another function `getCustomerTotalPrice` to return the total that the 
customer paid for his/her rental.
Sample output of

```js
getCustomerTotalPrice(rentals[2].movieIds)
//returns $ 4.49
```

[hint: use `map()`, `find()`, `reduce()`]

```js
let rentals = [
    {
        customerId: 1001,
        name: "Alice Johnson",
        movieIds: [1, 2]
    },
    {
        customerId: 1002,
        name: "Bob Smith",
        movieIds: [3,4,5]
    },
    {
        customerId: 1003,
        name: "Cathy Brown",
        movieIds: [6]
    },
    {
        customerId: 1004,
        name:"David Wilson",
        movieIds: [7, 8]
    }

]
```