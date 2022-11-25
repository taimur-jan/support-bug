<template>

  <div>

    <case-list-add-new
      :is-add-new-case-sidebar-active.sync="isAddNewCaseSidebarActive"
      :origin-options="originOptions"
      :priority-options="priorityOptions"
      @refetch-data="refetchData"
    />

    <!-- Filters -->
    <cases-list-filters
      :origin-filter.sync="originFilter"
      :priority-filter.sync="priorityFilter"
      :status-filter.sync="statusFilter"
      :origin-options="originOptions"
      :priority-options="priorityOptions"
      :status-options="statusOptions"
    />

    <!-- Table Container Card -->
    <b-card
      no-body
      class="mb-0"
    >

      <div class="m-2">

        <!-- Table Top -->
        <b-row>

          <!-- Per Page -->
          <b-col
            cols="12"
            md="6"
            class="d-flex align-items-center justify-content-start mb-1 mb-md-0"
          >
            <label>Show</label>
            <v-select
              v-model="perPage"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              :options="perPageOptions"
              :clearable="false"
              class="per-page-selector d-inline-block mx-50"
            />
            <label>entries</label>
          </b-col>

          <!-- Search -->
          <b-col
            cols="12"
            md="6"
          >
            <div class="d-flex align-items-center justify-content-end">
              <b-form-input
                v-model="searchQuery"
                class="d-inline-block mr-1"
                placeholder="Search..."
              />
              <b-button
                variant="primary"
                @click="isAddNewCaseSidebarActive = true"
              >
                <span class="text-nowrap">Add Case</span>
              </b-button>
            </div>
          </b-col>
        </b-row>

      </div>

      <b-table
        ref="refCaseListTable"
        class="position-relative"
        :items="fetchCases"
        responsive
        :fields="tableColumns"
        primary-key="id"
        :sort-by.sync="sortBy"
        show-empty
        empty-text="No matching records found"
        :sort-desc.sync="isSortDirDesc"
      >

        <!-- Column: Case -->
        <template #cell(case)="data">
          <b-media vertical-align="center">
            <template #aside>
              <b-avatar
                size="32"
                :src="data.item.avatar"
                :text="avatarText(data.item.fullName)"
                :variant="`light-${resolveCaseOriginVariant(data.item.origin)}`"
                :to="{ name: 'cases-view', params: { id: data.item.id } }"
              />
            </template>
            <b-link
              :to="{ name: 'cases-view', params: { id: data.item.id } }"
              class="font-weight-bold d-block text-nowrap"
            >
              {{ data.item.fullName }}
            </b-link>
            <small class="text-muted">@{{ data.item.casename }}</small>
          </b-media>
        </template>

        <!-- Column: origin -->
        <template #cell(origin)="data">
          <div class="text-nowrap">
            <feather-icon
              :icon="resolveCaseOriginIcon(data.item.origin)"
              size="18"
              class="mr-50"
              :class="`text-${resolveCaseOriginVariant(data.item.origin)}`"
            />
            <span class="align-text-top text-capitalize">{{ data.item.origin }}</span>
          </div>
        </template>

        <!-- Column: Status -->
        <template #cell(status)="data">
          <b-badge
            pill
            :variant="`light-${resolveCaseStatusVariant(data.item.status)}`"
            class="text-capitalize"
          >
            {{ data.item.status }}
          </b-badge>
        </template>

        <!-- Column: Actions -->
        <template #cell(actions)="data">
          <b-dropdown
            variant="link"
            no-caret
            :right="$store.state.appConfig.isRTL"
          >

            <template #button-content>
              <feather-icon
                icon="MoreVerticalIcon"
                size="16"
                class="align-middle text-body"
              />
            </template>
            <b-dropdown-item :to="{ name: 'cases-view', params: { id: data.item.id } }">
              <feather-icon icon="FileTextIcon" />
              <span class="align-middle ml-50">Details</span>
            </b-dropdown-item>

            <b-dropdown-item :to="{ name: 'cases-edit', params: { id: data.item.id } }">
              <feather-icon icon="EditIcon" />
              <span class="align-middle ml-50">Edit</span>
            </b-dropdown-item>

            <b-dropdown-item>
              <feather-icon icon="TrashIcon" />
              <span class="align-middle ml-50">Delete</span>
            </b-dropdown-item>
          </b-dropdown>
        </template>

      </b-table>
      <div class="mx-2 mb-2">
        <b-row>

          <b-col
            cols="12"
            sm="6"
            class="d-flex align-items-center justify-content-center justify-content-sm-start"
          >
            <span class="text-muted">Showing {{ dataMeta.from }} to {{ dataMeta.to }} of {{ dataMeta.of }} entries</span>
          </b-col>
          <!-- Pagination -->
          <b-col
            cols="12"
            sm="6"
            class="d-flex align-items-center justify-content-center justify-content-sm-end"
          >

            <b-pagination
              v-model="currentPage"
              :total-rows="totalCases"
              :per-page="perPage"
              first-number
              last-number
              class="mb-0 mt-1 mt-sm-0"
              prev-class="prev-item"
              next-class="next-item"
            >
              <template #prev-text>
                <feather-icon
                  icon="ChevronLeftIcon"
                  size="18"
                />
              </template>
              <template #next-text>
                <feather-icon
                  icon="ChevronRightIcon"
                  size="18"
                />
              </template>
            </b-pagination>

          </b-col>

        </b-row>
      </div>
    </b-card>
  </div>
</template>

<script>
import {
  BCard,
  BRow,
  BCol,
  BFormInput,
  BButton,
  BTable,
  BMedia,
  BAvatar,
  BLink,
  BBadge,
  BDropdown,
  BDropdownItem,
  BPagination,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import store from '@/store'
import { ref, onUnmounted } from '@vue/composition-api'
import { avatarText } from '@core/utils/filter'
import CasesListFilters from './CasesListFilters.vue'
import useCasesList from './useCasesList'
import caseStoreModule from '../caseStoreModule'
import CaseListAddNew from './CasesListAddNew.vue'

export default {
  components: {
    CasesListFilters,
    CaseListAddNew,

    BCard,
    BRow,
    BCol,
    BFormInput,
    BButton,
    BTable,
    BMedia,
    BAvatar,
    BLink,
    BBadge,
    BDropdown,
    BDropdownItem,
    BPagination,

    vSelect,
  },
  setup() {
    const case_APP_STORE_MODULE_NAME = 'app-case'

    // Register module
    if (!store.hasModule(case_APP_STORE_MODULE_NAME)) store.registerModule(case_APP_STORE_MODULE_NAME, caseStoreModule)

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(case_APP_STORE_MODULE_NAME)) store.unregisterModule(case_APP_STORE_MODULE_NAME)
    })

    const isAddNewCaseSidebarActive = ref(false)

    const originOptions = [
      { label: 'Phone', value: 'phon' },
      { label: 'Chat', value: 'chat' },
      { label: 'Email', value: 'email' },
      { label: 'Web', value: 'web' },
    ]

    const priorityOptions = [
      { label: 'Low', value: 'low' },
      { label: 'Medium', value: 'medium' },
      { label: 'High', value: 'High' },
      { label: 'Critical', value: 'critical' },
    ]

    const statusOptions = [
      { label: 'Open', value: 'open' },
      { label: 'Waiting For Response', value: 'waitingforresponse' },
      { label: 'Defect', value: 'defect' },
      { label: 'In Progress', value: 'inprogress' },
      { label: 'Transfer', value: 'transfer' },
      { label: 'Close', value: 'close' },
    ]

    const {
      fetchCases,
      tableColumns,
      perPage,
      currentPage,
      totalCases,
      dataMeta,
      perPageOptions,
      searchQuery,
      sortBy,
      isSortDirDesc,
      refCaseListTable,
      refetchData,

      // UI
      resolveCaseOriginVariant,
      resolveCaseOriginIcon,
      resolveCaseStatusVariant,

      // Extra Filters
      originFilter,
      priorityFilter,
      statusFilter,
    } = useCasesList()

    return {
      // Sidebar
      isAddNewCaseSidebarActive,

      fetchCases,
      tableColumns,
      perPage,
      currentPage,
      totalCases,
      dataMeta,
      perPageOptions,
      searchQuery,
      sortBy,
      isSortDirDesc,
      refCaseListTable,
      refetchData,

      // Filter
      avatarText,

      // UI
      resolveCaseOriginVariant,
      resolveCaseOriginIcon,
      resolveCaseStatusVariant,

      originOptions,
      priorityOptions,
      statusOptions,

      // Extra Filters
      originFilter,
      priorityFilter,
      statusFilter,
    }
  },
}
</script>

<style lang="scss" scoped>
.per-page-selector {
  width: 90px;
}
</style>

<style lang="scss">
@import '~@resources/scss/vue/libs/vue-select.scss';
</style>
