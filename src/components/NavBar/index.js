// Write your code here.
import './index.css'

const Navbar = props => {
  const {score, topScore, result} = props

  return (
    <>
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
          alt="emoji logo"
          className="logo-image"
        />
        <h1 className="logo-text">Emoji Game</h1>
      </div>
      {result && (
        <div className="score-container">
          <p className="score">Score: {score}</p>
          <p className="score">Top Score: {topScore}</p>
        </div>
      )}
    </>
  )
}

export default Navbar
