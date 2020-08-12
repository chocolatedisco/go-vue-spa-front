<template>
    <div class="signin">
        <h2>Sign in</h2>
        <input type="text" placeholder="email" v-model="email">
        <input type="password" placeholder="Password" v-model="password">
        <button @click="signIn">Signin</button>
        <p>You don't have an account?
            <router-link to="/signup">create account now!!</router-link>
        </p>
    </div>
</template>

<script>
import firebase from '~/plugins/firebase'
import { mapActions } from 'vuex'

export default {
  name: 'Signin',
  data: function () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions([
      'setUser'
    ]),
    signIn: function () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(res => {
        localStorage.setItem('jwt', res.user.qa)
        this.$router.push('/login')
      }, err => {
        alert(err.message)
      })
    }
  },
  async mounted () {
    let user = await new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged((user) => resolve(user))
    })
    this.setUser(user) // setUser is mapped action from vuex
    if (user) {
      this.$router.push('/mypage') // if non-null user given, go to my page.
    }
  }
}

</script>


<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.signin {
  margin-top: 20px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center
}
input {
  margin: 10px 0;
  padding: 10px;
}
button {
  margin: 10px 0;
  padding: 10px;
}
</style>