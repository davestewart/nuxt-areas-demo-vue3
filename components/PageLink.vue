<template>
  <nuxt-link :to="target" :disabled="hasTarget ? undefined : 'disabled'"><slot/></nuxt-link>
</template>

<script>
// import { resolve } from 'path-browserify'

/**
 * Rudimentary resolve function, as Nuxt doesn't let us import Path in the client
 *
 * @param   {string}  from
 * @param   {string}  to
 * @return  {string}
 */
function resolve (from = '', to = '') {
  // absolute to; just use to
  if (to.startsWith('/')) {
    return to
  }

  // strip consecutive //
  let target = (from + '/' + to)
  while (target.includes('//')) {
    target = target.replace(/\/\//g, '/')
  }

  // remove folder/../ pairs
  const rxUp = /[^/]+?\/..\//
  while (rxUp.test(target)) {
    target = target.replace(rxUp, '')
  }

  // if we still have .. left, we're above /, so stop at /
  if (target.includes('..')) {
    target = '/'
  }

  // return
  return target

  function trim (path) {
    return path === '/'
      ? path
      : path.replace(/\/$/, '')
  }
}

function trim (path) {
  return path === '/'
    ? path
    : path.replace(/\/$/, '')
}

export default {
  props: {
    to: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    target () {
      return trim(resolve(this.$route.path, this.to))
    },

    hasTarget () {
      return this.$router.resolve(this.target).matched.length
    },
  },
}
</script>
