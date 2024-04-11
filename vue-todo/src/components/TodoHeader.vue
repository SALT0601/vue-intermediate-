<template>
  <header>
    <h1>TODO it!</h1>
  </header>
</template>

<script>
export default {};
</script>

<!-- 싱글파일 컴포넌트, 스콥트로 하게 됐을 때 이 컴포넌트 안에서만 유효한 어떤 스타일 속성으로 변환-->
<style scoped>
h1 {
  color: #2f3b52;
  font-weight: 900;
  margin: 2.5rem 0 1.5rem;
}
</style>
