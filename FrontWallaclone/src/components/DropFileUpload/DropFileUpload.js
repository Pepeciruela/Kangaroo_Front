import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import './DropFileUpload.scss';
import { uploadFile } from '../../api/services/uploadFileService';

export default function DropFileUpload({ updateFeaturedImage, props }) {
  const [files, setFiles] = useState([]);
  const [imagesCloudinary, setImagesCloudinary] = useState([]);

  //TODO:Change redux
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onDrop = (acceptedFiles) => {
    console.log(acceptedFiles);
  };

  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
    maxFiles: 1,
    multiple: false,
    accept: '.jpeg,.jpg,.png',
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) => Object.assign(file, { preview: URL.createObjectURL(file) }))
      );
      acceptedFiles.map((file) => {
        fileUploadImage(file);
      });
    }
  });

  const images = files.map((file) => (
    <div key={file.name}>
      <img
        src={file.preview}
        style={{ width: '100px', height: '100px', objectFit: 'cover' }}
        alt="preview"
      />
    </div>
  ));

  //===========================================================
  //Send cloudinary
  //===========================================================
  const fileUploadImage = async (file) => {
    setError(null);
    var bodyFormData = new FormData();
    bodyFormData.append('image', file);
    try {
      setLoading(true);
      const response = await uploadFile(bodyFormData);
      setImagesCloudinary([...imagesCloudinary, response.url]);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    updateFeaturedImage(imagesCloudinary);
  }, [imagesCloudinary]);

  //===========================================================
  //Return
  //===========================================================
  return (
    <div id="drop-file-upload">
      <div className="input-files" {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragAccept && <p>All files will be accepted</p>}
        {isDragReject && <p>Some files will be rejected</p>}
        {!isDragActive && <p>Drop some files here ...</p>}
        <p>icon</p>
        <p>Drop files here</p>
        <p>(Only *.jpg and *.png images will be accepted)</p>
      </div>
      <div className="images-preview">{images}</div>
    </div>
  );
}
