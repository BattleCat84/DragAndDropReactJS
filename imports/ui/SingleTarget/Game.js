let imagePosition = "left";
let observer = null;

function emitChange() {
  observer(imagePosition);
}

export function observe(o){
  if(observer){
    throw new Error('Multiple observers not implemented.');
  }

  observer = o;
  emitChange();
}

//metodos para el Drop de la clase padre
export function moveImage(toPosition) {
  imagePosition = toPosition;
  emitChange();
}

export function canMoveImage(toPosition) {
  if(toPosition != imagePosition) return true;
  return false;
}
