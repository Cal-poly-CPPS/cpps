
function SideNav (props){
return (
<>

<div>
   <div className="sidenav">
      <a href="#section">
         <button 
         onMouseOver={enterButton}
         onMouseLeave = {leaveButton}
         id = "navButton"
         style={{
            marginTop: "22.5px",
            margin: "8px",
         }}>
         
            Home
         </button>
      </a>
      <a href="#section"
      >
      <button 
         onMouseOver={enterButton}
         onMouseLeave = {leaveButton}
         id = "navButton"
         style={{
            margin: "10px",
         }}
         >
         
            Calender
         </button>
      </a>
      <a href="#section">
      <button 
         onMouseOver={enterButton}
         onMouseLeave = {leaveButton}
         id = "navButton"
         style={{
            margin: "10px",
         }}>
         
            Classes
         </button>
      </a>
      <a href="#section"
      >
      <button r4
         onMouseOver={enterButton}
         onMouseLeave = {leaveButton}
         id = "navButton"
         style={{
            margin: "10px",
         }}>
            Search
         </button>
      </a>

      <a href="#section"
      >
      <button 
         onMouseOver={enterButton}
         onMouseLeave = {leaveButton}
         id = "navButton"
         style={{
            margin: "20px",
            marginTop: "50px",
         }}>
            Sign In
         </button>
      </a>
      
      <a href="#section"
      >
      <button 
         onMouseOver={enterButton}
         onMouseLeave = {leaveButton}
         id = "navButton"
         style={{
            margin: "20px",
         }}>
            Search
         </button>
      </a>
      <a href="#section"
      
         onMouseOver={enterButton}
         onMouseLeave = {leaveButton}
        
         style={{
            
            position: "absolute",
            left:"100px",
            bottom: "30px",
            fontFamily: "arial",
            fontSize: "20px",
            color: "white",
            
         }}>
            Settings
      </a>

      </div>


</div>

<hr
style = {{
   top: "0px",
   background: "#FFFFFF",
   height: "98.5vh ",
   border: "none",
   position: 'absolute', 
   zIndex: '2',
   left: "200px",
   width: '1px',
   
}}
/>

<hr
   style={{
   background: "#FFFFFF",
   height: "1px",
   border: "none",
   position: 'absolute', 
   zIndex: '2',
   top: "280px",
   left: "20px",
   width: '162.5px',

   }}

   />


</>
 );
};

function enterButton(e){
   e.target.style.background = '#AFADAD';
}


function leaveButton(e){
   e.target.style.background = '#262525';
}
export default SideNav;