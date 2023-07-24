<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '.'
import '../avatar.css'
</script>

<template>
  <Avatar id="123">
    <AvatarFallback>PA</AvatarFallback>
    <AvatarImage src="https://i.pravatar.cc/300" alt="avatar" />
  </Avatar>
</template>
