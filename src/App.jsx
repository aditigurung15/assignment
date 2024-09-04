import React, { useState, useRef } from "react";
import "./App.css";

const App = () => {

  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [images, setImages] = useState([
    './building.jpg',
    './building.jpg',
    './building.jpg'
  ]);
  const galleryRef = useRef(null);

  const toggleGallery = () => {
    setIsGalleryOpen(!isGalleryOpen);
  };

  const openImageWindow = () => {
    const newWindow = window.open("", "_blank", "width=600,height=400");
    newWindow.document.write('<div id="newGallery"></div>');
    newWindow.document.write(
      '<script>function selectImage(url) {window.opener.addImageToGallery(url);window.close();}</script>'
    );

    const imageUrls = Array.from({ length: 10 }, (_, index) => `https://picsum.photos/200?random=${index + 1}`);
    imageUrls.forEach((url, index) => {
      newWindow.document.write(
        `<div style="width: 700px; height: 200px"> <img src="${url}" onclick="selectImage('${url}')" style="width: 200px; height: 200px; margin: 10px; cursor: pointer;" alt="Random ${index + 1}"></div>`
      );
    });

    newWindow.document.close();
  };

  window.addImageToGallery = (url) => {
    setImages((prevImages) => [...prevImages, url]);
  };

  const scrollLeft = () => {
    galleryRef.current.scrollLeft -= 200;
  };

  const scrollRight = () => {
    galleryRef.current.scrollLeft += 200;
  };

  return (
    <>
      <div className="top-container">
        <div className="left"></div>
        <div className="right">
          <div className="top-right">
            <div className="top-right-left">
              <i className="fa-solid fa-question"></i>
              <div className="grid">
                <div className="grid1">
                  <div className="grid1-1"></div>
                  <div className="grid1-2"></div>
                </div>
                <div className="grid1">
                  <div className="grid1-1"></div>
                  <div className="grid1-2"></div>
                </div>
                <div className="grid1">
                  <div className="grid1-1"></div>
                  <div className="grid1-2"></div>
                </div>
                <div className="grid1">
                  <div className="grid1-1"></div>
                  <div className="grid1-2"></div>
                </div>
              </div>
            </div>
            <div className="top-right-right">
              <div className="button">
                <button>About me</button>
                <button>Experiences</button>
                <button>Recommended</button>
              </div>
              <div className="paragraph">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aperiam maiores illo harum vel commodi doloremque praesentium
                  cumque officiis vero reiciendis.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  animi distinctio id provident. Quasi minus, eveniet debitis
                  dolores nesciunt consequatur modi quia temporibus. Architecto
                  asperiores exercitationem quod harum officiis veritatis iusto
                  placeat at tempora? Corporis molestiae qui vero dolores magnam
                  nemo, ex natus quam nihil placeat sit sed incidunt. Aspernatur
                  sequi quasi dolorum natus animi. Sed iure nisi accusamus.
                  Expedita.
                </p>
              </div>
            </div>
          </div>

          <div className="bottom-right">
            <div className="top-right-left">
              <i className="fa-solid fa-question"></i>
              <div className="grid">
                <div className="grid1">
                  <div className="grid1-1"></div>
                  <div className="grid1-2"></div>
                </div>
                <div className="grid1">
                  <div className="grid1-1"></div>
                  <div className="grid1-2"></div>
                </div>
                <div className="grid1">
                  <div className="grid1-1"></div>
                  <div className="grid1-2"></div>
                </div>
                <div className="grid1">
                  <div className="grid1-1"></div>
                  <div className="grid1-2"></div>
                </div>
              </div>
            </div>

            <div className="gallary-image">
              <div className="gallary">
                <div className="gallary-left">
                  <button onClick={toggleGallery}>Gallery</button>
                </div>
                <div className="gallary-right scroll-wrapper gallery-wrapper">
                  <button className="add-button" onClick={openImageWindow}>
                    + Add Image
                  </button>

                  <div className="gallary-right1">
                    <button className="scroll-button-left" onClick={scrollLeft}>
                      <i className="fa-solid fa-arrow-left-long"></i>
                    </button>


                  
                    <button className="scroll-button-right" onClick={scrollRight}>
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </button>



                    



                  </div>
                </div>
              </div>


{/* 
              <div className="gallery">
                    {images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`${index + 1}`}
                        className="gallery-image"
                        id="gallery-image"
                      />
                    ))}
                  </div> */}

                  
                    <div className="gallery" ref={galleryRef}>
                      {images.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`${index + 1}`}
                          className="gallery-image"
                          id="gallery-image"
                        />
                      ))}
                    </div>
              
             




              {isGalleryOpen && (
                <div
                  ref={scrollContainerRef}
                  className="imagess scroll-container image-gallery"
                  id="images"
                >


                  <img src="./building.jpg" alt="" className="scroll-item image-item" />
                  <img src="./building.jpg" alt="" className="scroll-item image-item" />
                  <img src="./building.jpg" alt="" className="scroll-item image-item" />
                  {/* <img src="./building.jpg" alt="" className="scroll-item image-item" />
                  <img src="./building.jpg" alt="" className="scroll-item image-item" />
                  <img src="./building.jpg" alt="" className="scroll-item image-item" />
                  <img src="./building.jpg" alt="" className="scroll-item image-item" />
                  <img src="./building.jpg" alt="" className="scroll-item image-item" />
                  <img src="./building.jpg" alt="" className="scroll-item image-item" /> */}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
