import { FC, MouseEvent } from 'react'
import { TabsBox, Tab } from './styled'

type TabsBlogAndNewsProps = {
  tabs?: string[]
  value?: string
  onChange?: (event: MouseEvent<HTMLButtonElement>, value: string) => void
}

const TabsBlogAndNews: FC<TabsBlogAndNewsProps> = ({ tabs, onChange, value: valueProp }) => (
  <TabsBox>
    {Array.isArray(tabs) &&
      tabs.map((value, idx) => (
        <li key={`${value}-${idx}`}>
          <Tab
            type="button"
            aria-label="btn-tab"
            isActive={value === valueProp}
            onClick={(ev) => {
              if (onChange) onChange(ev, value)
            }}
          >
            {value}
          </Tab>
        </li>
      ))}
  </TabsBox>
)

export default TabsBlogAndNews
