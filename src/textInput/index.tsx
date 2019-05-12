import { mix, transparentize } from 'polished';
import styled from 'styled-components';

export interface ITextInputProps {
  theme: DefaultTheme;
  error?: boolean;
}

function getBorderColor(props: ITextInputProps) {
  if (props.error) {
    return props.theme.colors.error;
  }

  return props.theme.colors.secondary;
}

function getFocusedBorderColor(props: ITextInputProps) {
  if (props.error) {
    return props.theme.colors.error;
  }

  return props.theme.colors.main;
}

const TextInput = styled.input<ITextInputProps>`
  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${getBorderColor};
  border-radius: ${props => props.theme.borderRadius};
  transition: 0.25s border-color ease-in-out;
  cursor: text;
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-size: 0.75em;
  padding: 0.75em 1em;
  outline: 0;

  &::placeholder {
    color: ${props => props.theme.colors.secondary};
  }

  &:hover {
    border-color: ${props => mix(0.5, props.theme.colors.white, getFocusedBorderColor(props))};
  }

  &:focus {
    border-color: ${props => props.theme.colors.main};
    box-shadow: 0 0 0 2px ${props => transparentize(0.75, getFocusedBorderColor(props))};
  }

  &:disabled {
    border-color: ${getFocusedBorderColor};
    background-color: ${props => mix(0.5, props.theme.colors.white, props.theme.colors.secondary)};
    cursor: default;
  }
`;

TextInput.displayName = 'TextInput';

export default TextInput;