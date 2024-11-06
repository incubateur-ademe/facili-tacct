import { Progress } from "antd";
import styles from "./biodiversiteCharts.module.scss";

export const AgricultureBioPieCharts = () => {
  const progress1 = 60;
  const progress2 = 25;
  const progress3 = 15;
  const rotation2 = progress1 * 3.6;
  const rotation3 = (progress1 + progress2) * 3.6;
  return (
    <div className="flex flex-row justify-center gap-20 p-12">
      <div className={styles.progressWrapper}>
        <Progress
          aria-label='Progress bar'
          percent={60}
          // success={{
          //   percent: 60,
          //   strokeColor: 'blue'
          // }}
          strokeLinecap="butt"
          type="circle"
          size={100}
          strokeWidth={10}
          strokeColor="#00949D"
          showInfo={false}
          trailColor="#00949D10"
        />
        <div className={styles.progressText}>
          <p>
            <span>{60}% </span>
          </p>
        </div>
      </div>
      <div className={styles.progressWrapper}  >
        <Progress
          style={{ transform: `rotate(${rotation2}deg)` }}
          aria-label='Progress bar'
          percent={25}
          strokeLinecap="butt"
          type="circle"
          size={100}
          strokeWidth={10}
          strokeColor="#00C2CC"
          showInfo={false}
          trailColor="#00C2CC10"
        />
        <div className={styles.progressText} >
          <p>
            <span>25% </span>
          </p>
        </div>
      </div>
      <div className={styles.progressWrapper}>
        <Progress
          style={{ transform: `rotate(${rotation3}deg)` }}
          aria-label='Progress bar'
          percent={15}
          strokeLinecap="butt"
          type="circle"
          size={100}
          strokeWidth={10}
          strokeColor="#BB43BD"
          showInfo={false}
          trailColor="#BB43BD10"
        />
        <div
          className={styles.progressText}
          style={{ cursor: 'pointer' }}
        >
          <p>
            <span>15% </span>
          </p>
        </div>
      </div>
    </div>
  );
}
