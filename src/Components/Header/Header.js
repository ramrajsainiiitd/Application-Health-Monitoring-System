import DropDown from '../DropDown/DropDown';
import { useDispatch, useSelector } from 'react-redux';
import classes from './Header.module.css';
import { applicatioActions } from '../../modules/MainPage/MainPageSlice';

function Header() {
  const applications = useSelector((state) => state.application.applications);
  const dispatch = useDispatch();

  const selectedApplicationId = useSelector(
    (state) => state.application.selectedApplicationId
  );
  return (
    <div className={classes.main}>
      <DropDown
        label="Applications"
        values={applications}
        selected={selectedApplicationId}
        setSelected={(value) =>
          dispatch(applicatioActions.setSelectedApplication(value))
        }
      />
    </div>
  );
}

export default Header;
