import React from 'react'

function AnswersGame({guesses}) {
    return (
        <div className="guess-results">
            {guesses.map((guess, i)=> (
                <p
                key={i} 
                className="guess">
                    {guess}
                </p>
            ))}
        </div>
    )
}

export default AnswersGame