import { styled } from '@mui/system';
import React from 'react';

// interface TextComponentProps {
//   text: string;
// }

// interface OtherTextComponentProps {
//   color: string;
//   width: string;
//   text: string;
//   size: string;
//   children: React.ReactNode;
//   hovered: boolean;
//   capitalize: boolean;
// }

export const TextComponent = ({ text }) => {
  return <TextComponentWrapper>{text}</TextComponentWrapper>;
};

export function OtherTextComponent({
  color,
  width,
  text,
  size,
  children,
  hovered,
  capitalize,
}) {
  return (
    <OtherTextComponentWrapper
      hovered={hovered}
      color={color}
      width={width}
      size={size}
      capitalize={capitalize}
    >
      {text}
      {children}
    </OtherTextComponentWrapper>
  );
}

const TextComponentWrapper = styled('p')(({}) => ({
  fontSize: '2rem',
  fontFamily: 'Cabin',
  fontWeight: '300',
  color: '#C9C9D7',
  width: '100%',
}));

const OtherTextComponentWrapper = styled('p')(
  ({ color, width, theme, size, capitalize }) => ({
    fontSize: `${
      size ? size : '1.3rem'
    }`,
    fontFamily: 'Cabin',
    width: `${width ? width : '100%'}`,
    color: `${color ? color : '#C9C9D7'}`,
    textTransform: `${capitalize ? 'capitalize' : ''}`,
    // fontWeight: '400',
    // marginTop: '.5rem',
    // '&:hover': {
    //   color: `${hovered ? 'white' : ''}`,
    // },
    '& > span ': {
      color: 'white',
      opacity: '.33',
      fontSize: '1.2rem',
    },
    '& > p ': {
      color: 'white',
      fontWeight: '100',
      display: 'inline',
      // opacity: '.33',
    },
  })
);
export default TextComponent;
