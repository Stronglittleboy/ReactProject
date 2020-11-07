/*整体组件*/
import React from "react";

function FilterableProductTable() {
    let itemGroupBy = ItemGroupBy(JSONSTR, "category");
    return (
        <div>
            <SearchBar/>
            <ProductTable productList={itemGroupBy}/>
        </div>
    );
}

/**
 * 用作数据分组
 *
 * @param arr
 * @param key
 * @returns {[]}
 * @constructor
 */
function ItemGroupBy(arr, key) {
    let newArr = [],
        types = {},
        i, j, cur;
    for (i = 0, j = arr.length; i < j; i++) {
        cur = arr[i];
        if (!(cur[key] in types)) {
            types[cur[key]] = {type: cur[key], data: []};
            newArr.push(types[cur[key]]);
        }
        types[cur[key]].data.push(cur);
    }
    return newArr;
}

class SearchBar extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            /*搜索词*/
            searchWord: "",
            isChecked: false
        }
    }


    changeCheck() {
        this.setState(() => {
                this.isChecked = !this.state.isChecked;
            }
        )
    }

    writeSearch() {
        this.setState((value) => {
            this.searchWord = value
        })
    }

    render() {
        return (<div>
            <input type="Text" placeholder={'Search...'} onChange={this.writeSearch}/><br/>
            <input type='checkbox' onClick={this.changeCheck}/>Only show product in stock
        </div>);
    }
}

function GetProduct(props) {
    return props.productList.map(item => {
        return (
            <tr>
                <ProductCategoryRow category={item.type} key={item.type}/>
            </tr>,
                item.data.map(product => {
                        return <ProductRow product={product} key={product.name}/>
                    }
                )
        );
    });
}

class ProductTable extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            productList: props.productList,
        }
    }

    render() {
        return (
            <table>
                <tr>
                    <td><strong>Name</strong></td>
                    <td><strong>Price</strong></td>
                </tr>
                <GetProduct productList={this.state.productList}/>
            </table>
        );
    }
}

/**
 *
 */
function ProductCategoryRow(props) {
    return <td colSpan='2'><strong>{props.category}</strong></td>;
}


class ProductRow extends React.Component {
    render() {
        /*解构赋值*/
        const {name, price, stocked} = this.props.product
        console.log("================" + name, price)
        return (
            <tr>
                <td style={stocked ? null : {color: 'red'}}>{name}</td>
                <td>{price}</td>
            </tr>
        );
    }
}

const JSONSTR = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];
export default FilterableProductTable;