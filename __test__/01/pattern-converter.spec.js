/* globals describe test expect */

const { patternConverter } = require('../../src/01/pattern-converter')

describe('pattern converter', () => {
  describe('converts a 64 character string to a list of 8 bytes', () => {
    test('it throws and error if the input is not a string with 64 characters', () => {
      expect(() => patternConverter([])).toThrow(Error) // Not a string
      expect(() => patternConverter('foo')).toThrow(Error) // String, but too short
      expect(() => patternConverter('foo'.repeat(100))).toThrow(Error) // String, but too long
    })
    test('it returns a list of 8 bytes', () => {
      const output = patternConverter('◯'.repeat(64))
      expect(output).toBeInstanceOf(Array)
      expect(output).toHaveLength(8)
      output.forEach(value => {
        expect(typeof value).toEqual('number')
        expect(value).toBeGreaterThanOrEqual(0b00000000)
        expect(value).toBeLessThanOrEqual(0b11111111)
      })
    })
    test('returns a list of 0s for a blank pattern', () => {
      const input =
        '◯◯◯◯◯◯◯◯' +
        '◯◯◯◯◯◯◯◯' +
        '◯◯◯◯◯◯◯◯' +
        '◯◯◯◯◯◯◯◯' +
        '◯◯◯◯◯◯◯◯' +
        '◯◯◯◯◯◯◯◯' +
        '◯◯◯◯◯◯◯◯' +
        '◯◯◯◯◯◯◯◯'
      const output =
        [
          0b00000000,
          0b00000000,
          0b00000000,
          0b00000000,
          0b00000000,
          0b00000000,
          0b00000000,
          0b00000000
        ]
      expect(patternConverter(input)).toEqual(output)
    })

    test('returns a list of F bytes for a filled pattern', () => {
      const input =
        '●●●●●●●●' +
        '●●●●●●●●' +
        '●●●●●●●●' +
        '●●●●●●●●' +
        '●●●●●●●●' +
        '●●●●●●●●' +
        '●●●●●●●●' +
        '●●●●●●●●'
      const output =
        [
          0b11111111,
          0b11111111,
          0b11111111,
          0b11111111,
          0b11111111,
          0b11111111,
          0b11111111,
          0b11111111
        ]
      expect(patternConverter(input)).toEqual(output)
    })
    test('a non-symmetric pattern is converted', () => {
      const input =
        '●●●●●●●●' +
        '●●●●●●●●' +
        '●●◯●●◯◯●' +
        '●●◯●◯●●●' +
        '●●◯●●◯●●' +
        '●●◯●●●◯●' +
        '◯◯●●◯◯●●' +
        '●●●●●●●●'
      const output =
        [
          0b11111111,
          0b11111111,
          0b11011001,
          0b11010111,
          0b11011011,
          0b11011101,
          0b00110011,
          0b11111111
        ]
      expect(patternConverter(input)).toEqual(output)
    })
  })
})
