<template>
  <form class="px-4 py-4 block" v-on:submit.prevent="onSubmit">
    <div class="mt-4">
      <label class="block">Name</label>
      <input v-model="name" class="border-solid border-b-2 width rounded min-w-full" />
    </div>
    <div class="mt-4">
      <label class="block">Description</label>
      <textarea v-model="description" class="block border-b-2 border-solid rounded min-w-full" />
    </div>
    <div class="mt-4">
      <button type="submit" class="bg-blue-600 px-2 py-1 text-white">Create</button>
    </div>
  </form>
</template>

<script>
import gql from 'graphql-tag'

const createResumeMutation = gql`
  mutation createResumeMutation($name: String!, $description: String) {
    createResume(
      input: {
        name: $name
        description: $description
      }
    ) {
      name
      description
    }
  }
`

export default {
  data: function() {
    return {
      name: 'Untitled',
      description: '',
    }
  },
  methods: {
    onSubmit: function() {
      this.$apollo.mutate({
        mutation: createResumeMutation,
        variables: {
          name: this.name,
          description: this.description,
        }
      })
    },
  },
}
</script>