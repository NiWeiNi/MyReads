import React, {Component} from 'react'
import sortBy from 'sort-by'

class BookShelf extends Component {
    
    render() {
        // Sort books by title
        this.props.books.sort(sortBy('title'))

        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.filter((book) => book.shelf === `${this.props.shelf}`).map((book) => (
                            <li key={book.id}>
                                <div className="book">
                                    <div className="book-top">
                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: book.imageLinks ? `url(${book.imageLinks.thumbnail})`: null }}></div>
                                    <div className="book-shelf-changer">
                                        <select defaultValue = {this.props.shelf} onClick={(event) => this.props.onChangeShelf(event, book)}>
                                            <option value="none" disabled>Move to...</option>
                                            <option value="currentlyReading">Currently Reading</option>
                                            <option value="wantToRead">Want to Read</option>
                                            <option value="read">Read</option>
                                            <option value="none">None</option>
                                        </select>
                                    </div>
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">{book.authors}</div>
                                </div>
                            </li>   
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf



