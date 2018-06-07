import React, {Component} from 'react'
import BookElement from './BookElement'

class CurrentlyReading extends Component {
    render() {
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                <ol className="books-grid">
                    {this.props.books.map(() => (
                        <BookElement/>
                    ))}
                    <BookElement/>
                </ol>
                </div>
            </div>
        )
    }
}

export default CurrentlyReading



