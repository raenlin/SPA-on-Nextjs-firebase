import { Button, TextareaAutosize, TextField } from '@mui/material';
import { css } from '../../../styled-system/css';
import { FormProps } from './Form.type';

const form = css({
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
  gap: '20px',
  margin: 'auto',
  border: '1px solid black',
  borderRadius: '10px',
});

const error = css({
  color: 'red',
});

function Form({ register, onsubmit, errors }: FormProps) {
  return (
    <form className={form} onSubmit={onsubmit}>
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        type="text"
        {...register('name')}
      />
      <p className={error}>{errors.name?.message}</p>
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        type="email"
        {...register('email')}
      />
      <p className={error}>{errors.email?.message}</p>
      <TextareaAutosize
        id="outlined-basic"
        minRows={3}
        placeholder="Write here some message..."
        {...register('text')}
      />
      <p className={error}>{errors.text?.message}</p>
      <Button type="submit" variant="contained">
        Send
      </Button>
    </form>
  );
}

export default Form;
