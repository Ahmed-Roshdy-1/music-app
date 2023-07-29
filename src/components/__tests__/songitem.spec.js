import SongItem from '@/components/SongItem.vue'

import { shallowMount, RouterLinkStub } from '@vue/test-utils'

describe('SongItem.vue', () => {
  test('render Song.display_name', () => {
    const song = {
      display_name: 'test'
    }
    const wrapper = shallowMount(SongItem, {
      propsData: {
        song
      },
      global: {
        components: {
          'router-link': RouterLinkStub
        }
      }
    })

    const compositionAuthpr = wrapper.find('.text-gray-500')

    expect(compositionAuthpr.text()).toBe(song.display_name)
  })
})
