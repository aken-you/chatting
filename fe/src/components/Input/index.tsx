import * as S from './style';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  assistiveText?: { type: 'helper' | 'error'; text: string };
}

const Input = ({ value, assistiveText, ...props }: Props) => {
  return (
    <S.InputLayout>
      <S.Input value={value} {...props} />
      {assistiveText && <S.Message type={assistiveText.type}>{assistiveText.text}</S.Message>}
    </S.InputLayout>
  );
};

export default Input;
