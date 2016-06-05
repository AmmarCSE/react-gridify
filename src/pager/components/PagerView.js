import React, { Component } from 'react'
import { connect } from 'react-redux'
import {generateReactKey} from '~/src/utils/utils'

export default class PagerView extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    let { pageCount } = this.props
    const pageSeperator = ['...']
    let pageSections = []
    pageCount = 3
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
    //pageSections.forEach(pageSection => console.log(pageSection.map(page => <span>{page}</span>)))
    pageSections.forEach(pageSection => pages = pages.concat(pageSection.map(page => <span key={generateReactKey()}>{page}</span>)))

    return <div>
        {pages}
    </div>
  }
}
