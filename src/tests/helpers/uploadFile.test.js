import { uploadFile } from "../../helpers/uploadFile"
import cloudinary from 'cloudinary'

cloudinary.config({ 
    cloud_name: '', 
    api_key: '', 
    api_secret: '' 
  });

describe('Testing uploadFile helper', () => {
    
    test('debe de cargar un archivo y retonar el URL', async ()=>{
 
        // Fetch blob from internet
        const response = await fetch('https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png');
        const blob = await response.blob();
 
        // Upload image
        const file = new File([blob], 'foto.png');
        const url = await uploadFile(file);
 
        expect( typeof url ).toBe('string');
        expect( url.includes('http') ).toBe( true );

        // Delete image
        const segments = url.split('/');
        const imgId = segments[ segments.length - 1 ].replace('.png','');
       
        await cloudinary.v2.api.delete_resources(imgId);
    });

    test('should return null when the url is empty', async () => {

        const file = new File([], 'image.png');
        const url = await uploadFile( file );

        expect( url ).toBe( null );
    })
    
})
