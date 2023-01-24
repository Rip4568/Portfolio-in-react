/* src/components/Sidebar/Sidebar.tsx */
import React from "react";
import { Fragment } from "react";
import styles from './Sidebar.module.scss'

export default function Sidebar(props): React.ComponentElement<any, any> {
  return (
    <Fragment >
      <div className={styles.main}>
        <h1 className="hello">This is the SideBar, and this is a test</h1>
      </div>
    </Fragment>
  )
}