#! /usr/bin/env node
import inquirer from 'inquirer';
let userSentence = await inquirer.prompt({
    name: 'sentence',
    type: 'input',
    message: 'Enter a sentence fo words counting'
});
let words = userSentence.sentence.trim().split(" ");
console.log(words);
console.log(`your sentence has ${words.length} words.`);
