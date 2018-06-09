import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'

class BooksApp extends React.Component {
  state = {
    books: [],

    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
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
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {console.log(this.state.books)}
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
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
