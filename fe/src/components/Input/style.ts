import styled from 'styled-components';

const InputLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Input = styled.input<{ value: string }>`
  width: 380px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.neutral.bc?.strong};
  border-radius: 16px;
  font-size: ${({ theme }) => theme.fonts.subhead.fontSize};
  color: ${({ theme, value }) =>
    value?.length > 0 ? theme.colors.neutral.text.strong : theme.colors.neutral.text.weak};

  &:focus {
    background-color: ${({ theme }) => theme.colors.neutral.bc?.default};
    border: 1px solid ${({ theme }) => theme.colors.neutral.bd?.active};
    color: ${({ theme }) => theme.colors.neutral.text.strong};
  }
`;

const Message = styled.span<{ type: 'helper' | 'error' }>`
  font-size: ${({ theme }) => theme.fonts.caption.fontSize};
  color: ${({ theme, type }) =>
    type === 'helper' ? theme.colors.neutral.text.default : theme.colors.accent.text.default};
`;

export { InputLayout, Input, Message };
