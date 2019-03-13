<template>
  <div class="layout">
    <header class="header">
      <span>Tribe Talent</span>
      <nav class="nav">
        <ul>
          <li>
            <g-link class="nav__link" to="/">Home</g-link></li>
          <li>
            <g-link class="nav__link" to="/about">About</g-link>
          </li>
          <li>
            <g-link class="nav__link" to="/hire">Hire</g-link>
          </li>
          <li>
            <g-link class="nav__link" to="/join">Join</g-link>
          </li>
        </ul>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style>
</style>
