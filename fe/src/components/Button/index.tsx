import * as S from './style';

type ShapeType = 'rectangle' | 'circle';
type SizeType = 's' | 'm';

export interface Props {
  shape: ShapeType;
  size?: SizeType;
  onClick: React.ReactEventHandler;
  children: React.ReactNode;
}

const Button = ({ shape, size, children, onClick }: Props) => {
  return (
    <S.Button shape={shape} size={size} onClick={onClick}>
      {children}
    </S.Button>
  );
};

export default Button;
