
let Blockly: any = null

console.log(Blockly)

Blockly = require('node-blockly/browser')

console.log(Blockly)

alert("Suc");
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
