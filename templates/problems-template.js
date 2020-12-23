const ProblemsTemplate = `
<div id="app"  class="ui grid">
  <div class="four wide column">
    <div class="ui fluid inverted vertical menu">

      <h4 class="ui teal icon header center aligned">
        <i class="coffee icon"></i>
        Project Euler
      </h4>

      <div class="item">
        <div class="ui fluid action input">
          <input type="text" placeholder="Search..." v-model="searchString" v-on:keyup.enter="searchProblems(searchString)">
          <button class="ui icon button" v-on:click="clearSearch">
            <i class="close icon"></i>
          </button>
          <button class="ui icon button" v-on:click="searchProblems(searchString)">
            <i class="search icon"></i>
          </button>
        </div>
      </div>

      <a class="teal item" v-bind:class="{'active': problem.active}" v-for="(problem, index) in filteredProblems" v-on:click="selectProblem(index)">
        {{problem.title}}
      </a>
    </div>
  </div>

  <div class="twelve wide column">
    <div class="content">

      <h3 class="ui right aligned header">
        <a class="item" href="https://www.github.com/vivekgautham">
          <i class="github icon link icon"></i>
        </a>
        <a class="item" href="mailto:vivegau@gmail.com">
          <i class="envelope icon link icon"></i>
        </a>
        <a class="item" href="https://twitter.com/vivekgautham_s">
          <i class="twitter icon link icon"></i>
        </a>
      </h3>

      <h3 class="ui dividing header">
        {{filteredProblems[activeIndex].title}} - Problem {{filteredProblems[activeIndex].id}}
      </h3>

      <span v-html="filteredProblems[activeIndex].description"></span>

      <div v-for="q of filteredProblems[activeIndex].inputs">
          <template v-if="q.type == 'input'">
              <em v-if="q.comment"><br />{{ q.comment }}</em>
              <div class="ui right labeled input">
                <input v-model="q.value" :type="q.subtype" :placeholder="q.placeholder">
                <div class="ui basic label">
                  {{ q.label }}
                </div>
              </div>
          </template>

          <template v-if="q.type == 'largeinput'">
              <em v-if="q.comment"><br />{{ q.comment }}</em>
              <br/><br/>
              <textarea v-model="q.value" :placeholder="q.placeholder" style="height:300px"></textarea>
          </template>
      </div>

      <br/><br/>

      <button class="medium ui teal button" v-on:click="compute()" v-bind:disabled="calculating">
        Compute
      </button>

      <button class="medium ui teal button" v-on:click="computeOnWorkerAndNotify()">
        Compute in Background
      </button>

      <br/><br/>

      <template v-if="calculating">
        <div class="ui active left inline loader">
        </div>
      </template>

      <template v-if="!calculating && filteredProblems[activeIndex].result">
        <div class="ui compact segment">
          <p>
            {{filteredProblems[activeIndex].result}}
          </p>
        </div>
      </template>

      <h5 class="ui header" v-if="problemFactoids">
        Interesting Factoids
      </h5>

      <div v-if="problemFactoids" id="factoid" class="ui raised segment"  style="width:90%">
        <span v-html="currentFactoid"></span>
        <button id="factoidNext" class="ui right floated button" v-on:click="factoidNext()">
          Next
        </button>
      </div>

    </div>
  </div>

</div>
`
export { ProblemsTemplate }
/*
$("factoidNext").click(function(){
    $('.ui.raised.segment').transition('horizontal flip');
});
*/