import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

import css from './imageGallery.module.css';

const ImageGallery = ({ images }) => {
  const elements = images.map(({ id, webformatURL, largeImageURL }) => (
    <ImageGalleryItem key={id} previevImg={webformatURL} />
  ));
  return <ul className={css.imageGallery}>{elements}</ul>;
};

export default ImageGallery;

ImageGallery.defaultProps = {
  images: [],
};
