import React from 'react'
import {Link} from 'react-router-dom'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'
import BooksSearch from './BooksSearch'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  // Fetch all books from API
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  // Change books from shelves
  changeShelf = (event, book) => {
    BooksAPI.update(book, event.target.value).then(
      // Assign book the selected shelf
      book.shelf = event.target.value,
      // Set the new state to re-render
      this.setState((state) => ({
        books: state.books.filter((b) => b.id !== book.id).concat(book.shelf !== 'none'? book : 'none')
      })
      )
    )
    console.log(book, event.target.value)
  }

  render() {
    return (
      <div className="app">
        {/* Create a path to keep in sync page and url */}
        <Route exact path='/search' render={() => (
          <BooksSearch
            books={this.state.books}
            onChangeShelf={this.changeShelf}
          />
        )}/>
        {/* Create a path to keep in sync page and url */}
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {/* For each bookshelf, adds a bookshelf component */}
                <BookShelf
                  title='Currently Reading'
                  shelf='currentlyReading'
                  onChangeShelf={this.changeShelf}
                  books={this.state.books}
                />
                <BookShelf
                  title='Want to Read'
                  shelf='wantToRead'
                  onChangeShelf={this.changeShelf}
                  books={this.state.books}
                />
                <BookShelf
                  title='Read'
                  shelf='read'
                  onChangeShelf={this.changeShelf}
                  books={this.state.books}
                />
              </div>
            </div>
            <div className="open-search">
              {/* link to search page */}
              <Link
                to='/search'
              >
                Add a book
              </Link>
            </div>
            </div>
        )}/>
      </div>
  )}
}

export default BooksApp
