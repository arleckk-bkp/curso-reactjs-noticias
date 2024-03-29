import React, { Component } from 'react';
import DropDownCategorias from './DropDownCategorias';
import Noticia from './Noticia';
import PropTypes from 'prop-types';

class SeccionNoticias extends Component {
    state = {  }    

    render() { 
        return (
            <div className="card">
                <div className="card-body">
                    <h4 className="text-center body-title"><b>ENCUENTRA NOTICIAS POR CATEGORÍA</b></h4>
                    <div className="row">
                        <div className="col-sm-8 offset-sm-2 col-md-6 offset-md-3">
                            <DropDownCategorias handleClick={this.props.handleClick} />
                        </div>
                    </div>

                    <div className="row">
                        {this.props.noticias.map(noticia => (
                            <div className="col-md-4">
                                <Noticia noticia={noticia}/>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        );
    }
}

SeccionNoticias.propTypes = {
    handleClick : PropTypes.func.isRequired,
    noticias : PropTypes.arrayOf(PropTypes.object).isRequired
}
 
export default SeccionNoticias;