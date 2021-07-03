import { shallowMount } from '@vue/test-utils'
import TodoDisplay from '@/components/TodoDisplay.vue'

const tasks = [{
  name: '散歩',
  status: 1
}, {
  name: '掃除',
  status: 2
}]
const factory = (propsData) => {
  return shallowMount(TodoDisplay, {
    propsData: {
      tasks,
      ...propsData
    }
  })
}

describe('ラジオボタンがすべての時', () => {
  const wrapper = factory({ value: 'All' })
  const All = wrapper.find('#All')
  it('すべてのタスク表示確認', () => {
    expect(All.exists()).toBe(true)
  })
})

describe('ラジオボタンが作業中の時', () => {
  const wrapper = factory({ value: 'Working' })
  const Working = wrapper.find('#Working')
  it('作業中のタスク表示確認', () => {
    expect(Working.exists()).toBe(true)
  })
})

describe('ラジオボタンが完了の時', () => {
  const wrapper = factory({ value: 'Done' })
  const Done = wrapper.find('#Done')
  it('完了の表示確認', () => {
    expect(Done.exists()).toBe(true)
  })
})
