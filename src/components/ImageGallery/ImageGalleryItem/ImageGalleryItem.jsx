import css from './imageGalleryItem.module.css';

const ImageGalleryItem = ({ previevImg, largeImageURL }) => {
  return (
    <li className={css.imageGalleryItem}>
      {' '}
      <img src={previevImg} className={css.imageGalleryItemImage}></img>
    </li>
  );
};

export default ImageGalleryItem;
