import inquirer from "inquirer"
import chalkAnimation from "chalk-animation"
import { generateSlug } from 'random-word-slugs'

inquirer.prompt([
  {
    type: "number",
    name: "length",
    message: "How long should the band name be?",
    default: 3
  },
  {
    type: "list",
    name: "animationName",
    message: "Which animation would you like to use?",
    default: "rainbow",
    choices: ["rainbow", "pulse", "glitch", "radar", "neon", "karaoke"]
  }
])
  .then((answers) => {
    const bandName = generateSlug(answers.length, { format: "title" })

    if (answers.animationName === 'pulse') {
      chalkAnimation.pulse(bandName)
    } else if (answers.animationName === 'rainbow') {
      chalkAnimation.rainbow(bandName)
    } else if (answers.animationName === 'glitch') {
      chalkAnimation.glitch(bandName)
    } else if (answers.animationName === 'radar') {
      chalkAnimation.radar(bandName)
    } else if (answers.animationName === 'neon') {
      chalkAnimation.neon(bandName)
    } else if (answers.animationName === 'karaoke') {
      chalkAnimation.karaoke(bandName)
    }

  })
  .catch(err => console.log(err))





