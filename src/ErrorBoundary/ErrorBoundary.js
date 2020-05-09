import React, { Component } from 'react';


class ErrorBoundary extends Component {

    state = {
        hasError: false,
        errofInfo: ""
    }

    catchAnError = (error, info) => {
        this.setState( {
            hasError: true,
            errorInfo: info
        })
    }

    render() {
        
            if (this.state.hasError) {
                return <h1>{this.state.errorInfo}</h1>;
            } else {
                return this.props.children;
            }
       
    }
}

export default ErrorBoundary;