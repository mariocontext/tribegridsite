<template>
  <section class="tw-mt-4 tw-mb-4">
    <h2 class="tw-text-right">Find great jobs</h2>
    <p class="tw-text-right">
      Tribe is the only worker owned staffing platform. Find local and remote
      vetted talent for your team without the overhead.
    </p>
    <ul
      class="ctw-role-listing tw-flex tw-flex-col tw-flex-wrap tw-h-32 tw-justify-start tw-items-start"
    >
      <li>Web Development</li>
      <li>Software Engineering</li>
      <li>UX Design</li>
      <li>Marketing</li>
      <li>Project Management</li>
      <li>System Administration</li>
      <li>Graphic Design</li>
      <li>Quality Assurance</li>
    </ul>
    <a href="#" class="btn btn-primary tw-mx-auto tw-w-48 tw-block"
      >Find more jobs</a
    >
  </section>
</template>

<style scoped>
.ctw-role-listing li {
  @apply tw-bg-secondary tw-pr-2 tw-pl-2 tw-pt-1 tw-pb-1 tw-mt-2 tw-font-bold tw-max-w-xs tw-mr-2;
}

@media screen (min-width: 768) {
  .ctw-role-listing {
  }
}
</style>

