import React, { useState,useEffect } from 'react';
import { User, Lock, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { login } from '../http/authService'
import { useRole } from '../contexts/RoleContext';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { fetchRole,role } = useRole(); // Get fetchRole function

    useEffect(() => {
        if (role) {
          navigate("/dashboard"); // Redirect if already logged in
        }
      }, [role, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);
    
        try {
            const data = {
                user_id: username,
                password: password
            };
            
            const response = await login(data); // Await API call

            await fetchRole();
    
            // Check if login was successful before navigating
            if (response?.result === true) {
                navigate('/dashboard');
            } else {
                setError(response.msg);
            }
    
        } catch (err) {
            setError(err.response.data.msg);
        } finally {
            setIsLoading(false);
        }
    };
    

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white flex flex-col">
            {/* Logo Section */}
            <div className="w-full p-6 flex justify-end">
                <img
                    src="https://www.metermarket.co.uk/assets/manufacturers/_manufacturerTile2x/logo_secure.png"
                    alt="Secure Meter Logo"
                    className="h-12"
                />
            </div>

            {/* Login Form Section */}
            <div className="flex-1 flex items-center justify-center px-6">
                <div className="w-full max-w-md">
                    <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
                        <div className="text-center">
                            <h1 className="text-3xl font-bold text-gray-900">Welcome</h1>
                            <p className="mt-2 text-gray-600">Please sign in to your account</p>
                        </div>

                        {error && (
                            <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-4">
                                <div>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent pl-12 transition-all duration-200"
                                            placeholder="User ID"
                                            required
                                        />
                                        <User className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                                    </div>
                                </div>

                                <div>
                                    <div className="relative">
                                        <input
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent pl-12 transition-all duration-200"
                                            placeholder="Password"
                                            required
                                        />
                                        <Lock className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                                    />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-[#820C59]">
                                        Remember me
                                    </label>
                                </div>

                                <div className="text-sm">
                                    <a href="#" className="font-medium text-[#820C59]">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-[#820C59] hover:bg-[#722156] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? 'Signing In...' : (
                                    <>
                                        Sign In
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    <p className="mt-6 text-center text-sm text-gray-600">
                        Don't have an account?{' '}
                        <a href="#" className="font-medium text-[#820C59]">
                            Contact administrator
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;