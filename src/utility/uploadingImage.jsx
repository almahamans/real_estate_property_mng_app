export const uploadImageToCloudinary = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'nnjzigc0'); // Ensure you have set up an upload preset in Cloudinary
  formData.append('folder', 'property'); // Specify the folder where you want to store the image
  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/dnrcimpha/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error('Failed to upload image');
    }

    const data = await response.json();
    return data.secure_url; // Return the secure URL of the uploaded image
  } catch (error) {
    console.error('Error uploading image to Cloudinary:', error);
    throw error;
  }
};