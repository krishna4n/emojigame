// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emoji, emojiClicked} = props

  const onEmojiClicked = () => {
    emojiClicked(emoji.id)
  }
  return (
    <li className="emoji-item-container">
      <button type="button" className="emoji-button" onClick={onEmojiClicked}>
        <img
          src={emoji.emojiUrl}
          alt={emoji.emojiName}
          className="emoji-icon"
        />
      </button>
    </li>
  )
}

export default EmojiCard
