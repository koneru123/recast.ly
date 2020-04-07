import VideoListEntry from './VideoListEntry.js';

/* class VideoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {videos} = this.props;
    return (
      <div className="video-list">
        {
          videos.map((currentVdo) => {
            return <VideoListEntry video={currentVdo} />;
          })
        }
      </div>
    );
  }
} */
var VideoList = (props) => {
  //const {videos} = this.props;
  return (
    <div className="video-list">
      {
        props.videos.map((currentVdo) => {
          return <VideoListEntry video={currentVdo} />;
        })
      }
    </div>

  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
