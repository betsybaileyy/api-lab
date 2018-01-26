import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import List from './list';
import People from './people';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            films: [],
            people: [],
            showFilms: false,
            showPeople: false
        };
    }

    handleFilmsButton() {
        this.setState({
            showFilms: true,
            showPeople: false
        });
    }
    handlePeopleButton() {
        this.setState({
            showFilms: false,
            showPeople: true
        });
    }

    render() {
        if (this.state.showFilms) {
            return (
                <React.Fragment>
                    <List />
                </React.Fragment>

            )
        } else if (this.state.showPeople) {
            return (
                <React.Fragment>
                    <People />
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <img className="card-img-top" src="https://vignette.wikia.nocookie.net/disney/images/9/96/Studio_Ghibli_Logo.jpg/revision/latest/scale-to-width-down/2000?cb=20140621101318" alt="Studio Ghibli Logo" style={{ width: 400 }} />
                    <button
                        onClick={(event) => this.handleFilmsButton()}>Load Films</button>
                    <button
                        onClick={(event) => this.handlePeopleButton()}>Load People</button>
                </React.Fragment>
            )
        }
    }
}

export default App;

// let x = 2;

// if (x === 1) {
//     console.log('1');
// } else if (x === 2) {
//     console.log('2');
// } else {

// }
