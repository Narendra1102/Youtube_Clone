import { Link, useNavigate } from "react-router-dom";

const VideoCard = ({ video }) => {
  const navigate = useNavigate();


  // Handle both full URLs and relative paths
  const getThumbnailUrl = () => {
    if (!video.thumbnailUrl) return "https://via.placeholder.com/280x180?text=No+Image";
    if (video.thumbnailUrl.startsWith("http")) return video.thumbnailUrl;
    return `http://localhost:5000/${video.thumbnailUrl}`;
  };



  return (
    <Link to={`/video/${video._id}`} className="videoCard">

      <img
        src={getThumbnailUrl()}
        alt="thumbnail"
        className="thumbnail"
      />

      <div className="videoInfo">
        {/* 🔵 Avatar → Channel Page */}
        <img
          src={video.channelId?.avatar || "/default-avatar.png"}
          alt="avatar"
          className="w-[36px] h-[36px] rounded-full cursor-pointer"
          onClick={(e) => {
            e.preventDefault(); // 🔥 prevents video page navigation
            navigate(`/channel/${video.channelId?._id}`);
          }}
        />


        <div className="videoText">
          <h4>{video.title}</h4>
          <p className="channelName">{video.channelName}</p>
          <p className="views">{video.views} views</p>
        </div>
      </div>

    </Link>
  );
};

export default VideoCard;