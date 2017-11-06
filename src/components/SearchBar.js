import React, {Component}from 'react';
import Search from 'react-native-search-box';

class SearchBar extends Component{
  constructor(props){
    super(props);
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      placeholder: nextProps.placeholder,
      backgroundColor: nextProps.backgroundColor
    })
  }
  render(){
    return(
      <Search
        {...this.props}
      />
    )
  }
}
export default SearchBar;
