<script setup lang="ts">
import { onMounted, ref } from 'vue'

import { useGist } from "../hooks/src/gist/useGist";

import { useCarbon } from '../hooks/src/carbon/useCarbon';

import "../hooks/shared/shared.css";

import utils from "../hooks/utils/extend";
console.log(utils, utils.shallowAdd);


defineProps<{ msg: string }>()

const count = ref(0)


const divRef = ref();
onMounted(()=>{

  useGist("5149b8848cb05f20efbc21fa750d7d2e", divRef.value);

  useCarbon("IDlX9bZj3m1Ayx6UKz67", divRef.value);
});
// useGist("5149b8848cb05f20efbc21fa750d7d2e");
// useGist("5149b8848cb05f20efbc21fa750d7d2e", divRef.value);

// onMounted(async () => {
//   const iframe = await useGist("5149b8848cb05f20efbc21fa750d7d2e", divRef.value);
//   if (iframe !== "error") {
//     // document.body.appendChild(iframe);
//     // divRef.value.appendChild(iframe);
//     // setTimeout(() => {
//     //   document.body.appendChild(iframe);
//     // }, 3000);
//   }
// });

</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card" ref="divRef">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
    starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
