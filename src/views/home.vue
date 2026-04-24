<script setup lang="ts">
const members = [
  { name: "hwang0611", path: "/hwang0611" },
  { name: "itleo29", path: "/itleo29" },
  { name: "jjjinsung", path: "/jjjinsung" },
  { name: "jjuny0326", path: "/jjuny0326" },
  { name: "kimjm9841", path: "/kimjm9841" },
  { name: "sangsangwoowoo", path: "/sangsangwoowoo" },
  { name: "yanh2", path: "/yanh2" },
];
</script>

<template>
  <main class="page">
    <h1>모두의 페이지</h1>
    <p>원하는 페이지로 이동하세요.</p>

    <ul class="grid">
      <li v-for="member in members" :key="member.path">
        <RouterLink class="card" :to="member.path">{{
          member.name
        }}</RouterLink>
      </li>
    </ul>
  </main>
</template>

<style scoped>
.page {
  max-width: 920px;
  margin: 0 auto;
  padding: 24px;
  text-align: center;
}

.grid {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 220px));
  justify-content: center;
  gap: 12px;
  padding: 0;
  margin: 16px 0 0;
}

.card {
  display: block;
  text-decoration: none;
  text-align: center;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  padding: 14px 12px;
  color: #1f2937;
}

.card:hover {
  background: #f7f7f7;
}
</style>
