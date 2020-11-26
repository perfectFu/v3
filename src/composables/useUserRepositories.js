import { fetchUserRepositories } from '../api/repositories'
import { ref, onMounted, watch } from 'vue'

export default function useUserRepositories(user) {
  let repositories = ref([])
  const getUserRepositories = async () => {
    repositories.value = await fetchUserRepositories(user.value)
    console.log('repositories', repositories);
  }

  // 注册onMounted钩子函数
  onMounted(getUserRepositories)
  // 注册watch侦听器
  watch(user, getUserRepositories)
  // 返回的任何内容都可以用于组件的其余部分
  return {
    repositories,
    getUserRepositories
  }
}