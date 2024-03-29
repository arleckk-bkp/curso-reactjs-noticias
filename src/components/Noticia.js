import React from 'react';
import PropTypes from 'prop-types';

const Noticia = ({noticia}) => {
    return (
        <div className="card">
            {/*<img className="card-img-top img-noticia" src="https://img.europapress.es/fotoweb/fotonoticia_20141216162833_800.jpg" alt=""></img> */}
            <img className="card-img-top img-noticia" src={noticia.urlToImage} alt=""></img>
            <div className="card-body">
                <h5 className="card-title">{noticia.title}</h5>
                <p className="card-text">{noticia.description}}</p>
            </div>
            <div className="card-footer text-center">
                <a href={noticia.url} target="_blank"><button className="btn btn-success">VER NOTICIA COMPLETA</button></a>
            </div>
        </div>
    );
}

Noticia.propTypes = {
    noticia : PropTypes.object.isRequired
}
 
export default Noticia;