// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emoji, onEmojiClicked} = props
  const {emojiName, emojiUrl, id} = emoji
  const emojiClicked = () => {
    onEmojiClicked(id)
  }

  return (
    <li className="emoji">
      <button type="button" className="emoji-button" onClick={emojiClicked}>
        <img src={emojiUrl} alt={emojiName} className="emoji-img" />
      </button>
    </li>
  )
}

export default EmojiCard
