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
import Navbar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class Game extends Component {
  state = {score: 0, topScore: 0, previousId: [], result: true}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onPlayAgainClicked = (score, topScore) => {
    const {emojisList} = this.props
    emojisList.sort()
    if (score > topScore) {
      this.setState({
        topScore: score,
        previousId: [],
      })
    }
    this.setState({
      result: true,
      score: 0,
    })
  }

  onEmojiClicked = id => {
    const {previousId, score, topScore} = this.state

    if (previousId.length === 0) {
      console.log('first click')
      this.setState(prevState => ({
        score: prevState.score + 1,
        previousId: [...prevState.previousId, id],
      }))
    }
    if (!previousId.includes(id)) {
      console.log('not matched previous id')
      this.shuffledEmojisList()
      this.setState(prevState => ({
        score: prevState.score + 1,
        previousId: [...prevState.previousId, id],
      }))
      if (previousId.length === 1) {
        if (score > topScore) {
          this.setState({
            topScore: score,
          })
        }
        this.setState({
          result: 'success',
        })
      }
    } else {
      console.log('matched')
      if (score > topScore) {
        this.setState({
          topScore: score,
        })
      }
      this.setState({
        result: false,
      })
    }
  }

  render() {
    const {emojisList} = this.props
    const {topScore, score, result} = this.state
    const resultText = result === 'success' ? 'You Won' : 'You Loss'

    return (
      <div className="bg-container">
        <div className="nav-container">
          <Navbar score={score} topScore={topScore} result={result} />
        </div>
        <ul className="emojis-container">
          {result &&
            emojisList.map(eachEmoji => (
              <EmojiCard
                emoji={eachEmoji}
                key={eachEmoji.id}
                onEmojiClicked={this.onEmojiClicked}
              />
            ))}
          {!result && (
            <WinOrLoseCard
              score={score}
              topScore={topScore}
              resultText={resultText}
              onPlayAgainClicked={this.onPlayAgainClicked}
            />
          )}
        </ul>
      </div>
    )
  }
}

export default Game
