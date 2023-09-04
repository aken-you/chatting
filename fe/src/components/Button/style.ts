import styled, { css } from 'styled-components';

type ShapeType = 'rectangle' | 'circle';
type SizeType = 's' | 'm';

const shapeStyles = {
  rectangle: css`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.accent.bc?.default};
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.accent.text.default};
    font-size: ${({ theme }) => theme.fonts.body.fontSize};
  `,
  circle: css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.primary.bc?.default};
  `,
};

const sizeStyles = {
  s: css`
    width: 88px;
    height: 40px;
  `,
  m: css`
    width: 128px;
    height: 40px;
  `,
};

const Button = styled.button<{ shape: ShapeType; size?: SizeType }>`
  ${({ shape }) => shapeStyles[shape]}
  ${({ size }) => size && sizeStyles[size]}

  &:hover {
    opacity: 0.7;
  }
`;

export { Button };
