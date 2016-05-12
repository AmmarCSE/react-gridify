let index = 0;
class Cell extends React.Component {
	render(){
		return(
			<td>
                <input
                    value={this.props.value}
                    readOnly
                />
			</td>
		);
    }
}

class Row extends React.Component {
	render(){
        let cells = 
            //use headers to drive cell generation in order to maintain the order
            this.props.headers.map((headerKeyVal) => {
                //TODO: this is a little flimsy, change the approach in how you extract the key
                let key = Object.keys(headerKeyVal)[0];
index++;
                return <Cell key={utils.generateReactKey()}  value={this.props.rowData[key]}/>;
            });
        return (
          <tr>
            {cells}
          </tr>
        );
    }
}

class Header extends React.Component {
	render(){
		return(
			<th>
                {this.props.header}
			</th>
		);
    }
}

class HeaderRow extends React.Component {
	render(){
        let headerCells = 
            this.props.headers.map((headerKeyVal) => {
                let key = Object.keys(headerKeyVal)[0];
                return <Header key={utils.generateReactKey()} header={headerKeyVal[key]}/>;
            });
        return (
          <tr>
            {headerCells}
          </tr>
        );
    }
}

class Grid extends React.Component {
	render(){
        let rows =
            this.props.data.map((dataRow) => {
                return <Row key={utils.generateReactKey()} rowData={dataRow} headers={this.props.headers}/>;
            });
        return (
          <table>
            <thead>
                <HeaderRow headers={this.props.headers}/>
            </thead>
            <tbody>{rows}</tbody>
          </table>
        );
    }
}
