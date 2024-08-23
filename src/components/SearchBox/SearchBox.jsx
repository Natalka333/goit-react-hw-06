import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';

import css from './SearchBox.module.css'

const SearchBox = () => {
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch(changeFilter(event.target.value))
    }


    return (
        <div>
            <p className={css.search}>Find contacts by name</p>
            <input
                type="text"
                onChange={handleChange}
            />

        </div>
    );
};

export default SearchBox