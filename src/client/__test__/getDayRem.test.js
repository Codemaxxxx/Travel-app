const { getDayRem } = require("../scripts/getDayRem")

// date: "yyyy-mm-dd"
const present = new Date("2024-8-11")

test('give me the days remaining from the present date to the future date', () => {
  expect( getDayRem(present)).toBe(3);
})