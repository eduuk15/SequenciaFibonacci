<template>
  <div class="px-3 py-10 md:px-10">

    <FibonacciForm @acharTermo="arrayForm = $event" />

    <div v-if="arrayForm" class="flex justify-center">
      <div class="absolute bottom-20">
        <div class="flex justify-center text-gray-50">
        O {{ arrayForm[0]}}º termo da Sequência de Fibonacci é: {{ arrayForm[1] }}<sup>{{ arrayForm[2] }}</sup>
      </div>
      <div class="flex justify-center text-gray-50">
        {{ arrayForm [3] }}
      </div>
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
      // termo, numero, notation(not. cient.) e sequenciaFibonacci(seq. parc.)
      arrayForm: '',
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
