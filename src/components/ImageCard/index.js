import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Image, ImageViewer } from 'antd-mobile';
import classNames from 'classnames';
import Bar from '@components/Bar';

import { OBJECT_KEYS } from '@components/Bar/constants';
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
  likesCount,
  commentsCount,
}) => {
  const imageViewRef = useRef();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [visible]);
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
  const onClickImage = (index) => {
    setVisible(true);
    imageViewRef.current.swipeTo(index);
  };

  return (
    <div className={style.container}>
      <div className={classNames(style.wrapper, getWrapper())}>
        {imgs.map((img, index) => (
          <Image
            onClick={() => onClickImage(index)}
            fit="cover"
            className={classNames(style.img, `img${index}`)}
            key={classNames(img, index)}
            src={img}
            alt=""
          />
        ))}
      </div>
      <ImageViewer.Multi
        getContainer={document.body}
        ref={imageViewRef}
        images={imgs}
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
        renderFooter={() => (
          <Bar
            isBottom
            likesCount={likesCount}
            commentsCount={commentsCount}
            type={OBJECT_KEYS.TWEET}
          />
        )}
      />
    </div>
  );
};

ImageCard.propTypes = {
  imgs: PropTypes.arrayOf(PropTypes.string),
  commentsCount: PropTypes.number.isRequired,
  likesCount: PropTypes.number.isRequired,
};

ImageCard.defaultProps = {
  imgs: [],
};

export default ImageCard;
