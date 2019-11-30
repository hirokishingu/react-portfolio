import React, { Component } from 'react'
import Typical from 'react-typical'

const steps = [
  'Hello', 1500,
  'Hello world!👍', 1000,
  'This is', 500,
  'This is Hiroki', 500,
  "This is Hiroki Shingu's portfolio.", 5000,
  "I`m Web Application", 500,
  "I`m Web Application Enginner and programmer.", 1500,
  "My favorite pragramming language is", 500,
  "My favorite pragramming language is swift, ", 300,
  "My favorite pragramming language is swift, ruby, ", 300,
  "My favorite pragramming language is swift, ruby, typescript, ", 300,
  "My favorite pragramming language is swift, ruby, typescript, python.", 2000,
  "Happy coding!!!😊", 2000,
];

export default class HelloWorld extends React.Component {
  render() {
    return (
      <Typical
        steps={steps}
        loop={Infinity}
        wrapper="p"
      />
    )
  }
}