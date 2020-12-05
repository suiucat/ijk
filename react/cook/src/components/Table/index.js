// import PropTypes from 'prop-types';
import './index.css'
import Button from '../Button'
import Sort from '../Sort'
import SORTS from '../../constants/sorts';

const Table = ({
  list,
  sortKey,
  onSort,
  onDismiss,
}) => {
  const sortedlist = SORTS[sortKey](list);
  return (
    <div className="table">
    <div className="table-header">
      <span style={{width: '40%'}}>
        <Sort
          sortKey={'TITLE'}
          onSort={onSort}
        >
          Title
        </Sort>
      </span>
      <span style={{width: '30%'}}>
        <Sort
          sortKey={'AUTHOR'}
          onSort={onSort}
        >
          Author
        </Sort>
      </span>
      <span style={{width: '10%'}}>
        <Sort
          sortKey={'COMMENTS'}
          onSort={onSort}
        >
          Comments
        </Sort>
      </span>
      <span style={{width: '10%'}}>
        <Sort
          sortKey={'POINTS'}
          onSort={onSort}
        >
          Points
        </Sort>
      </span>
      <span style={{width: '10%'}}>
        Archive
      </span>
    </div>
    {sortedlist.map(item =>
      <div key={item.objectID} className="table-row">
        <span style={{ width: '40%' }}>
          <a href={item.url}>{item.title}</a>
        </span>
        <span style={{ width: '30%' }}>
          {item.author}
        </span>
        <span style={{ width: '10%' }}>
          {item.num_comments}
        </span>
        <span style={{ width: '10%' }}>
          {item.points}
        </span>
        <span style={{ width: '10%' }}>
          <Button
            onClick={() => onDismiss(item.objectID)}
            className="button-inline"
          >
            Dismiss
          </Button>
        </span>
      </div>
    )}
  </div>
  );
}

export default Table;
