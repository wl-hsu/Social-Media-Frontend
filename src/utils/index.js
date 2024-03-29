import Vconsole from 'vconsole';
import { isMobile } from 'react-device-detect';
import moment from 'moment';

// eslint-disable-next-line import/prefer-default-export
export const startVconsole = () => isMobile && new Vconsole();

export const fileByBase64 = (file) => new Promise((r) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = (e) => {
    r(e.target.result);
  };
});

export const timeDiff = (time) => {
  const hours = moment().diff(time, 'hours');
  if (hours > 23) {
    return moment(time).format('MMM DD');
  }
  if (hours > 0) {
    return `${hours}hours`;
  }
  const minutes = moment().diff(time, 'minutes');
  return `${minutes || 1}minutes`;
};
