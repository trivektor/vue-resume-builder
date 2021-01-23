<template>
  <div class="px-4 py-4">
    <router-link to="/resumes/new">
      <button class="bg-blue-600 text-white px-2 py-1 rounded">New Resume</button>
    </router-link>
    <div 
      v-if="$apollo.loading"
      class="mt-4">Loading...</div>
    <resume-list-item
      v-for="resume in resumes" 
      v-bind:resume="resume"
      v-bind:key="resume.id"
      v-on:resume-deleted="resumeDeleted">
    </resume-list-item>    
  </div>
</template>

<script>
import gql from 'graphql-tag'
import {map} from 'lodash-es'

import ResumeListItem from './ResumeListItem'

const resumesQuery = gql`
  query ResumesQuery {
    resumes {
      edges {
        node {
          id
          name
          description
          created_at
          updated_at
        }
      }
    }
  }
`

export default {
  components: {
    ResumeListItem,
  },
  apollo: {
    resumes: {
      query: resumesQuery,
      deep: false,
      fetchPolicy: "network-only",
      result({data}) {
        this.resumes = map(data?.resumes?.edges, 'node')
      },
    },
  },
  methods: {
    resumeDeleted() {
      this.$apollo.queries.resumes.refetch()
    },
  },
}
</script>