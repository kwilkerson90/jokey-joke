import React from "react";

class JokeApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //initial state is being set up here
            joke: '',
            isLoading: true
        };
    }

    render() {
        return (
            <div>
                <p>{this.state.isLoading ? "Loading..." : this.state.joke}</p>
                <button onClick={this._fetchJoke}>New Joke</button>
            </div>
        );
    }
    //every time state changes, render gets run

   _fetchJoke = () => {
       const url = 'https://api.chucknorris.io/jokes/random?category=dev';
       fetch(url)
            .then(response => response.json())
            .then(jokeJson => {
                //Put the text of the joke in state
                this.setState({
                    joke: jokeJson.value, isLoading: false
                }, () => {
                    console.log('New joke stored');
                });
            });
   }
}

export default JokeApp;