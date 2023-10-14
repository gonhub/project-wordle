import React from 'react'
import { range } from '../../utils'

function Guess({guesses, numberOfGuesses, checkedGuesses}){

    const rows = range(0,numberOfGuesses,1)
    const cols = range(0,5,1)

    return (
        <div className="guess-results">
            {rows.map((row, i)=> (
                <p key={i} className="guess">
                    {cols.map((col, x)=> (
                        <span key={x} className={`cell ${checkedGuesses[i]?.[x].status}`}>
                            {guesses.length != 0 && guesses[i]?.[x]}
                        </span>
                    ))}
                </p>
            ))}           
        </div>
    )

}

export default Guess