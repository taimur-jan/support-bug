import axios from '@axios'

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    fetchcases(ctx, queryParams) {
      return new Promise((resolve, reject) => {
        axios
          .get('/apps/case/cases', { params: queryParams })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    fetchcase(ctx, { id }) {
      return new Promise((resolve, reject) => {
        axios
          .get(`/apps/case/cases/${id}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    addcase(ctx, caseData) {
      return new Promise((resolve, reject) => {
        axios
          .post('/apps/case/cases', { case: caseData })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
  },
}
