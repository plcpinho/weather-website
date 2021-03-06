const request = require('request')

const forecast = (latitude, longitude, callback) => {
	const url = 'https://api.darksky.net/forecast/df0c53aa552baf4db2cfe450bad5925d/' + latitude + ',' + longitude + '?units=si'

	request({ url, json: true }, (error, response) => {
		if (error) {
			callback('Unable to connect to weather service.', undefined)
		} else if (response.body.error) {
			callback('Unable to find location. Try another location.', undefined)
		} else {
			callback(undefined, response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degrees out. The high today is ' + response.body.daily.data[0].temperatureHigh + ' with a low of ' + response.body.daily.data[0].temperatureLow + '. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
		}
	})
}

module.exports = forecast