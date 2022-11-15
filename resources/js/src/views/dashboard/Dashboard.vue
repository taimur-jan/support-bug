<template>
    <section id="dashboard-analytics">
      <b-row class="match-height">
        <b-col
          lg="6"
          sm="12"
        >
          <statistic-card-with-area-chart
            v-if="data.openTickets"
            icon="UsersIcon"
            color="danger"
            :statistic="kFormatter(data.openTickets.analyticsData.tickets)"
            statistic-title="Open Tickets"
            :chart-data="data.openTickets.series"
          />
        </b-col>
        <b-col
          lg="3"
          sm="6"
        >
          <statistic-card-with-area-chart
            v-if="data.totalTickets"
            icon="UsersIcon"
            :statistic="kFormatter(data.totalTickets.analyticsData.tickets)"
            statistic-title="Total Tickets"
            :chart-data="data.totalTickets.series"
          />
        </b-col>
        <b-col
          lg="3"
          sm="6"
        >
          <statistic-card-with-area-chart
            v-if="data.closeTickets"
            icon="PackageIcon"
            color="warning"
            :statistic="kFormatter(data.closeTickets.analyticsData.tickets)"
            statistic-title="Close Tickets"
            :chart-data="data.closeTickets.series"
          />
        </b-col>
      </b-row>

      <b-row class="match-height">
        <b-col lg="6">
          <analytics-avg-sessions :data="data.avgSessions" />
        </b-col>
        <b-col lg="6">
          <analytics-support-tracker :data="data.supportTracker" />
        </b-col>
      </b-row>

      <b-row class="match-height">
        <b-col lg="4">
          <analytics-timeline :data="data.timeline" />
        </b-col>
        <b-col lg="4">
          <analytics-sales-radar-chart :data="data.salesChart" />
        </b-col>
      </b-row>

    </section>
  </template>

  <script>
  import { BRow, BCol } from 'bootstrap-vue'

  import StatisticCardWithAreaChart from '@core/components/statistics-cards/StatisticCardWithAreaChart.vue'
  import { kFormatter } from '@core/utils/filter'
  import AnalyticsAvgSessions from './DashboardAvgSessions.vue'
  import AnalyticsSupportTracker from './DashboardSupportTracker.vue'
  import AnalyticsTimeline from './DashboardTimeline.vue'
  import AnalyticsSalesRadarChart from './DashboardRadarChart.vue'

  export default {
    components: {
      BRow,
      BCol,
      AnalyticsAvgSessions,
      StatisticCardWithAreaChart,
      AnalyticsSupportTracker,
      AnalyticsTimeline,
      AnalyticsSalesRadarChart,
    },
    data() {
      return {
        data: {
  totalTickets: {
    series: [
      {
        name: 'tickets',
        data: [28, 40, 36, 52, 38, 60, 55],
      },
    ],
    analyticsData: {
      tickets: 92600,
    },
  },
  openTickets: {
    series: [
      {
        name: 'tickets',
        data: [30, 10, 40, 0 , 8, 50 , 10],
      },
    ],
    analyticsData: {
      tickets: 54200,
    },
  },
  closeTickets: {
    series: [
      {
        name: 'tickets',
        data: [10, 15, 8, 15, 7, 12, 8],
      },
    ],
    analyticsData: {
      tickets: 38400,
    },
  },
  avgSessions: {
    sessions: 2700,
    lastDays: ['Last 28 Days', 'Last Month', 'Last Year'],
    growth: '+5.2%',
    goal: 100000,
    users: 100000,
    retention: 90,
    duration: 1,
    salesBar: {
      series: [
        {
          name: 'Sessions',
          data: [75, 125, 225, 175, 125, 75, 25],
        },
      ],
    },
  },
  supportTracker: {
    title: 'Support Tracker',
    lastDays: ['Last 28 Days', 'Last Month', 'Last Year'],
    totalTicket: 163,
    newTicket: 29,
    openTicket: 63,
    responseTime: 1,
    supportTrackerRadialBar: {
      series: [83],
    },
  },
  timeline: {
    step1: {
      title: '12 Invoices have been paid',
      subtitle: 'Invoices have been paid to the company.',
      img: require('@/assets/images/icons/json.png'),
      fileName: 'data.json',
      duration: '12 min ago',
    },
    step2: {
      title: 'Client Meeting',
      subtitle: 'Project meeting with john @10:15am',
      avatar: require('@/assets/images/portrait/small/avatar-s-9.jpg'),
      avatarName: 'John Doe (Client)',
      occupation: 'CEO of Infibeam',
      duration: '45 min ago',
    },
    step3: {
      title: 'Create a new project for client',
      subtitle: 'Add files to new design folder',
      duration: '2 day ago',
      avatars: [
        { userImg: require('@/assets/images/portrait/small/avatar-s-9.jpg'), name: 'Billy Hopkins' },
        { userImg: require('@/assets/images/portrait/small/avatar-s-6.jpg'), name: 'Amy Carson' },
        { userImg: require('@/assets/images/portrait/small/avatar-s-8.jpg'), name: 'Brandon Miles' },
        { userImg: require('@/assets/images/portrait/small/avatar-s-7.jpg'), name: 'Daisy Weber' },
        { userImg: require('@/assets/images/portrait/small/avatar-s-20.jpg'), name: 'Jenny Looper' },
      ],
    },
    step4: {
      title: 'Create a new project for client',
      duration: '5 day ago',
      subtitle: 'Add files to new design folder',
    },
  },
  salesChart: {
    series: [
      {
        name: 'Sales',
        data: [90, 50, 86, 40, 100, 20],
      },
      {
        name: 'Visit',
        data: [70, 75, 70, 76, 20, 85],
      },
    ],
  },
},
      }
    },

    methods: {
      kFormatter,
    },
  }
  </script>
