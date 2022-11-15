<template>
  <div>
    <!-- search input -->
    <section id="knowledge-base-search">
      <b-card
        no-body
        class="knowledge-base-bg text-center"
        :style="{backgroundImage: `url(${require('@/assets/images/banner/banner.png')})`}"
      >
        <b-card-body class="card-body">
          <h2 class="text-primary">
            Dedicated Source Used on Website
          </h2>
          <b-card-text class="mb-2">
            <span>Popular searches: </span>
            <span class="font-weight-bolder">Sales automation, Email marketing</span>
          </b-card-text>

          <!-- form -->
          <b-form class="kb-search-input">
            <b-input-group class="input-group-merge">
              <b-input-group-prepend is-text>
                <feather-icon icon="SearchIcon" />
              </b-input-group-prepend>
              <b-form-input
                id="searchbar"
                v-model="knowledgeBaseSearchQuery"
                placeholder="Ask a question...."
              />
            </b-input-group>
          </b-form>
          <!-- form -->
        </b-card-body>
      </b-card>
    </section>
    <!--/ search input -->

    <section id="knowledge-base-content">

      <!-- content -->
      <b-row class="kb-search-content-info match-height">
        <b-col
          v-for="item in filteredKB"
          :key="item.id"
          md="4"
          sm="6"
          class="kb-search-content"
        >
          <b-card
            class="text-center cursor-pointer"
            :img-src="item.img"
            :img-alt="item.img.slice(5)"
            img-top
            @click="$router.push({ name: 'knowledge-base-category', params: { category: item.category } })"
          >
            <h4>{{ item.title }}</h4>
            <b-card-text class="mt-1">
              {{ item.desc }}
            </b-card-text>
          </b-card>
        </b-col>
        <b-col
          v-show="!filteredKB.length"
          cols="12"
          class="text-center"
        >
          <h4 class="mt-4">
            Search result not found!!
          </h4>
        </b-col>
      </b-row>
    </section>
  </div>
</template>

<script>
import {
  BRow,
  BCol,
  BCard,
  BCardBody,
  BForm,
  BInputGroup,
  BFormInput,
  BCardText,
  BInputGroupPrepend,
} from 'bootstrap-vue'

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BCardBody,
    BCardText,
    BForm,
    BInputGroup,
    BInputGroupPrepend,
    BFormInput,
  },
  data() {
    return {
      knowledgeBaseSearchQuery: '',
      kb: [
    {
      id: 1,
      category: 'sales-automation',
      img: require('@/assets/images/illustration/sales.svg'),
      title: 'Sales Automation',
      desc: 'There is perhaps no better demonstration of the folly of image of our tiny world.',
    },
    {
      id: 2,
      category: 'marketing-automation',
      img: require('@/assets/images/illustration/marketing.svg'),
      title: 'Marketing Automation',
      desc: 'Look again at that dot. That’s here. That’s home. That’s us. On it everyone you love.',
    },
    {
      id: 3,
      category: 'api-questions',
      img: require('@/assets/images/illustration/api.svg'),
      title: 'API Questions',
      desc: 'every hero and coward, every creator and destroyer of civilization.',
    },
    {
      id: 4,
      category: 'personalization',
      img: require('@/assets/images/illustration/personalization.svg'),
      title: 'Personalization',
      desc: 'It has been said that astronomy is a humbling and character experience.',
    },
    {
      id: 5,
      category: 'email-marketing',
      img: require('@/assets/images/illustration/email.svg'),
      title: 'Email Marketing',
      desc: 'There is perhaps no better demonstration of the folly of human conceits.',
    },
    {
      id: 6,
      category: 'demand-generation',
      img: require('@/assets/images/illustration/demand.svg'),
      title: 'Demand Generation',
      desc: 'Competent means we will never take anything for granted.',
    },
  ],
    }
  },
  computed: {
    filteredKB() {
      const knowledgeBaseSearchQueryLower = this.knowledgeBaseSearchQuery.toLowerCase()
      return this.kb.filter(
        item =>
          // eslint-disable-next-line implicit-arrow-linebreak, operator-linebreak
          item.title.toLowerCase().includes(knowledgeBaseSearchQueryLower) ||
          item.desc.toLowerCase().includes(knowledgeBaseSearchQueryLower),
      )
    },
  },
}
</script>

<style lang="scss">
@import '~@resources/scss/vue/pages/page-knowledge-base.scss';
</style>
