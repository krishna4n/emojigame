/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {clickedList: [], topScore: 0, gameOver: false, score: 0}

  emojiCLicked = id => {
    const {clickedList, score} = this.state

    if (clickedList.includes(id)) {
      this.setState({
        gameOver: true,
      })
    } else {
      this.setState(
        prevState => ({
          score: prevState.score + 1,
          clickedList: [...prevState.clickedList, id],
        }),
        this.getWinner,
      )
    }
  }

  getWinner = () => {
    const {score} = this.state
    if (score === 12) {
      this.setState({
        gameOver: true,
      })
    }
  }

  getTopScore = () => {
    const {topScore, score} = this.state
    if (topScore <= score) {
      this.setState({
        topScore: score,
        clickedList: [],
        gameOver: false,
        score: 0,
      })
    } else {
      this.setState({
        clickedList: [],
        gameOver: false,
        score: 0,
      })
    }
  }

  render() {
    const {emojisList} = this.props
    const {clickedList, gameOver, topScore, score} = this.state
    console.log(clickedList, gameOver)

    const shuffledEmojiList = emojisList.sort(() => Math.random() - 0.5)

    return (
      <div className="container">
        <NavBar score={score} topScore={topScore} gameOver={gameOver} />
        {!gameOver && (
          <ul className="emoji-list">
            {shuffledEmojiList.map(each => (
              <EmojiCard
                emoji={each}
                key={each.id}
                emojiClicked={this.emojiCLicked}
              />
            ))}
          </ul>
        )}
        {gameOver && (
          <div className="result-container">
            <WinOrLoseCard
              gameOver={gameOver}
              score={score}
              clickedTryAgain={this.getTopScore}
              topScore={topScore}
            />
          </div>
        )}
      </div>
    )
  }
}

export default EmojiGame
