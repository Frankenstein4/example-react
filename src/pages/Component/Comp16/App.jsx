import React from 'react'
import Footer from './Footer'
import AddTodo from './container/add'
import VisibleTodoList from './container/vitodo'
 
const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)
 
export default App