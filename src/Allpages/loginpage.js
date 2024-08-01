
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Datashare } from "../App";
import images from "../images/login-png.jpg"

const LoginPage = () => {
    const {setLogin}=useContext(Datashare)
    const [form, setForm] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState({
        username: null,
        password: null,
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target; //const username=e.target.value
                                          //const password=e.target.value
        setForm(prevState => ({ ...prevState, [name]: value }));

        if (name === "username" && value.length < 6) {
            setError(prevError => ({ ...prevError, username: "Username must be at least 6 characters." }));
        } else {
            setError(prevError => ({ ...prevError, username: null }));
        }

        if (name === "password" && value.length < 6) {
            setError(prevError => ({ ...prevError, password: "Password must be at least 6 characters." }));
        } else {
            setError(prevError => ({ ...prevError, password: null }));
        }
        
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, password } = form;

        if (username.length>6 || password.length>6) {
            console.log("Login successful");
            setLogin(true)
            navigate("/home");
        } else {
            console.log("Invalid credentials");
            setError(prevError => ({ ...prevError, general: "Invalid Username and Password" }));
        }
    };

    return (
        <>
        
        <div className={"w-full h-[560px] border bg-gradient-to-r from-slate-500 to-slate-800 " }>
        <div className="absolute left-[50%] top-[100px]"><img src={images} alt="img" height={600} width={500}/></div>

            <div className="flex justify-center m-20  align-middle   rounded w-[30%] h-[400px] bg-gradient-to-r from-rose-100 to-teal-100 shadow-2xl">
                <form onSubmit={handleSubmit} className="flex justify-center flex-col rounded gap-8 pb-10 ">
                    <h1 className="text-4xl font-bold text-center underline underline-offset-8 p-10">Login</h1>
                    <div>
                        <label className="font-bold">Username:</label>
                        <input type="email" className="border-2 border-black rounded" value={form.username} name="username" onChange={handleChange} required />
                        {error.username && <p className="text-red-500">{error.username}</p>}
                    </div>
                    <div>
                        <label className="font-bold">Password: </label>
                        <input type="password" className="border-2 border-black rounded" value={form.password} name="password" onChange={handleChange} required />
                        {error.password && <p className="text-red-500">{error.password}</p>}
                    </div>
                    <div className="grid place-items-center">
                        <div className="mr-40 mb-8">
                            <input type="checkbox" className="ml-4 p-3 border-2 border-black" />
                            <label className="font-bold ml-2">Remember</label>
                        </div>
                        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-28 border-b-4 border-blue-700 hover:border-blue-500 rounded" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
};

export default LoginPage;

