import React from "react";

/** Componenent for quote -- renders text and author
 *
 * App -> QuoteApp -> Quote
 */
function Quote({ quote }) {
  return (
    <p className="QuoteText"><i>{quote.text} - {quote.author}</i></p>
  )
}

export default Quote;
