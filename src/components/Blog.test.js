import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Blog from './Blog'

test('renders content', ()=>{
    const blog = {
        title: 'My test blog',
        author: 'tester'
    }

    const component = render(
        <Blog blog={blog} />
    )
    const div = component.container.querySelector('.blogShort')

    expect(div).toHaveTextContent(
        'My test blog by tester'
    )

})