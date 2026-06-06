import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../ServiceSection.css";

function ServiceSection({ services }) {

  const [active,setActive]=useState(0);

  return (

<section
className="services-section"
id="services"
>

<div className="service-container">

<h1 className="service-small-heading">
Services
</h1>

<p className="sub-heading">
Tap a service to see what's inside.
</p>


{/* TOP PILL BAR */}

<div className="service-tabs">

{
services.map((item,index)=>(

<button
key={index}
onClick={()=>
setActive(index)
}
className={`tab ${
active===index
? "active":""
}`}
>

{item.title}

</button>

))
}

</div>


<AnimatePresence mode="wait">

<motion.div
key={active}

initial={{
opacity:0,
y:25
}}

animate={{
opacity:1,
y:0
}}

exit={{
opacity:0,
y:-25
}}

transition={{
duration:.5
}}

className="service-grid"
>


<div className="image-box">

<img
src={services[active].image}
alt=""
className="service-image"
/>

</div>



<div className="content-wrap">

<h2 className="service-title">

{services[active].title}

</h2>

<p className="service-desc">

{services[active].desc}

</p>


<div className="features">

<div className="feature">
✓ Premium materials
</div>

<div className="feature">
✓ Professional finish
</div>

<div className="feature">
✓ Trusted service
</div>

</div>


<button
className="quote-btn"

onClick={()=>{
document
.getElementById("contact")
?.scrollIntoView({
behavior:"smooth"
})
}}
>

Enquire now →

</button>

</div>

</motion.div>




</AnimatePresence>

</div>

</section>

  );
}

export default ServiceSection;