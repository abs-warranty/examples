require('dotenv').config()

const { cancelRegistration, createRegistration, getRegistration, listRegistrations } = require('./service')

try {
  // Switch on the command passed into yarn
  switch (process.argv[2]) {
    // Create registration
    case 'createRegistration':
      createRegistration()
      break
    case 'listRegistrations':
      // List registrations
      listRegistrations()
      break
    case 'getRegistration':
      if (!process.argv[3]) throw Error('Enter the id of the registration you would like to get')
      // Pass in the argument after the command as the id
      getRegistration(process.argv[3])
      break
    case 'cancelRegistration':
      if (!process.argv[3]) throw Error('Enter the id of the registration you would like to cancel')
      // Pass in the argument after the command as the id
      cancelRegistration(process.argv[3])
      break
    case 'man':
      // Manual
      console.log('Please select one of the following commands:')
      console.log('createRegistration, listRegistrations, getRegistrations {id}, cancelRegistrations {id}')
      console.log(
        'Refer to the documentation at: https://docs.abswarranty.net/docs/tire-protection-api/node-example-app'
      )
  }
} catch (err) {
  console.error(err)
}
