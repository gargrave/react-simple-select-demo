import React from 'react'

import { Demo, DemoTS } from './demo'

import styles from './App.module.scss'

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <main>
        <h1 className={styles.title}>
          This is the react-simple-select demo app.
        </h1>
        <Demo />
        <br />
        <DemoTS />
      </main>
    </div>
  )
}

export default App
