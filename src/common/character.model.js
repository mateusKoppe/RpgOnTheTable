import data from '@/data'

class Character {
  
  constructor (data) {
    this.choices = []
    this.trees = []
    this.data = {
      ...data,
      trees: []
    }
  }

  choose (choice) {
    this.choices.push(choice)
  }

  addTree (tree) {
    this.trees.push(tree)
    this.data.trees.push(tree.key)
  }

  loadTree (tree) {
    const objectTree = tree.split('.').reduce((object, key) => {
      return object[key] 
    }, data)
    this.trees.push(objectTree)
    return objectTree
  }

  loadConfigs (configs) {
    configs.forEach(configGroup => {
      Object.keys(configGroup)
        .forEach(key => {
          const config = configGroup[key]
          switch (typeof config) {
            case 'function':
              this.addConfigFunction(key, config)
              break
            case 'object':
              if (Array.isArray(config)) {
                this.addConfigArray(key, config)
              } else {
                this.addConfigObject(key, config)
              }
              break;
            default:
              this[key] = key
              break
          }
        })
    })
  }

  addConfigFunction (key, callback) {
    if (typeof this[key] === "undefined") {
      this[key] = []
    }
    this[key].push(callback)
  }

  addConfigArray (key, array) {
    if (typeof this[key] === "undefined") {
      this[key] = []
    }
    this[key].push(array)
  }
  
  addConfigObject (key, object) {
    if (typeof this[key] === "undefined") {
      this[key] = {}
    }
    this[key] = {
      ...object,
      ...this[key]
    }
  }

}

export default Character
