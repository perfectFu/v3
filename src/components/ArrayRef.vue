<template>
  <div>
    <button @click="add">add</button>
    <ul>
      <li @click="handleClick(item, index)" v-for="(item, index) in list" :key="index" :ref="setItemRef">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onBeforeUpdate, onUpdated } from 'vue'
export default {
  setup () {
    // const list = [1, 2, 3]// 非响应式
    const list = ref([1,2,3])
    let itemRefs = []
    const setItemRef = el => {
      itemRefs.push(el)
    }
    const handleClick = (item, index) => {
      console.log('item', item);
      const ref = itemRefs[index]
      ref.innerHTML = 'heihei'
    }
    const add = () => {
      list.value.push(list.value.length + 1)
      console.log(list.value);
    }

    onBeforeUpdate(() => {
      itemRefs = []
    })
    onUpdated(() => {
      console.log('11', itemRefs);
    })
    return {
      list,
      setItemRef,
      handleClick,
      add
    }
  }
}
</script>
