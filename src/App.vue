<template>
  <v-app>
    <v-main class="bg">
      <v-container>
        <v-row no-gutters>
          <v-col
            cols="12"
            sm="6"
          >
            <ListEpisodes/>
          </v-col>
          <v-col cols="12" sm="6">
            <ListCharacters/>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import ListEpisodes from './components/ListEpisodes';
import ListCharacters from './components/ListCharacters';

export default {
  name: 'App',

  components: {
    ListEpisodes,
    ListCharacters
  },

  data: () => ({
    //
  }),
};
</script>
<style scoped>
.bg {
  background: url('https://i.pinimg.com/originals/62/40/53/624053b5cf52686164499bfd2f7e4a85.png')
}
</style>
