<template>
  <div>
    <div class="px-4 py-4">
      <router-link to="/resumes/new">New Resume</router-link>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag';

const resumesQuery = gql`
  query ResumesQuery {
    resumes {
      edges {
        node {
          id
          name
          description
        }
      }
    }
  }
`

export default {
  apollo: {
    resumes: resumesQuery,
  },
}
</script>