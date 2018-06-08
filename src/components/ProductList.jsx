import React, { PureComponent } from 'react';

class ProductList extends PureComponent { 
  render() {
    return(
      <div>
        <div>Item name</div>
        <div>Item price</div>
      </div>
    );
  }
}

function mapStateToProps(state) {  
  return {
    ...state,
    products: state.active
  }
}

export default ProductList;
