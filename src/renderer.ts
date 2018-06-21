
let Blockly: any = null

console.log(Blockly)

Blockly = require('node-blockly/browser')

console.log(Blockly)

alert("Suc");
let workspace: any = new Blockly.Workspace()
try {
  let editor: any = Blockly.inject(document.getElementById('blocklyDiv'), {
    toolbox: document.getElementById('toolbox')
  })
} catch(e) {
  console.log(e)
}
