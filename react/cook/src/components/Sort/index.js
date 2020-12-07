import './index.css'
import Button from '../Button';
import classNames from 'classnames';

const Sort = ({
  sortKey,
  onSort,
  activeSortKey,
  children,
}) => {
  const sortClass = classNames(
    'button-inline',
    {'button-active': sortKey === activeSortKey }
  );
  return (
    <Button
      onClick={() => onSort(sortKey)}
      className={sortClass}
    >
      {children}
    </Button>
  );
}

export default Sort;