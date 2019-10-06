import React from 'react'

import { Select } from './rss/components/Select'

import './rss/components/Select/Select.scss'
import styles from './App.module.scss'

const options = ['red', 'green', 'yellow', 'blue']
const onChange = option => console.log(`selected: ${option}`)

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <main>
        <h1>This is the react-simple-select demo app.</h1>
        <Select onChange={onChange} options={options} />
      </main>
    </div>
  )
}

export default App
