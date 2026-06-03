import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmojiPicker from "emoji-picker-react";
// 1. You imported 'api' in lowercase here
import API from "../services/api";

// 2. Added userId to the props so it doesn't crash when sending to the backend
function CreatePost({addPost, userId }) {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  const navigate = useNavigate();
  const [showEmoji, setShowEmoji] = useState(false);

  const onEmojiClick = (emojiData) => {
    setText((prevText) => prevText + emojiData.emoji);
  };

  // 3. Added 'async' here
  const handleSubmit = async () => {
    if (!text.trim() && !image) return;

    try {
      // 4. Changed 'API' to 'api' to match your import
      const formData = new FormData();

     formData.append("text", text);

if (image) {
  formData.append("image", image);
}

await API.post("/posts", formData);

      addPost({
        text,
        image: image ? URL.createObjectURL(image) : null,
      });

      // 5. Cleaned up the duplicate resets
      setText("");
      setImage(null);
      navigate("/");
    } 
    catch (error) {
      console.error("Error creating post:", error);
    }
  };

  // 6. I REMOVED the extra floating 'await API.post' that was down here causing the crash.

  return (
    <div className="card shadow-lg border-2">
      <div className="card-body p-4">
        <div>
          <h1 className="fs-4">Create Post</h1>
        </div>
        <div className="d-flex gap-3 mb-3">
          <img
            src="https://d21buns5ku92am.cloudfront.net/69638/images/447398-The%20Social%20Hub%20Logo%20Black%20Outlined%20RGB-1d1117-large-1665580706.png"
            alt="User"
            className="rounded-circle"
            style={{
              width: "45px",
              height: "45px",
              objectFit: "cover",
            }}
          />

          <div className="position-relative flex-grow-1">
            <textarea
              className="form-control w-100"
              rows="4"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="What's on your mind?"
            />

            <div className="d-flex flex-wrap align-items-center gap-2 mt-3 position-relative">
              {/* Emoji Button */}
              <button
                type="button"
                className="btn btn-light border rounded-circle"
                onClick={() => setShowEmoji(!showEmoji)}
              >
                😊
              </button>

              {showEmoji && (
                <div
                  className="position-absolute"
                  style={{
                    zIndex: 1000,
                    top: "100%",
                    left: 0,
                  }}
                >
                  <EmojiPicker
                    onEmojiClick={onEmojiClick}
                    height={300}
                    skinTonesDisabled
                  />
                </div>
              )}

              {/* File Upload */}
              <label
                htmlFor="imageUpload"
                className="btn btn-light border mb-0"
              >
                📁 Choose Image
              </label>

              <input
                id="imageUpload"
                type="file"
                accept="image/*"
                className="d-none"
                onChange={(e) => setImage(e.target.files[0])}
              />

              {/* Selected File Name */}
              {image && (
                <small className="text-success text-truncate">
                  {image.name}
                </small>
              )}
            </div>

            <div className="d-flex justify-content-end border-top pt-3 mt-2">
              <button
                className="btn btn-primary px-4 fw-bold"
                onClick={handleSubmit}
                style={{ borderRadius: "20px" }}
              >
                ⌯⌲ Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;