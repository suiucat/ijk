import { Component } from 'react';

import { Search, Table } from './components/index'
import './App.css';

const DEFAULT_QUERY = 'redux';
const DEFAULT_HPP = '100';
// const OPEN_LAZY_LOADING = true;

// 滚动条到底部懒加载
// scrollHeight: 可视内容 + 加上溢出的高度
// clientHeight: 页面可视区域的高度
// scrollTop: 滚动条在 Y 轴上的距离

// 判断滚动滚动到底部的条件： scrollHeight = clientHeight +  scrollTop
// okay 开干！
function lazyLoading() {
  const scrollHeight = window.document.body.scrollHeight,
        clientHeight = window.document.body.clientHeight,
        scrollTop = window.document.body.scrollTop;
        console.log(scrollHeight === clientHeight + scrollTop, scrollHeight, clientHeight, scrollTop)
        // if (scrollHeight === clientHeight + scrollTop && scrollHeight === 0) {
        //   return false;
        // } else if (scrollHeight === clientHeight + scrollTop && scrollHeight !== 0) {
        //   return true;
        // }
}


const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';
const PARAM_PAGE = 'page=';
const PARAM_HPP = 'hitsPerPage='
// const url = `${PATH_BASE}?${PARAM_SEARCH}${DEFAULT_QUERY}`

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: null,
      searchTerm: DEFAULT_QUERY,
    }

    this.setSearchStories = (result) => this.setState({result})
    this.fetchSearchTopStories = (searchTerm, page = 0) => {
      fetch(`
        ${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}&`)
        .then(res => res.json())
        .then((result => this.setState({result})))
        .catch(e => console.log(e));
    }
    this.onSearchChange = (e) => {
      this.setState({
        searchTerm: e.target.value
      })
    }

    this.onDismiss = (id) => {
      const isNotId = item => item.objectID !== id;
      const updatedList = this.state.result.hits.filter(isNotId);
      this.setState({
        result: {...this.state.result, hits: updatedList } // 和 Object.assign({}. args...)效果一样
      })
    }

    this.onSearchSubmit = (event) => {
      const { searchTerm } = this.state;
      this.fetchSearchTopStories(searchTerm);
      event.preventDefault();
    }

    this.setSearchTopStories = (result) => {
      const { hits, page } = result;
      const oldHits = page === 0
        ? []
        : this.state.result.hits

    const updatedHits = [
      ...oldHits,
      ...hits,
    ];
    // console.log(updatedHits.length, '测试');
    this.setState({
      result: {
        hits: updatedHits,
        page,
    }
    })
    }
  }
  render() {
    const { searchTerm, result } = this.state;
    const page = (result && result.page) || 0;

    window.onscroll = function() {
      let isInFooter = lazyLoading();
      if (isInFooter) {
        this.fetchSearchTopStories(searchTerm, page + 1);
      }
    }

    return (
      <div className="page">
        <div className="interactions">
          <Search
            value={searchTerm}
            onChange={this.onSearchChange}
            onSubmit={this.onSearchSubmit}
          >
            搜索
          </Search>
        </div>
        {
          result
          && <Table
              list={result.hits}
              onDismiss={this.onDismiss}
            />
        }
        <div className="interactions">
          <button onClick={() => this.fetchSearchTopStories(searchTerm, page + 1)}>
            更多
          </button>
        </div>
      </div>
    );
  }
  componentDidMount() {
    const { searchTerm } = this.state;
    this.fetchSearchTopStories(searchTerm);
  }

  // shouldComponentUpdate(nP, nS) {
  //   console.log('shouldComponentUpdate', 4, nP, nS);
  //   return true;
  // }

  // componentDidUpdate(pP,pS) {
  //   console.log('componentDidUpdate', 6, pP,pS);
  // }

  // componentDidCatch(err, info) {
  //   console.log('componentDidCatch', 8, err, info)
  // }
}

export default App;
