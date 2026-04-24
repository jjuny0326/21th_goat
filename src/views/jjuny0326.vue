<template>
  <main class="page">
    <div class="profile-card">
      <div class="profile-header">
        <h1>👋 jjuny0326 페이지</h1>
        <p class="subtitle">Backend & Full-stack Developer</p>
      </div>
      
      <div class="profile-content">
        <p>
         <h1>반갑습니다. 이준영입니다.</h1>
          <p>MBTI : INTJ</p>
          <p>오늘 저녁 : 햄버거</p>
          <p>혈액형 : O형</p>
        </p>
        <div class="tech-stack">
          <span class="badge vue">운동</span>
          <span class="badge spring">숨쉬기</span>
          <span class="badge python">잠자기</span>
          <span class="badge java">세종이 노래듣기</span>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
/* 1. 패딩으로 인해 스크롤바가 생기는 것을 방지 */
* {
  box-sizing: border-box;
}

/* 2. 페이지 전체를 꽉 채우고 정중앙 정렬 */
.page {
  width: 100%;        /*100vw에서 100%로 변경! */
  min-height: 100vh;  /*높이도 100vh 대신 min-height로 주면 더 안전합니다. */
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  background-color: #f8f9fa;
  margin: 0;
  padding: 24px;
}

/* 3. 프로필 카드 스타일 */
.profile-card {
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  padding: 40px;
  max-width: 500px;
  width: 100%;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.profile-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
}

h1 {
  color: #2c3e50;
  margin-bottom: 8px;
  font-size: 2rem;
  font-weight: 800;
}

.subtitle {
  color: #42b883;
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 24px;
}

.profile-content p {
  color: #555;
  line-height: 1.6;
  margin-bottom: 30px;
  word-break: keep-all;
}

.tech-stack {
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
}

.badge {
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}

.badge.vue { background-color: #e8f5e9; color: #2e7d32; }
.badge.spring { background-color: #e1f5fe; color: #0277bd; }
.badge.python { background-color: #fff8e1; color: #f57f17; }
.badge.java { background-color: #fce4ec; color: #c2185b; }
</style>