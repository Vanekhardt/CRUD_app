<script setup>
import hero from '@/components/hero.vue'
import homecards from '@/components/homecards.vue'
import joblisting from '@/components/joblisting.vue'


</script>

<template>


    <hero />
    <homecards />
    <joblisting :limit="3" :showbutton="true"/>
  </template>