import { IImageKitProps } from './image.types';
import { fallbackImgPNG } from '@/assets/img';

const ImageKit = (props: IImageKitProps) => {
  const { src, alt, fetchPriority, loading, ...rest } = props;

  return (
    <img
      src={src || fallbackImgPNG}
      alt={alt}
      {...rest}
      loading="lazy"
      fetchPriority="high"
      onError={(e) => (e.currentTarget.src = fallbackImgPNG)}
    />
  );
};

export default ImageKit;
