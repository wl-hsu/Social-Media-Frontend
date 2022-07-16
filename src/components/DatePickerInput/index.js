import datepickerIcon from '@assets/datepicker-icon.svg';
import style from './index.module.css';

export default () => (
  <div className={style.birthdayInput}>
    <div className={style.birthdayTitleItem}>Date of Birth</div>
    <div>
      <span className={style.birthdayPlaceholder}>Year/Month/Day</span>
      <img className={style.datepickerIcon} src={datepickerIcon} alt="datepickerIcon" />
    </div>
  </div>
);
