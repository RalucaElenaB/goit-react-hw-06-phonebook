import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'AppRedux/selectors';
import { filterContacts } from 'AppRedux/slice';

const Filter = ({ value, onChange }) => {
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilterInput = e => {
    dispatch(filterContacts(e.currentTarget.value));
  };

  return (
    <input
      type="text"
      placeholder="Search by name....."
      value={filterValue}
      onChange={handleFilterInput}
    />
  );
};

export default Filter;
