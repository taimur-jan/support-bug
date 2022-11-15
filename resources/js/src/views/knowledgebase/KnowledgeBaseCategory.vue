<template>
  <div>
    <!-- search input -->
    <section id="kb-category-search">
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

    <div id="knowledge-base-category">
      <b-row class="match-height">
        <b-col
          v-for="(data,index) in filteredKB"
          :key="index"
          md="4"
          sm="6"
        >
          <b-card>
            <h6 class="kb-title">
              <feather-icon
                :icon="data.icon"
                size="20"
                class="mr-50"
                :class="data.iconColor"
              />{{ data.title }} ({{ data.questions.length }})
            </h6>
            <b-list-group class="list-group-circle mt-2">
              <b-list-group-item
                v-for="(que) in data.questions"
                :key="que.question"
                class="text-body"
                :to="{ name: 'knowledge-base-question', params: { category: $route.params.category, slug: que.slug } }"
              >
                {{ que.question }}
              </b-list-group-item>
            </b-list-group>
          </b-card>
        </b-col>

        <!-- no result found -->
        <b-col
          v-show="!filteredKB.length"
          cols="12"
          class="text-center"
        >
          <h4 class="mt-4">
            Search result not found!!
          </h4>
        </b-col>
        <!--/ no result found -->
      </b-row>
    </div>
  </div>
</template>

<script>
import {
  BRow,
  BCol,
  BCard,
  BListGroup,
  BListGroupItem,
  BCardBody,
  BCardText,
  BForm,
  BInputGroup,
  BInputGroupPrepend,
  BFormInput,
} from 'bootstrap-vue'

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BListGroup,
    BListGroupItem,
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
      id: 0,
      title: 'Account Settings',
      icon: 'SettingsIcon',
      iconColor: 'text-primary',
      questions: [
        {
          id: 0,
          question: 'How Secure Is My Password?',
          slug: 'how-secure-is-my-password',
        },
        {
          id: 1,
          question: 'Can I Change My Username?',
          slug: 'can-i-change-my-username',
        },
        {
          id: 2,
          question: 'Where Can I Upload My Avatar?',
          slug: 'where-can-i-upload-my-avatar',
        },
        {
          id: 3,
          question: 'How Do I Change My Timezone?',
          slug: 'how-do-i-change-my-timezone',
        },
        {
          id: 4,
          question: 'How Do I Change My Password?',
          slug: 'how-do-i-change-my-password',
        },
      ],
    },
    {
      id: 1,
      title: 'API Questions',
      icon: 'LinkIcon',
      iconColor: 'text-success',
      questions: [
        {
          id: 0,
          question: 'What Technologies Are Used?',
          slug: 'what-technologies-are-used',
        },
        {
          id: 1,
          question: 'What Are The API Limits?',
          slug: 'what-are-the-api-limits',
        },
        {
          id: 2,
          question: 'Why Was My Application Rejected?',
          slug: 'why-was-my-application-rejected?',
        },
        {
          id: 3,
          question: 'Where can I find the documentation?',
          slug: 'where-can-i-find-the-documentation',
        },
        {
          id: 4,
          question: 'How Do I Get An API Key?',
          slug: 'how-do-i-get-an-api-key?',
        },
      ],
    },
    {
      id: 2,
      title: 'Billing',
      icon: 'FileTextIcon',
      iconColor: 'text-danger',
      questions: [
        {
          id: 0,
          question: 'Can I Contact A Salés Rep?',
          slug: 'can-i-contact-a-salés-rep',
        },
        {
          id: 1,
          question: 'Do I Need To Pay VAT?',
          slug: 'do-i-needto-pay-vat',
        },
        {
          id: 2,
          question: 'Can I Get A Refund?',
          slug: 'can-i-get-a-refund',
        },
        {
          id: 3,
          question: 'Difference Annual & Monthly Billing',
          slug: 'difference-annual-monthly-billing',
        },
        {
          id: 4,
          question: 'What Happens If The Price Increases?',
          slug: 'what-happens-if-the-price-increases?',
        },
      ],
    },
    {
      id: 3,
      title: 'Copyright & Legal',
      icon: 'LockIcon',
      iconColor: 'text-warning',
      questions: [
        {
          id: 0,
          question: 'How Do I Contact Legal?',
          slug: 'how-do-i-contact-legal',
        },
        {
          id: 1,
          question: 'Where Are Your Offices Located?',
          slug: 'where-are-your-offices-located',
        },
        {
          id: 2,
          question: 'Who Owns The Copyright On Text?',
          slug: 'who-owns-the-copyright-on-text',
        },
        {
          id: 3,
          question: 'Our Content Policy',
          slug: 'our-content-policy',
        },
        {
          id: 4,
          question: 'How Do I File A DMCA?',
          slug: 'how-do-i-file-a-dmca',
        },
      ],
    },
    {
      id: 4,
      title: 'Mobile Apps',
      icon: 'SmartphoneIcon',
      iconColor: 'text-info',
      questions: [
        {
          id: 0,
          question: 'How Do I Download The Android App?',
          slug: 'how-do-i-download-the-android-app',
        },
        {
          id: 1,
          question: 'How To Download Our iPad App',
          slug: 'how-to-download-our-ipad-app',
        },
        {
          id: 2,
          question: 'Where Can I Upload My Avatar?',
          slug: 'where-can-i-upload-my-avatar',
        },
        {
          id: 3,
          question: 'Can I Use My Android Phone?',
          slug: 'can-i-use-my-android-phone',
        },
        {
          id: 4,
          question: 'Is There An iOS App?',
          slug: 'is-there-an-ios-app',
        },
      ],
    },
    {
      id: 5,
      title: 'Using KnowHow',
      icon: 'InfoIcon',
      iconColor: '',
      questions: [
        {
          id: 0,
          question: 'Customization',
          slug: 'customization',
        },
        {
          id: 1,
          question: 'Upgrading',
          slug: 'upgrading',
        },
        {
          id: 2,
          question: 'Customizing Your Theme',
          slug: 'customizing-your-theme',
        },
        {
          id: 3,
          question: 'Upgrading Your Theme',
          slug: 'upgrading-your-theme',
        },
      ],
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
          item.questions.filter(queObj => queObj.question.toLowerCase().includes(knowledgeBaseSearchQueryLower)).length,
      )
    },
  },

}
</script>

<style lang="scss">
@import '~@resources/scss/vue/pages/page-knowledge-base.scss';
</style>
