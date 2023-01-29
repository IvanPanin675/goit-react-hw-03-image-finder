import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';

import ImageGallery from './ImageGallery/ImageGallery';

import axios from 'axios';

export class App extends Component {
  state = {
    search: '',
    images: [],
    loading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { search } = this.state;
    if (prevState.search !== search) {
      this.setState({ loading: true });
      axios
        .get(
          `https://pixabay.com/api/?q=${search}&page=1&key=31970069-a9908647d31fafc5acab91eef&image_type=photo&orientation=horizontal&per_page=12`
        )
        .then(({ data }) => this.setState({ images: data.hits }))
        .catch(error => this.setState({ error: error.message }))
        .finally(this.setState({ loading: false }));
    }
  }

  searchImage = ({ search }) => {
    this.setState({ search });
  };

  render() {
    console.log(this.state.images);
    return (
      <>
        <Searchbar onSubmit={this.searchImage} />
        <ImageGallery images={this.state.images} />
      </>
    );
  }
}
