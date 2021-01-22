<template>
  <div class="border-b-2 mt-4 flex">
    <div class="flex-1">{{resume.name}}</div>
    <aside>
      <button 
        v-on:click="deleteResume"
        class="bg-red-500 text-white px-2 align-text-bottom rounded">Delete</button>
    </aside>
  </div>
</template>

<script>
export default {
  props: ['resume'],
  methods: {
    deleteResume() {
      console.log('deleting', this.resume)
    }
  }
}
</script>