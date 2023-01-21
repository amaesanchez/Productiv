import React, { useState } from "react";
import axios from "axios";
import Quote from "./Quote";

const BASE_URL = "https://inspo-quotes-api.herokuapp.com/quotes";

/** Componenent for Quote and button to request a quote
 * Uses ajax request to fetc random quote
 *
 * State
 *  - quote
 *
 * App -> QuoteApp -> Quote
 */

function QuoteApp() {
  const [quote, setQuote] = useState({ text: "", author: "" });

  async function getQuote() {
    const resp = await axios.get(`${BASE_URL}/random`);
    setQuote(resp.data.quote);
  }

  return (
    <div className="QuoteApp">
      {quote.text.length !== 0 && <Quote quote={quote} />}
      <button
        className="quoteBtn mb-3 btn btn-light text-secondary"
        onClick={getQuote}
      >
        {quote.text.length === 0
          ? "Click here for an inspirational quote!"
          : "New quote"}
      </button>
    </div>
  );
}

export default QuoteApp;
