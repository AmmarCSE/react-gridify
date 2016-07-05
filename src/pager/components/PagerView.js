import React, { Component, ReactDOM } from 'react'
import { connect } from 'react-redux'
import {generateReactKey} from '~/src/utils/utils'
import {triggerPageCallback} from '~/src/utils/config'

export default class PagerView extends Component {
  constructor(props) {
    super(props)
  }

  onPageClick(page) {
    triggerPageCallback(page, this.props.dispatch)
  }

  render() {
    let pageSections = []
    let { pageCount, currentPage } = this.props

    const pageSeperator = ['...']
    //use [...Array(10).keys()] to construct sequential arrays
    //http://stackoverflow.com/a/33352604/3474494
    if(pageCount < 11){
        pageSections = [
            [...Array(pageCount).keys()].map(num => ++num)
        ]
    }
    else if(pageCount == 11){
        pageSections = [
            [...Array(5).keys()].map(num => ++num),
            pageSeperator,
            [...Array(5).keys()].map(num => num+=7)
        ]
    }
    else{
        let middle = Math.ceil(pageCount/2)
        pageSections = [
            [...Array(4).keys()].map(num => ++num),
            pageSeperator,
            [middle, middle+1],
            pageSeperator,
            [...Array(4).keys()].map(num => num+=(pageCount-3))
        ]
    }

    let pages = []
    pageSections.forEach(pageSection => 
        pages = pages.concat(
            pageSection.map(page => <span className={'page'+(page == currentPage ? ' current':'')} onClick={this.onPageClick.bind(this, page-1)} key={generateReactKey()}>{page}</span>)
        )
    )

    return <div className="pager-components">
        {pages}
    </div>
  }
}

export default connect()(PagerView);
