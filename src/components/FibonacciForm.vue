<template>
<div>
    <p class="flex justify-center text-violetImage font-semibold text-title">
      Fibonacci
    </p>
    <div class="flex justify-center">
      <img class="object-contain h-48 w-96" src="https://cdn-icons-png.flaticon.com/512/3383/3383688.png" alt="">
    </div>

  <form @submit.stop.prevent="acharTermo" class="pt-4">
    <div class="flex justify-center">
      <div class="relative">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
            aria-hidden="true"
            class="absolute w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z">
              </path>
            </svg>
        </div>
        <input
          type="number"
          id="search"
          class="text-center p-4 pl-10 w-80 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          v-model="termo"
          placeholder="Insira o termo que deseja buscar"
          requireds
        >

        <button
          type="submit"
          class="text-white absolute inset-x-20 top-20 px-6 bg-violetImage hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-2 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Pesquisar
        </button>

      </div>
    </div>
  </form>
  <p id="validacao" v-if="termo <=0" class="flex hidden justify-center text-red-500 italic">Escolha um termo positivo e maior que zero!</p>
  </div>
</template>

<script>
export default {
  name: 'FibonacciForm',
  data() {
    return {
      termo: '',
      numero: '',
    }
  },
  methods: {
    acharTermo() {
      const elementos = [];
      elementos[0] = 1;
      elementos[1] = 1;

      let i = 2;

      if (this.termo <= 0) {
        document.getElementById('validacao').style.display = "flex";
        return
      } else {
        while (i >= 2 && i <= this.termo + 2) {
          elementos[i] = elementos[i - 1] + elementos[i - 2];
          i++;
        }

        const elementosFormatados = [];
        elementos.forEach((n) => {
          let antesNotation = n.toString().split('e+')[0]
          let depoisNotation = n.toString().split('e+')[1]
          if (depoisNotation) {
            depoisNotation = `;~${depoisNotation}`
          } else {
            depoisNotation = ''
          }
          let elementoFormatado = `${parseFloat(antesNotation).toFixed(4)}${depoisNotation}`
          if (parseFloat(antesNotation) == parseInt(antesNotation)) {
            elementoFormatado = `${parseFloat(antesNotation)}${depoisNotation}`
          }
          elementosFormatados.push(elementoFormatado)
        });

        this.numero = elementosFormatados[this.termo - 1]
        console.log(this.numero);
        if (this.termo >= 1477) {
          console.log('ent');
          this.numero = 'Desculpe... O n??mero ?? maior que 1,797693134862315.10???????? e n??o pode ser interpretado! :('
        }

        const sequencia = [elementosFormatados[this.termo - 3], elementosFormatados[this.termo - 2], elementosFormatados[this.termo - 1], elementosFormatados[this.termo], elementosFormatados[this.termo + 1]]
        this.$emit('acharTermo', [this.termo, this.numero, sequencia])
        }
    }
  },
}
</script>

<style>
  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
</style>
