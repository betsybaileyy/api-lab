
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class People extends Component {

    constructor(props) {
        super(props);

        this.state = {
            people: []
        };
    }
    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/people")
            .then(res => res.json())
            .then(obj => this.setState({ people: obj }))
    }

    render() {
        return (
            <React.Fragment>
                {this.state.people.map((item, index) => {
                    return (
                        <div key={index} className="col-12 py-2">
                            <div className="card" style={{ width: 700 }}>
                                <img className="card-img-top" src="https://vignette.wikia.nocookie.net/disney/images/9/96/Studio_Ghibli_Logo.jpg/revision/latest/scale-to-width-down/2000?cb=20140621101318" alt="Studio Ghibli Logo" style={{ width: 400 }} />
                                <div className="card-body">
                                    <h5 className="card-name">Name: {item.name}</h5>
                                    <div className="card-age">Age: {item.age}</div>
                                    <div className="card-gender">Gender: {item.gender}</div>
                                    <div className="card-link">Link: <a href={item.url}>View Bio</a> </div>
                                </div>
                            </div>
                            <Link to="ghj"/>
                        </div>
                    )
                })}
            </React.Fragment>
        );
    }
}

export default People;