import firebase from '~/plugins/firebase'

export default function ({ store, route, redirect }) {
    if (!store.getters.isAuthenticated && route.fullPath !== '/login') {
      redirect('/login')
    }
  }