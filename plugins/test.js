import { defineNuxtPlugin, useAsyncData, useFetch, useState } from '#app'

const url = 'https://jsonplaceholder.typicode.com/todos/1'

function fetchData () {
  return fetch(url).then(response => response.json())
}

function initState () {
  return {
    value: 1,
    data: null,
  }
}

async function plugin (nuxt) {
  // defaults
  let data = {}

  // set state
  useState('test', initState)

  nuxt.provide('test', { value: 123 })

  // run on server only
  if (!nuxt.isHydrating) {
    // get data
    data = await fetchData()
    console.log('useFetchPluginHandler:', data)
  }

  // useState('test', () => {
  //   const state = initState()
  //   state.data = data
  // })
}

export default defineNuxtPlugin(() => {})

