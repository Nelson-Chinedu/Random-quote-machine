import React, { Component } from 'react';
import './App.css';
import Card from './components/quoteCard';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      quotes:'',
      content:'',
      bgColor:['#da4453','#636363','#355c7d','#fc5c7d','#642b73'],
      loading:true,
      hasQuote:false
    }
    this.handleQuote = this.handleQuote.bind(this);
    this.handleTweet = this.handleTweet.bind(this);
  }


  componentDidMount(){
    let getRandom = Math.floor(Math.random() * 44);
    let url = "http://quotes.stormconsultancy.co.uk/quotes.json";
    fetch(url)
    .then(res => res.json())
    .then((data)=>{
      
        this.setState({
          quotes:data,
          content:data[getRandom],
          loading:false
        })
    })
    .catch((err)=>{
        console.log(err.message)
    })
  }

  handleQuote(e){
    e.preventDefault();
    let { quotes } = this.state;
    let getRandom = Math.floor(Math.random() * 44);
    
    this.setState({
      content:quotes[getRandom]
    })
  }

  handleTweet(){
    let quote = this.state.content.quote;
    let authorName = this.state.content.author;
    window.open("https://twitter.com/intent/tweet?text="+quote+" By "+authorName)
  }

  render() {
    return (
      <div>
        <h2 id="app-title">Random Quote Machine</h2>
      <div className="App">
       <Card 
         quotes={this.state.quotes}
         content={this.state.content}
         loading={this.state.loading}
         btnTweet="Tweet Quote" 
         btnNew="New Quote" 
         btnHandleTweet={this.handleTweet}
         btnHandleQuote={this.handleQuote}
        />
      </div>
      </div>
    );
  }
}

export default App;
