<template>
  <component :is="caseData === undefined ? 'div' : 'b-card'">

    <!-- Alert: No item found -->
    <b-alert
      variant="danger"
      :show="caseData === undefined"
    >
      <h4 class="alert-heading">
        Error fetching case data
      </h4>
      <div class="alert-body">
        No case found with this case id. Check
        <b-link
          class="alert-link"
          :to="{ name: 'cases-list'}"
        >
          Case List
        </b-link>
        for other cases.
      </div>
    </b-alert>

    <b-tabs
      v-if="caseData"
      pills
    >

      <!-- Tab: Account -->
      <b-tab active>
        <template #title>
          <feather-icon
            icon="UserIcon"
            size="16"
            class="mr-0 mr-sm-50"
          />
          <span class="d-none d-sm-inline">Account</span>
        </template>
        <case-edit-tab-account
          :case-data="caseData"
          class="mt-2 pt-75"
        />
      </b-tab>

      <!-- Tab: Information -->
      <b-tab>
        <template #title>
          <feather-icon
            icon="InfoIcon"
            size="16"
            class="mr-0 mr-sm-50"
          />
          <span class="d-none d-sm-inline">Information</span>
        </template>
        <case-edit-tab-information class="mt-2 pt-75" />
      </b-tab>

      <!-- Tab: Social -->
      <b-tab>
        <template #title>
          <feather-icon
            icon="Share2Icon"
            size="16"
            class="mr-0 mr-sm-50"
          />
          <span class="d-none d-sm-inline">Social</span>
        </template>
        <case-edit-tab-social class="mt-2 pt-75" />
      </b-tab>
    </b-tabs>
  </component>
</template>

<script>
import {
  BTab, BTabs, BCard, BAlert, BLink,
} from 'bootstrap-vue'
import { ref, onUnmounted } from '@vue/composition-api'
import router from '@/router'
import store from '@/store'
import caseStoreModule from '../caseStoreModule'
import CaseEditTabAccount from './CaseEditTabAccount.vue'
import CaseEditTabInformation from './CaseEditTabInformation.vue'
import CaseEditTabSocial from './CaseEditTabSocial.vue'

export default {
  components: {
    BTab,
    BTabs,
    BCard,
    BAlert,
    BLink,

    CaseEditTabAccount,
    CaseEditTabInformation,
    CaseEditTabSocial,
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
