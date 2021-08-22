import styles from "./Sidebar.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updatingSideMenu } from "../../../redux-store/actions/sideMenuAction";
const Sidebar = () => {
  // const testState = useSelector(state => state.user.userDetails);
  // console.log(`testing redux is : ${testState}`)
  const dispatch = useDispatch();
  let [sideMenu, setSideMenu] = useState();

  const handleChat = async () => {
    await setSideMenu(sideMenu = "chat");
    dispatch(updatingSideMenu(sideMenu));
  };

  const handleCall = async () => {
    await setSideMenu(sideMenu = "call");
    dispatch(updatingSideMenu(sideMenu));
  };

  const handleContact = async () => {
    await setSideMenu(sideMenu = "contact");
    dispatch(updatingSideMenu(sideMenu));
  };

  const handleAccount = async () => {
    await setSideMenu(sideMenu = "account");
    dispatch(updatingSideMenu(sideMenu));
  };

  return (
    <>
      <section className={styles.container}>
        <section className={styles.barCodeBox}>
          <div className={styles.logoDiv}>
            <Image
              src="/logo.png"
              alt="ChatLoop Logo"
              layout="responsive"
              width={200}
              height={200}
            />
          </div>
          <div>
            <Image
              src="/wallet.png"
              alt="Wallet Address QR-Code"
              layout="fill"
            />
          </div>
        </section>

        <section className={styles.tabs}>
          <div onClick={handleChat}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="white"
              viewBox="0 0 24 24"
            >
              <path d="M12 1c-6.628 0-12 4.573-12 10.213 0 2.39.932 4.591 2.427 6.164l-2.427 5.623 7.563-2.26c9.495 2.598 16.437-3.251 16.437-9.527 0-5.64-5.372-10.213-12-10.213z" />
            </svg>
          </div>

          <div onClick={handleCall}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="white"
              viewBox="0 0 24 24"
            >
              <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z" />
            </svg>
          </div>

          <div onClick={handleContact}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="white"
              viewBox="0 0 24 24"
            >
              <path d="M10.644 17.08c2.866-.662 4.539-1.241 3.246-3.682-3.932-7.427-1.042-11.398 3.111-11.398 4.235 0 7.054 4.124 3.11 11.398-1.332 2.455.437 3.034 3.242 3.682 2.483.574 2.647 1.787 2.647 3.889v1.031h-18c0-2.745-.22-4.258 2.644-4.92zm-12.644 4.92h7.809c-.035-8.177 3.436-5.313 3.436-11.127 0-2.511-1.639-3.873-3.748-3.873-3.115 0-5.282 2.979-2.333 8.549.969 1.83-1.031 2.265-3.181 2.761-1.862.43-1.983 1.34-1.983 2.917v.773z" />
            </svg>
          </div>

          <div onClick={handleAccount}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="white"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z" />
            </svg>
          </div>
        </section>
      </section>
    </>
  );
};

export default Sidebar;
