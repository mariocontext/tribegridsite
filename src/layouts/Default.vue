<template>
  <div class="layout">
    <header class="header" aria-role="banner">
      <span>Tribe Talent</span>
      <nav class="nav" aria-role="navigation">
        <ul>
          <li>
            <g-link class="nav__link" to="/">Home</g-link>
          </li>
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
    <slot />
    <footer role="contentinfo">
      <section>
        <div>Tribe logo goes here</div>
        <p>
          Tribe is the only worker owned talent platform. Bringing ownership to
          the future of work. Subscribe to get the latest updates from the
          co-op's blog.
        </p>
        <h4>Contact us</h4>
        <form
          id="subscribe-form"
          name="subscribe-form"
          data-name="Subscribe Form"
        >
          <p>
            Tribe is the only worker owned talent platform. Bringing ownership
            to the future of work. Subscribe to get the latest updates from the
            co-op's blog.
          </p>
          <input
            type="email"
            maxlength="256"
            name="subscribe-email"
            data-name="Subscribe Email"
            placeholder="Jane@email.com"
            id="subscribe-email"
            required=""
          /><input type="submit" value="Get Updates" data-wait="In the mail!" />
        </form>
        <p>
          Call:
          <a
            href="https://app.prosperworks.com/public/meeting-scheduler/The%20Staffing%20Cooperative/joseph/253546:d9f04345-3420-4d5c-823d-c50395d7022e/2019-03-13"
            >Set up a call</a
          >
        </p>
        <h3>Follow Us</h3>
        <ul>
          <li>
            <a href="https://twitter.com/TribeStaffing">Twitter</a>
          </li>
          <li>
            <a href="https://www.instagram.com/tribestaffing/">Instagram</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/tribe-staffing-coop"
              >LinkedIn</a
            >
          </li>
        </ul>
      </section>

      <section>
        <nav>
          <ul>
            <li>
              <g-link class="nav__link" to="/">Home</g-link>
            </li>
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
      </section>
      <p>© 2019 Tribe Staffing, Inc.</p>
    </footer>
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
