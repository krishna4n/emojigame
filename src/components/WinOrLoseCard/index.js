// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, clickedTryAgain} = props
  const result = score === 12 ? 'You Won' : 'You Lose'
  const description = score === 12 ? 'Best Score' : 'Score'
  const getImage =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  return (
    <div className="loss-card-container">
      <div className="left-side-container">
        <h1>{result}</h1>
        <p>{description}</p>
        <p>{score}/12</p>
        <button
          type="button"
          className="play-again-button"
          onClick={clickedTryAgain}
        >
          Play Again
        </button>
      </div>
      <div className="right-side-container">
        <img src={getImage} alt="win or lose" className="loss-image" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
