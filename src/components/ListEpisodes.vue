<template>
    <v-card
    class="mx-auto pa-4"
    max-width="400"
    tile>
        <h2 class="mb-4">Episodios</h2>
        <div v-for="episode in allEpisodes" :key="episode.id" class="md6">
            <a @click="listAllCharacters(episode.characters)">
                {{episode.episode}} - {{episode.name}}
            </a>
        </div>
    </v-card>
</template>

<script>
  export default {
    name: 'ListEpisodes',
    data: () => ({
    }),
    computed: {
        allEpisodes () {
            return this.$store.state.episodes
        }
    },
    methods: {
        listAllCharacters(allCharacters) {
            this.$store.dispatch('getCharactersByEpisode', allCharacters)
        }
    },
    created() {
        console.log('se ha creado el componente')
        this.$store.dispatch('getAllEpisodes');
    }
  }
</script>
