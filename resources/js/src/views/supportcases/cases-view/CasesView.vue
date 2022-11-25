<template>
  <div>

    <!-- Alert: No item found -->
    <b-alert
      variant="danger"
      :show="caseData === undefined"
    >
      <h4 class="alert-heading">
        Error fetching Case data
      </h4>
      <div class="alert-body">
        No Case found with this Case id. Check
        <b-link
          class="alert-link"
          :to="{ name: 'apps-cases-list'}"
        >
          case List
        </b-link>
        for other cases.
      </div>
    </b-alert>

    <template v-if="caseData">
      <!-- First Row -->
      <b-row>
        <b-col
          cols="12"
          xl="9"
          lg="8"
          md="7"
        >
          <case-view-case-info-card :case-data="caseData" />
        </b-col>
        <b-col
          cols="12"
          md="5"
          xl="3"
          lg="4"
        >
          <case-view-case-plan-card />
        </b-col>
      </b-row>

      <b-row>
        <b-col
          cols="12"
          lg="6"
        >
          <case-view-case-timeline-card />
        </b-col>
        <b-col
          cols="12"
          lg="6"
        >
          <case-view-case-permissions-card />
        </b-col>
      </b-row>

    </template>

  </div>
</template>

<script>
import store from '@/store'
import router from '@/router'
import { ref, onUnmounted } from '@vue/composition-api'
import {
  BRow, BCol, BAlert, BLink,
} from 'bootstrap-vue'
import caseStoreModule from '../caseStoreModule'
import CaseViewCaseInfoCard from './CaseViewCaseInfoCard.vue'
import CaseViewCasePlanCard from './CaseViewCasePlanCard.vue'
import CaseViewCaseTimelineCard from './CaseViewCaseTimelineCard.vue'
import CaseViewCasePermissionsCard from './CaseViewCasePermissionsCard.vue'

export default {
  components: {
    BRow,
    BCol,
    BAlert,
    BLink,

    // Local Components
    CaseViewCaseInfoCard,
    CaseViewCasePlanCard,
    CaseViewCaseTimelineCard,
    CaseViewCasePermissionsCard,

  },
  setup() {
    const caseData = ref(null)

    const case_APP_STORE_MODULE_NAME = 'app-case'

    // Register module
    if (!store.hasModule(case_APP_STORE_MODULE_NAME)) store.registerModule(case_APP_STORE_MODULE_NAME, caseStoreModule)

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(case_APP_STORE_MODULE_NAME)) store.unregisterModule(case_APP_STORE_MODULE_NAME)
    })

    store.dispatch('app-case/fetchCase', { id: router.currentRoute.params.id })
      .then(response => { caseData.value = response.data })
      .catch(error => {
        if (error.response.status === 404) {
          caseData.value = undefined
        }
      })

    return {
      caseData,
    }
  },
}
</script>

<style>

</style>
