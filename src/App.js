import React, { useState } from "react";
import "./App.css";
import "h8k-components";
import Articles from "./components/Articles";

const title = "Sorting Articles";

function App({ articles }) {
  const [upvote, setUpvote] = useState();
  const [date, setDate] = useState()
 



  const onUpvote = () => {
    setDate()
    articles.sort((a,b) => (a.upvotes > b.upvotes) ? -1 : ((b.upvotes > a.upvotes) ? 1 : 0))
    setUpvote(articles)

    
    };

 
    
    const onRecent = () => {
        setUpvote()
        articles.sort((a,b) => (a.date > b.date) ? -1 : ((b.date > a.date) ? 1 : 0))
        setDate(articles)
    
  };

  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-row align-items-center justify-content-center my-20 navigation">
        <label className="form-hint mb-0 text-uppercase font-weight-light">
          Sort By
        </label>
        <button
          data-testid="most-upvoted-link"
          className="small"
          onClick={onUpvote}
        >
          Most Upvoted
        </button>
        <button
          data-testid="most-recent-link"
          className="small"
          onClick={onRecent}
        >
          Most Recent
        </button>
      </div>
      <Articles upvote={upvote} articles={articles} date={date} />
    </div>
  );
}

export default App;
