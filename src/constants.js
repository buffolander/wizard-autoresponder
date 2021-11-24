exports.DATABASE_CNX_STR = 'sqlite::memory:'

exports.CACHE_TTL = 60 * 60 * 24 * 7 // 1 week

const BUSINESS_HOURS_WEEKDAYS = ['9am', '8pm']
exports.BUSINESS_HOURS_WEEKDAYS = BUSINESS_HOURS_WEEKDAYS
const BUSINESS_HOURS_WEEKENDS = ['11am', '5pm']
exports.BUSINESS_HOURS_WEEKENDS = BUSINESS_HOURS_WEEKENDS
exports.DEFAULT_TIMEZONE = 'America/New_York'

exports.MSG_BUSINESS_HOURS = `Hour business hours are from ${BUSINESS_HOURS_WEEKDAYS[0]} to ${BUSINESS_HOURS_WEEKDAYS[1]} on weekdays `
  + `and from ${BUSINESS_HOURS_WEEKENDS[0]} to ${BUSINESS_HOURS_WEEKENDS[1]} on weekends. `
  + 'Customer support isn\'t available on national holidays.'
