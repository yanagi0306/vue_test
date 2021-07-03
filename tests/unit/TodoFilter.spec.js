import TodoFilter from '@/components/TodoFilter.vue'
import { shallowMount } from '@vue/test-utils'

const wrapper = shallowMount(TodoFilter)


test('クリックイベントチェック All', () => {
  wrapper.find('#All').trigger('click')
  expect(wrapper.emitted('change')[0][0]).toBe('All')
})

test('クリックイベントチェック Working', () => {
  wrapper.find('#Working').trigger('click')
  expect(wrapper.emitted('change')[1][0]).toBe('Working')
})

test('クリックイベントチェック Done', () => {
  wrapper.find('#Done').trigger('click')
  expect(wrapper.emitted('change')[2][0]).toBe('Done')

})
