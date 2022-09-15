const Button = (props) => {
    return ( 
        <div>
            <button className="bg-indigo text-white font-[Poppins] py-2 px-6 rounded md:ml-8 bg-indigo-400 hover:bg-indigo-800 duration-500">{props.children}</button>
        </div>
     );
}
 
export default Button;