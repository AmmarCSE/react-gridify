var pageSize = 5 
var app = browserServer()
var sqlAgent = browserSqlAgent()
app.get('[be]/search', function(req, res){
    req.params = req.params || {}

    var data = retrieveSearchData(req.params.filterItems, req.params.page || '0')

    res.send({
        headers :
            [
                {category_name : 'Category'},
                {name: 'Name'}, 
                {brand_name : 'Brand'},
                {supplier_name : 'Supplier'},
                {price:'Price'},
                {quantity:'Quantity'}
            ],
        data : data
    })
})

app.get('[be]/pagerData', function(req, res){
    req.params = req.params || {}

    var data = retrieveSearchData(req.params.filterItems)
    var pageCount = Math.ceil(data.length/pageSize)
    res.send({
        pageCount: pageCount,
        currentPage: (req.params.page || 0) + 1
    })
})

app.post('[be]/add', function(req, res){
    var data = sqlAgent.query('SELECT product_id FROM products').map(function(row){return +row.product_id})
    var newKey = Math.max.apply(Math, data) + 1

    var insertObj = req.params
    insertObj['product_id'] = newKey

    var keys = Object.keys(insertObj)

    var insertColumns = keys .join(',') 
    var insertValues = keys.map(
        function(key){
            return insertObj[key]
        })
        .join(',')


    sqlAgent.query('INSERT INTO products ('+insertColumns+') VALUES('+insertValues+')')

    var result = retrieveSearchData([{identifier: 'product_id', operator: '=', value: newKey}], '0')
    //return first item since there should always be only one item
    res.send(result[0])
})

app.post('[be]/update', function(req, res){
    var updateObj = req.params
    var keys = Object.keys(updateObj)

    var updateSet = keys.map(
        function(key){
            return key + '=' + updateObj[key]
        })
        .join(',')

    sqlAgent.query(
                'UPDATE products '
                    +' SET ' + updateSet 
                    +' WHERE product_id = ' + updateObj['product_id']
                )

    var result = retrieveSearchData([{identifier: 'product_id', operator: '=', value:updateObj['product_id']}], '0')
    //return first item since there should always be only one item
    res.send(result[0])
})

app.post('[be]/delete', function(req, res){
    var key = req.params

    var result = sqlAgent.query('DELETE FROM products WHERE product_id = ' + key)
    res.send(result)
})

app.get('[be]/filters', function(req, res){
    req.params = req.params || []
    var queryWhere = buildWhere(req.params)
    var categoryData = sqlAgent.query('SELECT DISTINCT category_id, category_name FROM categories JOIN products ON products.category_id = categories.category_id ' + queryWhere + ' ORDER BY category_name')
    var brandData = sqlAgent.query('SELECT DISTINCT brand_id, brand_name FROM brands JOIN products ON products.brand_id = brands.brand_id ' + queryWhere + ' ORDER BY brand_name')
    var supplierData = sqlAgent.query('SELECT DISTINCT supplier_id, supplier_name FROM suppliers JOIN products ON products.supplier_id = suppliers.supplier_id ' + queryWhere + ' ORDER BY supplier_name')

    res.send({
        filters :
            {
                category: buildFilter('Category', 'multiple', 'category_id', '=', 'category_name', categoryData, req.params), 
                brand: buildFilter('Brand', 'multiple', 'brand_id', '=', 'brand_name', brandData, req.params), 
                supplier: buildFilter('Supplier', 'multiple', 'supplier_id', '=', 'supplier_name', supplierData, req.params)
            } 
   })
})

function buildWhere(filterItems){
var queryWhere = ''
if(filterItems.length){
    queryWhere = ' WHERE ' + 
        filterItems.map(function(item){
            return item.identifier + item.operator + item.value
        })
        .join(' and ')
}

return queryWhere
}
function buildFilter(header, type, id, op, nameColumn, data, reqParams){
var filter = {
        header: header,
        filterType: type,
        filterIdentifier: id,
        filterOperator: op,
        items: data.map(function(row){ 
            var filter = { key: row[id], value: row[nameColumn] }

            var existsInParams = reqParams.filter(function(item){
                return item.identifier == id && item.value == row[id]
            }).length
            if(existsInParams){
                filter.selected = true
            }

            return filter
        })
} 

return filter
}
function retrieveSearchData(filterItems, page){
var queryWhere = buildWhere(filterItems || [])
var queryPage = ''
page && (queryPage = ' LIMIT '+(page*pageSize)+', '+pageSize)

return sqlAgent.query(
            'SELECT product_id, category_name, brand_name, supplier_name, name, quantity, price FROM products'
            +' JOIN categories ON products.category_id = categories.category_id'
            +' JOIN brands ON products.brand_id = brands.brand_id'
            +' JOIN suppliers ON products.supplier_id = suppliers.supplier_id'
            +queryWhere
            +queryPage
        )
}
