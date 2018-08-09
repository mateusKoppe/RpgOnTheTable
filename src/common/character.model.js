class Character {
  
  constructor (...configs) {
    this.character = {}
    this.choices = []
    this.loadConfigs(configs)
  }

  choose (choice) {
    this.choices.push(choice)
  }

  findPropertie (propertie) {
    const propertieList = []
    const objectsToCheck = []
    
    const race = this.getPropertieInList('race')
    objectsToCheck.push(race)
    if (race.subRaces) {
      objectsToCheck.push(this.getPropertieInList(race.subRaces, 'subRace'))
    }
    objectsToCheck.push(this.getPropertieInList('class'))
    objectsToCheck.push(this.getPropertieInList('background'))
    objectsToCheck.forEach(item => {
      if (item[propertie]) {
        propertieList.push(item[propertie])
      }
    })
    return propertieList
  }

  getPropertieInList (propertie) {
    if(this.character[propertie]) {
      return this.character[propertie]
    } else {
      return null
    }
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
              this.character[key] = key
              break
          }
        })
    })
  }

  addConfigFunction (key, callback) {
    if (typeof this.character[key] === "undefined") {
      this.character[key] = []
    }
    this.character[key].push(callback)
  }

  addConfigArray (key, array) {
    if (typeof this.character[key] === "undefined") {
      this.character[key] = []
    }
    this.character[key].push(array)
  }
  
  addConfigObject (key, object) {
    if (typeof this.character[key] === "undefined") {
      this.character[key] = {}
    }
    this.character[key] = {
      ...object,
      ...this.character[key]
    }
  }

}

export default Character