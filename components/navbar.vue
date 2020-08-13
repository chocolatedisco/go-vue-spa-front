<template>
    <b-navbar>
        <template slot="brand">
            <b-navbar-item href="/">
                <img
                    src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item href="/">
                Home
            </b-navbar-item>
            <b-navbar-dropdown label="Info">
                <b-navbar-item href="/">
                    About
                </b-navbar-item>
                <b-navbar-item href="/">
                    Contact
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-danger" @click="signOut" v-if="isAuthenticated">
                        Sign Out
                    </a>
                    <div v-else>
                        <a class="button is-light" href="/login">
                            Log in
                        </a>
                        <a class="button is-primary" href="/signup">
                            <strong>Sign up</strong>
                        </a>
                    </div>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
import axios from 'axios'
import firebase from '~/plugins/firebase'
import { mapActions } from 'vuex'

export default {
  computed: {
   isAuthenticated () {
     return this.$store.getters['isAuthenticated']
   }
  },
  methods: {
    signOut: function () {
      firebase.auth().signOut().then(() => {
        localStorage.removeItem('jwt')
        this.$router.push('/login')
      })
    }
  }
}
</script>