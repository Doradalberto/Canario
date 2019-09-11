document.addEventListener('DOMContentLoaded', function() {
  let db = coDesConnect('https://console.firebase.google.com/project/canario-957b5/database/canario-957b5/data')

  db.download('/', function(data) {
    context = data
    coDesReplace('.menu-list', context)
    coDesReplace('.section-list', context)
  })
})
