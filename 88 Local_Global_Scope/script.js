let a = "Global Scope" // Can be used anywhere

function x() {
  let b = "Function Scope" // Can be used only inside this function
}
{
  let c = "Block Scope" // Can be used inside block only
  var d = "Block Scope" // Can be used anywhere because of var
}