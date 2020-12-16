
import Vue from 'https://cdn.jsdelivr.net/npm/vue@latest/dist/vue.esm.browser.min.js'

import { Problems } from './components/problems.js'

import {
    ProblemsTemplate
} from './templates/problems-template.js'

import problemsdata from './problems.js'

new Vue({
    el: '#app',
    components: {
        'problems': Problems
    },
    template: ProblemsTemplate,
    data: {
      searchString: '',
      activeIndex: 0,
      problems: problemsdata.problems,
      filteredProblems: problemsdata.problems,
      calculating: false,
    },
    methods: {
      searchProblems(searchQuery){
        console.log(searchQuery)
        this.searchString = searchQuery
        console.log("Search Command is ", this.searchString)
        this.filteredProblems = new Array(0)
        this.problems.forEach(function(val, key){
            if (val.title.toLowerCase().indexOf(this.searchString.toLowerCase()) !=  -1){
                this.filteredProblems.push(val)
            }
        }, this)
        if (this.filteredProblems.length > 0){
            console.log("Length of search is  ", this.filteredProblems.length)
            this.activeIndex = 0
        }
        else{
            alert("No results found...Try different Search term")
            this.filteredProblems = this.problems.slice()
            this.activeIndex = 0
        }

      },
      clearSearch(){
        this.searchString = ''
        this.filteredProblems = this.problems.slice()
        this.activeIndex = 0
      },
      compute() {
        this.calculating = true
        this.filteredProblems[this.activeIndex].result = null
        console.log("Calculating Set to True")
        console.log("Computing")
        setTimeout(() => {
            let allArgs = this.filteredProblems[this.activeIndex].inputs.map(input => input.value);
            console.log(allArgs)
            this.filteredProblems[this.activeIndex].result = this.filteredProblems[this.activeIndex].function(...allArgs)
            console.log("Computation complete")
            this.calculating = false
        }, 100)
      },
      selectProblem(index){
        if (this.filteredProblems.length > 0){
            this.filteredProblems.forEach(function(val, key){
                val.active = false
            })
            this.filteredProblems[index].active = true
            this.activeIndex = index
            console.log("Index set as ", index)
            this.calculating = false
            this.filteredProblems[index].result = null
            if ("inputs" in this.filteredProblems[index]) {
                this.filteredProblems[index].inputs.forEach(function(val){
                    val.value = null
                })
            }
        }
      },
    }
  })