import { ref, watch, computed } from '@vue/composition-api'
import store from '@/store'
import { title } from '@core/utils/filter'

// Notification
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default function useCasesList() {
  // Use toast
  const toast = useToast()

  const refCaseListTable = ref(null)

  // Table Handlers
  const tableColumns = [
    {
        key: 'case',
        label:'Ticket Id',
        sortable: true,
    },

    { key: 'origin', sortable: true },
    {
      key: 'currentPriority',
      label: 'Priority',
      formatter: title,
      sortable: true,
    },
    { key: 'status', sortable: true },
    { key: 'actions' },
  ]
  const perPage = ref(10)
  const totalCases = ref(0)
  const currentPage = ref(1)
  const perPageOptions = [10, 25, 50, 100]
  const searchQuery = ref('')
  const sortBy = ref('id')
  const isSortDirDesc = ref(true)
  const originFilter = ref(null)
  const priorityFilter = ref(null)
  const statusFilter = ref(null)

  const dataMeta = computed(() => {
    const localItemsCount = refCaseListTable.value ? refCaseListTable.value.localItems.length : 0
    return {
      from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
      to: perPage.value * (currentPage.value - 1) + localItemsCount,
      of: totalCases.value,
    }
  })

  const refetchData = () => {
    refCaseListTable.value.refresh()
  }

  watch([currentPage, perPage, searchQuery, originFilter, priorityFilter, statusFilter], () => {
    refetchData()
  })

  const fetchCases = (ctx, callback) => {
    store
      .dispatch('/fetchCases', {
        q: searchQuery.value,
        perPage: perPage.value,
        page: currentPage.value,
        sortBy: sortBy.value,
        sortDesc: isSortDirDesc.value,
        origin: originFilter.value,
        priority: priorityFilter.value,
        status: statusFilter.value,
      })
      .then(response => {
        const { cases, total } = response.data

        callback(cases)
        totalCases.value = total
      })
      .catch(() => {
        toast({
          component: ToastificationContent,
          props: {
            title: 'Error fetching Cases list',
            icon: 'AlertTriangleIcon',
            variant: 'danger',
          },
        })
      })
  }

  // *===============================================---*
  // *--------- UI ---------------------------------------*
  // *===============================================---*

  const resolveCaseOriginVariant = origin => {
    if (origin === 'subscriber') return 'primary'
    if (origin === 'author') return 'warning'
    if (origin === 'maintainer') return 'success'
    if (origin === 'editor') return 'info'
    if (origin === 'admin') return 'danger'
    return 'primary'
  }

  const resolveCaseOriginIcon = origin => {
    if (origin === 'subscriber') return 'UserIcon'
    if (origin === 'author') return 'SettingsIcon'
    if (origin === 'maintainer') return 'DatabaseIcon'
    if (origin === 'editor') return 'Edit2Icon'
    if (origin === 'admin') return 'ServerIcon'
    return 'UserIcon'
  }

  const resolveCaseStatusVariant = status => {
    if (status === 'pending') return 'warning'
    if (status === 'active') return 'success'
    if (status === 'inactive') return 'secondary'
    return 'primary'
  }

  return {
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

    resolveCaseOriginVariant,
    resolveCaseOriginIcon,
    resolveCaseStatusVariant,
    refetchData,

    // Extra Filters
    originFilter,
    priorityFilter,
    statusFilter,
  }
}
