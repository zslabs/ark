<script setup lang="ts">
import { Radio, RadioControl, RadioGroup, RadioGroupLabel, RadioLabel } from '.'
import './radio-group.css'

const items = [
  { value: 'React' },
  { value: 'Solid' },
  { value: 'Svelte', disabled: true },
  { value: 'Vue' },
]
</script>
<template>
  <Story title="Radio Group">
    <Variant title="Basic">
      <RadioGroup>
        <RadioGroupLabel>Framework</RadioGroupLabel>
        <Radio v-for="(item, idx) in items" :key="idx" :value="item.value">
          <RadioLabel>{{ item.value }}</RadioLabel>
          <RadioControl />
        </Radio>
      </RadioGroup>
    </Variant>
  </Story>
</template>
