// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, gameOver} = props
  return (
    <nav className="nav-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="emoji logo"
        />
        <h4 className="logo-name">Emoji Game</h4>
      </div>
      {!gameOver && (
        <div className="score-container">
          <p className="score">Score: {score}</p>
          <p className="top-score">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
