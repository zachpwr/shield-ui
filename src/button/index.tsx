import styled from 'styled-components';
import { transparentize, getLuminance, mix } from 'polished';

const DEFAULT_COLOR = 'main';

interface ButtonProps {
  theme: DefaultTheme;
  color?: string;
}

function getButtonColor(props: ButtonProps): string {
  return props.theme.colors[props.color || DEFAULT_COLOR];
}

function getButtonTextColor(props: ButtonProps): string {
  const bgColor = getButtonColor(props);
  return getLuminance(bgColor) > 0.5 ? props.theme.colors.darkGray : props.theme.colors.white;
}

const Button = styled.button<ButtonProps>`
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${getButtonColor};
  color: ${getButtonTextColor};
  border: 0;
  cursor: pointer;
  outline: 0;
  font-size: 0.75em;
  padding: 0.75em 1em;
  transition: 0.25s background-color ease-in-out;
  margin-right: 5px;

  &:hover {
    background-color: ${props => mix(0.9, getButtonColor(props), getButtonTextColor(props))};
  }

  &:active {
    transition: 0.05s background-color ease-in-out;
    background-color: ${props => mix(0.85, getButtonColor(props), getButtonTextColor(props))};
    color: ${props => mix(0.1, getButtonColor(props), getButtonTextColor(props))};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${props => transparentize(0.75, getButtonColor(props))};
  }

  &:disabled {
    cursor: default;
    opacity: 0.75;
    background-color: ${getButtonColor};
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

export default Button;