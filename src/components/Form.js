const Form = () => {
    return ( 
        <div >
        <div>
            <h1 className="text-xl font-bold mb-3">Login Your details</h1>
        </div>
        <form className="" >
            <div className="">
                <label htmlFor="">Email Address</label><br/>
                <input type="emai" placeholder="Enter your email" className="w-80 bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none rounded-lg px-4 py-3"/>
            </div>
            <div>
                <label htmlFor="">Password</label><br/>
                <input type="emai" placeholder="Enter your password" className="w-80 bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none rounded-lg px-4 py-3"/>
            </div>
            <button className="w-80 bg-blue-400 px-3 py-3 text-white rounded-lg mt-5 hover:bg-blue-600 font-semibold">Submit</button>
        </form>
        </div>
     );
}
 
export default Form;