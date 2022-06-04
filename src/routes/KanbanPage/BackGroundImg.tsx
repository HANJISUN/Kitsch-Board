import Cherry from 'assets/images/cherry.gif';
import Heart from 'assets/images/heart.gif';

import styles from './backgroundImg.module.scss';

const BackGroundImg = () => {
  return (
    <div className={styles.backgroundImgContainer}>
      <img className={styles.img1} src={Cherry} alt='회전하는 체리' />
      <img className={styles.img2} src={Cherry} alt='회전하는 체리' />
      <img className={styles.img3} src={Heart} alt='회전하는 하트' />
      <img className={styles.img4} src={Heart} alt='회전하는 하트' />
    </div>
  );
};

export default BackGroundImg;
