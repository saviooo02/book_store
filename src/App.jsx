import { useState } from 'react'
import './App.css'

function App() {
  const [books, setBooks] = useState([{name : "naruto" , author: "masashi", genre: "fiction"}])
  const [newbook,setNewBook] = useState({ name : '' , author : '' , genre: ''})

  const handleChange = (e)=>{
      setNewBook({...newbook , [e.target.name]:e.target.value})
  }

  const addBook = (e)=>{
    e.preventDefault();
    setBooks([...books , newbook])
    setNewBook({name: '',author: '',genre:''})
  }

  const deleteBook = (bookToBeDeleted)=>{
      let filteredBooks = books.filter((book)=>book.name !== bookToBeDeleted.name);
      setBooks(filteredBooks);
  }   


  return (
    <>
     <form >
        <label htmlFor="name">Enter Name of the Book : 
              <input onChange={(e)=>handleChange(e)} value={newbook.name} type='text' placeholder='Enter book name' name='name' required></input>
        </label>  
        <br /> 
        <label htmlFor="author">Enter Author of the Book : 
              <input onChange={(e)=>handleChange(e)} value={newbook.author} type='text' placeholder='Enter book author' name='author' required></input>
        </label>
        <br />
        <label htmlFor="genre">Enter Genre of the Book : 
              <input onChange={(e)=>handleChange(e)} value={newbook.genre} type='text' placeholder='Enter book genre' name='genre' required></input>
        </label> 
        <button onClick={(e)=>addBook(e)}>Add</button>
     </form>

     <h2>All Books :</h2>
        <ul>
        {books.map((book,index)=> <li key={index}>{book.name}<button onClick={()=>deleteBook(book)}>Delete</button></li>)}
        </ul>
    </>
  )
}

export default App
