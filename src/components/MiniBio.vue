<template>
  <div
    class="member-profile-container tw-bg-neutral tw-rounded tw-p-4 tw-shadow-lg tw-mt-4 tw-mb-4"
  >
    <div class="tw-flex tw-flex-row tw-justify-between tw-items-center tw-mb-2">
      <span class="tw-text-lg tw-font-bold tw-pl-4"
        ><slot name="member-name">Name</slot></span
      >
      <span
        ><font-awesome :icon="['fab', 'instagram']" /><slot
          name="member-location"
          >City, ST</slot
        ></span
      >
    </div>
    <div>
      <div class="ctw-skilllist tw-relative tw-mt-4 tw--ml-2">
        <div class="tw-absolute tw-flex tw-flex-col tw-items-start">
          <span>
            <slot name="member-skill-one">Skill</slot>
          </span>
          <span><slot name="member-skill-two">Skill</slot></span>
          <span><slot name="member-skill-three">Skill</slot></span>
        </div>
      </div>
      <div class="tw-text-center">
        <slot name="member-image">Member Image</slot>
      </div>
      <a
        href="https://app.prosperworks.com/public/meeting-scheduler/The%20Staffing%20Cooperative/joseph/253546:d9f04345-3420-4d5c-823d-c50395d7022e"
        class="ctw-cta tw-absolute btn btn-primary"
        >Schedule a call</a
      >
    </div>
  </div>
</template>

<style scoped>
/* TODO: figure out how to not have the items take up the entire area */
.ctw-skilllist div > span {
  @apply tw-bg-secondary tw-pr-2 tw-pl-2 tw-pt-1 tw-pb-1 tw-mt-2 tw-font-bold;
}
.member-profile-container {
  width: 298px;
  height: 210px;
}
.ctw-cta {
  position: relative;
  top: -40px;
  left: 80px;
}
</style>

