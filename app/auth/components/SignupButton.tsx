import { Button } from '@mui/material';
import { FunctionComponent } from 'react';

interface SignupButtonProps {
  children: any
}
/**
 * Renders "SignupButton" for SignupButton component
 * @component SignupButton
 */

const SignupButton: FunctionComponent<SignupButtonProps> = ({children}) => {
  return (
    <Button
      type="submit"
      fullWidth
      sx={{ mb: 1, height: "50px", borderRadius: "25px", border: "solid 1px", color: "black", textTransform: 'none', fontSize: "15px"}}
    >
      {children}
    </Button>
  );
};

export default SignupButton;
