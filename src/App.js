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

  render() {
    return (
      <div className="app">
        <Route exact path='/search' render={() => (
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
              <Link
                to='/search'
              >Add a book</Link>
            </div>
            </div>
        )}/>
      </div>
  )}
}

export default BooksApp
