<template>
  <section>
    <h3>Index</h3>
    <output>
      <PageInfo/>
    </output>
    <div style="display: flex">
      <section>
        <h3>Main</h3>
        <ul>
          <li><PageLink to="/foo">Foo</PageLink></li>
          <li><PageLink to="/bar">Bar</PageLink></li>
          <li><PageLink to="/baz">Baz</PageLink></li>
        </ul>
      </section>
      <section>
        <h3>Grouped</h3>
        <ul>
          <li><PageLink to="/grouped/qux">Qux</PageLink></li>
          <li><PageLink to="/nested/quux">Quux</PageLink></li>
        </ul>
      </section>
      <section>
        <h3>External</h3>
        <ul>
          <li><PageLink to="/admin">Admin</PageLink></li>
          <li><PageLink to="/fifty-one">51</PageLink></li>
        </ul>
      </section>
    </div>
  </section>
</template>

<style>
a.link-up:before {
  content: " ";
  margin-right: .75rem;
  border-left: 1px dotted #CCC;
}
</style>

<script setup>
import { useAsyncData, useNuxtApp } from '#app'

/*
// async load
const url = 'https://jsonplaceholder.typicode.com/todos/1'

function fetchData () {
  return fetch(url).then(response => response.json())
}

// const todos = (await useAsyncData('test', fetchData)).data
let todos = null
*/

// init state
const initState = useNuxtApp().$initState
if (typeof initState === 'function') {
  await initState()
}
</script>
