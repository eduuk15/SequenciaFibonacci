<template>
  <div class="px-3 py-10 md:px-10">

    <FibonacciForm @acharTermo="arrayForm = $event" />

    <div class="sticky">
    <div v-if="arrayForm" class="flex justify-center">
      <div v-if="arrayForm[0] < 1477" class="absolute inset-x-20 top-20 px-6 ">
        <div class="flex justify-center text-gray-50">
          O {{ arrayForm[0]}}º termo da Sequência de Fibonacci é: {{ formataElemento(arrayForm[1]) }}<sup>{{ potencia }}</sup>
        </div>
        <div v-if="arrayForm[0] == 1" class="flex mt-10 justify-center text-gray-50">
          {{montaSequencia(arrayForm[2])}}
          {
          1,
          1,
          2,
          ...}
        </div>
        <div v-if="arrayForm[0] == 2" class="flex mt-10 justify-center text-gray-50">
          {{montaSequencia(arrayForm[2])}}
          {
          1,
          1,
          2,
          3,
          ...}
        </div>
        <div v-if="arrayForm[0] == 3" class="flex mt-10 justify-center text-gray-50">
          {{montaSequencia(arrayForm[2])}}
          {
          1,
          1,
          2,
          3,
          5,
          ...}
        </div>
        <div v-if="arrayForm[0] > 3 && arrayForm[0] < 1475" class="flex mt-10 justify-center text-gray-50">
          {{montaSequencia(arrayForm[2])}}
          {...,
          {{ sequenciaFibonacci[0] }}<sup>{{ potencias[0] }}</sup>,
          {{ sequenciaFibonacci[1] }}<sup>{{ potencias[1] }}</sup>,
          {{ sequenciaFibonacci[2] }}<sup>{{ potencias[2] }}</sup>,
          {{ sequenciaFibonacci[3] }}<sup>{{ potencias[3] }}</sup>,
          {{ sequenciaFibonacci[4] }}<sup>{{ potencias[4] }}</sup>,
          ...}
        </div>
        <div v-if="arrayForm[0] == 1475" class="flex mt-10 justify-center text-gray-50">
          {{montaSequencia(arrayForm[2])}}
          {...,
          {{ sequenciaFibonacci[0] }}<sup>{{ potencias[0] }}</sup>,
          {{ sequenciaFibonacci[1] }}<sup>{{ potencias[1] }}</sup>,
          {{ sequenciaFibonacci[2] }}<sup>{{ potencias[2] }}</sup>,
          {{ sequenciaFibonacci[3] }}<sup>{{ potencias[3] }}</sup>,
          ...}
        </div>
        <div v-if="arrayForm[0] == 1476" class="flex mt-10 justify-center text-gray-50">
          {{montaSequencia(arrayForm[2])}}
          {...,
          {{ sequenciaFibonacci[0] }}<sup>{{ potencias[0] }}</sup>,
          {{ sequenciaFibonacci[1] }}<sup>{{ potencias[1] }}</sup>,
          {{ sequenciaFibonacci[2] }}<sup>{{ potencias[2] }}</sup>,
          ...}
        </div>
      </div>
      <div v-else class="text-white absolute inset-x-20 top-20 px-6 ">
        <div class="flex justify-center text-gray-50">
          {{ arrayForm[1] }}
        </div>
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
      // termo, numero, sequenciaFibonacci(seq. parc.)
      arrayForm: '',
      sequenciaFibonacci: [],
      potencia: '',
      potencias: []
    }
  },
  components: {
    FibonacciForm
  },
  methods: {
    formataElementos(element) {
      if (element != undefined) {
        this.potencias.push(element.split('~')[1]);
        this.sequenciaFibonacci.push((element.split('~')[0]).replace('.', ',').replace(';', '.10'))
      } else {
        this.potencias.push('')
        this.sequenciaFibonacci.push('')
      }
    },
    formataElemento(element) {
      if (element != 1) {
        this.potencia = element.split('~')[1];
        return (element.split('~')[0]).replace('.', ',').replace(';', '.10')
      } else {
        this.potencia = ''
        return 1
      }
    },
    montaSequencia(array) {
      array.forEach(this.formataElementos)
      setTimeout(() => {
        this.potencias = []
        this.sequenciaFibonacci = []
      }, 50)
    },
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
