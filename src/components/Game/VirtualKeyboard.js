import React from 'react'
import { keyboardLetters } from '../../keyboard'

function KeyboardComponent({writeLetter, checkedGuesses}) {
    return (
        <div className='keyboardContainer'>
        {keyboardLetters.map((row, i) => (
            <div key={i} className='row'>
                {row.map((letter, x) => {
                    let statusClass = "";
                    if(checkedGuesses.length > 0) {
                        const foundLetter = checkedGuesses.map((guess) => guess.find((selectedLetter) => selectedLetter.letter === letter));
                        if(foundLetter) {
                            statusClass = foundLetter[foundLetter.length - 1]?.status
                        }          
                    }
                return (
                    <div key={letter} className={`col ${statusClass}`} onClick={() => writeLetter(letter)}>{letter}</div>
                )
                })}
            </div>
        ))}
        </div>
    )
}

export default KeyboardComponent