import React, { Component} from 'react'
import '../index.css';

class Loading extends Component{
    constructor(props){
        super(props)
        this.state = {
            loading:'Loading'
        }
    }
    componentDidMount(){
        const stopper = this.state.loading + '...';

       this.interval =  setInterval(()=>{
            this.state.loading === stopper
            ? this.setState({loading:'Loading'})
            :this.setState((currentState)=>{
               return{
                   loading:currentState.loading + '.'
                }
            })
        },400)
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }
    render(){
        return(
            <span id="loading">{this.state.loading}</span>
        )
    }
}

export default Loading;