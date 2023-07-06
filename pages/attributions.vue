<template>

<div class="row mt-4">
  <iframe style='width: 100%' id="igem-attribution-form" src="https://attributions.igem.org?team=KCL-UK&year=2023"></iframe>
</div>

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
