import styles from "./onboarding.module.css";
const Onboarding = ({ message }) => {
  return <div className={styles.container}>{message}</div>;
};

export default Onboarding;
