const largeColumn = {
  width: '40%'
}

const midColumn = {
  width: '30%'
}

const samllColumn = {
  width: '10%'
}

const Search = ({ value, onSubmit, onChange, children}) => {
  return (
    <form
      className="search"
      onSubmit={onSubmit}
    >
      <input
        type="text"
        value={value}
        onChange={onChange}
      />
      <button
        type="submit"
      >
        {children}
      </button>
    </form>
  );
}

const Table = ({ list, onDismiss }) => {
  return (
    <div className="tabe">
      {list.map(item => {
        return (
          <div key={item.objectID} className="table-row">
            <span style={largeColumn}>
              <a href={item.url}>{item.title}</a>
            </span>
            <span style={midColumn}>
              {item.author}
            </span>
            <span  style={samllColumn}>
              {item.num_comments}
            </span>
            <span style={samllColumn}>
              {item.points}
            </span>
            <span style={samllColumn}>
              <button
                onClick={() => onDismiss(item.objectID)}
                type="button"
                className="button-inline"
              >
                点击
              </button>
            </span>
          </div>
        );
      })}
    </div>
  );
}

export {
  Search,
  Table
}