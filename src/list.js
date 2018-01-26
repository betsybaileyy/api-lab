import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            films: []
        };
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(obj => this.setState({ films: obj }));
    }

    render() {
        return (
            <React.Fragment>
                {this.state.films.map((item, index) => {
                    return (
                        <div key={index} className="col-12 py-2">
                            <div className="card" style={{ width: 700 }}>
                                <img className="card-img-top" src="https://vignette.wikia.nocookie.net/disney/images/9/96/Studio_Ghibli_Logo.jpg/revision/latest/scale-to-width-down/2000?cb=20140621101318" alt="Studio Ghibli Logo" style={{ width: 400 }} />
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <div className="card-text">{item.description}</div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </React.Fragment>
        );
    }
}

export default List;

