import './index.css'

const SearchComponents = props => {
  const {eachData, onDeleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachData

  const deleteHistory = () => {
    onDeleteHistory(id)
  }

  return (
    <li className="history-items">
      <p className="time">{timeAccessed}</p>
      <div className="display-history">
        <div className="display">
          <img src={logoUrl} className="logos" alt="domain logo" />
          <p className="title">{title}</p>
          <p className="title-url">{domainUrl}</p>
        </div>
        <button
          testid="delete"
          onClick={deleteHistory}
          className="delete-btn"
          type="button"
        >
          <img
            className="delete"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default SearchComponents
