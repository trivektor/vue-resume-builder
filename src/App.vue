<template>
  <div>
    <header class="bg-blue-800 px-4 py-4 text-white">
      <div class="flex">
        <div class="flex-1">Vue Resume Builder</div>
        <aside v-if="userIsAuthorized">
          <a class="text-white" v-on:click="logout">Logout</a>
        </aside>
      </div>
      
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapState({userIsAuthorized: 'userIsAuthorized'}),
  },
  methods: {
    ...mapActions({logout: 'auth0Logout'}),
  },
}
</script>
