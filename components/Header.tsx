import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { motion } from 'motion/react';
import { LogOut, User as UserIcon, Shield, GraduationCap, Users, UserCheck } from 'lucide-react';
import { Role } from '../types';

const Header: React.FC = () => {
  const { currentUser, logout } = useContext(AuthContext);

  if (!currentUser) return null;

  const getRoleIcon = () => {
    switch (currentUser.role) {
      case Role.IQA: return <Shield className="w-4 h-4" />;
      case Role.Trainer: return <GraduationCap className="w-4 h-4" />;
      case Role.ClassRep: return <Users className="w-4 h-4" />;
      case Role.HOD: return <UserCheck className="w-4 h-4" />;
      default: return <UserIcon className="w-4 h-4" />;
    }
  };

  const getRoleLabel = () => {
    switch (currentUser.role) {
      case Role.IQA: return 'Internal Quality Assurance';
      case Role.Trainer: return 'Technical Trainer';
      case Role.ClassRep: return 'Class Representative';
      case Role.HOD: return 'Head of Department';
      default: return currentUser.role;
    }
  };

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-3"
    >
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-lg shadow-slate-200/40 rounded-2xl px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-xl flex items-center justify-center text-white ${
              currentUser.role === Role.IQA ? 'bg-indigo-600' : 
              currentUser.role === Role.HOD ? 'bg-violet-600' :
              currentUser.role === Role.Trainer ? 'bg-emerald-600' : 'bg-amber-600'
            }`}>
              {getRoleIcon()}
            </div>
            <div>
              <h1 className="font-bold text-slate-900 leading-none">{currentUser.name}</h1>
              <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400 mt-1 flex items-center gap-1">
                {getRoleLabel()} {currentUser.department && `• ${currentUser.department}`}
              </p>
            </div>
          </div>

          <button 
            onClick={logout}
            className="flex items-center gap-2 px-4 py-2 hover:bg-rose-50 text-slate-600 hover:text-rose-600 rounded-xl transition-all active:scale-95 group font-medium"
          >
            <span className="text-sm">Sign Out</span>
            <LogOut className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
