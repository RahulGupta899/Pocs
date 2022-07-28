
function NavBar(){
    return(
        <div className='h-14 navbar shadow-2xl border bg-slate-100 flex justify-between'>
            <span className="material-symbols-outlined w-44 text-center text-lg pt-4">
            menu_open
            </span>

            <div className="w-56 flex justify-around items-center">
                <span className="material-symbols-outlined">
                notifications
                </span>
                <span className="material-symbols-outlined">
                dark_mode
                </span>
                <span className="material-symbols-outlined">
                g_translate
                </span>
            </div>
        </div>
    )
}
export default NavBar;