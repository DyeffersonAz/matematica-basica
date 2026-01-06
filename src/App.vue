<script setup>
import { ref } from "vue";
import Operators from "./Operators";
import Operation from "./Operation";
import OperationPaginator from "./OperationPaginator.vue";

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
    <h1>matemática básica</h1>
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

    <OperationPaginator />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap");

:root {
  --bg: #f5f6f7;
  --card-bg: rgba(255, 255, 255, 0.65);
  --border: rgba(0, 0, 0, 0.08);
  --text-primary: #111;
  --text-secondary: #666;
  --accent: #007aff;
  --radius: 18px;
  --blur: 20px;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: "Manrope", sans-serif;
  background: radial-gradient(at top left, rgba(255, 255, 255, 0.8), var(--bg));
  color: var(--text-primary);
}

input,
select {
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 10px 14px;
  font-size: 16px;
  outline: none;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

input:focus,
select:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.2);
}

button {
  appearance: none;
  border: none;
  outline: none;

  padding: 12px 22px;
  border-radius: 14px;
  font-weight: 500;
  color: white;
  cursor: pointer;

  background: linear-gradient(135deg, rgba(90, 170, 255, 0.9), rgba(30, 110, 255, 0.85));

  backdrop-filter: blur(10px);
  --webkit-backdrop-filter: blur(10px);

  border: 1px solid rgba(255, 255, 255, 0.35);

  box-shadow:
    0 8px 20px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.35);

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    background 0.2s ease;
}

button:hover {
  background: linear-gradient(135deg, rgba(110, 190, 255, 0.95), rgba(50, 130, 255, 0.9));
  box-shadow:
    0 12px 28px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.45);
  transform: translateY(-1px);
}

button:active {
  transform: translateY(1px);

  box-shadow:
    0 6px 14px rgba(0, 0, 0, 0.18),
    inset 0 2px 4px rgba(0, 0, 0, 0.25);
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  box-shadow: none;
}
</style>

<style scoped>
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
  cursor: pointer;
}

#calcButton {
  font-size: 1.5em;
  padding: 0.2em 0.5em;
}
</style>
