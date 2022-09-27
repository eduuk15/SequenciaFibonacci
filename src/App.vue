<template>
<div class="px-3 py-10 md:px-10">

  <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">
    <p class="flex justify-center text-violetImage font-semibold text-title">
      Sequência de Fibonacci
    </p>
    <div class="flex justify-center">
      <img class="object-contain h-48 w-96" src="https://cdn-icons-png.flaticon.com/512/3383/3383688.png" alt="">
    </div>
  </div>

  <form @submit.stop.prevent="acharTermo">

    <label
     for="search"
     class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Your Email
    </label>
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
          class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          v-model="termo"
          placeholder="Insira o termo que deseja buscar"
          required
        >
        <button
          type="submit"
          class="text-white absolute left-6 px-20 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Pesquisar
        </button>
      </div>
    </div>
  </form>

  {{ numero }}<sup>{{notation}}</sup>
</div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      termo: '',
      numero: '',
      notation: ''
    }
  },
  methods: {
    acharTermo() {
      const elementos = [];
      elementos[0] = 1;
      elementos[1] = 1;

      let i = 2;

      while (i >= 2 && i <= this.termo) {
        elementos[i] = elementos[i - 1] + elementos[i - 2];
        i++;
      }

      if (isFinite(elementos[this.termo - 1]) === false) {
        this.numero = 'Desculpe... O número é maior que 1,797693134862315.10³⁰⁸ e não pode ser interpretado! :('
        return
      }
      const strNum = elementos[this.termo - 1].toString();
      console.log(strNum);
      const strNumSemPonto = strNum.replace('.', ',');
      this.notation = strNum.split('e+')[1];
      if (this.notation) {
        this.numero = strNumSemPonto.replace(`e+${this.notation}`, '') + '.10'
      } else {
        this.numero = strNumSemPonto.replace(`e+${this.notation}`, '');
      }
      console.log(this.numero);
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
