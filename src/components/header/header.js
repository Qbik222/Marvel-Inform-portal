

import "./header.scss"





function Header (){

    return(
        <div className="header">
            <div className="header-header">  
                <h1><span>Marvel</span> Information Portal</h1>
                <div className="pages">
                    <a href="../../../public/index.html"><span>Characters</span></a>
                    <p>/</p>
                    <a href="../../../public/index.html">Comics</a>
                </div>
            </div>
        </div>
      
    )
}

export default Header;