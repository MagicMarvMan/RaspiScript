
let foreColour: number[] = [0, 0, 255]
let backColour: number[] = [0, 0, 255]
let scrollSpeed: number = 0.1


// Set block attributes

// Block to determine the length of a string
let stringLengthJSON: any = {
  "type": "string_length",
  "message0": 'length of %1',
  "args0": [
    {
      "type": "input_value",
      "name": "VALUE",
      "check": "String"
    }
  ],
  "output": "Number",
  "colour": 160,
  "tooltip": "Returns number of letters in the provided text.",
  "helpUrl": "http://www.w3schools.com/jsref/jsref_length_string.asp"
}

// Block to set the background colour of the sense-hat
let senseBackColourJSON: any = {
  "type": "sense_set_backcolour",
  "message0": "set back colour %1 %2 %3",
  "args0": [
    {
      "type": "input_value",
      "name": "red",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "green",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "blue",
      "check": "Number"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 300,
  "tooltip": "Set background colour of sense hat",
  "helpUrl": ""
}

// Block to display a test string on the sense hat
let senseTestJSON: any = {
  "type": "sense_test",
  "message0": "test",
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 300,
  "tooltip": "Test the sense hat",
  "helpUrl": ""
}

// Block to init sense hat
let senseInitJSON: any = {
  "type": "sense_init",
  "message0": "init",
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 300,
  "tooltip": "Initialize the hat",
  "helpUrl": ""
}


// Define empty external modules
let Blockly: any = null
let senseled: any = null

// Function to init the sense hat
function sense_init(): any {
  if(!senseled) {
    senseled = require('sense-hat-led')
  }
}

console.log(Blockly)

// Import external modules; define their variable
Blockly = require('node-blockly/browser')

// Define the string_length block by it's json
Blockly.Blocks['string_length'] = {
  init: function() {
    this.jsonInit(stringLengthJSON);
  }
}

// Define the string_length block by it's json
Blockly.Blocks['sense_set_backcolour'] = {
  init: function() {
    this.jsonInit(senseBackColourJSON);
  }
}


// Init sense_test block; define it by it's JSON
Blockly.Blocks['sense_test'] = {
  init: function() {
    this.jsonInit(senseTestJSON);
  }
}

// Init sense hat block
Blockly.Blocks['sense_init'] = {
  init: function() {
    this.jsonInit(senseInitJSON);
  }
}

// Set the executor function for the sense hat set background colour block
Blockly.JavaScript['sense_set_backcolour'] = function(block: any): any {
  return ['console.log("Not yet implemented.")\n', Blockly.JavaScript.ORDER_MEMBER]
}


// Block to test the sensehat
Blockly.JavaScript['sense_test'] = function(block: any): any {
  return ['sense_init();senseled.showMessage("IT", ' + scrollSpeed + ', [' + foreColour[0] + ', ' + foreColour[1] + ', ' + foreColour[2] + '], [' + backColour[0] + ', ' + backColour[1] + ', ' + backColour[2] + '])\n', Blockly.JavaScript.ORDER_MEMBER]
}

// Block to init the sense hat
Blockly.JavaScript['sense_init'] = function(block: any): any {
  return ['sense_init()\n', Blockly.JavaScript.ORDER_MEMBER]
}

console.log(Blockly)

alert("Suc");

// Define workspaces
let workspace: any = new Blockly.Workspace()
let editor: any

editor = Blockly.inject(document.getElementById('blocklyDiv'), {
  toolbox: document.getElementById('toolbox')
})

function getCode(editor: any): string {
  let code: string = Blockly.JavaScript.workspaceToCode(editor);
  return code;
}

function runCode(editor: any): boolean {
  let code: string = getCode(editor)
  console.log(code)
  eval(code)
  return true;
}

module.exports = {
  runCode,
  getCode
}

document.getElementById('controls').innerHTML = '<button id="button_run">Run</button>';

document.getElementById("button_run").addEventListener("click", function(){
  runCode(editor);
});
