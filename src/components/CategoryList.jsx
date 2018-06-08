import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
//import { getCategory } from 'actions/categories';
import { bindActionCreators } from 'redux';

class CategoryList extends PureComponent {
  // getCategory() {
  //   console.log('Привет братишка'); 
  //   this.props.onGetCategory();    
  // }
  getCategory = (fieldName) => (e) => {
    console.log(fieldName);
    this.props.onGetCategory(fieldName);
  }
  render() {    
    const categories = this.props.categories.categories;
    return(
      <ul>
        {categories.map((item,index) => {
          return (
            <li key={index}
            ref={item.id}
            className={item.id}
            onClick={this.getCategory(item.id)}
            >{item.name}</li>
          );
        })}
      </ul>
    );
  }
}
export default connect(
  state => ({
    categories: state.categories,
    paper: state.paper,
    chemistry: state.chemistry,
    towel: state.towel
  }),
  dispatch => ({
    onGetCategory: (id) => {
      console.log('name', id);
      dispatch({ type: 'CATEGORY_SELECTED', payload: id});
    },
  })
)(CategoryList);