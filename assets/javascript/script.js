//function to search for city when button is clicked
document.getElementById('searchCity').addEventListener('click', event => {
  //prevents page from refreshing when button is clicked
  event.preventDefault()

  //if statement to check if something was typed into input field
  if (document.getElementById('searchCity').value.length > 1) {
    //fetch request
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Irvine&appid=d9145c6f207a235bfd97011a950cc17f`)
      .then(r => r.json())
      .then(city => {
        //console logging the name of the city to see if fetch request is working 
        console.log(city)

        fetch(city.coord.lat)
          .then(r => r.json())
          .then(latitude => {
            //console logging the latitude of the city to see if fetch request is working 
            console.log(latitude)

            fetch(city.coord.lon)
              .then(r => r.json())
              .then(longitude => {
                //console logging the longitude of the coordinates to see if fetch request is working 
                console.log(longitude)

                fetch(`https://api.openweathermap.org/data/2.5/uvi?=appid=d9145c6f207a235bfd97011a950cc17f&lat=${city.coord.lat}&lon=${city.coord.lon}`)
                  .then(r => r.json())
                  .then(uvIndex => {
                    console.log(uvIndex)
                    //creating a div to display current info for city 
                    let cityCurrent = document.createElement('div')
                    cityCurrent.className = 'card w-75'
                    cityCurrent.style = 'display: inline-block;'
                    cityCurrent.innerHTML = `
          <div class="card-header">
            <h5 class="card-title">
              ${city.name}
              ${list.dt_txt}
            </h5>
         </div>
          <div class="card-body">
              <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    ${list.weather.icon}
                  </li>
                  <li class="list-group-item">
                    "Temperature":${list.temp}
                  </li>
                  <li class="list-group-item">
                    "Humidity":${list.humidity}
                  </li>
                  <li class="list-group-item">
                    "Windspeed": ${list.wind.speed}
                  </li>
                  <li class="list-group-item" id=''uvIndex">
                    UV Index: ${value}
                  </li>
                </ul>
          </div>
       `
                    //function to clear out currentCity div
                    document.getElementById('currentCity').innerHTML = ' '
                    //function to append the cityCurrent into the currentCity div
                    document.getElementById('currentCity').append(cityCurrent)

                    let nextDay = document.createElement('div')
                    nextDay.className = 'card text-white bg-primary mb-3'
                    nextDay.style = style = 'max-width: 18rem; display: inline-block;'
                    nextDay.innerHTML = `
          <div class="card-header">
            <h5 class="card-title">
              ${list.dt_txt}
            </h5>
         </div>
          <div class="card-body">
              <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    ${list.weather.icon}
                  </li>
                  <li class="list-group-item">
                    "Temperature":${list.temp}
                  </li>
                  <li class="list-group-item">
                    "Humidity":${list.humidity}
                  </li>
                </ul>
          </div>
        `
                    //function to clear out dayOne div
                    document.getElementById('dayOne').innerHTML = ' '
                    // function to append the nextDay into the dayOne div
                    document.getElementById('dayOne').append(nextDay)

                    let secondDay = document.createElement('div')
                    secondDay.className = 'card text-white bg-primary mb-3'
                    secondDay.style = style = 'max-width: 18rem; display: inline-block;'
                    secondDay.innerHTML = `
          <div class="card-header">
            <h5 class="card-title">
              ${list.dt_txt}
            </h5>
         </div>
          <div class="card-body">
              <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    ${list.weather.icon}
                  </li>
                  <li class="list-group-item">
                    "Temperature":${list.temp}
                  </li>
                  <li class="list-group-item">
                    "Humidity":${list.humidity}
                  </li>
                </ul>
          </div>
        `
                    //function to clear out dayTwo div
                    document.getElementById('dayTwo').innerHTML = ' '
                    // function to append the secondDay forecast into the dayTwo div
                    document.getElementById('dayTwo').append(secondDay)

                    let thirdDay = document.createElement('div')
                    thirdDay.className = 'card text-white bg-primary mb-3'
                    thirdDay.style = style = 'max-width: 18rem; display: inline-block;'
                    thirdDay.innerHTML = `
          <div class="card-header">
            <h5 class="card-title">
              ${list.dt_txt}
            </h5>
         </div>
          <div class="card-body">
              <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    ${list.weather.icon}
                  </li>
                  <li class="list-group-item">
                    "Temperature":${list.temp}
                  </li>
                  <li class="list-group-item">
                    "Humidity":${list.humidity}
                  </li>
                </ul>
          </div>
        `

                    //function to clear out dayThree div
                    document.getElementById('dayThree').innerHTML = ' '
                    // function to append the thirdDay forecast into the dayThree div
                    document.getElementById('dayThree').append(thirdDay)

                    let fourthDay = document.createElement('div')
                    fourthDay.className = 'card text-white bg-primary mb-3'
                    fourthDay.style = style = 'max-width: 18rem; display: inline-block;'
                    fourthDay.innerHTML = `
          <div class="card-header">
            <h5 class="card-title">
              ${list.dt_txt}
            </h5>
         </div>
          <div class="card-body">
              <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    ${list.weather.icon}
                  </li>
                  <li class="list-group-item">
                    "Temperature":${list.temp}
                  </li>
                  <li class="list-group-item">
                    "Humidity":${list.humidity}
                  </li>
                </ul>
          </div>
        `
                    //function to clear out dayFour div
                    document.getElementById('dayFour').innerHTML = ' '
                    // function to append the fourthDay forecast into the dayFour div
                    document.getElementById('dayFour').append(fourthDay)

                    let fifthDay = document.createElement('div')
                    fifthDay.className = 'card text-white bg-primary mb-3'
                    fifthDay.style = style = 'max-width: 18rem; display: inline-block;'
                    fifthDay.innerHTML = `
          <div class="card-header">
            <h5 class="card-title">
              ${list.dt_txt}
            </h5>
         </div>
          <div class="card-body">
              <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    ${list.weather.icon}
                  </li>
                  <li class="list-group-item">
                    "Temperature":${list.temp}
                  </li>
                  <li class="list-group-item">
                    "Humidity":${list.humidity}
                  </li>
                </ul>
          </div>
        `

                    //function to clear out dayFive div
                    document.getElementById('dayFive').innerHTML = ' '
                    // function to append the fifthDay forecast into the div for dayFive
                    document.getElementById('dayFive').append(fifthDay)

                    //function to clear the input value for city in the city search bar
                    document.getElementById('searchCity').value = ' '
                  })
                  .catch(e => {
                    console.log(e)
                  })
                  .catch(e => {
                    console.log(e)
                  })
                  .catch(e => {
                    console.log(e)
                  })
                  .catch(e => {
                    console.log(e)
                  })

                  .catch(e => {
                    console.log(e)
                    alert('City not found')
                    document.getElementById('searchCity').value = ' '
                  })
              })


            document.getElementById('save').addEventListener('click', event => {
              event.preventDefault()
              localStorage.setItem('pastSearch', JSON.stringify(document.getElementById('currentCity').value))
              let getSearches = document.createElement('button')
              getSearches.className = "btn btn-text-info"
              getSearches.style = 'display:block;'
              getSearches.textContent = `${document.getElementById('searchCity').value}`
              document.getElementById('recentSearches').append(getSearches)
            })
          })
      })
  }
})