import React from 'react'
import SideBarCurrentCategory from './components/SideBarCurrentCategory'
import CategoryList from './components/CategorysList';

const SideBar = () => {
  return (
    <nav>
      <SideBarCurrentCategory />
      <CategoryList />  
    </nav>
  )
}

export default SideBar;