import { shallowMount } from '@vue/test-utils'
import TodoInput from '@/components/TodoInput.vue'

const wrapper = shallowMount(TodoInput)
const text = wrapper.find('.textbox')
const button = wrapper.find('.button-add')

it('何も入力しなかった時の追加ボタン動作確認', () => {
  button.trigger('click')
  expect(wrapper.emitted()['add']).toBeFalsy()
})
it('入力テスト', () => {
  text.setValue('散歩')
  button.trigger('click')
  expect(wrapper.emitted('add')[0][0]).toBe('散歩')
})