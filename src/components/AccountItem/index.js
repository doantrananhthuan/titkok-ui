import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
   return (
      <div className={cx('wrapper')}>
         <img
            className={cx('avatar')}
            src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/62db405da43d8a7512ab50809f838707~c5_300x300.webp?x-expires=1687503600&x-signature=Ss%2F%2Bb3OJNAULvMeOO0hxgF57Xng%3D"
            alt="Hoaaa"
         />

         <div className={cx('info')}>
            <h4 className={cx('name')}>
               <span>Nguyen Van A</span>
               <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </h4>
            <span className={cx('username')}>nguyenvana</span>
         </div>
      </div>
   );
}

export default AccountItem;
