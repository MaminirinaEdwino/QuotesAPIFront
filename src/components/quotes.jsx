export default function Quotes({quote}) {
    return <article>
        <p className="quote">
            {quote.quote}
        </p>
        <p className="auteur">
            {quote.author}
        </p>
    </article>
}