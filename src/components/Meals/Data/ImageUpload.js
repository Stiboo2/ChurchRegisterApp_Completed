import { useState } from "react";
import classes from "./ImageUpload.module.css";
const ImageUpload = () => {
  const [IdPhoto, setIdPhoto] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const upload_preset = "qgj5qdsw";

  const handleImageChange = (e) => {
    const selectedPhoto = e.target.files[0];
    setIdPhoto(selectedPhoto);
    setImagePreview(URL.createObjectURL(selectedPhoto));
  };

  const uploadImage = async () => {
    setIsLoading(true);
    console.log("INSIDE IFs");
    let imageURL;
    try {
      if (
        IdPhoto &&
        (IdPhoto.type === "image/png" || IdPhoto.type === "image/jpeg")
      ) {
        const imageFormData = new FormData();
        imageFormData.append("file", IdPhoto);
        imageFormData.append("cloud_name", "dkayrcyeb");
        imageFormData.append("upload_preset", "qgj5qdsw");
        console.log("fetch");
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dkayrcyeb/image/upload",

          {
            method: "post",
            body: imageFormData,
          }
        );

        const imgData = await response.json();
        imageURL = imgData.url.toString();

        setImagePreview(null);
      }
      console.log(imageURL); // Log the uploaded image URL
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  return (
    <section className="--flex-center">
      <div className="container">
        <div className={classes.imageCard}>
          <div className={classes["profile-photo"]}>
            <div>
              {imagePreview && <img src={imagePreview} alt="profileImage" />}
            </div>
          </div>
          <div className="--form-control">
            <p>
              <div>
                <label>ID Photo:</label>
              </div>
              <input
                className={classes.imageinput}
                type="file"
                accept="image/png, image/jpeg"
                name="image"
                onChange={handleImageChange}
              />
            </p>
            <p>
              {isLoading ? (
                "Uploading..."
              ) : (
                <button onClick={uploadImage} className={classes.imageSave}>
                  Upload Image
                </button>
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageUpload;
