import React from 'react';


export default function Home() {
    
        return (
            <div className="bg-[#1b2838] text-white">
                <header className="flex items-center justify-between p-4">
                    <div className="flex items-center space-x-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            className="text-blue-500 h-8 w-8">
                            <line x1="6" x2="10" y1="12" y2="12"></line>
                            <line x1="8" x2="8" y1="10" y2="14"></line>
                            <line x1="15" x2="15.01" y1="13" y2="13"></line>
                            <line x1="18" x2="18.01" y1="11" y2="11"></line>
                            <rect width="20" height="12" x="2" y="6" rx="2"></rect>
                        </svg>
                        <h1 className="text-2xl font-bold">Ideal Pancake</h1>
                    </div>
                    <nav className="flex space-x-6">
                        <a className="hover:text-blue-500" href="#">Games</a>
                        <a className="hover:text-blue-500" href="#">Other</a>
                        <a className="hover:text-blue-500" href="#">Community</a>
                        <a className="hover:text-blue-500" href="#">User</a>
                    </nav>
                    <div className="flex items-center space-x-2">
                        <input
                            className="flex h-10 w-full border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-md bg-[#2a475e] text-white"
                            placeholder="Search" type="search" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            className="text-gray-300 h-6 w-6">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </svg>
                        <button className="hover:text-red-500">
                            Iniciar sesión
                        </button>
                    </div>

                </header>
                <section className="p-4">
                    <h2 className="text-2xl font-semibold mb-4">Highlights</h2>
                    <div className="grid grid-cols-5 gap-4">
                        <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full" data-v0-t="card">
                            <img src="https://placekitten.com/g/200/300" alt="Game 1" className="rounded-t-md" width="300"
                                height="200" />
                            <div className="p-4">
                                <h3 className="font-bold text-lg">Starlight Adventure</h3>
                                <p className="text-sm text-gray-400">JoyBuggy -49% $15.36</p>
                            </div>
                        </div>
                        <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full" data-v0-t="card">
                            <img src="https://placekitten.com/g/200/300" alt="Game 2" className="rounded-t-md" width="300"
                                height="200" />
                            <div className="p-4">
                                <h3 className="font-bold text-lg">Mystic Quest</h3>
                                <p className="text-sm text-gray-400">Steam -33% $9.99</p>
                            </div>
                        </div>
                        <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full" data-v0-t="card">
                            <img src="https://placekitten.com/g/200/300" alt="Game 3" className="rounded-t-md" width="300"
                                height="200" />
                            <div className="p-4">
                                <h3 className="font-bold text-lg">Galaxy Explorer</h3>
                                <p className="text-sm text-gray-400">Epic Games -25% $22.49</p>
                            </div>
                        </div>
                        <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full" data-v0-t="card">
                            <img src="https://placekitten.com/g/200/300" alt="Game 4" className="rounded-t-md" width="300"
                                height="200" />
                            <div className="p-4">
                                <h3 className="font-bold text-lg">Ancient Realms</h3>
                                <p className="text-sm text-gray-400">Origin -40% $17.99</p>
                            </div>
                        </div>
                        <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full" data-v0-t="card">
                            <img src="https://placekitten.com/g/200/300" alt="Game 5" className="rounded-t-md" width="300"
                                height="200" />
                            <div className="p-4">
                                <h3 className="font-bold text-lg">Lost in Time</h3>
                                <p className="text-sm text-gray-400">GOG -50% $4.99</p>
                            </div>
                        </div>
                    </div>

                </section>
                <section>

                </section>

                <footer>
                    <p className="text-xl ">&copy; 2024 Ideal Pancake. Todos los derechos reservados.</p>
                </footer>
            </div>
        );
    }
