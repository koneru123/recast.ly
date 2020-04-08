import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import exampleVideoData from '../data/exampleVideoData.js';
import searchYouTube from '../lib/searchYouTube.js';
import API_KEY from '../config/youtube.example.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: exampleVideoData,
      currentVideo: exampleVideoData[0],
      searchText: 'dogs'
    };

    this.onVideoChange = this.onVideoChange.bind(this);
    //this.searchYouTube = this.searchYouTube.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.getVideos = this.getVideos.bind(this);
  }

  /* searchYouTube() {
    const options = {
      key: API_KEY,
      query: 'cats',
      max: 5
    };
    searchYouTube(options, (videos) => this.setState({ videos, currentVideo: videos[0] }));
  } */
  getVideos() {
    searchYouTube(this.state.searchText, (videos) => this.setState({ videos, currentVideo: videos[0] }));
  }

  componentDidMount() {
    this.getVideos();
    //this.searchYouTube();
  }

  onSubmit(searchStr) {
    this.setState({
      searchText: searchStr
    });
    this.getVideos();
  }

  onVideoChange(index) {
    this.setState({
      currentVideo: this.state.videos[index]
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search onSubmit={this.onSubmit} /></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.currentVideo} /></div>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} onVideoChange={this.onVideoChange} />
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
