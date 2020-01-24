import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    characters: [],
    characterKey: null
  },
  getters: {
    characters (state) {
      console.log(state.characters)
      return state.characters
    },
    actualCharacter (state) {
      return state.characters[state.characterKey]
    }
  },
  mutations: {
    addCharacter (state, character) {
      let characters = [...state.characters]
      characters.push(character)
      state.characters = characters
    },
    setCharacters (state, characters) {
      console.log(characters)
      state.characters = characters
    },
    selectCharacter (state, characterKey) {
      state.characterKey = characterKey
    }
  },
  actions: {
    addCharacter ({ dispatch, state }, character) {
      const characters = [...state.characters]
      characters.push(character)
      dispatch('saveCharacters', characters)
    },
    createCharacter ({ state, dispatch }, character) {
      dispatch('addCharacter', character)
      dispatch('selectCharacter', state.characters.length - 1)
    },
    loadCharacters (context) {
      const charactersInStorage = localStorage.getItem("characters")
      if (charactersInStorage) {
        context.commit('setCharacters', JSON.parse(charactersInStorage))
      }
    },
    saveCharacters ({ commit }, characters) {
      localStorage.setItem("characters", JSON.stringify(characters))
      commit('setCharacters', characters)
    },
    selectCharacter ({ state }, characterKey) {
      localStorage.setItem("characterKey", characterKey)
      state.characterKey = characterKey
    },
    updateSelectedCharacter ({ state, dispatch }, character) {
      const characters = [...state.characters]
      characters[state.characterKey] = character
      console.log(character)
      dispatch('saveCharacters', characters)
    }
  }
})
