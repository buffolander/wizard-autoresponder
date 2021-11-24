const { Op } = require('sequelize')

const { initDb } = require('./models/connection')
const { Affiliation } = require('./models/Affiliation')
const { User } = require('./models/User')
const { Vendor } = require('./models/Vendor')

const {
  MSG_BUSINESS_HOURS,
} = require('./constants')

initDb()

/**
 * @typedef {Object} Message
 * @property {string} phoneNumber - The customer phone number included in the message
 * @property {string} body - The message body
 */

/**
 * @param {Message} message
 * @returns {Promise<Void>}
 */
const processMessage = async (message) => {
  // TODO: Check within business hours
  // TODO: Check is not a Holiday
  // TODO: if holiday or outside of business hours, then return Publish message to outbound queue { phoneNumber, body: MSG_BUSINESS_HOURS }
  const { phoneNumber, body } = message
  // TODO: return Publish message to outbound queue { phoneNumber, body: 'Accessing account...' }
  const userQuery = User.findOne({ where: { phone_number: { [Op.eq]: phoneNumber } } })
  const vendorsQuery = Vendor.findAll()
  let queryResUserVendors
  try {
    queryResUserVendors = await Promise.all([userQuery, vendorsQuery])
  } catch (err) {
    return console.error(err)
  }
  const [user, vendors] = queryResUserVendors
  // TODO: if (!user) create and forget with error catch
  // TODO: if (!user) return Publish message to outbound queue { phoneNumber, body: 'Welcome! Please provide a vendor name' }
  // TODO: if (user && vendors) async retrieve affiliations user->vendor
  // TODO: Find keyword vendor in message body
  // TODO: if (keyword) await for affiliations promise
  // TODO: if (keyword) filter vendors affiliated with user
  // TODO: if (keyword) return Publish message to outbound queue { phoneNumber, body: 'Vendors you purchased from are: {{userVendors.map(v.name).join(', ')}}' }
  // TODO: fuzzy search find first vendor in message body
  // TODO: if (!fuzzy result) return Publish message to outbound queue { phoneNumber, body: 'Sorry, we could not find a vendor. Available vendors are {{vendors.map(v.name).join(', ')}}.' }
  // TODO: find vendor in affiliations
  // TODO: if (vendorAffiliated) return Publish message to outbound queue { phoneNumber, body: 'Welcome back to {{vendor.vendor_name}}!' }
  // TODO: return Publish message to outbound queue { phoneNumber, body: 'Welcome to {{vendor.vendor_name}}!' }
}

/**
 * @param {[Message]|Message|null} messages
 */
const handler = (messages) => {
  if (!messages) {
    console.debug('No messages to process')
    return
  }
  (!Array.isArray(messages) ? [messages] : messages).forEach(processMessage)
}
exports.handler = handler
