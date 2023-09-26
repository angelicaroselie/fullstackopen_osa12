import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Todo from './Todo'


test('renders todo', () => { // 12.14
  const todo = { // test data
    text: 'test todo',
    done: false,
    id: '1'
  }

  const component = render( // render component and pass test data as props
    <Todo todo={todo} />
  ).container

  expect(component).toHaveTextContent(todo.text) // test that todo is rendered
  expect(component).toHaveTextContent('This todo is not done') // test that todo is rendered

}
)