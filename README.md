# MyReads Project

Seventh project from Udacity´s FEND.
App to keep track of books you have read, currently reading or want to read.

## Getting Started

- Download or clone this repository. 

### Prerequisites

- You need [node](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) installed.

### Installing

From the directory, inside the folder, install all project dependecies with git bash:
```
npm install
```
And right after, start the development server with git bash:
```
npm start
```
The web should open in your default browser.

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Built With

* [React](https://reactjs.org/) - JS library

## Contributing

Academic exercise, pull request may not be accepted

## License

This project is licensed under the MIT License - see the License.md file for details
