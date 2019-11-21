import * as React from 'react'
import uuid from 'nanoid'

import { Select } from '@gargrave/react-simple-select'
import '@gargrave/react-simple-select/dist/react-simple-select.css'

import styles from './Demo.module.scss'

type Color = {
  id: string
  hash: string
  label: string
}

const colorOptions: Color[] = [
  { id: uuid(), hash: 'red', label: 'Red' },
  { id: uuid(), hash: 'orange', label: 'Orange' },
  { id: uuid(), hash: 'yellow', label: 'Yellow' },
  { id: uuid(), hash: 'green', label: 'Green' },
  { id: uuid(), hash: 'blue', label: 'Blue' },
  { id: uuid(), hash: 'violet', label: 'Violet' },
]

const getColorKey = (color: Color) => color.id
const getColorLabel = (color: Color) => `Color: ${color.label}`
const getColorValue = (color: Color) => color && color.hash

export type DemoProps = {}

export const Demo: React.FC<DemoProps> = () => {
  const [selected, setSelected] = React.useState()

  const handleChange = (color: Color) => {
    console.table(color)
    setSelected(color)
  }

  return (
    <div>
      <div className={styles.sectionTitle}>A basic RSS setup:</div>
      <Select
        getOptionKey={getColorKey}
        getOptionLabel={getColorLabel}
        getOptionValue={getColorValue}
        onChange={handleChange}
        options={colorOptions}
        value={selected}
      />
    </div>
  )
}
