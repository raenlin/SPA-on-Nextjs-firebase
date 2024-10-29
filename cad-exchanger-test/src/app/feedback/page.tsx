import { Button } from '@mui/material';
import { css } from '../../../styled-system/css';

const form_wrapper = css({
  padding: '40px 20px',
  textAlign: 'center',
});

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

const input = css({
  border: '1px solid var(--color-header)',
  borderRadius: '5px',
  padding: '5px',
});

function Feedback() {
  return (
    <div className={form_wrapper}>
      <h2
        className={css({
          fontSize: '1.3rem',
          fontWeight: '500',
        })}
      >
        We are waiting for your impressions
      </h2>
      <div
        className={css({
          maxWidth: '300px',
          margin: 'auto',
          marginTop: '20px',
        })}
      >
        <form className={form}>
          <label htmlFor="name">Name</label>
          <input
            className={input}
            type="text"
            id="name"
            placeholder="Name..."
          />
          <label htmlFor="email">Email</label>
          <input
            className={input}
            type="text"
            id="email"
            placeholder="email@gmail.com"
          />
          <label htmlFor="message">Message</label>
          <textarea className={input} id="message" placeholder="Message..." />
          <Button type="submit" variant="contained">
            Send
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Feedback;
