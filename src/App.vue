<template>
  <div class="px-3 py-10 md:px-10">

    <FibonacciForm @acharTermo="numero = $event" />

    <div>
      {{ numero[1] }}<sup>{{ numero[2] }}</sup>
    </div>
  </div>
</template>

<script>

import FibonacciForm from './components/FibonacciForm.vue'
export default {
  name: 'App',
  data() {
    return {
      numero: '',
      notation: ''
    }
  },
  components: {
    FibonacciForm
  }
}
</script>

<style>
  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
</style>
