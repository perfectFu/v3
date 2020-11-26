<template>
  <div>
    UserRepositories:{{repositories}}
    <repositories-filters/>
    <repositories-list/>
    <repositories-sort-by/>
  </div>
</template>
<script>
import RepositoriesFilters from './RepositoriesFilters.vue';
import RepositoriesList from './RepositoriesList.vue';
import RepositoriesSortBy from './RepositoriesSortBy.vue';
import { toRefs } from 'vue'
import useRepositoryNameSearch from '../composables/useRepositoryNameSearch'
import useUserRepositories from '../composables/useUserRepositories'
export default {
  components: {
    RepositoriesFilters,
    RepositoriesList,
    RepositoriesSortBy
  },
  props: {
    user: {
      type: String
    }
  },
  setup(props) {
    console.log(props);
    // 使用 `toRefs` 创建对prop的 `user` property 的响应式引用
    const { user } = toRefs(props)
    console.log('user', user);

    const { repositories, getUserRepositories } = useUserRepositories(user)
    const { searchQuery, repositoriesMatchingSearchQuery } = useRepositoryNameSearch(repositories)
    return {
      repositories: repositoriesMatchingSearchQuery,
      getUserRepositories,
      searchQuery,
      repositoriesMatchingSearchQuery
    }
  },
  // data() {
  //   return {
  //     filters: {},
  //     searchQuery: ''
  //   }
  // },
  computed: {
    filteredRepositories () {  }, // 3
    repositoriesMatchingSearchQuery () {  }, // 2
  },
  // watch: {
  //   user: 'getUserRepositories' // 1
  // },
  methods: {
    updateFilters () {  }, // 3
  },
  // mounted () {
  //   this.getUserRepositories() // 1
  // }
}
</script>
