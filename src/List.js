import React from 'react';

function List(props) {

    return (
        <div>
            <h3>{props.title}</h3>
            <ol>
                {
                    props.rounds.map((round, idx) =>
                        <li key={idx}>{round.seconds} : {round.decySeconds}</li>
                    )
                }
            </ol>
        </div>
    );
}

export default List;