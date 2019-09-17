document.addEventListener('DOMContentLoaded', function() {
  let db = coDesConnect('https://canario-957b5.firebaseio.com/')

  db.download('/', function(data) {
    context = data

    coDesReplace('.ul', context)
    coDesReplace('.item1', context)


    let gabi = data['portfolio'][value]
    coDesReplace('container3', gabi)

    coDesReplace('.item3', context)
    coDesReplace('.item2', context)

  })
})
