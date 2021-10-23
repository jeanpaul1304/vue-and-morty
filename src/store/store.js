import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
      episodes: [],
      characteres: [],
      selectedEpisode: ''
  },
  mutations: {
    setAllEpisodes (state, data) {
        state.episodes = data.results
    },
    addCharactersInEpisode(state, data) {
        state.characteres.push(data)
    },
    cleanCharacters(state) {
        state.characteres = []
    }
  },
  actions: {
    getAllEpisodes (store) {
        fetch('https://rickandmortyapi.com/api/episode')
            .then((res) => res.json())
            .then((responseData) => {
                console.log(responseData)
                store.commit('setAllEpisodes', responseData)
            })
    },
    getCharactersByEpisode (store, characters) {
        store.commit('cleanCharacters')
        for(let character of characters) {
            fetch(character)
            .then((res) => res.json())
            .then((responseData) => {
                console.log(responseData)
                store.commit('addCharactersInEpisode', responseData)
            })
        }
    }
  }
})

export default store