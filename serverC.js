




server.post('/book', (request, response) => {
  console.log(request.body)
  const url = urlAPI + "/reservations"
  request.body.timeStart = request.body.dateStart + 'T' + request.body.timeStart + ':00Z';
  request.body.timeEnd = request.body.dateEnd + 'T' + request.body.timeEnd + ':00Z';

  postJson(url, request.body).then((data) => {
    let newReservation = { ... request.body }
    console.log(JSON.stringify(data), 'hoiiii')

    if (data.success) {
      response.redirect('/book?reservationPosted=true') 
    } else {
      const errorMessage = data.message + "Some fields are not filled in (correctly)."
      const newData = { error: errorMessage, values: newReservation }
      
      let urlSmartzones = urlAPI + '/smartzones'
        fetchJson(urlSmartzones).then((smartzones) => {
          let id = request.query.id
          let time = request.query.time
          let selectedSmartzoneId = id
          let url = urlAPI + '/reservations?id=' + id
            fetchJson(url).then((reservations) => {
              let data = {smartzones: smartzones, reservations: reservations, newData}
              response.render("book", {smartzones: data.smartzones.smartzones, selectedSmartzoneId: id, time: time})
            })
        })
    }
  })
})


