import React from "react"

function Banner({end, answer, handleReset}){
    return (
        <>
        {(end.end === "lose" || end.end === "win") && (
            <div className={`${end.end === "win" ? "happy" : "sad"} banner`}>
              {end.end === "win" ? (
                    <p>
                        <strong>Congratulations!</strong> Got it in <strong>{end.guesses} guesses</strong>.
                    </p>
                ) : (
                    <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
                )}
                <button className="restart" onClick={handleReset}>
                    Restart
                </button>
            </div>
        )}
        </>
    )
}

export default Banner