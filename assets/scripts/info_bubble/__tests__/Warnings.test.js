/* eslint-env jest */
import React from 'react'
import Warnings from '../Warnings'
import { shallow } from 'enzyme'
import { mountWithIntl } from '../../../../test/helpers/intl-enzyme-test-helper.js'

describe('Warnings', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Warnings />)
    expect(wrapper.exists()).toEqual(true)
  })

  it('renders segment doesn’t fit warning', () => {
    const warnings = [null, true, false, false]
    const wrapper = mountWithIntl(<Warnings warnings={warnings} />)
    expect(wrapper.text()).toEqual('This segment doesn’t fit within the street.')
  })

  it('renders segment not wide enough warning', () => {
    const warnings = [null, false, true, false]
    const wrapper = mountWithIntl(<Warnings warnings={warnings} />)
    expect(wrapper.text()).toEqual('This segment might not be wide enough.')
  })

  it('renders segment too wide warning', () => {
    const warnings = [null, false, false, true]
    const wrapper = mountWithIntl(<Warnings warnings={warnings} />)
    expect(wrapper.text()).toEqual('This segment might be too wide.')
  })

  it('renders two warnings', () => {
    const warnings = [null, true, true, false]
    const wrapper = mountWithIntl(<Warnings warnings={warnings} />)
    expect(wrapper.html()).toEqual('<div class="info-bubble-warnings"><p><span>This segment doesn’t fit within the street.</span></p><p><span>This segment might not be wide enough.</span></p></div>')
  })
})
