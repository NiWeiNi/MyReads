import React, {Component} from 'react'
import Book from './Book.js'

class BookShelf extends Component {
    
    render() {
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.filter((book) => book.shelf === `${this.props.shelf}`).map((book) => (
                            <Book book={this.props.books} /> 
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf



