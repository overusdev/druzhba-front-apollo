export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.hook('apollo:error', (error) => {
	  console.error('APOLLO ERROR', error)
	  // Handle different error cases
	})
  })