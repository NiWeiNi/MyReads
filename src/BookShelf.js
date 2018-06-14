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
                            <Book book={this.props.books} /> 
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf



