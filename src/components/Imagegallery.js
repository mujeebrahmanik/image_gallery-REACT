import React,{useState,useEffect} from 'react'
import './imagegallery.css'
import logo from '../assets/logo192.png'

function Imagegallery() {
    const [image, setImage] = useState([])

useEffect(() => {

    const fetch=()=>{
        const imagedata=[
            {
                id:1,
                url:'https://cdn.britannica.com/35/238335-050-2CB2EB8A/Lionel-Messi-Argentina-Netherlands-World-Cup-Qatar-2022.jpg',
                title:'messi'
            },
            {
                id:2,
                url:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRXqO4pBeLoXaegT8aDlnPzNBT0j-EmFaYi9_iL_ZFCago1SNWD',
                title:'cristiano'
            },
            {
                id:3,
                url:'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSYWhI7TCv3XhwY1rcvjB7B_sFrAYUvLKQMgPJIaGO-qlIx2pSa',
                title:'neymar'
            },
            {
                id:4,
                url:'https://backend.liverpoolfc.com/sites/default/files/styles/lg/public/2024-09/mo-salah-potm-190924.webp?itok=UQps90-D&width=1680',
                title:'salah'
            },
            {
                id:5,
                url:'https://assets.goal.com/images/v3/blt435bc0d4b7a00f75/Sunil_Chhetri.jpg?auto=webp&format=pjpg&width=3840&quality=60',
                title:'sunil chehthri'
            },

        ]

        setImage(imagedata)
    }

    fetch();
 
}, [])

const deletefn=(id)=>{

    setImage(image.filter((image)=>image.id !== id))


}


    

    
   

  return (
    <div className='container'>
        <h1 className='title'>Image gallery</h1>
        <div className='image-grid'>
            {
                image.length==0?<h1 className='noimage'>No images found</h1>:
            image.map((img)=>(
                <div className='image-card' key={img.id}>
                <img src={img.url} alt='Image' />
                <div className='image-details'>
                    <h3 className='image-title'>{img.title}</h3>
                    <button className='deletebutton' onClick={()=>deletefn(img.id)}>Delete</button>
                </div>
            </div>
            ))
            }
            

        </div>
      
    </div>
  )
}

export default Imagegallery
