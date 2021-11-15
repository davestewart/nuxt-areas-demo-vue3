<template>
  <pre>page: {{ path }}</pre>
</template>

<script>
export default {
  computed: {
    path () {
      try {
        const root = this.$root.$options.__file.replace(/node_modules\/.+$/, '')
        const file = this.$parent.$options.__file
        return file.replace(root, '')
      }
      catch (err) {
        return 'Unknown'
      }
    }
  }
}
</script>
