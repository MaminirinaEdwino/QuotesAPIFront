import { useEffect, useState } from 'react'
import './assets/App.css'
import SearchBar from './components/searchBar'
import QuotesListes from './components/quotesListes'
import { FaSpinner } from 'react-icons/fa'
import AddQuotes from './components/addQuotes'

function App() {
  const [quotes, setQuotes] = useState([])
  const [quotesTraitement, setQuotesTraitement] = useState([])
  const [filter, setFilters] = useState()
  const loading = quotes === undefined
  useEffect(() => {
    setTimeout(() => {
      fetch('http://127.0.0.1:8000/api/quotes').then(Response => Response.json())
        .then(Response => {
          setQuotes(Response['hydra:member'])
          setQuotesTraitement(Response['hydra:member'])
          console.log(Response['hydra:member'])
        })
    }, 2000);
  
   
  }, [])
  
  
  const handleFilter = () => {
    //e.preventDefault()
    if (filter == '') {
      setQuotesTraitement(quotes)
    } else {
      let filtrer = quotes.filter((quote) => {
        let quo = quote.quote.toLowerCase()
        let aut = quote.author.toLowerCase()
        let fil = filter.toLowerCase()
        if (quo.includes(fil) || aut.includes(fil)) {
          return quote
        }
      })
      setQuotesTraitement(filtrer)
    }
  }
  useEffect(() => {
    handleFilter()
  }, [filter])
  return (
    <>
      <h1 className='title'>Quotes</h1>
      
      <SearchBar value={filter} onChange={setFilters} />
      {quotes.length >0 ? <QuotesListes quotes={quotesTraitement}/> : <FaSpinner className='spinner'/>}
      <AddQuotes setQuotes={setQuotes} setQuotesTraitement={setQuotesTraitement} />
    </>
  )
}

export default App
