// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTab = () => {
    clickTabItem(tabId)
  }

  const activeButton = isActive ? `tab-btn active-tab-btn` : `tab-btn `

  return (
    <li className="tab-item">
      <button type="button" className={activeButton} onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
