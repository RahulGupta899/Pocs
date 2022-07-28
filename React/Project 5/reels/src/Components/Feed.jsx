import './Styles/Feed.css'
function Feed(){
    return(
        <div>
           <div className="navbar-feed">
                <img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"></img>
                <div className="navigate">
                <img className="icon-img" src="https://cdn5.vectorstock.com/i/thumb-large/99/94/default-avatar-placeholder-profile-icon-male-vector-23889994.jpg"></img>
                <span className="icon material-icons">home</span>
                <span className="icon material-icons">logout</span>
                </div>
           </div>
           <div className="main-container">
                <div className="upload-reel">
                    <span class="material-symbols-outlined">movie</span>
                    <span className="font-bold">UPLOAD</span>
                </div>
                <div className="prev-reel">Reel Section</div>
           </div>
        </div>
    )
}

export default Feed;