var obj = {
  prop: '1'
}

function updateObjectWithKeyAndValue(obj, key, value) {

  var newObj = Object.assign({}, obj, { [key]: value})

  return newObj

}

updateObjectWithKeyAndValue(obj, 'prop', 2)

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj.prop2 = 2

  return obj
}
