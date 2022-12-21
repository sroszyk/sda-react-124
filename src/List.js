import React from 'react';

class List extends React.Component {
    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <ol>
                    {
                        this.props.rounds.map((round, idx) =>
                            <li key={idx}>{round.seconds} : {round.decySeconds}</li>
                        )
                    }
                </ol>
            </div>
        );
    }
}

export default List;