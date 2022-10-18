import { Component } from "react";
import ErrorMessage from "../erorr-message/erorr-message";

class ErrorBoundary extends Component{

    state = {
        error: false,
    }
    
    componentDidCatch(err, inf){
        console.log(err, inf);
        this.setState({
            error: true,
        })
    }


    render(){
        if(this.state.error){
            return <h2>Somithing went wrong</h2>
        }

        return this.props.children;
    }
}

export default ErrorBoundary;