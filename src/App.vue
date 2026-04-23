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
        class="p-field"
        v-model="numA"
        @keyup.enter="$event.target.form.requestSubmit()"
        pattern="^\d+([.,]\d+)?$"
        required
      />
      <select name="operator" id="operatorInput" class="p-field" v-model="operator" required>
        <option value="+" selected="selected">+</option>
        <option value="-" disabled="disabled">-</option>
        <option value="*" disabled="disabled">*</option>
        <option value="/" disabled="disabled">/</option>
      </select>
      <input
        name="numB"
        class="p-field"
        v-model="numB"
        @keyup.enter="$event.target.form.requestSubmit()"
        pattern="^\d+([.,]\d+)?$"
        required
      />
      <button type="submit" id="calcButton" class="p-btn p-prim-col">Calcular!</button>
    </form>

    <p>{{ result }}</p>

    <OperationPaginator />
  </div>
</template>
