<template>
  <div class="px-3 py-10 md:px-10">

    <FibonacciForm @acharTermo="numero = $event" />

    <div v-if="numero" class="flex justify-center">
      <div class="absolute bottom-20">
        O {{ numero[0]}}º termo da Sequência de Fibonacci é: {{ numero[1] }}<sup>{{ numero[2] }}</sup>
      </div>
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
