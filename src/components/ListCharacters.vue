<template>
    <v-card
    class="mx-auto pa-4 bg"
    elevation="5"
    max-width="400">
        <h2>Personajes</h2>
        <v-row no-gutters>
          <v-col
            cols="12"
            sm="4"
            v-for="character in charactersByEpisode" :key="character.id"
            class="text-center mt-2"
            text-center
          >
            <v-avatar size="90">
                <img :src="character.image"/>
            </v-avatar>
            <br>
            {{character.name}}
          </v-col>
        </v-row>
    </v-card>
</template>

<script>
  export default {
    name: 'ListCharacters',
    data: () => ({
    }),
    computed: {
        charactersByEpisode() {
            return this.$store.state.characteres
        }
    }
  }
</script>
<style scoped>
.bg {
    background: rgb(159 168 218 / 80%) !important;
}
</style>