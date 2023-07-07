import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/1d34cfe656a00b325d369511b9862796~c5_100x100.jpeg?x-expires=1688889600&x-signature=XTAmi0yUGqzGn%2FO1pbN23GvaT4A%3D"
                alt=""
            />

            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>doantrananhthuan</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Đoàn Trần Anh Thuận</p>
            </div>
        </div>
    );
}

AccountItem.propTypes = {};
export default AccountItem;
