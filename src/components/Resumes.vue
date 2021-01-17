<template>
  <div>
    <router-link to="/resumes/new">New Resume</router-link>
  </div>
</template>

<script>
import gql from 'graphql-tag';

export default {
  apollo: {
    resumes: gql`query {
      resumes {
        edges {
          node {
            name
            description
          }
        }
      }
    }`
  }
}
</script>