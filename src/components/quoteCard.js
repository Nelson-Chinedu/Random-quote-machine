import React from 'react';
import Loading from './Loading';
import '../index.css';

const Card = (props)=>{
  let {loading} = props
    return(
        <div id="quote-box">
          <p id="text">{loading ? <Loading />:JSON.stringify(props.content.quote)}</p>
          <p id="author">{JSON.stringify(props.content.author)}</p>
          <div id="btn-bottom">
            <button id="tweet-quote" className="btn" onClick={props.btnHandleTweet}><i className="fab fa-twitter"></i> {props.btnTweet} </button>
            <button id="new-quote"   className="btn" onClick={props.btnHandleQuote}> {props.btnNew} </button>
          </div>
        </div>
    )
}

export default Card;