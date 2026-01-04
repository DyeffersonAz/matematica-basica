<script setup>
import { ref } from 'vue'

const result = ref('')
</script>

<template>
  <div id="hero">
    <h1>Matemática básica</h1>
    <form>
      <input name="numA" type="number" class="numberInput" />
      <select name="operator" id="operatorInput">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input name="numB" type="number" class="numberInput" />
      <button type="submit" id="calcButton">Calcular!</button>
    </form>

    <p>{{ result }}</p>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

* {
  font-family: 'Inter', sans-serif;
}

/* Removes arrows in Chrome, Safari, Edge, and Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Removes arrows in Firefox */
input[type='number'] {
  appearance: textfield;
  -moz-appearance: textfield;
  text-align: center; /* This will now be perfectly centered */
}

#hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

#hero form {
  display: flex;
  gap: 0.5em;
  margin-top: 3em;
}

.numberInput {
  width: 4em;
  font-size: 1.5em;
  text-align: center;
}

#operatorInput {
  font-size: 2em;
}

#calcButton {
  font-size: 1.5em;
  padding: 0.2em 0.5em;
}
</style>
