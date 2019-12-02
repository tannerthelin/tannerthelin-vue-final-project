<img src="src/assets/images/logo.png" width="60">
<br/>

# Closed Beta: Track the games you're playing.

This simple vue application pulls from the RAWG API to search through a list of video games. It allows the user to save the games they're currently playing, and then mark those games as complete and assign them a rating.

Link to final project: [www.closed-beta.com](http://www.closed-beta.com)

<br/>
<img src="src/assets/images/home-illustration-white.png" width="590">
<br/>

## Use conditional logic & JavaScript array methods to render large lists
On the "My Games" page, the SEARCH input field is conditionally rendered by using ```v-show``` and tying the ADD NEW button to a boolean variable. 
Link to component: [CurrentList.vue](https://github.com/tannerthelin/tannerthelin-vue-final-project/blob/master/src/components/CurrentList.vue)

```vue
<!-- The button that toggles the variable -->
<button v-on:click= "addSelected = !addSelected"> Add new </button>  

<!-- The input field, using a component called 'Autocomplete' -->
<autocomplete
    class="autocomplete-input"
    placeholder="Search for game..."
    v-show = "addSelected"
</autocomplete> 

<script>
    export default {
        data () {
            return {
                addSelected: false
            }
        }
    }
</script>
```

## Encapsulate your code as VueJS single-file components


## Work with the Vue-CLI


## Allow communication between components using props, custom events, or local store


## Present a form for user input that provides useful form validation and feedback


## Create a custom directive and use it on at least one of your components


## Use a mix of animations and transitions to enhance some aspects of your project


## Connecting to a server: Axios


## Provide at least 3 different routes using vue-router


## Manage your application's state using vuex


## Deploy your final project code according to common industry practices

