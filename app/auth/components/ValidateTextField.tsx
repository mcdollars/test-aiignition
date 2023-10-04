import { TextField, Typography } from '@mui/material';
import { FunctionComponent } from 'react';

interface ValidateTextFieldProps {
  value?: string,
  setValue?: any,
  type?: string,
  label?: string,
  placeholder?: string,
  errorMessage?: string
}
/**
 * Renders "ValidateTextField" for ValidateTextField component
 * @component ValidateTextField
 */
const ValidateTextField: FunctionComponent<ValidateTextFieldProps> = ({
  value,
  setValue,
  type,
  label,
  placeholder,
  errorMessage
}) => {
  return (
    <>
      <TextField
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type={type}
        label={label}
        placeholder={placeholder}
        variant="standard"
        fullWidth
        sx={{
          mb: errorMessage ? 0 : 3
        }}
      />
      {!!errorMessage && <Typography variant='caption' sx={{color: 'red', fontWeight: 'bold'}}>Error Message</Typography>}
    </>
  );
};

export default ValidateTextField;
