<template>
  <div class='resume-wrapper'>
      <a class='resume-download-button' :href="resumeLink">Download</a>
      <iframe class='resume' src="https://docs.google.com/document/d/e/2PACX-1vQ2rQLUhTyGuXlMTPqe1F35D_unPAp6gswOtKFNwogr8Kp7bs6SM-9wgLFNqn4giYKFnRy3k2Bv7k_V/pub?embedded=true"></iframe>
  </div>
</template>


<script>
export default {
  name: 'MyResume',
  data: () => ({
    resumeLink: "https://docs.google.com/document/d/1q-33FVkjh5DkG0LgGTEdNd-UdJnrkYmfElnjHYoTVzM/edit?usp=sharing"
  })
  
}
</script>