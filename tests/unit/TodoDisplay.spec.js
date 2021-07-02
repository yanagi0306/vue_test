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

describe('valueがAll', () => {
  const wrapper = factory({ value: 'All' })
  const All = wrapper.find('#All')
  it('表示確認', () => {
    expect(All.exists()).toBe(true)
  })
  it('statusChangeのイベント動作確認', () => {
    wrapper.findAll('.button-status').at(0).trigger('click')
    expect(wrapper.emitted('statusChange')[0][0]).toBe(0)
  })
  it('delのイベント動作確認', () => {
    wrapper.findAll('.button-del').at(0).trigger('click')
    expect(wrapper.emitted('del')[0][0]).toBe(0)
  })
})

describe('valueがWorking', () => {
  const wrapper = factory({ value: 'Working' })
  const Working = wrapper.find('#Working')
  it('表示確認', () => {
    expect(Working.exists()).toBe(true)
  })
  it('statusChangeのイベント動作確認', () => {
    wrapper.findAll('.button-status').at(0).trigger('click')
    expect(wrapper.emitted('statusChange')[0][0]).toBe(0)
  })
  it('delのイベント動作確認', () => {
    wrapper.findAll('.button-del').at(0).trigger('click')
    expect(wrapper.emitted('del')[0][0]).toBe(0)
  })
})

describe('valueがDone', () => {
  const wrapper = factory({ value: 'Done' })
  const Done = wrapper.find('#Done')
  it('表示確認', () => {
    expect(Done.exists()).toBe(true)
  })
  it('statusChangeのイベント動作確認', () => {
    wrapper.findAll('.button-status').at(0).trigger('click')
    expect(wrapper.emitted('statusChange')[0][0]).toBe(1)
  })
  it('delのイベント動作確認', () => {
    wrapper.findAll('.button-del').at(0).trigger('click')
    expect(wrapper.emitted('del')[0][0]).toBe(1)
  })
})





