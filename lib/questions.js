//These are the questions the user will be prompted to answer to create the logo 
const quest = [ 
    {
     type:"list",
     message:"Which Shape would you like",
     name: "shape",
     choices: ["circle", "square", "triangle"],
    },
    {
     type:"input",
     message:"What color would you like your shape",
     name:"shapeColor",
    },
    {
     type:"input",
     message:"What text would you like (Max 3 chars)",
     name:"text",
    },
    {
     type:"input",
     message:"What color would you like the text",
     name:"textColor",
    },
]
module.exports = quest