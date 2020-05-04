import React, { Component } from 'react';
import './App.css';
import ResultComponent from './components/ResultComponent';
import KeypadComponent from "./components/KeypadComponent";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
    constructor(){
        super();

        this.state = {
            result: ""
        }
    }

    onClick = button => {

        if(button === "="){
            this.calculate()
        }

        else if(button === "AC"){
            this.reset()
        }

        else if(button === "%"){
          this.percent()
        }
        else if(button === "SR"){
          this.squareRoot()
        }
        else if(button === "^"){
          this.square()
        }
        else if(button === "e"){
          this.exponential()
        }
        else if(button === "CE"){
            this.backspace()
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };


    calculate = () => {
        var checkResult = ''
        if(this.state.result.includes('--')){
            checkResult = this.state.result.replace('--','+')
        }

        else {
            checkResult = this.state.result
        }

        try {
            this.setState({
                // eslint-disable-next-line
                result: (eval(checkResult) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    percent = () => {
          this.setState({
          result:this.state.result /100
        })
    };

    squareRoot = () => {
        this.setState({
            result: Math.sqrt(this.state.result)
        })
    };

    square = () => {
        this.setState({
            result: Math.pow(this.state.result, 2)
        })
    };

    exponential = () => {
        this.setState({
            result: Math.exp(this.state.result)
        })
    };


    render() {
        return (
            <div>
                <div className="calculator-body">
                    <Header />
                    <ResultComponent result={this.state.result}/>
                    <KeypadComponent onClick={this.onClick}/>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;
