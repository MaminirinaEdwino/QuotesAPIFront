import Quotes from "./quotes";

export default function QuotesListes({ quotes }) {
    
    return <>
        {quotes.map((quote, i)=><Quotes key={i} quote={quote}/>)}
    </>
}