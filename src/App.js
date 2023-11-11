import React from 'react';
import ProductDetail from './components/ProductDetail';

const productData = {
  name: 'Kingston SSD 960GB',
  description: 'Disco Sólido interno Kingston - Capacidad de 960 GB - Con tecnología 3D NAND - Tamaño de 2.5 pulgadas - Interfaz de conexión SATA III',
  price: 48990,
  sku: 'SA400S37',
  quantity: 41,
};

function App() {
  return (
    <div className="App">
      <ProductDetail product={productData} />
    </div>
  );
}

export default App;
