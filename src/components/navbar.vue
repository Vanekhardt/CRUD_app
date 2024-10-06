<script setup>
import logo from '@/assets/img/log.avif'
import { RouterLink, useRoute } from 'vue-router';

const activelink = (routepath)=>{
 const route = useRoute();
 return route.path ===routepath
}
</script>



<template>
    <nav class="bg-violet-700 border-b bg-violet-700">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="flex h-20 items-center justify-between">
          <div
            class="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
            <!-- Logo -->
            <RouterLink class="flex flex-shrink-0 items-center mr-4 " to="/">
              <img class="h-10 w-auto rounded-full hover:animate-spin" :src="logo" alt="Vue Jobs" />
              <span class="hidden md:block text-white text-2xl font-bold ml-2"
                >Job's app</span
              >
            </RouterLink>
            <div class="md:ml-auto">
              <div class="flex space-x-2">
                <RouterLink
                  to="/"
                  :class="[activelink('/') ? 
                  'bg-violet-900':'hover:bg-blue-500 hover:text-white'
                  ,'text-white','px-3','py-2','rounded-md']"
                  >Home</RouterLink
                >
                <RouterLink
                  to="/jobs"
                  :class="[activelink('/jobs') ? 
                  'bg-violet-900':'hover:bg-blue-500 hover:text-white'
                  ,'text-white','px-3','py-2','rounded-md']"
                  >Jobs</RouterLink
                >
                <RouterLink
                  to="/jobs/add"
                  :class="[activelink('/jobs/add') ? 
                  'bg-violet-900':'hover:bg-blue-500 hover:text-white'
                  ,'text-white','px-3','py-2','rounded-md']"
                  >Add Job</RouterLink
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
</template>