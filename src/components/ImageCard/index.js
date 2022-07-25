import PropTypes from 'prop-types';
import { Image } from 'antd-mobile';
import classNames from 'classnames';

import style from './index.module.scss';

/**
* image display component
* It can display up to 4 pictures
* 1: The picture is filled directly
* 2: One picture on each side
* 3: One picture is on left, two are on right
* 4: Two pictures are on both sides.
*/
const ImageCard = ({
  imgs,
}) => {
  const getWrapper = () => {
    switch (imgs.length) {
      case 1:
        return style.wrapper1;
      case 2:
        return style.wrapper2;
      case 3:
        return style.wrapper3;
      case 4:
        return style.wrapper4;
      default:
        return style.wrapper;
    }
  };
  return (
    <div className={style.container}>
      <div className={classNames(style.wrapper, getWrapper())}>
        {imgs.map((img, index) => (<Image fit="cover" className={classNames(style.img, `img${index}`)} key={classNames(img, index)} src={img} alt="" />))}
      </div>
    </div>
  );
};

ImageCard.propTypes = {
  imgs: PropTypes.arrayOf(PropTypes.string),
};

ImageCard.defaultProps = {
  imgs: [],
};

export default ImageCard;
