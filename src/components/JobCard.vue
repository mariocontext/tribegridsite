<template>
  <div>
    <h3><slot name="job-position">Position Title</slot></h3>
    <h4><slot name="job-company">Company Org Name</slot></h4>
    <p>
      <slot name="job-location">Location</slot
      ><slot name="job-locale">Work onsite or remote</slot>
    </p>
    <p>
      <slot name="job-posted-time">Length of time posted</slot
      ><slot name="job-contract-type">Contract or Full</slot>
    </p>
    <g-link class="nav__link" to="/join">Find More Jobs</g-link>
  </div>
</template>
