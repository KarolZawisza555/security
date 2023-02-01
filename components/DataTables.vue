<template lang="">
<v-table class="ma-5">
    <thead>
      <tr>
        <th class="text-left">
          Process
        </th>
        <th class="text-left">
          Points
        </th>
        <th class="text-left d-xs-none d-sm-none d-md-flex">
        Daily
        </th>
        <th class="text-left">
        MAX
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in data"
        :key="item.process"
      >
        <td :class="`font-weight-black text-${item.process} text-h6`">{{ capitalize(item.process) }}</td>
        <td :class="`font-weight-black text-${item.process} text-h6`">{{ item.points }}</td>
        <td :class="`font-weight-black text-${item.process} text-h6`">{{ item.dayLimitPoints }}</td>
        <td :class="`font-weight-black text-${item.process} text-h6`">{{ item.maxPoints }} </td>
      </tr>
    </tbody>
  </v-table>
</template>
<script>
// OPTIONS API
export default {
  name: "DataTables",
  props: { data: Object },
  methods: {
    capitalize: (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  },
}
</script>
<style>

</style>