import type { Meta } from '@storybook/react'
import { useState } from 'react'
import { TabContent, TabIndicator, TabList, Tabs, TabTrigger } from '.'
import { Lazy } from '../lazy'
import './tabs.css'

type TabContentType = typeof TabContent

const meta: Meta<TabContentType> = {
  title: 'Tabs',
  component: TabContent,
}

export default meta

export const Basic = () => (
  <Tabs defaultValue="vue">
    <TabList>
      <TabTrigger value="react">React</TabTrigger>
      <TabTrigger value="vue">Vue</TabTrigger>
      <TabTrigger value="solid">Solid</TabTrigger>
    </TabList>
    <TabContent value="react">
      <Lazy>React Content</Lazy>
    </TabContent>
    <TabContent value="vue">Vue Content</TabContent>
    <TabContent value="solid">Solid Content</TabContent>
  </Tabs>
)

export const InitialTab = () => (
  <Tabs defaultValue="react">
    <TabList>
      <TabTrigger value="react">React</TabTrigger>
      <TabTrigger value="vue">Vue</TabTrigger>
      <TabTrigger value="solid">Solid</TabTrigger>
    </TabList>
    <TabContent value="react">React Content</TabContent>
    <TabContent value="vue">Vue Content</TabContent>
    <TabContent value="solid">Solid Content</TabContent>
  </Tabs>
)

export const Indicator = () => (
  <Tabs>
    <TabList>
      <TabTrigger value="react">React</TabTrigger>
      <TabTrigger value="vue">Vue</TabTrigger>
      <TabTrigger value="solid">Solid</TabTrigger>
      <TabIndicator />
    </TabList>
    <TabContent value="react">React Content</TabContent>
    <TabContent value="vue">Vue Content</TabContent>
    <TabContent value="solid">Solid Content</TabContent>
  </Tabs>
)

export const DisabledTab = () => (
  <Tabs defaultValue="react">
    <TabList>
      <TabTrigger value="react">React</TabTrigger>
      <TabTrigger value="vue" disabled>
        Vue
      </TabTrigger>
      <TabTrigger value="solid">Solid</TabTrigger>
    </TabList>
    <TabContent value="react">React Content</TabContent>
    <TabContent value="vue">Vue Content</TabContent>
    <TabContent value="solid">Solid Content</TabContent>
  </Tabs>
)

export const Controlled = () => {
  const [value, setValue] = useState<string | null>('react')
  return (
    <Tabs value={value} onChange={(e) => setValue(e.value)}>
      <TabList>
        <TabTrigger value="react">React</TabTrigger>
        <TabTrigger value="vue">Vue</TabTrigger>
        <TabTrigger value="solid">Solid</TabTrigger>
      </TabList>
      <TabContent value="react">React Content</TabContent>
      <TabContent value="vue">Vue Content</TabContent>
      <TabContent value="solid">Solid Content</TabContent>
    </Tabs>
  )
}

export const Vertical = () => (
  <Tabs orientation="vertical" defaultValue="react">
    <TabList>
      <TabTrigger value="react">React</TabTrigger>
      <TabTrigger value="vue">Vue</TabTrigger>
      <TabTrigger value="solid">Solid</TabTrigger>
    </TabList>
    <TabContent value="react">React Content</TabContent>
    <TabContent value="vue">Vue Content</TabContent>
    <TabContent value="solid">Solid Content</TabContent>
  </Tabs>
)

export const Manual = () => (
  <Tabs activationMode="manual" defaultValue="react">
    <TabList>
      <TabTrigger value="react">React</TabTrigger>
      <TabTrigger value="vue">Vue</TabTrigger>
      <TabTrigger value="solid">Solid</TabTrigger>
    </TabList>
    <TabContent value="react">React Content</TabContent>
    <TabContent value="vue">Vue Content</TabContent>
    <TabContent value="solid">Solid Content</TabContent>
  </Tabs>
)
