import { DiCloud9 } from "react-icons/di";
import { FaPlus } from "react-icons/fa";

export default function AddQuotes({setQuotes, setQuotesTraitement}) {


    const addQuotes = async (e) => {
        e.preventDefault()
        let formulaire = new FormData(e.target)
        let quote = formulaire.get("quote")
        let author = formulaire.get("author")
        await fetch('http://127.0.0.1:8000/api/quotes', {
            method: 'POST',
            headers: {
                'content-type': 'application/ld+json'
            },
            body: JSON.stringify({
                'quote': quote,
                'author': author
            })
        }).then(res => res.json())
            .then(res => console.log(res))
        document.getElementById("addedQuote").value = ""
        document.getElementById("addedAuthor").value = ""
        fetch('http://127.0.0.1:8000/api/quotes').then(Response => Response.json())
            .then(Response => {
                setQuotes(Response['hydra:member'])
                setQuotesTraitement(Response['hydra:member'])
                console.log(Response['hydra:member'])
            })
    }
    return <>
        <form className="addBox" name="addQuote" onSubmit={addQuotes}>
            <span><FaPlus /></span>
            <h1 className="title">Add new Quote</h1>
            <input type="text" id="addedQuote" name="quote" placeholder="Quote . . ."/>
            <input type="text" id="addedAuthor" name="author" placeholder="Author . . ."/>
            <button id="addButton"> <FaPlus /> Add </button>
        </form>
    </>
}