const PRODUCTS = [
  {
    category: 'Sporting Goods',
    price: '$49.99',
    stocked: true,
    name: 'Football',
  },
  {
    category: 'Sporting Goods',
    price: '$9.99',
    stocked: true,
    name: 'Baseball',
  },
  {
    category: 'Sporting Goods',
    price: '$29.99',
    stocked: false,
    name: 'Basketball',
  },
  {
    category: 'Electronics',
    price: '$99.99',
    stocked: true,
    name: 'iPod Touch',
  },
  {
    category: 'Electronics',
    price: '$399.99',
    stocked: false,
    name: 'iPhone 5',
  },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' },
];

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
}

class ProductRow extends React.Component {
  render() {
    const { product } = this.props;
    const name = product.stocked ? (
      product.name
    ) : (
      <span className="text-danger">{product.name}</span>
    );
    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    const { products, filterText, inStockOnly } = this.props;
    const rows = [];
    let lastCategory = null;

    products.forEach((product) => {
      if (inStockOnly && !product.stocked) {
        return
      }
      if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
        return
      }

      if (product.category !== lastCategory) {
        lastCategory = product.category;
        rows.push(
          <ProductCategoryRow key={lastCategory} category={product.category} />
        );
      }

      rows.push(<ProductRow key={product.name} product={product} />);
    });

    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Nom</th>
              <th scope="col">Prix</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
    this.handleInStockChangeChange = this.handleInStockChangeChange.bind(this)
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value)
  }

  handleInStockChangeChange(e) {
    this.props.onInStockChange(e.target.checked)
  }

  render() {
    const { filterText, inStockOnly } = this.props
    return (
      <div className="mb-3">
        <div className="form-group mb-0">
          <input type="text" value={filterText} className="form-control" placeholder="Search" onChange={this.handleFilterTextChange} />
        </div>
        <div className="form-check">
          <input type="checkbox" checked={inStockOnly} className="form-check-input" id="stock" onChange={this.handleInStockChangeChange} />
          <label htmlFor="stock" className="form-check-label">Products in stock</label>
        </div>
      </div>
    );
  }
}

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filterText: ' ',
      inStockOnly: false
    }
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
    this.handleInStockChangeChange = this.handleInStockChangeChange.bind(this)
  }

  handleFilterTextChange(filterText) {
    this.setState({ filterText })
  }

  handleInStockChangeChange(inStockOnly) {
    this.setState({ inStockOnly })
  }

  render() {
    const { products } = this.props;
    return (
      <React.Fragment>
        {/* {JSON.stringify(this.state)} */}
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChangeChange}
        />
        <ProductTable
          products={PRODUCTS}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </React.Fragment>
    );
  }
}

ReactDOM.render(
  <FilterableProductTable products={PRODUCTS} />,
  document.querySelector('#app')
);
