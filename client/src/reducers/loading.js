export default (_, action) => {
  if(action.type.includes("LOADING")) {
    console.log("LOADING")
    return true
  }
  console.log("NOT LOADING")
  return false
}