# 06 Server-Side APIs: Weather Dashboard

Developers are often tasked with retrieving data from another application's API and using it in the context of their own. Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. This weather dashboard was built to retrieve data from the OpenWeather API to display weather forecasts for the current day as well as a 5-day forecast. It runs in the browser and feature dynamically updated HTML and CSS and uses local storage to store any persistent data.

The following video demonstrates the overall look of the application:

![weather dashboard demo] (./assets/weather.png?raw=true "Weather Dashboard")

## User Story

```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Criteria

```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city 
and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with:
 1. the city name
 2. the date 
 3. an icon representation of weather conditions
 4. the temperature, the humidity
 5. the wind speed
 6. the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether 
the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays:
1. the date
2. an icon representation of weather conditions
3. the temperature
4. the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
```