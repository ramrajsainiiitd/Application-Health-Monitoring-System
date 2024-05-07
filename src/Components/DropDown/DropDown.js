import classes from './DropDown.module.css';
import ProfileImage from '../../assets/ProfileImage.svg'
import DownArrowIcon from '../../assets/DownArrowIcon.svg'

function DropDown(props) {
  console.log(props);
  const { label, values, selected, setSelected } = props;

  return (
    <div className={classes.mainContainer} >
      <div className={classes.main}>
        <span> {label} </span>
        <select
          value={selected}
          onChange={(e) => setSelected(parseInt(e.target.value))}
        >
          {values.map((val) => (
            <option key={val.id} value={val.id}>
              {val.name}
            </option>
          ))}
        </select>
      </div>
      <div className={classes.profileImage}>
        <img style={{width:'32px', height:'32px'}} src={ProfileImage} alt="Profile-image" />
        <p>John Deo</p>
        <img src={DownArrowIcon} alt="Down-Arrow-Icon" />
      </div>
    </div>
  );
}

export default DropDown;
