#!/usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the words: "
    }
]);
const words = answer.Sentence.trim().split(" ");
console.log(words);
console.log(`Your sentence word count is ${words.length}`);
