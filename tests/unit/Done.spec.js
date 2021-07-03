
import { shallowMount } from '@vue/test-utils'
import Done from '@/components/Done.vue'

const tasks = [{
  name: '散歩',
  status: 1
}, {
  name: '掃除',
  status: 2
}]
const wrapper = shallowMount(Done, {
  propsData: {
    tasks,
  }
})
it('statusChangeのイベント動作確認', () => {
  wrapper.findAll('.button-status').at(0).trigger('click')
  expect(wrapper.emitted('statusChange')[0][0]).toBe(1)
})
it('delのイベント動作確認', () => {
  wrapper.findAll('.button-del').at(0).trigger('click')
  expect(wrapper.emitted('del')[0][0]).toBe(1)
})

