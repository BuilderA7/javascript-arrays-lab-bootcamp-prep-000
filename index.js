const app = "I don't do much."


function destructivelyAppendKitten(name) {
   
   window.kittens.push(name);
  return kittens;
}
function destructivelyPrependKitten(name){
  
  window.kittens.unshift(name);
  return kittens;
}
function destructivelyRemoveLastKitten() {
   window.kittens.pop();
  return kittens;
}
function destructivelyRemoveFirstKitten() {
   window.kittens.shift();
   return kittens;
}
function appendKitten(name) {
  window.kittens = [...kittens, window.name];
  return kittens
}
function prependKitten(name) {
  window.kittens = [window.name,...kittens];
  return kittens;
}
function removeLastKitten() {
  return window.kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten() {
  return window.kittens.slice(1);
}