import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import { prettyDOM } from '@testing-library/dom'
import Blog from './Blog'

describe ('A Test Blog', () => {
    const testBlog = {
    title: 'My test blog',
    author: 'tester',
    url: 'www.testing.com',
    likes: 3,
    }

    test('renders content', ()=>{

        const component = render(
            <Blog blog={testBlog} />
        )
        const div = component.container.querySelector('.blogFull')
        expect(div).toHaveTextContent(
            'My test blog by tester'
        )
        
    })
    
    test('click on "view" shows more blog details', () => {
        const component = render(
            <Blog blog={testBlog}/>
        )
        const div = component.container.querySelector('.blogFull')
        const button = component.getByText('view')
        fireEvent.click(button)

        expect(div).toHaveTextContent(
            'My test blog by tester'
        )
 
        })

 
})