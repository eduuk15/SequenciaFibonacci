<template>
<div class="div">

  <div>
    <p class="text-h2">
      Sequência de Fibonacci
    </p>
     <div class="imagem_fibonacci">
              <img src="https://cdn-icons-png.flaticon.com/512/3383/3383688.png" alt="">
            </div>
  </div>

  <form @submit.stop.prevent="acharTermo">
    <input
      v-model="termo"
      placeholder="Insira o termo que deseja encontrar"
      type="number"
    >

    <button
      type="submit"
    >
      ACHAR NÚMERO
    </button>
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
