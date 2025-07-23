<script setup lang="ts">
const { joke, pending, error, refresh } = useChuckNorrisJoke()
</script>

<template>
  <div class="max-w-2xl mx-auto">
    <div class="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h2 class="text-2xl font-bold text-gray-800 mb-4 text-center">
        Chuck Norris Joke
      </h2>
      
      <div v-if="pending" class="text-center py-8">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto" />
        <p class="mt-2 text-gray-600">Loading a Chuck Norris fact...</p>
      </div>
      
      <div v-else-if="error" class="text-center py-8">
        <div class="text-red-600 mb-4">
          <svg class="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
          </svg>
        </div>
        <p class="text-gray-600 mb-4">Oops! Something went wrong loading the joke.</p>
        <button 
          class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors"
          @click="refresh()"
        >
          Try Again
        </button>
      </div>
      
      <div v-else-if="joke" class="text-center">
        <div class="mb-6">
          <img 
            :src="joke.icon_url" 
            alt="Chuck Norris" 
            class="w-20 h-20 mx-auto rounded-full border-4 border-red-600"
          >
        </div>
        
        <blockquote class="text-lg text-gray-700 italic mb-6 leading-relaxed">
          "{{ joke.value }}"
        </blockquote>
        
        <div class="flex justify-center space-x-4">
          <button 
            class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded transition-colors"
            @click="refresh()"
          >
            Get Another Joke
          </button>
          
          <a 
            :href="joke.url" 
            target="_blank" 
            rel="noopener noreferrer"
            class="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded transition-colors"
          >
            View Original
          </a>
        </div>
        
        <div class="mt-4 text-sm text-gray-500">
          <p>Created: {{ new Date(joke.created_at).toLocaleDateString() }}</p>
          <p v-if="joke.categories.length > 0">
            Categories: {{ joke.categories.join(', ') }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
