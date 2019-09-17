document.addEventListener('DOMContentLoaded', function() {
  let db = coDesConnect('https://canario-957b5.firebaseio.com/')

  db.download('/', function(data) {
    context = data
    coDesReplace('.ul', context)
    coDesReplace('.item1', context)

  })
})
