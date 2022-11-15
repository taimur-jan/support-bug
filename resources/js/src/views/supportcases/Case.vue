<template>
    <content-with-sidebar
      v-if="Object.keys(blogDetail).length"
      class="cws-container cws-sidebar-left blog-wrapper"
    >
    <!-- sidebar -->
    <div
        slot="sidebar"
        class="py-2 py-lg-0"
      >
        <!-- input search -->
        <b-form-group>
          <b-input-group class="input-group-merge">
            <b-form-input
              id="search-input"
              v-model="search_query"
              placeholder="Search here"
            />
            <b-input-group-append
              class="cursor-pointer"
              is-text
            >
              <feather-icon
                icon="SearchIcon"
              />
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
        <!--/ input search -->

        <!-- categories -->
        <div class="mt-3">
          <h6 class="section-label mb-1">
            Support Case Tickets
          </h6>

          <div
            v-for="category in blogSidebar.categories"
            :key="category.icon"
            class="d-flex justify-content-start align-items-center mb-75"
          >
            <b-link>
              <b-avatar
                rounded
                size="32"
                :variant="tagsColor(category.category)"
                class="mr-75"
              >
                <feather-icon
                  :icon="category.icon"
                  size="16"
                />
              </b-avatar>
            </b-link>
            <b-link>
              <div class="blog-category-title text-body">
                {{ category.category }}
              </div>
            </b-link>
          </div>
        </div>
        <!--/ categories -->
      </div>
      <!-- content -->
      <div class="blog-detail-wrapper">
        <b-row>
          <!-- blogs -->
          <b-col cols="12">
            <b-card
              :img-src="blogDetail.blog.img"
              img-top
              img-alt="Blog Detail Pic"
              :title="blogDetail.blog.title"
            >
              <b-media no-body>
                <b-media-aside
                  vertical-align="center"
                  class="mr-50"
                >
                  <b-avatar
                    href="javascript:void(0)"
                    size="24"
                    :src="blogDetail.blog.avatar"
                  />
                </b-media-aside>
                <b-media-body>
                  <small class="text-muted mr-50">by</small>
                  <small>
                    <b-link class="text-body">{{ blogDetail.blog.userFullName }}</b-link>
                  </small>
                  <span class="text-muted ml-75 mr-50">|</span>
                  <small class="text-muted">{{ blogDetail.blog.createdTime }}</small>
                </b-media-body>
              </b-media>
              <div class="my-1 py-25">
                <b-link
                  v-for="tag in blogDetail.blog.tags"
                  :key="tag"
                >
                  <b-badge
                    pill
                    class="mr-75"
                    :variant="tagsColor(tag)"
                  >
                    {{ tag }}
                  </b-badge>
                </b-link>
              </div>
              <!-- eslint-disable vue/no-v-html -->
              <div
                class="blog-content"
                v-html="blogDetail.blog.content"
              />

              <!-- user commnets -->
              <b-media
                v-for="user in blogDetail.blog.UserComment"
                :key="user.avatar"
                no-body
              >
                <b-media-aside>
                  <b-avatar
                    size="60"
                    :src="user.avatar"
                  />
                </b-media-aside>
                <b-media-body>
                  <h6 class="font-weight-bolder">
                    {{ user.fullName }}
                  </h6>
                  <b-card-text>
                    {{ user.comment }}
                  </b-card-text>
                </b-media-body>
              </b-media>
              <!-- eslint-enable -->
              <hr class="my-2">

              <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                  <div class="d-flex align-items-center mr-1">
                    <b-link class="mr-50">
                      <feather-icon
                        icon="MessageSquareIcon"
                        size="21"
                        class="text-body"
                      />
                    </b-link>
                    <b-link>
                      <div class="text-body">
                        {{ kFormatter(blogDetail.blog.comments) }}
                      </div>
                    </b-link>
                  </div>
                  <div class="d-flex align-items-center">
                    <b-link class="mr-50">
                      <feather-icon
                        size="21"
                        icon="BookmarkIcon"
                        class="text-body"
                      />
                    </b-link>
                    <b-link>
                      <div class="text-body">
                        {{ kFormatter(blogDetail.blog.bookmarked) }}
                      </div>
                    </b-link>
                  </div>
                </div>

                <!-- dropdown -->
                <div class="blog-detail-share">
                  <b-dropdown
                    variant="link"
                    toggle-class="p-0"
                    no-caret
                    right
                  >
                    <template #button-content>
                      <feather-icon
                        size="21"
                        icon="Share2Icon"
                        class="text-body"
                      />
                    </template>
                    <b-dropdown-item
                      v-for="icon in socialShareIcons"
                      :key="icon"
                      href="#"
                    >
                      <feather-icon
                        :icon="icon"
                        size="18"
                      />
                    </b-dropdown-item>
                  </b-dropdown>
                </div>
                <!--/ dropdown -->
              </div>
            </b-card>
          </b-col>
          <!--/ blogs -->

          <!-- blog comment -->
          <b-col
            id="blogComment"
            cols="12"
            class="mt-2"
          >
            <h6 class="section-label">
              Comment
            </h6>
            <b-card
              v-for="(comment,index) in blogDetail.comments"
              :key="index"
            >
              <b-media no-body>
                <b-media-aside class="mr-75">
                  <b-avatar
                    :src="comment.avatar"
                    size="38"
                  />
                </b-media-aside>
                <b-media-body>
                  <h6 class="font-weight-bolder mb-25">
                    {{ comment.userFullName }}
                  </h6>
                  <b-card-text>{{ comment.commentedAt }}</b-card-text>
                  <b-card-text>
                    {{ comment.commentText }}
                  </b-card-text>
                  <b-link>
                    <div class="d-inline-flex align-items-center">
                      <feather-icon
                        icon="CornerUpLeftIcon"
                        size="18"
                        class="mr-50"
                      />
                      <span>Reply</span>
                    </div>
                  </b-link>
                </b-media-body>
              </b-media>
            </b-card>
          </b-col>
          <!--/ blog comment -->

          <!-- Leave a Blog Comment -->
          <b-col
            cols="12"
            class="mt-2"
          >
            <h6 class="section-label">
              Leave a Comment
            </h6>
            <b-card>
              <b-form>
                <b-row>
                  <b-col sm="6">
                    <b-form-group class="mb-2">
                      <b-form-input
                        name="name"
                        placeholder="Name"
                      />
                    </b-form-group>
                  </b-col>
                  <b-col sm="6">
                    <b-form-group class="mb-2">
                      <b-form-input
                        name="email"
                        type="email"
                        placeholder="Email"
                      />
                    </b-form-group>
                  </b-col>
                  <b-col sm="6">
                    <b-form-group class="mb-2">
                      <b-form-input
                        name="website"
                        placeholder="Website"
                      />
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-form-group class="mb-2">
                      <b-form-textarea
                        name="textarea"
                        rows="4"
                        placeholder="Website"
                      />
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-form-checkbox
                      id="checkbox-1"
                      v-model="commentCheckmark"
                      name="checkbox-1"
                      class="mb-2"
                    >
                      Save my name, email, and website in this browser for the next time I comment.
                    </b-form-checkbox>
                  </b-col>
                  <b-col cols="12">
                    <b-button
                      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                      variant="primary"
                    >
                      Post Comment
                    </b-button>
                  </b-col>
                </b-row>
              </b-form>
            </b-card>
          </b-col>
          <!--/ Leave a Blog Comment -->
        </b-row>
        <!--/ blogs -->
      </div>
      <!--/ content -->
    </content-with-sidebar>
  </template>

  <script>
  import {
    BFormInput,
    BMedia,
    BAvatar,
    BMediaAside,
    BMediaBody,
    BImg,
    BLink,
    BFormGroup,
    BInputGroup,
    BInputGroupAppend,
    BCard,
    BRow,
    BCol,
    BBadge,
    BCardText,
    BDropdown,
    BDropdownItem,
    BForm,
    BFormTextarea,
    BFormCheckbox,
    BButton,
  } from 'bootstrap-vue'
  import Ripple from 'vue-ripple-directive'
  import { kFormatter } from '@core/utils/filter'
  import ContentWithSidebar from '@core/layouts/components/content-with-sidebar/ContentWithLeftSidebar.vue'

  export default {
    components: {
      BFormInput,
      BMedia,
      BAvatar,
      BMediaAside,
      BMediaBody,
      BLink,
      BCard,
      BRow,
      BCol,
      BFormGroup,
      BInputGroup,
      BInputGroupAppend,
      BImg,
      BBadge,
      BCardText,
      BDropdown,
      BForm,
      BDropdownItem,
      BFormTextarea,
      BFormCheckbox,
      BButton,
      ContentWithSidebar,
    },
    directives: {
      Ripple,
    },
    data() {
      return {
        search_query: '',
        commentCheckmark: '',
        blogDetail: {
    blog: {
      img: require('@/assets/images/banner/banner-12.jpg'),
      title: 'The Best Features Coming to iOS and Web design',
      avatar: require('@/assets/images/portrait/small/avatar-s-7.jpg'),
      userFullName: 'Ghani Pradita',
      createdTime: 'Jan 10, 2020',
      tags: ['Gaming', 'Video'],
      content:
        '<p>Before you get into the nitty-gritty of coming up with a perfect title, start with a rough draft: your working title. What is that, exactly? A lot of people confuse working titles with topics. Let\'s clear that Topics are very general and could yield several different blog posts. Think "raising healthy kids," or "kitchen storage." A writer might look at either of those topics and choose to take them in very, very different directions.A working title, on the other hand, is very specific and guides the creation of a single blog post. For example, from the topic "raising healthy kids," you could derive the following working title See how different and specific each of those is? That\'s what makes them working titles, instead of overarching topics.</p><h4>Unprecedented Challenge</h4><ul class="mb-2"><li>Preliminary thinking systems</li><li>Bandwidth efficient</li><li>Green space</li><li>Social impact</li><li>Thought partnership</li><li>Fully ethical life</li></ul>  ',
      comments: 19100,
      bookmarked: 139,
      UserComment: [
        {
          avatar: require('@/assets/images/portrait/small/avatar-s-6.jpg'),
          fullName: 'Willie Clark',
          comment:
            'Based in London, Uncode is a blog by Willie Clark. His posts explore modern design trends through photos and quotes by influential creatives and web designer around the world.',
        },
      ],
    },
    comments: [
      {
        avatar: require('@/assets/images/portrait/small/avatar-s-9.jpg'),
        userFullName: 'Chad Alexander',
        commentedAt: 'May 24, 2020',
        commentText:
          'A variation on the question technique above, the multiple-choice question great way to engage your reader.',
      },
    ],
  },
        blogSidebar: {
    categories: [
      { category: 'All', icon: 'WatchIcon' },
      { category: 'Open', icon: 'ShoppingCartIcon' },
      { category: 'Waiting for Response', icon: 'CommandIcon' },
      { category: 'Defect', icon: 'HashIcon' },
      { category: 'In Progress', icon: 'VideoIcon' },
      { category: 'Transfer', icon: 'VideoIcon' },
      { category: 'Close', icon: 'VideoIcon' },
    ],
  },

        socialShareIcons: ['GithubIcon', 'GitlabIcon', 'FacebookIcon', 'TwitterIcon', 'LinkedinIcon'],
      }
    },

    methods: {
      kFormatter,
      tagsColor(tag) {
        if (tag === 'Quote') return 'light-info'
        if (tag === 'Gaming') return 'light-danger'
        if (tag === 'Fashion') return 'light-primary'
        if (tag === 'Video') return 'light-warning'
        if (tag === 'Food') return 'light-success'
        return 'light-primary'
      },
    },
  }
  </script>

  <style lang="scss">
  @import '~@resources/scss/vue/pages/page-blog.scss';
  </style>
