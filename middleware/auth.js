import firebase from '~/plugins/firebase'

export default function({store, route, redirect}) {
    let currentUser = firebase.auth().currentUser
    if (!currentUser && route.fullPath !== '/login') {
      return redirect('/login');
    }
  }