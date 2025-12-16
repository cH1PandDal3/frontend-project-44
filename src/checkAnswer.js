const checkAnswer = (answer, hiddenValue, name) => {
  if (answer === hiddenValue) {
    console.log('Correct!')
    return true
  }
  console.log(
    `'${answer}' is wrong answer ;(. Correct answer was '${hiddenValue}'.`,
  )
  console.log(`Let's try again, ${name}!`)
  return false
}

export default checkAnswer
