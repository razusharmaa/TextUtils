import React, { useState, useEffect } from 'react';
import bbypic from './img/chua.png';

function Bby(props) {
  const [content, setContent] = useState('');
  const [index, setIndex] = useState(0);
  const text = `My Sweet <3,

I love you so much my chua, I want to assure you that I will never leave your side. I promise to stand by you through thick and thin, in joy and sorrow. I am committed to making our dreams come true, and one of those dreams is to marry you, the love of my life.

I promise to be there for you, to wipe away your tears, and to fill your life with laughter and happiness. I will strive every day to bring a smile to your face and warmth to your heart.

Remember, I love you, today and always.`;

  useEffect(() => {
    if (props.code) {
      const timeoutId = setTimeout(() => {
        setContent((prevContent) => prevContent + text.charAt(index));
        setIndex((prevIndex) => prevIndex + 1);
      }, 70); // Change the speed of typing here

      return () => clearTimeout(timeoutId);
    }
  }, [index, text, props.code]);

  return (
    <>
      {props.code && content === text && 
        <div className={`card mb-3 border-success text-bg-${props.mode} `} style={{ maxWidth: "540px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={bbypic} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title bby-name">Saru Singh (<span>Bby❤</span>)</h5>
                <p className="card-text">She is my adorable little small baby. I love her so much 😘😘. I promise that I will always keep her safe ❤</p>
                <p className='card-text bby-m'>I miss you so much my ❤</p>
                <a href="https://www.instagram.com/sarusingh376/" target="_blank" className="btn btn-primary">Follow her</a>
              </div>
            </div>
          </div>
        </div>
      }
{ props.code &&
      <div className='flex-column'>
        <div className={`glow my-5 ${props.mode === 'light' ? 'text-danger' : 'text-white'}`}>My Bby ❤️ </div>
        <pre className='container' style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>{content}</pre>
      </div>
}
    </>
  )
}

export default Bby
