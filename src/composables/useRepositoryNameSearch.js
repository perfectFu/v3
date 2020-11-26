import { ref, computed } from 'vue'

export default function useRepositoryNameSearch(repositories) {
  const searchQuery = ref('')
  const repositoriesMatchingSearchQuery  = computed(() => {
    return repositories.value.filter(
      rep => rep.name.includes(searchQuery.value)
    )
  })
  return {
    searchQuery,
    repositoriesMatchingSearchQuery
  }
}