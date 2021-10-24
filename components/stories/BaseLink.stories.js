import Baselink from '../ui/Baselink.vue'

export default {
  title: 'BaseLink',
  component: Baselink
}

export const MyWebsite = () => ({
  components: { Baselink },
  template: '<Baselink />'
})
