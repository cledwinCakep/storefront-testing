import { imgbbUpload } from "imgbb-image-uploader";
import { useState } from "react";

const GenerateImageUrl = (image: any) => {
  const [url, seturl] = useState("generating...");
  const KEY = process.env.NEXT_PUBLIC_IMAGE_BB_API_KEY;

  const generateImage = async () => {
    if (image && KEY) {
      await imgbbUpload({
        key: KEY, // your imgbb api key
        image: image, // image selected from the file input
      })
        .then((data) => {
          seturl(data.data.url_viewer);
        })
        .catch((error) => {
          console.error("Failed to upload image to ImgBB:", error);
        });
    }
  };
  generateImage();

  return url;
};

export default GenerateImageUrl;
