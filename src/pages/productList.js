import React, { Component } from "react";
import { productGetAll } from "../stateManagement/actions/productAction";
import { connect } from "react-redux";

class productList extends Component {
  render() {
    return;
    <div>
      <h1>Product</h1>

      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>id</th>
            <th>productName</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          {this.props.products.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.productName}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>;
  }
}

// const mapStateToProps = (state = {
//   productProps: state.productState.item,
// });

function mapStateToProps(state) {
  return {
    products: state.productState.item,
  };
}

export default connect(mapStateToProps)(productList);
