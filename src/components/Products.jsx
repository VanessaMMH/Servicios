import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/components/Products.styl';
import fondo from '../styles/static/fondo.jpg';
const Products = (props) => {  
  const { products } = props;
  return(
    <div className="Products">
      <div className="Products-bg">
        <img src={fondo} alt="fondo"/>
        <div className="info">
          <h1>¿Tienes algo que  <strong >reparar</strong> o <strong>mejorar </strong>?</h1>
          <h4>Déjalo en nuestras manos. Tenemos un profesional especialista en solucionar cualquier problema de tu hogar.</h4>
          <Link to="/solicita">
            <button>Solicitalo Aqui</button>
          </Link>          
        </div>        
      </div>
      <div className="Products-heading" id="servicios">
        <h2>¿En qué podemos <strong>ayudarte?</strong> </h2> 
      </div>
      <div className="Products-items" >
        {products.map(product => (
          <div className="Products-item" key={product.id}>
            <img src={product.image} alt={product.title} />
            <div className="Products-item-info">
              <h3>
                {product.title}
              </h3>
              <h4>
                {product.description}
              </h4>
              <p><i className="fas fa-check"></i>{'  '}{product.item1}</p>
              <p><i className="fas fa-check"></i>{'  '}{product.item2}</p>
              <p><i className="fas fa-check"></i>{'  '}{product.item3}</p>
              <p><i className="fas fa-check"></i>{'  '}{product.item4}</p>
              <Link to="/solicita">
                <button type="button">Solicita un servicio</button>
              </Link>
            </div >     
          </div>
        ))}
      </div>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    products: state.products,
  };
};
export default connect(mapStateToProps, null)(Products);