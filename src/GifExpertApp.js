import React, { useState } from 'react';
import AddCategory from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

const Gifexpertapp = () => {
  const [categories, setCategories] = useState(['Dragon Ball']);
  // const handleAdd = (e) => {
  //   // setCategories([...categories, 'HunterxHunter']);
  //   setCategories((cats) => [...cats, 'HunterXHunter']);
  // };
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
export default Gifexpertapp;