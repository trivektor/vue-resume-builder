<template>
  <div class="border-b-2 mt-4 flex">
    <div class="flex-1">
      <strong class="block text-pink-500">{{resume.name}}</strong>
      <div class="text-gray-300">{{new Date(+resume.created_at)}}</div>
    </div>
    <aside>
      <router-link v-bind:to="{name: 'resumeEdit', params: {resumeId: resume.id}}">
        <button
          class="bg-blue-500 text-white px-2 align-text-bottom rounded mr-2">Update</button>
      </router-link>
      <button 
        v-on:click="deleteResume"
        class="bg-red-500 text-white px-2 align-text-bottom rounded">Delete</button>
    </aside>
  </div>
</template>

<script>
import gql from 'graphql-tag'

const deleteResumeMutation = gql`
  mutation deleteResumeMutation($resumeId: ID!) {
    deleteResume(resumeId: $resumeId)
  }
`

export default {
  props: ['resume'],
  methods: {
    async deleteResume() {
      if (!confirm('Are you sure you want to delete this resume?')) return;
      
      await this.$apollo.mutate({
        mutation: deleteResumeMutation,
        variables: {
          resumeId: this.resume.id,
        },
      })

      this.$emit('resume-deleted')
    },
  },
}
</script>