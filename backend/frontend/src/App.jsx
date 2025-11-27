import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChibestChat from './components/ChibestChat';
import ProSwitch from './components/ProSwitch';
import CommunityNotes from './components/CommunityNotes';

function App() {
  const [user, setUser] = useState(null);
  const [mood, setMood] = useState('neutral');

  useEffect(() => {
    const saved = localStorage.getItem('user');
    if (saved) setUser(JSON.parse(saved));
  }, []);

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 to-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-8xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">BRAIN</h1>
          <p className="text-2xl mt-4">The cleanest & smartest social network</p>
          <button className="mt-8 bg-white text-black px-12 py-5 rounded-full text-xl font-bold">Join Now – 100% SFW</button>
        </div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <div className={`min-h-screen ${mood === 'happy' ? 'bg-gradient-to-br from-yellow-600 to-pink-600' : mood === 'calm' ? 'from-blue-900 to-teal-900' : 'from-purple-900 to-black'} text-white`}>
        <ChibestChat user={user} />
        {user.isProfessional ? <ProSwitch user={user} setUser={setUser} /> : <h1 className="text-6xl text-center pt-10">Welcome, {user.username}!</h1>}
        <div className="p-6">
          <CommunityNotes postId={1} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
