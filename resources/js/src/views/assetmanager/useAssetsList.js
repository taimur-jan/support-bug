import { ref, watch, computed } from '@vue/composition-api'
import store from '@/store'
import { title } from '@core/utils/filter'

// Notification
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default function useAssetsList() {
  // Use toast
  const toast = useToast()

  const refAssetListTable = ref(null)

  // Table Handlers
  const tableColumns = [
    { key: 'asset', sortable: true },
    { key: 'email', sortable: true },
    { key: 'role', sortable: true },
    {
      key: 'currentPlan',
      label: 'Plan',
      formatter: title,
      sortable: true,
    },
    { key: 'status', sortable: true },
    { key: 'actions' },
  ]
  const perPage = ref(10)
  const totalAssets = ref(0)
  const currentPage = ref(1)
  const perPageOptions = [10, 25, 50, 100]
  const searchQuery = ref('')
  const sortBy = ref('id')
  const isSortDirDesc = ref(true)
  const roleFilter = ref(null)
  const planFilter = ref(null)
  const statusFilter = ref(null)

  const dataMeta = computed(() => {
    const localItemsCount = refAssetListTable.value ? refAssetListTable.value.localItems.length : 0
    return {
      from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
      to: perPage.value * (currentPage.value - 1) + localItemsCount,
      of: totalAssets.value,
    }
  })

  const refetchData = () => {
    refAssetListTable.value.refresh()
  }

  watch([currentPage, perPage, searchQuery, roleFilter, planFilter, statusFilter], () => {
    refetchData()
  })

  const fetchAssets = (ctx, callback) => {
    store
      .dispatch('app-asset/fetchAssets', {
        q: searchQuery.value,
        perPage: perPage.value,
        page: currentPage.value,
        sortBy: sortBy.value,
        sortDesc: isSortDirDesc.value,
        role: roleFilter.value,
        plan: planFilter.value,
        status: statusFilter.value,
      })
      .then(response => {
        const { assets, total } = response.data

        callback(assets)
        totalAssets.value = total
      })
      .catch(() => {
        toast({
          component: ToastificationContent,
          props: {
            title: 'Error fetching assets list',
            icon: 'AlertTriangleIcon',
            variant: 'danger',
          },
        })
      })
  }

  // *===============================================---*
  // *--------- UI ---------------------------------------*
  // *===============================================---*

  const resolveAssetRoleVariant = role => {
    if (role === 'subscriber') return 'primary'
    if (role === 'author') return 'warning'
    if (role === 'maintainer') return 'success'
    if (role === 'editor') return 'info'
    if (role === 'admin') return 'danger'
    return 'primary'
  }

  const resolveAssetRoleIcon = role => {
    if (role === 'subscriber') return 'UserIcon'
    if (role === 'author') return 'SettingsIcon'
    if (role === 'maintainer') return 'DatabaseIcon'
    if (role === 'editor') return 'Edit2Icon'
    if (role === 'admin') return 'ServerIcon'
    return 'UserIcon'
  }

  const resolveAssetStatusVariant = status => {
    if (status === 'pending') return 'warning'
    if (status === 'active') return 'success'
    if (status === 'inactive') return 'secondary'
    return 'primary'
  }

  return {
    fetchAssets,
    tableColumns,
    perPage,
    currentPage,
    totalAssets,
    dataMeta,
    perPageOptions,
    searchQuery,
    sortBy,
    isSortDirDesc,
    refAssetListTable,

    resolveAssetRoleVariant,
    resolveAssetRoleIcon,
    resolveAssetStatusVariant,
    refetchData,

    // Extra Filters
    roleFilter,
    planFilter,
    statusFilter,
  }
}
