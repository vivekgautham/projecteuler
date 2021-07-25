
import Vue from 'https://cdn.jsdelivr.net/npm/vue@latest/dist/vue.esm.browser.min.js'

import {
    ContributeTemplate
} from './templates/contribute-template.js'

function onFormSubmitted(message) {

}

function onError(message) {

}

Vue.component('contributemodal', {
    template: ContributeTemplate,

    props: {
        showcontribute: Boolean,
    },

    data() {
        return {
            code: "",
            replyToemail: "",
        }
    },

    watch: {
        showcontribute: function(val) {
            if (val) {
                this.control.modal('show');
                this.$parent.showcontribute = false;
                this.code = "";
            }
        }
    },

    mounted: function() {
      this.code = "";
      this.control = $('.ui.modal').modal({
        centered: true,
        onApprove: function(val) {
            console.log('Do Nothing')
            var data = {
                "access_token": "0qlj8ov1yeggtqb0szrg50or",
                "text": "Hi",
                "subject": "Sub"
            };

            //$.ajax({ type: 'POST', url: 'https://postmail.invotes.com/send', data: data, success: onFormSubmitted });

            $.post('https://postmail.invotes.com/send',
                data,
                onFormSubmitted
            ).fail(onError);

        },
        onDeny: function(val) {
            console.log('Do Nothing')
        },
        //onHidden : function() {}
      });
    }
  })


