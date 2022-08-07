import Vconsole from 'vconsole';
import { isMobile } from 'react-device-detect';

// eslint-disable-next-line import/prefer-default-export
export const startVconsole = () => isMobile && new Vconsole();

export const fileByBase64 = (file) => new Promise((r) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = (e) => {
    r(e.target.result);
  };
});
