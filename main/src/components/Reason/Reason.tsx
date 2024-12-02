import { css } from '../../../styled-system/css';
import { ReasonProps } from './Reason.type';

function Reason({ title, content }: ReasonProps) {
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
