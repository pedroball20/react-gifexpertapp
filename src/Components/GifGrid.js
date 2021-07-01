import React from 'react';
import { UsefetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
  const { data: images, loading } = UsefetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {loading && (
        <div className="animate__animated animate__flash">Cargando</div>
      )}
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
