import React, {Component} from 'react'
import BooksApp from './App';
import BookShelfChanger from './BookShelfChanger'

class CurrentlyReading extends Component {
    render() {
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                <ol className="books-grid">
                    {this.props.books.map((book) => (
                        <li>
                            <div className="book">
                                {console.log(this.props.books)}
                                <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                <BookShelfChanger/>
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

export default CurrentlyReading



