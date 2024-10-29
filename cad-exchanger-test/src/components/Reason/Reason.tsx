import { css } from '../../../styled-system/css';

function Reason({ title, content }: { title: string; content: string }) {
  return (
    <div>
      <h5
        className={css({
          fontWeight: '600',
          fontSize: '1.2rem',
          textAlign: 'center',
        })}
      >
        {title}
      </h5>
      <p>{content}</p>
    </div>
  );
}

export default Reason;
