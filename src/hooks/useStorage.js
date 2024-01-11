import { useState, useEffect, useRef } from "react";
import {
  projectStorage,
  projectFirestore,
  timestamp,
} from "../firebase/config";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
  const isUploading = useRef(false);

  useEffect(() => {
    if (file && !isUploading.current) {
      isUploading.current = true
      const storageRef = projectStorage.ref(file.name);
      const collectionRef = projectFirestore.collection("images");
      storageRef.put(file).on(
        "state_changed",
        (snap) => {
          let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
          setProgress(percentage);
        },
        (err) => {
          setError(err);
          isUploading.current = false
        },
        async () => {
          const url = await storageRef.getDownloadURL();
          const createdAt = timestamp;
          collectionRef.add({ url, createdAt });
          setUrl(url);
          isUploading.current = false
        }
      );
    }
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
