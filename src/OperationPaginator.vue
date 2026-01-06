<script setup>
import OperationStep from "./OperationStep.vue";
</script>

<template>
  <div id="paginator" class="card">
    <div id="scene">
      <OperationStep step="1" />
    </div>
    <div id="controller">1/10</div>
  </div>
</template>

<style lang="css" scoped>
#paginator {
  background: var(--card-bg);
  backdrop-filter: blur(var(--blur));
  -webkit-backdrop-filter: blur(var(--blur));

  border: 1px solid var(--border);
  border-radius: 28px;
  box-shadow:
    0 30px 60px rgba(0, 0, 0, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.4);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#scene {
  padding: 2em;
  min-width: 40vw;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#controller {
  border: 0px;
  border-top: 1px;
  border-color: lightgray;
  border-style: solid;
  border-radius: 10%;
  box-sizing: border-box;
  width: 100%;
  text-align: center;
  padding: 1em;
  margin: 0;
}
</style>
