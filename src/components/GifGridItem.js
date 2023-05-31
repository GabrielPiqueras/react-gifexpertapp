import React from 'react'
import PropTypes from 'prop-types';
import DownloadButton from './DownloadButton';

export const GifGridItem = ({ id, title, url }) => {

  const convertToSlug =(title)  => {
    const slug = title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') // Elimina caracteres especiales
      .replace(/\s+/g, '-') // Reemplaza espacios en blanco con guiones
      .replace(/--+/g, '-'); // Elimina guiones consecutivos
    
    return slug;
  }

  return (
    <>
      {/* Nueva */}
      <div className="bg-white max-w-sm rounded overflow-hidden shadow-lg card animate__animated animate__fadeIn m-4 w-1/1 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/3">
        <img className="w-full" src={ url } alt={ title} />
        <div className="py-4">
          <div className="pl-6 pr-4 font-bold text-xl mb-2 flex justify-end items-start">
            { title }
            <DownloadButton gifUrl={ url } fileName={ convertToSlug(title) } />
            
            </div>
          
        </div>
        <div>
          <p className="px-6 text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
            quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
            nihil.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #gif
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #hastag
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #other
          </span>

            

          {/* <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            Descargar GIF
          </button> */}
         
        </div>
      </div>
    </>
  )
}

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}