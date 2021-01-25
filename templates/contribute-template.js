
const ContributeTemplate = `
<template>
    <div class="ui modal">
        <i class="close icon"></i>
        <div class="ui header">
            Really appreciate your contribution!
        </div>

        <div class="ui compact segment" style="margin:3%">
            <p>If you have a solution for an unsolved problem or a solution that is faster than existing for the solved ones,
            you can post it below. </br>
            We will run the tests and give you credit for your contribution.</p>
        </div>

        <h2 class="ui sub header">
            Contact:
        </h2>

        <div class="ui right labeled input" style="margin:3%">
            <input v-model="replyToemail" type="text" placeholder="Enter email...">
            <div class="ui dropdown label">
                <div class="text">gmail.com</div>
                <i class="dropdown icon"></i>
                <div class="menu">
                    <div class="item">gmail.com</div>
                    <div class="item">yahoo.com</div>
                </div>
            </div>
        </div>


        <h2 class="ui sub header">
            Code/PseudoCode/Idea:
        </h2>

        <textarea v-model="code" style="margin:3%;height:300px;max-width:650px;"></textarea>

        <div class="actions">
            <div class="ui buttons">
                <button class="ui grey deny button">Cancel</button>
                <div class="or"></div>
                <button class="ui positive button">Submit</button>
            </div>
        </div>
    </div>
</template>
`


export { ContributeTemplate }