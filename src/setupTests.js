import { configure, shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'

// React 16 Enzyme Adapter
configure({ adapter: new Adapter() })

// Make enzyme functions available in all tests
global.shallow = shallow
global.mount = mount
global.render = render
global.toJson = wrapper =>
  toJson(wrapper, {
    noKey: true,
    mode: 'deep'
  })
