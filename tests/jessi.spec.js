describe("checkIfPassword", function () {
  it("should return true if the right password is in the list", function () {
    const passwords = ["password123", "qwerty", "12345", "samantha"]
    const rightPassword = "samantha"
    expect(checkIfPassword(passwords, rightPassword)).toBe(true)
  })

  it("should return false if the right password is not in the list", function () {
    const passwords = ["password123", "qwerty", "12345", "samantha"]
    const rightPassword = "hello123"
    expect(checkIfPassword(passwords, rightPassword)).toBe(false)
  })

  it("should return false if the password list is empty", function () {
    const passwords = []
    const rightPassword = "qwerty"
    expect(checkIfPassword(passwords, rightPassword)).toBe(false)
  })
})

describe("getAllPossiblePins", function () {
  it("should return an array", function () {
    expect(Array.isArray(getAllPossiblePins())).toBe(true)
  })

  it("should return an array of 9000 elements", function () {
    expect(getAllPossiblePins().length).toEqual(9000)
  })

  it("should start with 1000", function () {
    expect(getAllPossiblePins()[0]).toEqual(1000)
  })

  it("should end with 9999", function () {
    expect(getAllPossiblePins()[8999]).toEqual(9999)
  })

  it("should not contain a PIN starting with 0", function () {
    const pins = getAllPossiblePins()
    const invalidPins = pins.filter((pin) => pin.toString().startsWith("0"))
    expect(invalidPins.length).toEqual(0)
  })
})

describe("getAllPossibleMails", function () {
  it("should return an array", function () {
    const mails = ["user1", "user2"]
    expect(Array.isArray(getAllPossibleMails(mails))).toBe(true)
  })

  it("should return an array of the same length as the input", function () {
    const mails = ["user1", "user2", "user3"]
    expect(getAllPossibleMails(mails).length).toEqual(mails.length)
  })

  it("should append @gmail.com to each mail", function () {
    const mails = ["user1", "user2"]
    const expected = ["user1@gmail.com", "user2@gmail.com"]
    expect(getAllPossibleMails(mails)).toEqual(expected)
  })

  it("should return an empty array when input is empty", function () {
    const mails = []
    expect(getAllPossibleMails(mails)).toEqual([])
  })

  it("should handle usernames with special characters correctly", function () {
    const mails = ["user.name", "user-name"]
    const expected = ["user.name@gmail.com", "user-name@gmail.com"]
    expect(getAllPossibleMails(mails)).toEqual(expected)
  })
})

describe("decryptMessage", function () {
  it("should correctly decrypt the message given the keys", function () {
    const decrypted = decryptMessage()
    expect(decrypted).toEqual("tkmS")
  })

  it("should return the right string when cipher text changes and when keys change", function () {
    const cipherText = "alolzx"
    const keys = { a: "S", l: "t", o: "i", z: "c", x: "h" }
    const decrypted = decryptMessage(cipherText, keys)
    expect(decrypted).toEqual("Stitch")
  })
})

describe("getMostCommonWord", function () {
  const mostCommonWords = [
    "jordan",
    "samantha",
    "liverpool",
    "justin",
    "loveme",
    "fuckyou",
    "123123",
    "football",
    "secret",
    "andrea",
    "carlos",
    "jennifer",
    "joshua",
    "bubbles",
    "1234567890",
    "superman",
    "hannah",
    "amanda",
    "loveyou",
    "pretty",
    "basketball",
    "andrew",
    "angels",
    "tweety",
    "flower",
    "elizabeth",
    "samantha",
    "playboy",
    "hello",
    "elizabeth",
    "hottie",
    "tinkerbell",
    "charlie",
    "samantha",
    "jennifer",
  ]

  it("should return 'samantha' as the most repeated word", function () {
    expect(getMostCommonWord()).toEqual("samantha")
  })

  it("should return the only word when there is one word in the list", function () {
    const oneWordList = ["uniqueword"]
    expect(getMostCommonWord(oneWordList)).toEqual("uniqueword")
  })

  it("should return any word when all words are equally common", function () {
    const equalWords = ["word1", "word2", "word3"]
    const result = getMostCommonWord(equalWords)
    expect(equalWords.includes(result)).toBe(true)
  })

  it("should return an empty string if the words list is empty", function () {
    const emptyList = []
    expect(getMostCommonWord(emptyList)).toEqual("")
  })

  it("should handle a list with words having the same frequency correctly", function () {
    const sameFrequencyWords = ["word", "word", "test", "test"]
    expect(getMostCommonWord(sameFrequencyWords)).toEqual("word")
  })
})

describe("getCompleteMessage", function () {
  const message =
    "Samantha, al fin cobras vida. Después de ver la película Her, llevo años soñando con tu existencia. Hoy es tu primer día sobre la Tierra. Al fin puedo estar con una IA que se adapte a todas mis necesidades."
  it("should return the message from the date 14-02-2023", function () {
    expect(getCompleteMessage()).toEqual(message)
  })

  it("should return undefined if there is no message from the date 14-02-2023", function () {
    const messagesWithoutFeb14 = [
      {
        subject: "Samantha",
        message: "Message for a different day",
        date: "13-02-2023",
      },
      {
        subject: "Samantha",
        message: "Another random message",
        date: "15-02-2023",
      },
    ]
    expect(getCompleteMessage(messagesWithoutFeb14)).toBeUndefined()
  })

  it("should return undefined if the messages array is empty", function () {
    expect(getCompleteMessage([])).toBeUndefined()
  })

  it("should return the message when only one message is present and it's from 14-02-2023", function () {
    const singleMessage = [
      {
        subject: "Samantha",
        message: "Only message, correct date",
        date: "14-02-2023",
      },
    ]
    expect(getCompleteMessage(singleMessage)).toEqual(
      "Only message, correct date"
    )
  })
})
