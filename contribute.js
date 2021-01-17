
import Vue from 'https://cdn.jsdelivr.net/npm/vue@latest/dist/vue.esm.browser.min.js'

import {
    ContributeTemplate
} from './templates/contribute-template.js'

Vue.component('contributemodal', {
    template: ContributeTemplate,

    props: {
        showcontribute: Boolean,
    },

    data() {
        return {
            code: "",
        }
    },

    watch: {
        showcontribute: function(val) {
            console.log('Show COntribute Called 1')
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
        },
        onDeny: function(val) {
            console.log('Do Nothing')
        },
        //onHidden : function() {}
      });
    }
  })


