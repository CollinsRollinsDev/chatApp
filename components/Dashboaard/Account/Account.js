import styles from "./Account.module.css";

const Contacts = ({id}) => {
  return (
    <section className={styles.container}>
      <section className={styles.AccountHead}>
        <div className={styles.head}>
          <h2>Account</h2>
        </div>
        <div className={styles.subHead}>Personal Information...</div>
      </section>

      <section className={styles.body}>
        <section className={styles.profileHead}>
          <section className={styles.dpSec}>
            <div className={styles.dp}></div>
          </section>

          <section className={styles.secondSec}>
            <div className={styles.name}>Collins Rollins</div>
            <div className={styles.logout}>Logout</div>
          </section>
        </section>

        <section className={styles.profileLists}>
          <div>
            <section className={styles.details}>
              <p>Your Token</p>
              <p>{id}</p>
            </section>

            <section className={styles.iconSec}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="white"
                viewBox="0 0 24 24"
              >
                <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z" />
              </svg>
            </section>
          </div>

          <div>
            <section className={styles.details}>
              <p>Birthday</p>
              <p>02/07/2006</p>
            </section>

            <section className={styles.iconSec}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="white"
                viewBox="0 0 24 24"
              >
                <path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z" />
              </svg>
            </section>
          </div>

          <div>
            <section className={styles.details}>
              <p>Local Time</p>
              <p>UTC 9:00am</p>
            </section>

            <section className={styles.iconSec}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="white"
                viewBox="0 0 24 24"
              >
                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.848 12.459c.202.038.202.333.001.372-1.907.361-6.045 1.111-6.547 1.111-.719 0-1.301-.582-1.301-1.301 0-.512.77-5.447 1.125-7.445.034-.192.312-.181.343.014l.985 6.238 5.394 1.011z" />
              </svg>
            </section>
          </div>
        </section>
      </section>

      {/* contact area */}
    </section>
  );
};

export default Contacts;
