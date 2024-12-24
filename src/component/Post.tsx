/** @format */
import React, { useState } from "react";
import Cancel from "../assets/icon/cancel";
import More from "../assets/icon/more";
import heart from "../assets/icon/heart.png";
import comment from "../assets/icon/comment.png";
import share from "../assets/icon/share.png";
import Swal from "sweetalert2";

type PostType = {
  page: string;
  time: string;
  ava: string;
  project: string;
  content: string;
  img: string;
  comment: number;
  share: number;
  like: number;
};

const Post: React.FC<{ post: PostType }> = ({ post }) => {
  const [likes, setLikes] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState<
    { text: string; user: string; avatar: string }[]
  >([]);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleCommentClick = () => {
    setShowCommentInput(!showCommentInput);
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentText(e.target.value);
  };

  const handleShare = () => {
    Swal.fire({
      title: "Chia sẻ bài viết",
      html: `
        <div class="flex flex-col items-center space-y-4">
          <a 
            href="https://www.facebook.com/sharer/sharer.php?u=your-url-here" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="flex items-center space-x-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            <img src="https://store-images.s-microsoft.com/image/apps.37935.9007199266245907.b029bd80-381a-4869-854f-bac6f359c5c9.91f8693c-c75b-4050-a796-63e1314d18c9?h=210" alt="Facebook logo" class="w-8 h-8" />
            <span>Chia sẻ lên Facebook</span>
          </a>

          <a 
            href="https://zalo.me/share?url=your-url-here" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="flex items-center space-x-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvftpDoS_c5SQQc3Y9nay3WJuBt3U41Zqiaw&s" alt="Zalo logo" class="w-8 h-8" />
            <span>Chia sẻ lên Zalo</span>
          </a>
        </div>
      `,
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Đóng",
    }).then((result) => {
      if (result.isConfirmed) {
        // You can add your actual share logic here if needed
        Swal.fire("Cảm ơn bạn đã chia sẻ!");
      }
    });
  };

  const handleAddComment = () => {
    if (commentText.trim() !== "") {
      setComments([
        ...comments,
        {
          text: commentText,
          user: "Nguyễn Hiệp",
          avatar:
            "https://res.cloudinary.com/dhhuv7n0h/image/upload/v1727751526/Joyner-8E2A9181-cmyk_web_t2bsnn.jpg",
        },
      ]);
      setCommentText("");
      setShowCommentInput(false);
    }
  };

  return (
    <div className="bg-background shadow-sm rounded-md">
      <div className="flex flex-col pb-2">
        <div className="flex px-4 pt-4 justify-between">
          <div className="flex space-x-2 items-center">
            <div className="">
              <img
                src={post.ava}
                alt=""
                className="w-12 h-12 rounded-full"
              />
            </div>
            <div className="flex flex-col font-lexend items-start">
              <div className="font-bold">{post.page}</div>
              <div className="text-gray-600 text-sm">{post.time}</div>
              <div className="text-gray-600 text-sm">{post.project}</div>
            </div>
          </div>
          <div className="flex space-x-1 pt-2 justify-between">
            <More size={6} />
            <Cancel size={6} />
          </div>
        </div>
        <div className="px-4 py-2">{post.content}</div>
        <div className="">
          <img
            src={post.img}
            alt=""
          />
        </div>
        <div className="flex p-2 py-3 justify-between">
          <div className="flex space-x-1">
            <img
              src={heart}
              className={`w-6 ${isLiked ? "filter brightness-200" : ""}`}
              alt=""
            />
            <p> {likes} Yêu thích</p>
          </div>
          <div className="flex space-x-2">
            <p>{comments.length} Bình luận</p> {/* Display comment count */}
            <p>{post.share} Chia sẻ</p>
          </div>
        </div>
        <div className="flex justify-around">
          <button
            onClick={handleLike}
            className="flex space-x-1 py-2"
            aria-label="Yêu thích"
          >
            <img
              src={heart}
              className={`w-6 ${isLiked ? "filter brightness-200" : ""}`}
              alt=""
            />
            <p>Yêu thích</p>
          </button>
          <button
            onClick={handleCommentClick}
            className="flex space-x-1 py-2"
            aria-label="Bình luận"
          >
            <img
              src={comment}
              className="w-6"
              alt=""
            />
            <p>Bình luận</p>
          </button>
          <button
            onClick={handleShare}
            className="flex space-x-1 py-2"
            aria-label="Chia sẻ"
          >
            <img
              src={share}
              className="w-6"
              alt=""
            />
            <p>Chia sẻ</p>
          </button>
        </div>

        {/* Comment Input */}
        {showCommentInput && (
          <div className="px-4 py-2">
            <input
              type="text"
              value={commentText}
              onChange={handleCommentChange}
              placeholder="Viết bình luận..."
              className="border border-gray-300 px-3 py-2 rounded-md w-full"
            />
            <button
              onClick={handleAddComment}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
            >
              Đăng bình luận
            </button>
          </div>
        )}

        {/* Display Comments */}
        <div className="px-4 py-2">
          {comments.map((comment, index) => (
            <div
              key={index}
              className="mb-2 flex items-start"
            >
              <img
                src={comment.avatar}
                alt=""
                className="w-8 h-8 rounded-full mr-2"
              />
              <div>
                <p className="font-bold">{comment.user}</p>
                <p>{comment.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
