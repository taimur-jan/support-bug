<template>
  <div
    id="knowledge-base-article"
  >
    <b-row>

      <!-- related question -->
      <b-col
        lg="3"
        md="5"
        order="2"
        order-md="1"
      >
        <b-card>
          <h6 class="kb-title">
            <feather-icon
              icon="InfoIcon"
              size="20"
              class="mr-50"
            />
            Related Questions
          </h6>
          <b-list-group class="list-group-circle mt-1">
            <b-list-group-item
              v-for="(que,index) in kb_question.relatedQuestions"
              :key="index"
              href="javascript:void(0)"
              class="text-body"
            >
              {{ que.question }}
            </b-list-group-item>
          </b-list-group>
        </b-card>
      </b-col>
      <!--/ related question -->

      <b-col
        lg="9"
        md="7"
        order="1"
        order-md="2"
      >
        <b-card>

          <!-- Title -->
          <b-card-title class="mb-1">
            <feather-icon
              icon="SmartphoneIcon"
              size="21"
            />

            {{ kb_question.title }}
          </b-card-title>
          <b-card-text class="mb-2">
            Last updated on {{ kb_question.lastUpdated }}
          </b-card-text>

          <!-- Content -->
          <!-- eslint-disable vue/no-v-html -->
          <div
            class="question-content"
            v-html="kb_question.content"
          />
          <!-- eslint-enable -->
        </b-card>
      </b-col>
    </b-row>

  </div>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { BRow, BCol, BCard, BListGroup, BListGroupItem, BCardText, BCardTitle } from 'bootstrap-vue'

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BListGroup,
    BCardText,
    BCardTitle,
    BListGroupItem,
  },
  data() {
    return {
      kb_question: {
    title: 'Why Was My Developer Application Rejected?',
    lastUpdated: '10 Dec 2018',
    relatedQuestions: [
      {
        id: 0,
        question: 'How Secure Is My Password?',
      },
      {
        id: 1,
        question: 'Can I Change My Username?',
      },
      {
        id: 2,
        question: 'Where Can I Upload My Avatar?',
      },
      {
        id: 3,
        question: 'How Do I Change My Timezone?',
      },
      {
        id: 4,
        question: 'How Do I Change My Password?',
      },
    ],
    // ! Here we have used require for image source but in API it shall be URL of live image, this is just for demo purpose
    content: `<p>It has been said that astronomy is a humbling and character-building experience. There is perhaps no better demonstration of the folly of human conceits than this distant image of our tiny world. To me, it underscores our responsibility to deal more kindly with one another, and to preserve and cherish the pale blue dot, the only home we’ve ever known. The Earth is a very small stage in a vast cosmic arena. Think of the rivers of blood spilled by all those generals and emperors so that, in glory and triumph, they could become the momentary masters of a fraction of a dot. Think of the endless cruelties visited by the inhabitants of one corner of this pixel on the scarcely distinguishable inhabitants of some other corner, how frequent their misunderstandings, how eager they are to kill one another, how fervent their hatreds.</p><p class="ql-align-center"><img class="img-fluid w-100" src="${require('@/assets/images/pages/kb-image.jpg')}"></p></p><h5>Houston</h5><p>that may have seemed like a very long final phase. The auto targeting was taking us right into a … crater, with a large number of big boulders and rocks … and it required … flying manually over the rock field to find a reasonably good area.</p><ul><li><a href="javascript:void(0)" rel="noopener noreferrer" >I am a stranger. I come in peace. Take me to your leader and there will be a massive reward for you in eternity.</a></li><li><a href="javascript:void(0)" rel="noopener noreferrer" >It’s just mind-blowingly awesome. I apologize, and I wish I was more articulate, but it’s hard to be articulate when your mind’s blown—but in a very good way.</a></li><li><a href="javascript:void(0)" rel="noopener noreferrer" >A good rule for rocket experimenters to follow is this</a></li></ul>`,
  },
    }
  },
}
</script>

<style lang="scss">
@import '~@resources/scss/vue/pages/page-knowledge-base.scss';
</style>
