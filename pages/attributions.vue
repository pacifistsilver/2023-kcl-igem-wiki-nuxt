<template>
  <header class="header-content custom-shape">
    <div class="bg">
      <h1 id="title" style="text-align: center; font-weight: bold;" class="header-text">Attributions  </h1>
      <h1 id="subtitle" style="text-align: center; font-weight: bold;" class="header-text">More info coming along sooon.</h1>
    </div>
  </header>
  <main>
    <div class="container">

      <div class="row mt-4">
        <iframe style='width: 100%' id="igem-attribution-form" src="https://attributions.igem.org?team=KCL-UK&year=2023"></iframe>
      </div>
    </div>
  </main>   
</template>
<script type="text/javascript">

export default {
  name: 'MyComponent',
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
    window.addEventListener('message', function (e) {
        const {type, data} = JSON.parse(e.data);
        if (type === 'igem-attribution-form') {
          const element = document.getElementById('igem-attribution-form')
          element.style.height = data + 50 +'px'
        }
      });
  }
};
</script> 
