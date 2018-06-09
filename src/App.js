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
        books: state.books.filter((b) => b.shelf !== 'none')
      })
      )
    )
    console.log(book, event.target.value)
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/query' render={() => (
          <BooksSearch
            books={this.state.books}
            onChangeShelf={this.changeShelf}
          />
        )}/>
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf
                title='Currently Reading'
                shelf='currentlyReading'
                onChangeShelf={this.changeShelf}
                books={this.state.books}/>
                <BookShelf
                title='Want to Read'
                shelf='wantToRead'
                onChangeShelf={this.changeShelf}
                books={this.state.books}/>
                <BookShelf
                title='Read'
                shelf='read'
                onChangeShelf={this.changeShelf}
                books={this.state.books}/>
              </div>
            </div>
            <div className="open-search">
              <Link
                to='/query'
              >Add a book</Link>
            </div>
            </div>
        )}/>
      </div>
  )}
}

export default BooksApp
