import React from 'react';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import InputGame from './InputGame';
import AnswersGame from './AnswersGame';
import Guess from './Guess';
import Banner from './Banner';
import KeyboardComponent from './VirtualKeyboard';

// Pick a random word on every pageload.
let answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [guesses, setGuesses] = React.useState([])
  const [checkedGuesses, setCheckedGuesses] = React.useState([])
  const [end, setEnd] = React.useState({
    guesses: guesses.length,
    end: 'playing'
  })
  const [selectedLetter, setSelectedLetter] = React.useState("")

  function handleReset() {
    setGuesses([])
    setCheckedGuesses([])
    answer = sample(WORDS)
    setEnd({
      guesses: guesses.length,
      end: 'playing'
    })
    console.info({ answer });
  }

  function handleSubmitWord(event, guess) {
    event.preventDefault();

    // Create a copy of guesses Array
      const newGuesses = [...guesses]
    // Push the new guess to the new Array 
      newGuesses.push(guess)
    // Change the state of Guesses with the new Array 
      setGuesses(newGuesses)

    // Create a copy of the checked guesses Array
      const newCheckedGuesses = [...checkedGuesses]
    // Push the new checked guess to the new Array  
      newCheckedGuesses.push(checkGuess(guess, answer))
    // Change the state of checked guesses with the new Array  
      setCheckedGuesses(newCheckedGuesses) 

    // If we do less than the allowed guesses the game continues
      if(newGuesses.length < NUM_OF_GUESSES_ALLOWED) {
          const endObject = {
            guesses: newGuesses.length,
            end: "playing"
          }
          setEnd(endObject)
    // Else ends the game    
      } else {
          const endObject = {
            guesses: newGuesses.length,
            end: "lose"
          }
          setEnd(endObject)
      }

    // Checks the guesses in the 
    const allCorrect = checkGuess(guess, answer).every((item)=> item.status === "correct")

    if(allCorrect) {
      const endObject = {
        guesses: newGuesses.length,
        end: "win"
      }
      setEnd(endObject)
    }
  }

  function writeLetter(letter) {
    if(selectedLetter.length <= 4) {
      const newLetter = selectedLetter + letter
      setSelectedLetter(newLetter)
    }
  }

  return (
    <>
      <Guess guesses={guesses} numberOfGuesses={NUM_OF_GUESSES_ALLOWED} checkedGuesses={checkedGuesses}/>
      {/* <AnswersGame guesses={guesses} /> */}
      <InputGame handleSubmitWord={handleSubmitWord} end={end} selectedLetter={selectedLetter} setSelectedLetter={setSelectedLetter}/>
      <Banner end={end} answer={answer} handleReset={handleReset}/>
      <KeyboardComponent writeLetter={writeLetter} checkedGuesses={checkedGuesses}/>
    </>
  );
}

export default Game;
