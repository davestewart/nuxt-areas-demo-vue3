<template>
  <div id="__layout">
    <Title>Nuxt Areas Demo (Vue 3)</Title>
    <GithubCorner/>
    <img src="/nuxt-areas-demo.png" alt="Nuxt Areas Logo" id="logo">
    <nav>
      <PageLink to="/" class="link-home">Home</PageLink>
      <PageLink to="/foo">Foo</PageLink>
      <PageLink to="/bar">Bar</PageLink>
      <PageLink to="/baz">Baz</PageLink>
      <PageLink to="/grouped/qux">Qux</PageLink>
      <PageLink to="/nested/quux">Quux</PageLink>
      <PageLink to="/admin">Admin</PageLink>
      <PageLink to="/fifty-one">51</PageLink>
      <PageLink v-if="$route.path !== '/'" to="../" class="link-up">Up</PageLink>
    </nav>
    <slot />
  </div>
</template>
