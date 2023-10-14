import React from 'react'

function InputGame({handleSubmitWord, selectedLetter, setSelectedLetter}) {
  
    return (
      <>
      <form className="guess-input-wrapper" 
        onSubmit={(event) => {
          handleSubmitWord(event, selectedLetter);
          setSelectedLetter("")
        }
        }>
        <label htmlFor="guess-input">Enter guess:</label>
        <input 
          required
          id="guess-input" 
          type="text"
          pattern='.{5,5}'
          value={selectedLetter} 
          minLength={5}
          maxLength={5}
          onChange={(event)=> {
            setSelectedLetter(event.target.value.toUpperCase())
          }}
        />
      </form>
      </>
    );
}

export default InputGame