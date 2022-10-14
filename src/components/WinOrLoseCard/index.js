import './index.css'

const WinOrLoss = props => {
  const {score, topScore, resultText, onPlayAgainClicked} = props

  const playAgain = () => {
    onPlayAgainClicked(score, topScore)
  }
  return (
    <div className="emoji-result">
      <div className="result-content">
        <h1 className="result-heading">{resultText}</h1>
        <p className="best-score">Best Score</p>
        <p className="score-card">
          {score}/{topScore}
        </p>
        <div>
          <button
            type="button"
            className="playagain-button"
            onClick={playAgain}
          >
            Play Again
          </button>
        </div>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
        alt="win or lose"
        className="result-image"
      />
    </div>
  )
}

export default WinOrLoss
