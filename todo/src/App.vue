<template>
  <div id="app">
    <app-header />
    <item-input />
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import appHeader from '@/components/Header.vue';
import itemInput from '@/components/ItemInput.vue';

@Component({
  components: {
    appHeader,
    itemInput,
  },
})
export default class App extends Vue {

}
</script>
<style>
#app {
  padding: 100px;
}
</style>
