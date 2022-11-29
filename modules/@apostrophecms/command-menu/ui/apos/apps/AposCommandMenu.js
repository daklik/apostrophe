import Vue from 'Modules/@apostrophecms/ui/lib/vue';

export default function() {
  return new Vue({
    el: '#apos-command-menu',
    computed: {
      apos () {
        return window.apos;
      }
    },
    render(h) {
      return h(
        apos.commandMenu.components.the,
        {
          ref: 'commandMenu',
          props: {
            groups: apos.commandMenu.groups,
            modals: apos.commandMenu.modals
          }
        }
      );
    }
  });
}
