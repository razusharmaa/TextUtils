import React from 'react'
import bbypic from './img/chua.png';

function Bby(props) {
  return (
    props.code &&
    <>
    
    <div className={`card mb-3 border-success text-bg-${props.mode} `} style={{maxWidth: "540px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={bbypic} className="img-fluid rounded-start" alt="..."/>
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


<div className='flex-column'>


<div className="rose1">
	<div className="glass"></div>
	<div className="thorns">
		<div></div>
		<div></div>
		<div></div>
		<div></div>
	</div>
	<div className="glow"></div>
	<div className="rose-leaves">
		<div></div>
		<div></div>
	</div>
	<div className="rose-petals">
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
	</div>
	<div className="sparkles">
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
	</div>
</div>
<div className={`glow my-5 ${props.mode==='light'?'text-danger':'text-white'}`}>Happy Rose Day my bby </div>
</div>

    </>
  )
}

export default Bby
