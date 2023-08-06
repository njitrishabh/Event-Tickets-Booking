# EventTicketsBooking

This project is to create an online system to Buy and sell tickets for concerts, sports, theater, family and other events near you.

Features:
Showing all the live events happening near you
Search Event feature
User account login and saving the tickets in cart
Creating a virtual queque for users waiting to buy the tickets
Ticket Booking
Payment methods integration
SEO enabled
Share events link on social media
Multilingual website in English and French
Backend APIs using REST/GraphQL

APIs:
1. Locate events on a map
# Using both the Discovery API and Google Maps API to show events taking place at the particular longitude/latitude value pair provided by the Google Maps API.

# Given the lat/lon value pair provided by the Google Maps API, a search call is triggered in the Discovery API with that value in a radius of 25 miles, which is the default value if none is set.

# Geolocation is a standard feature in HTML5. now we have your current location in a lat/lon value pair.

# Now we make an API call to search for events within 25 miles from the latitude and longitude values we received in the step above. Other function initMap initializes Google map and shows markers for events.

2. API to Search all events by certain parameter. (event name, artists, venues, event genre, date range, country, geolocation lat/lon, all, none ) Note: any of these parameter could be entered as search keyword in the UI.

GET: url:"https://eventsmaster.com/api/search?eventName='Eras Tour'&venue='Metlife stadium'

3. API to get a particular event detail by a paramter (event id).

GET: url: "https://eventsmaster.com/api/events/{id}"

4. Purchase ticket api


Data model:

API design:

## Note:
1 event can have 1 venue, multiple artists and 1 genre.
1 artist has 1 genre.
