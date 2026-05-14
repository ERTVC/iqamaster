

import React, { useContext } from 'react';
import { AuthContext } from './contexts/AuthContext';
import { Role } from './types';
import TrainerPortal from './components/TrainerPortal';
import ClassRepPortal from './components/ClassRepPortal';
import { IQAPortal } from './components/IQAPortal';
import HODPortal from './components/HODPortal';
import Login from './components/Login';
import Header from './components/Header';
import { motion, AnimatePresence } from 'motion/react';
import { LayoutDashboard } from 'lucide-react';

const App: React.FC = () => {
  const { currentUser, isAuthReady } = useContext(AuthContext);

  if (!isAuthReady) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
          className="h-12 w-12 border-t-2 border-b-2 border-indigo-600 rounded-full"
        />
      </div>
    );
  }

  const renderContent = () => {
    if (!currentUser) {
      return (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center gap-12 w-full max-w-4xl px-4 py-12"
        >
          <div className="text-center space-y-4">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center justify-center p-3 bg-indigo-600 rounded-2xl shadow-xl shadow-indigo-100 mb-2"
            >
              <LayoutDashboard className="w-8 h-8 text-white" strokeWidth={2} />
            </motion.div>
            
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
              ELADAMA RAVINE <span className="text-indigo-600">IQA Master</span>
            </h1>
          </div>

          <Login />
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.8 }}
            className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400"
          >
            Enter credentials provided by administration
          </motion.p>
        </motion.div>
      );
    }

    return (
      <motion.div 
        key={currentUser.role}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.02 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-7xl mt-20"
      >
        {(() => {
          switch (currentUser.role) {
            case Role.Trainer: return <TrainerPortal />;
            case Role.ClassRep: return <ClassRepPortal />;
            case Role.IQA: return <IQAPortal />;
            case Role.HOD: return <HODPortal />;
            default: return <div className="text-center p-12 bg-white rounded-3xl shadow-xl border border-slate-100">Invalid Role Profile</div>;
          }
        })()}
      </motion.div>
    );
  };

  return (
    <main className="min-h-screen bg-[#fafbfc] flex items-center justify-center p-4">
      <Header />
      <AnimatePresence mode="wait">
        {renderContent()}
      </AnimatePresence>
    </main>
  );
};


export default App;