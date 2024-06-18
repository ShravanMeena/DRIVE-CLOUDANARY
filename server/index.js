import {v2 as cloudinary} from 'cloudinary';

(async function() {

    // CLOUDINARY_URL=cloudinary://218914572942287:86ufN9Dcw5eW3vTU0tzGD_t5FFk@shravanmeena
    // Configuration
    cloudinary.config({ 
        cloud_name: "shravanmeena", 
        api_key: "218914572942287", 
        api_secret: "86ufN9Dcw5eW3vTU0tzGD_t5FFk" // Click 'View Credentials' below to copy your API secret
    });
    
    // Upload an image
    const uploadResult = await cloudinary.uploader.upload("https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg", {
        public_id: "shoes"
    }).catch((error)=>{console.log(error)});
    
    console.log(uploadResult);
    
    // Optimize delivery by resizing and applying auto-format and auto-quality
    const optimizeUrl = cloudinary.url("shoes", {
        fetch_format: 'auto',
        quality: 'auto'
    });
    
    console.log(optimizeUrl);
    
    // Transform the image: auto-crop to square aspect_ratio
    const autoCropUrl = cloudinary.url("shoes", {
        crop: 'auto',
        gravity: 'auto',
        width: 500,
        height: 500,
    });
    
    console.log(autoCropUrl);    
})();