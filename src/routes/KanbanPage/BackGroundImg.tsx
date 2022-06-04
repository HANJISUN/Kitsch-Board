import Cherry from 'assets/images/cherry.gif';
import Heart from 'assets/images/heart.gif';
import Smiley from 'assets/images/smiley.gif';
import Unicorn from 'assets/images/unicorn.gif';

import styles from './backgroundImg.module.scss';

const BackGroundImg = () => {
  return (
    <div className={styles.backgroundImgContainer}>
      <img className={styles.img1} src={Cherry} alt='회전하는 체리' />
      <img className={styles.img2} src={Cherry} alt='회전하는 체리' />
      <img className={styles.img3} src={Heart} alt='회전하는 하트' />
      <img className={styles.img4} src={Heart} alt='회전하는 하트' />
      <img className={styles.img5} src={Smiley} alt='회전하는 스마일' />
      <img className={styles.img6} src={Smiley} alt='회전하는 스마일' />
      <img className={styles.img7} src={Unicorn} alt='반짝이는 유니콘' />
      <img className={styles.img8} src={Unicorn} alt='반짝이는 유니콘' />
    </div>
  );
};

export default BackGroundImg;
