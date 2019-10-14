import * as React from 'react'

import { Select } from '../rss/components/Select'

import styles from './Demo.module.scss'

const options = ['red', 'green', 'yellow', 'blue']

export type DemoProps = {}

export const Demo: React.FC<DemoProps> = () => {
  const [selected, setSelected] = React.useState()

  const handleChange = option => {
    setSelected(option)
  }

  return (
    <div>
      <div className={styles.sectionTitle}>A basic RSS setup:</div>
      <Select onChange={handleChange} options={options} value={selected} />
    </div>
  )
}
