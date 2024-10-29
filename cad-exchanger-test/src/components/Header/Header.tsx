'use client';

import { Button } from '@mui/material';
import { css } from '../../../styled-system/css';

const stylesWrapper = css({
  padding: '20px',
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
});

const stylesHeading = css({
  fontSize: '1.5rem',
  fontWeight: '500',
});

function Header() {
  return (
    <header
      className={css({
        position: 'sticky',
        top: '0',
      })}
    >
      <div className={stylesWrapper}>
        <h3 className={stylesHeading}>Rick Astley Company</h3>
        <Button variant="contained" href="/feedback">
          Contact us
        </Button>
      </div>
    </header>
  );
}

export default Header;
