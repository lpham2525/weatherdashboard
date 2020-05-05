let searchCity;
//function to search for city when button is clicked
document.getElementById('submit').addEventListener('click', event => {
  //prevents page from refreshing when button is clicked
  event.preventDefault()
  //console logging a string to test if button is working
  console.log('hi')
  searchCity = document.getElementById('searchCity').value

  //if statement to check if something was typed into input field
  if (document.getElementById('searchCity').value.length > 1) {
    //fetch request
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=d9145c6f207a235bfd97011a950cc17f&units=imperial`)
      .then(r => r.json())
      .then(data => {
        //console logging the name of the city to see if fetch request is working 
        console.log(data)

        let latitude = data.coord.lat
        let longitude = data.coord.lon
        console.log(latitude, longitude)

        fetch(`https://api.openweathermap.org/data/2.5/uvi?appid=d9145c6f207a235bfd97011a950cc17f&lat=${data.coord.lat}&lon=${data.coord.lon}`)
          .then(r => r.json())
          .then(uvIndex => {
            console.log('uvIndex')

            fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchCity}&appid=d9145c6f207a235bfd97011a950cc17f&units=imperial`)
              .then(r => r.json())
              .then(forecast => {
                //creating a div to display current info for city 
                console.log('forecast')
                let presentDay = Date()
                let cityCurrent = document.createElement('div')
                cityCurrent.className = 'card w-75'
                cityCurrent.style = 'display: inline-block;'
                cityCurrent.innerHTML = `
              <div>
                <h5>
                  ${data.name}
                  <br>
                  ${presentDay}
                </h5>
             </div>
              <div>
                      <p>
                         <span><img src=http://openweathermap.org/img/w/${data.weather[0].icon}.png></span >
                      </p>
                      <p>
                        Temperature: ${data.main.temp}
                      </p>
                      <p>
                        Humidity:  ${data.main.humidity}
                      </p>
                      <p>
                        Windspeed: ${data.wind.speed}
                      </p>
                      <p id='' uvIndex">
                        UV Index: ${ uvIndex.value}
                      </p >
              </div >
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
              ${forecast.list[3].dt_txt}
            </h5>
             </div >
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li>
                  <span><img src=http://openweathermap.org/img/w/${forecast.list[3].weather.icon}.png></span >
                </li>
                <li>
                  Temperature: ${forecast.list[3].main.temp}
                </li>
                <li>
                  Humidity: ${forecast.list[3].main.humidity}
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
              ${forecast.list[11].dt_txt}
            </h5>
             </div >
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li>
                  <span><img src=http://openweathermap.org/img/w/${forecast.list[11].weather.icon}.png></span >
                </li>
                <li>
                  Temperature: ${forecast.list[11].main.temp}
                </li>
                <li>
                  Humidity: ${forecast.list[11].main.humidity}
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
              ${forecast.list[19].dt_txt}
            </h5>
             </div >
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li>
                  <span><img src=http://openweathermap.org/img/w/${forecast.list[19].weather.icon}.png></span >
                </li>
                <li>
                  Temperature: ${forecast.list[19].main.temp}
                </li>
                <li>
                Humidity: ${forecast.list[19].main.humidity}
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
              ${forecast.list[27].dt_txt}
            </h5>
             </div >
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li>
                  <span><img src=http://openweathermap.org/img/w/${forecast.list[27].weather.icon}.png></span >
                </li>
                <li>
                  Temperature: ${forecast.list[27].main.temp}
                </li>
                <li>
                  Humidity: ${forecast.list[27].main.humidity}
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
                fifthDay.style = style = 'max-width: 50rem; display: inline-block;'
                fifthDay.innerHTML = `
                <div class="card-header">
            <h5 class="card-title">
              ${forecast.list[35].dt_txt}
            </h5>
             </div >
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li>
                  <span><img src=http://openweathermap.org/img/w/${forecast.list[35].weather.icon}.png></span >
                </li>
                <li>
                  Temperature: ${forecast.list[35].main.temp}
                </li>
                <li>
                  Humidity: ${forecast.list[35].main.humidity}
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


  }
})
document.getElementById('save').addEventListener('click', () => {
  if (searchCity.length > 0) {
    let pastSearches = JSON.parse(localStorage.getItem("pastSearches"))
    if (pastSearches) {
      pastSearches.push(searchCity)
    } else {
      pastSearches = [searchCity]
    }
    localStorage.setItem('pastSearches', JSON.stringify(pastSearches))

    let getSearches = document.createElement('button')
    getSearches.className = "btn btn-text-info"
    getSearches.style = 'display:block;'
    getSearches.textContent = `${document.getElementById('searchCity').value}`
    document.getElementById('recentSearches').appendChild(getSearches)
  }
})