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
     message:"What text would you like",
     name:"logoText",
    },
    {
     type:"input",
     message:"What color would you lie the text",
     name:"textColor",
    },
]
module.exports = quest