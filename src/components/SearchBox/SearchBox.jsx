import { useId } from "react";

import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";
import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const state = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  const searchBoxId = useId();

  return (
    <div className={css.searching}>
      <label htmlFor={searchBoxId}>
        Find contacts by name
        <input
          className={css.input}
          value={state}
          onChange={(event) => {
            dispatch(changeFilter(event.target.value));
          }}
          type="text"
          id={searchBoxId}
        />
      </label>
    </div>
  );
};

export default SearchBox;
