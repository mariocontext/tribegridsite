<template>
  <div>
    <h3><slot name="member-name">Name</slot></h3>
    <slot name="member-location">City, ST </slot>
    <slot name="member-role">Role</slot>
    <div>
      <ul>
        <li><slot name="member-skill-one">Skill</slot></li>
        <li><slot name="member-skill-two">Skill</slot></li>
        <li><slot name="member-skill-two">Skill</slot></li>
      </ul>
      <div><slot name="member-image">Member Image</slot></div>
      <a
        href="https://app.prosperworks.com/public/meeting-scheduler/The%20Staffing%20Cooperative/joseph/253546:d9f04345-3420-4d5c-823d-c50395d7022e"
        class="btn btn-primary"
        >Schedule a call</a
      >
    </div>
  </div>
</template>
