import React from "react";
import unsplash from '../api/unsplash';
import SearchBar from "./SearchBar";
import ImageList from './ImageList'

class App extends React.Component {
    state = { images: [] }

    // USING ASYNC / AWAIT TO GET RESPONSE
    onSearchSubmit = async (term) => {
        const response = await unsplash.get('search/photos', {
            params: {query: term, per_page: 30},
        });
        console.log('response data : ', response.data)
        this.setState({ images: response.data.results });
    }

    //      USING .THEN() PROMISE METHOD TO GET RESPONSE
    // onSearchSubmit(term) {
    //     axios.get('https://api.unsplash.com/search/photos', {
    //         params: {query: term},
    //         headers: {
    //             Authorization: 'Client-ID ***'
    //         }
    //     }).then((response) => {
    //         console.log(response.data.results)
    //     });
    // }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <p>Found: {this.state.images.length} images</p>
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}
export default App;
