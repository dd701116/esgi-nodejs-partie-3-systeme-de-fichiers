
const fs = require('fs')
const FILE_NAME = "reponses.json"
var instance = null

function open() {
  if (!instance) {
    if (fs.existsSync(FILE_NAME)) {
      const json = fs.readFileSync(FILE_NAME)
      instance = JSON.parse(json)
    }else{
      fs.closeSync(fs.openSync(FILE_NAME, 'w'))    
      const json = fs.readFileSync(FILE_NAME)
      instance = new Array()
    }
  }else{
    return instance
  }
}

function close() {
  if (instance) {
    fs.writeFileSync(FILE_NAME, JSON.stringify(instance))
    instance = null
  } else {
    throw new Error("No instance !")
  }
}

function create(key, response) {
  if (instance) { 
    instance.push({
      key: key,
      response: response
    })
  } else {
    throw new Error("No instance !")
  }
}

function read(key) {
  if (instance) {
    return instance.find(item => item.key == key)
  } else {
    throw new Error("No instance !")
  }
}

function readAll() {
  if (instance) {
    return instance
  } else {
    throw new Error("No instance !")
  }
}

function deleteAll () {
  if (instance) {
    fs.unlinkSync(FILE_NAME)
    instance = null
  } else {
    throw new Error("No instance !")
  }
}

module.exports = {
  create,
  read,
  readAll,
  deleteAll,
  open,
  close
}

