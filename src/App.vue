<script setup>
import { ref } from "vue";
import Operators from "./Operators";
import Operation from "./Operation";

const result = ref("");
const numA = ref();
const numB = ref();
const operator = ref("+");

function startCalculation() {
  // Transforming operator into symbol
  const operatorSymbol = Operators.fromChar(operator.value);

  //Creating operation
  const operation = new Operation(numA.value, operatorSymbol, numB.value);
  result.value = operation;
}
</script>

<template>
  <div id="hero">
    <h1>Matemática básica</h1>
    <form @submit.prevent="startCalculation">
      <input
        name="numA"
        class="numberInput"
        v-model="numA"
        @keyup.enter="$event.target.form.requestSubmit()"
        pattern="^\d+([.,]\d+)?$"
        required
      />
      <select name="operator" id="operatorInput" v-model="operator" required>
        <option value="+" selected="selected">+</option>
        <option value="-" disabled="disabled">-</option>
        <option value="*" disabled="disabled">*</option>
        <option value="/" disabled="disabled">/</option>
      </select>
      <input
        name="numB"
        class="numberInput"
        v-model="numB"
        @keyup.enter="$event.target.form.requestSubmit()"
        pattern="^\d+([.,]\d+)?$"
        required
      />
      <button type="submit" id="calcButton">Calcular!</button>
    </form>

    <p>{{ result }}</p>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");

* {
  font-family: "Inter", sans-serif;
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
