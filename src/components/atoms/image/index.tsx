import React from 'react';
import styled from '@Styles/styled';
import { usePalette } from 'react-palette';

type ImageProps = {
  background?: boolean;
  image?: string;
  getColor?: string;
};

const Image = styled.div<ImageProps>`
  /* StyleComponent Style with Theme*/
  width: 280px;
  height: 150px;
  border-radius: 4px;
  ${({ background, theme, getColor }) =>
    background && {
      width: '480px',
      height: '280px',
      backgroundColor: getColor || theme.colors.white
    }}
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    ${({ background }) =>
      background && {
        width: '80%',
        height: '80%',
        filter: 'drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.5))',
        borderRadius: '0px'
      }}
    object-fit: cover;
  }
  transition: all 0.5s ease;
`;

const AtomImage: React.FC<ImageProps> = ({ background, image }) => {
  const { data } = usePalette(image || '');
  return (
    <Image background={background} getColor={data.muted}>
      <img src={image} alt="" />
    </Image>
  );
};

export default AtomImage;