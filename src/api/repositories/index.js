export const fetchUserRepositories = function() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('resolve');
      resolve([
        {
          id: 1,
          name: 'aaaa'
        }
      ])
    }, 3000)
  })
}