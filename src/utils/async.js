import { defineAsyncComponent } from 'vue'

import Error from '../components/Error.vue';
import Loading from '../components/Loading.vue';

// 不带选项的异步组件
const AsyncPage = defineAsyncComponent(() => import('../components/NextPage.vue'))

// 待选项的异步组件
const AsyncPageWithOption = defineAsyncComponent({
  loader: () => import('../components/NextPage.vue'),
  delay: 200,
  timeout: 3000,
  errorComponent: Error,
  loadingComponent: Loading
})

export {
  AsyncPage,
  AsyncPageWithOption
}
