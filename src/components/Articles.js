import React from "react";

function Articles({ upvote, articles, date }) {
  // console.log(upvote,articles);

  return (
    <div className="card w-50 mx-auto">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Upvotes</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {upvote
            ? upvote.map((item) => (
                <tr data-testid="article" key="article-index">
                  <td data-testid="article-title">{item.title}</td>
                  <td data-testid="article-upvotes">{item.upvotes}</td>
                  <td data-testid="article-date">{item.date}</td>
                </tr>
              ))
            : date
            ? date.map((item) => (
                <tr data-testid="article" key="article-index">
                  <td data-testid="article-title">{item.title}</td>
                  <td data-testid="article-upvotes">{item.upvotes}</td>
                  <td data-testid="article-date">{item.date}</td>
                </tr>
              ))
            : articles.map((item) => (
                <tr data-testid="article" key="article-index">
                  <td data-testid="article-title">{item.title}</td>
                  <td data-testid="article-upvotes">{item.upvotes}</td>
                  <td data-testid="article-date">{item.date}</td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
}

export default Articles;
