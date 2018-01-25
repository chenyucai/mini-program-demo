/**
 * Array 工具类
 */

function add(array, item) {
  return array.push(item);
}

function addRange(array, items) {
  var length = items.length;

  if (length != 0) {
    for (var index = 0; index < length; index++) {
      array.push(items[index]);
    }
  }
  return array;
}

function clear(array) {
  if (array.length > 0) {
    array.splice(0, array.length);
  }
  return array;
}

function isEmpty(array) {
  if (array.length == 0)
    return true;
  else
    return false;
}

function clone(array) {
  var clonedArray = [];
  var length = array.length;

  for (var index = 0; index < length; index++) {
    clonedArray[index] = array[index];
  }

  return clonedArray;
}

function contains(array, item) {
  var index = array.indexOf(item);
  return (index >= 0);
}

function dequeue(array) {
  return array.shift();
}

function indexOf(array, item) {
  var length = array.length;

  if (length != 0) {
    for (var index = 0; index < length; index++) {
      if (array[index] == item) {
        return index;
      }
    }
  }

  return -1;
}

function insert(array, index, item) {
  return array.splice(index, 0, item);
}

function joinstr(array, str) {
  var new_arr = new Array(array.length);
  for (var i = 0; i < array.length; i++) {
    new_arr[i] = array[i] + str;
  }
  return new_arr;
}

function queue(array, item) {
  return array.push(item);
}

function remove(array, item) {
  var index = array.indexOf(item);

  if (index >= 0) {
    array.splice(index, 1);
  }
  return array;
}

function removeAt(array, index) {
  return array.splice(index, 1);
}

export default {};
