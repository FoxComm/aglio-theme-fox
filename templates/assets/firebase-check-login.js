initApp = function() {
  firebase.auth().onAuthStateChanged(function(user, o, i) {
    if (user) {
      if (window.location.pathname == '/' || window.location.pathname == '/index.html')
        window.location.href='/home.html'
      // console.log(user)
      // var displayName = user.displayName
      // var email = user.email
      // var emailVerified = user.emailVerified
      // var photoURL = user.photoURL
      // var uid = user.uid
      // var providerData = user.providerData
      // user.getToken().then(function(accessToken) {
      //   document.getElementById('sign-in-status').textContent = 'Signed in'
      //   document.getElementById('sign-in').textContent = 'Sign out'
      //   document.getElementById('account-details').textContent = JSON.stringify({
      //     displayName: displayName,
      //     email: email,
      //     emailVerified: emailVerified,
      //     photoURL: photoURL,
      //     uid: uid,
      //     accessToken: accessToken,
      //     providerData: providerData
      //   }, null, '  ')
      // })
    } else if(window.location.pathname != '/index.html' && window.location.pathname != '/'){
      // User is signed out.
      // console.log('redirect to /')
      window.location.href='/index.html'
    }
  }, function(error) {
    console.log(error)
  })
}

window.addEventListener('load', function() {
  initApp()
})
