import { css } from '../../../styled-system/css';

const footer = css({
  position: 'sticky',
  bottom: '0',
  backgroundColor: 'var(--color-header)',
  textAlign: 'center',
});

const footer_wrapper = css({
  padding: '20px',
});

function Footer() {
  return (
    <footer className={footer}>
      <div className={footer_wrapper}>
        <h4>Rick Astley Company 2024</h4>
      </div>
    </footer>
  );
}

export default Footer;
