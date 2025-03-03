import { useState } from "react";
import { storage, db } from "../services/firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";

const PortfolioForm = ({ user, setPortfolioData }) => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    bio: "",
    skills: "",
    academic: "",
    experience: "",
    projects: "",
    image: null,
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const imageRef = ref(storage, `images/${user.uid}`);
    await uploadBytes(imageRef, file);
    const imageUrl = await getDownloadURL(imageRef);
    setFormData({ ...formData, image: imageUrl });
  };

  const handleSubmit = async () => {
    const docRef = await addDoc(collection(db, "portfolios"), { ...formData, userId: user.uid });
    setPortfolioData(formData);
  };

  return (
    <div className="p-4">
      <input className="w-full p-2 border rounded" name="name" placeholder="Full Name" onChange={handleChange} />
      <input className="w-full p-2 border rounded mt-2" name="contact" placeholder="Contact Info" onChange={handleChange} />
      <input className="w-full p-2 border rounded mt-2" name="bio" placeholder="Short Bio" onChange={handleChange} />
      <input className="w-full p-2 border rounded mt-2" name="skills" placeholder="Skills (comma separated)" onChange={handleChange} />
      <input className="w-full p-2 border rounded mt-2" type="file" onChange={handleImageUpload} />
      <button className="bg-blue-500 text-white p-2 mt-2 w-full" onClick={handleSubmit}>Save Portfolio</button>
    </div>
  );
};

export default PortfolioForm;
