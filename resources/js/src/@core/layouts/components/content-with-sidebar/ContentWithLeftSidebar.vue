<template>
    <div class="cws-container cws-sidebar-left">

        <!-- Sidebar -->
      <div class="cws-sidebar">
        <slot name="sidebar" />
      </div>

      <!-- content -->
      <div class="cws-content">
        <slot />
      </div>

    </div>
  </template>

  <script>
  export default {

  }
  </script>

  <style lang="scss">
  @import '~@core/scss/base/bootstrap-extended/include';

  $cws-sidebar-width: 260px;
  $gap: 2rem;

  .cws-container {
    display: flex;
    justify-content: space-between;

    .cws-content {
      width: calc(100% - #{$cws-sidebar-width} - #{$gap});


      @media (max-width: (map-get($grid-breakpoints, lg))) {
        margin-top: $gap;
        position: static;
        width: 100%;
      }
    }

    .cws-sidebar {
      width: 260px;
      @media (max-width: (map-get($grid-breakpoints, lg))) {
        width: 100%;
      }
    }
  }
  </style>
