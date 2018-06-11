import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from  './Book.js'

class BooksSearch extends Component {

    state = {
        query: '',
        searchedBooks: []
    }

    // Search books
    searchBooks = (query) => {
        let trimQuery = query.trim()
        this.setState({query: trimQuery})
        BooksAPI.search(trimQuery)
            .then((response) => (response && response.length)?
                this.setState({searchedBooks: response})
                :   this.setState({searchedBooks: []}) 
        )
    }

    render() {
        return(
            <div className="search-books">
            <div className="search-books-bar">
                <Link
                    to='/'
                    className="close-search"
                >
                Close</Link>
                <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input
                    type="text"
                    placeholder="Search by title or author"
                    value={this.state.query}
                    onChange={(event) => this.searchBooks(event.target.value)}
                />
              </div>
            </div>
            <div className="search-books-results">
                <h2 className="bookshelf-title">Results</h2>
                <ol className="books-grid">
                    {this.state.searchedBooks.map((book) => (
                        <Book />   
                    ))}
                </ol>
            </div>
          </div>
            
        )
    }
}

export default BooksSearch