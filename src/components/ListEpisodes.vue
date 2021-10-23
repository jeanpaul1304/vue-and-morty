<template>
    <v-card
    class="mx-auto pa-4 bg"
    max-width="400">
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

<style scoped>
.bg {
    background: rgb(151 215 215 / 88%) !important;
}
</style>