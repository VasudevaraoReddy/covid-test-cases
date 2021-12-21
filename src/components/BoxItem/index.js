import './index.css'

const BoxItem = props => {
  const {details, stateData, onClickBox, activeBox} = props
  const {id, imageUrl, displayText, cName} = details
  let activeClassName = ''
  if (activeBox === id) {
    activeClassName = `${id}1`
  }
  return (
    <li
      className={`${cName} ${activeClassName} li-box`}
      onClick={() => onClickBox(id)}
      testid={`stateSpecific${displayText}CasesContainer`}
    >
      <p>{displayText}</p>
      <img
        src={imageUrl}
        alt={`state specific ${displayText[0].toLowerCase()}${displayText.slice(
          1,
        )} cases pic`}
        className="confirmed-image"
      />
      <p>{stateData?.[id]}</p>
    </li>
  )
}

export default BoxItem
