 function Header(){
   return (
<header className='header'>
       <img src={logo} alt="logo"  className='logo'/>
       <nav>
         <ul className='nav-list'>
            <li>Home</li>
            <li>Blog</li>
            <li>LogIn</li> 
         </ul>
       </nav>
   </header>
   )
}
export default Header;