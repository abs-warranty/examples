const axios = require('axios').default
const curlirize = require('axios-curlirize')
const { generateAuthToken } = require('./utils/generateAuthToken')
const { exampleRegistration } = require('./example-registration')

// Log http requests through `axios` as curl requests.
curlirize(axios)

/**
 * Create a registration from the example-registration.js file
 *
 * The example posts a registration to the automotive business solution tire protection api /registrations endpoint
 * For more information on creating this resource see:
 * https://docs.abswarranty.net/docs/tire-protection-api/tire-protection-api#creating-a-registration
 */
async function createRegistration() {
  // Execute web request to `POST /registrations` endpoint.
  const registration = await axios({
    method: 'POST',
    url: `${process.env.TIRE_PROTECTION_API_URI}/registrations`,
    headers: {
      // Use JWT Authorization Token as header
      Authorization: `${generateAuthToken()}`,
    },
    // Attach JSON registration as request body
    data: exampleRegistration,
  })
  console.log(registration.data)
}

/**
 * List all registrations associated with a partner id
 * For more information on getting all registrations associated with a `partner_id` see:
 * https://docs.abswarranty.net/docs/tire-protection-api/#listing-all-registrations
 */
async function listRegistrations() {
  // Execute web request to `GET /registrations` endpoint
  const registrations = await axios.get(`${process.env.TIRE_PROTECTION_API_URI}/registrations`, {
    headers: {
      // Use JWT Authorization Token as header
      Authorization: generateAuthToken(),
    },
  })
  console.log(JSON.stringify(registrations.data, null, 2))
}

/**
 * Get a registration by it's id
 * For more information on getting a registration see:
 * https://docs.abswarranty.net/docs/tire-protection-api/#get-a-registration
 */
async function getRegistration(id) {
  // Execute web request to `GET /registrations/{id}` endpoint
  const registration = await axios({
    method: 'GET',
    url: `${process.env.TIRE_PROTECTION_API_URI}/registrations/${id}`,
    headers: {
      Authorization: generateAuthToken(),
    },
  })
  console.log(registration.data)
}

/**
 * Cancel a registration by it's id
 * For more information on cancelling a registration see:
 * https://docs.abswarranty.net/docs/tire-protection-api/#cancelling-a-registration
 */
async function cancelRegistration(id) {
  // Execute web request to `PATCH /registrations/{id}` endpoint
  const cancelledRegistration = await axios({
    method: 'PATCH',
    url: `${process.env.TIRE_PROTECTION_API_URI}/registrations/${id}`,
    headers: {
      Authorization: generateAuthToken(),
    },
    data: {
      cancelledOn: new Date(),
    },
  })
  if (cancelledRegistration.status === 204) console.log('Registration cancelled successfully.')
}

module.exports = {
  createRegistration,
  listRegistrations,
  cancelRegistration,
  getRegistration,
}
