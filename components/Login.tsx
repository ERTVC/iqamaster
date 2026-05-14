import React, { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { motion } from 'motion/react';
import { LogIn, Lock, User as UserIcon, AlertCircle } from 'lucide-react';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const success = await login(username, password);
    if (!success) {
      setError('Invalid username or password');
    }
    setLoading(false);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-3xl shadow-2xl p-8 border border-slate-100"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-indigo-100">
            <LogIn className="text-white w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Sign In</h2>
          <p className="text-slate-500 mt-1">Access the IQA Master Portal</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-rose-50 text-rose-600 px-4 py-3 rounded-xl flex items-center gap-2 text-sm font-medium border border-rose-100"
            >
              <AlertCircle size={18} />
              {error}
            </motion.div>
          )}

          <div className="space-y-2">
            <label className="label-sm">Username</label>
            <div className="relative">
              <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input-field pl-12"
                placeholder="Enter your username"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="label-sm">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field pl-12"
                placeholder="Enter password"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full py-3 text-lg mt-4 h-14"
          >
            {loading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full"
              />
            ) : (
              'Sign In'
            )}
          </button>
        </form>

        <div className="mt-8 pt-8 border-t border-slate-50">
          <p className="text-xs text-center text-slate-400 font-medium uppercase tracking-widest leading-relaxed">
            Authorized Personnel Only
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
