const encryptPhoneNumber = require('../encryptPhone')

describe('Encrypy Phone Number', () => {
  describe.each([['888-445-3421', '***-***-3421']])(
    'double(%d)',
    (input, expected) => {
      test(`returns hashed number: ${expected}`, () => {
        expect(encryptPhoneNumber(input)).toBe(expected)
      })
    }
  )
})
