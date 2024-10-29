import { Button } from '@mui/material';
import { css } from '../../../styled-system/css';

const header_wrapper = css({
  padding: '20px',
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
});

const heading = css({
  fontSize: '1.5rem',
  fontWeight: '500',
});

const header = css({
  position: 'sticky',
  top: '0',
  backgroundColor: 'var(--color-header)',
});

function Header() {
  return (
    <header className={header}>
      <div className={header_wrapper}>
        <h3 className={heading}>Rick Astley Company</h3>
        <Button variant="contained" href="/feedback">
          Contact us
        </Button>
      </div>
    </header>
  );
}

export default Header;
