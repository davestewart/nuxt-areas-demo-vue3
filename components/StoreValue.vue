<template>
  <p class="value">
    state: {{ path }} :
    <input v-if="state.value" type="number" min="0" v-model="state.value.value">
    <i v-else>None</i>
    <pre>state: {{ state }}</pre>
  </p>
</template>

<script>
import { useState } from '#app'

export default {
  props: {
    path: {
      type: String,
      default: ''
    }
  },

  computed: {
    state () {
      return useState(this.path)
    },
  },
}
</script>

<style>
.value {
  font-family: monospace;
  font-size: .7rem !important;
}

.value input {
  width: 3.5em;
}
</style>
