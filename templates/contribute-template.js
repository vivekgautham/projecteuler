
const ContributeTemplate = `
<template>
    <div class="ui modal">
        <i class="close icon"></i>
        <div class="ui header">
            Really appreciate your contribution!
        </div>

        <div class="ui compact segment">
            <p>If you have a solution that is faster than existing solution, you can post it below.
            We will run the tests and give you credit for your contribution.</p>
        </div>

        <div class="ui tiny header">
            Code://
        </div>

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