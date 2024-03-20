import { Button as UiButton } from '@mui/base/Button';
import { ButtonBaseProps } from '@mui/material';
import { styled } from '@mui/system';

export const BaseButton = (props: Omit<ButtonBaseProps, 'sx'>) => {
    return <Button {...props}> {props.children} </Button>;
};

const blue = {
    200: '#99f6e4',
    300: '#5eead4',
    400: '#2dd4bf',
    500: '#14b8a6',
    600: '#0d9488',
    700: '#0f766e'
};

const Button = styled(UiButton)(
    () => `
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  background-color: ${blue[500]};
  padding: 8px 16px;
  border-radius: 12px;
  max-height:48px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: 1px solid ${blue[500]};
 
  &:hover {
    background-color: ${blue[600]};
  }
  `
);
