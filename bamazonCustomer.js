var inquirer = require('inquirer');

arrayofids = [0,1,2,3]


inquirer
  .prompt([
      {
        type: "list",
        name: "idCheck",
        message: "Which product (id) would you like to purchase?",
        choices: arrayofids,
        default: 0
      },
      {
        type: "number",
        name: "quantity",
        message: "How many would you like to purchase?",
        default:1
      }
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
    console.log(answers)
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });