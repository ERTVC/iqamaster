import { Class, Trainee, Trainer, User, Role, Unit, UnitAssignment } from './types';

export const TRAINERS: Trainer[] = [
  { id: 'trainer-1', name: 'Trainer 1', department: 'Computing and Informatics', ePortfolioLink: '' },
  { id: 'trainer-2', name: 'Trainer 2', department: 'Electrical Engineering', ePortfolioLink: '' },
  { id: 'trainer-3', name: 'Trainer 3', department: 'Mechanical and Automotive Engineering', ePortfolioLink: '' },
  { id: 'trainer-4', name: 'Trainer 4', department: 'Computing and Informatics', ePortfolioLink: '' },
  { id: 'trainer-5', name: 'Trainer 5', department: 'Electrical Engineering', ePortfolioLink: '' },
];

export const TRAINEES: Trainee[] = [
  { id: 'trainee-1', name: 'Alice Johnson', admissionNumber: 'CI101', classId: 'CI-L6-ICT' },
  { id: 'trainee-2', name: 'Bob Williams', admissionNumber: 'CI102', classId: 'CI-L6-ICT' },
  { id: 'trainee-3', name: 'Charlie Brown', admissionNumber: 'EE201', classId: 'EE-L6-EET' },
  { id: 'trainee-4', name: 'Diana Miller', admissionNumber: 'MA301', classId: 'MA-L6-AT' },
];

export const USERS: User[] = [
  { id: 'user-iqa-1', name: 'Internal Quality Assurance', username: 'iqa', password: '123', role: Role.IQA },
  { id: 'user-hod-1', name: 'HOD Computing', username: 'hod1', password: '123', role: Role.HOD, department: 'Computing and Informatics' },
  { id: 'user-hod-2', name: 'HOD Electrical', username: 'hod2', password: '123', role: Role.HOD, department: 'Electrical Engineering' },
  { id: 'trainer-1', name: 'Trainer 1', username: 'trainer1', password: '123', role: Role.Trainer, department: 'Computing and Informatics' },
  { id: 'trainer-2', name: 'Trainer 2', username: 'trainer2', password: '123', role: Role.Trainer, department: 'Electrical Engineering' },
  { id: 'user-rep-1', name: 'Class Rep 1', username: 'classrep1', password: '123', role: Role.ClassRep, department: 'Computing and Informatics' },
  { id: 'user-rep-2', name: 'Class Rep 2', username: 'classrep2', password: '123', role: Role.ClassRep, department: 'Electrical Engineering' },
  { id: 'user-rep-3', name: 'Class Rep 3', username: 'classrep3', password: '123', role: Role.ClassRep, department: 'Mechanical and Automotive Engineering' },
  { id: 'user-rep-4', name: 'Class Rep 4', username: 'classrep4', password: '123', role: Role.ClassRep, department: 'Computing and Informatics' },
  { id: 'user-rep-5', name: 'Class Rep 5', username: 'classrep5', password: '123', role: Role.ClassRep, department: 'Electrical Engineering' },
  { id: 'user-rep-6', name: 'Class Rep 6', username: 'classrep6', password: '123', role: Role.ClassRep, department: 'Mechanical and Automotive Engineering' },
  { id: 'user-rep-7', name: 'Class Rep 7', username: 'classrep7', password: '123', role: Role.ClassRep, department: 'Computing and Informatics' },
  { id: 'user-rep-8', name: 'Class Rep 8', username: 'classrep8', password: '123', role: Role.ClassRep, department: 'Electrical Engineering' },
  { id: 'user-rep-9', name: 'Class Rep 9', username: 'classrep9', password: '123', role: Role.ClassRep, department: 'Mechanical and Automotive Engineering' },
];

export const CLASSES: Class[] = [
  // 1. Computing and Informatics
  { id: 'CI-L6-ICT', name: 'ICT TECHNICIAN LEVEL 6', department: 'Computing and Informatics' },
  { id: 'CI-L6-LIM', name: 'LIBRARY AND INFORMATION MANAGEMENT LEVEL 6', department: 'Computing and Informatics' },
  { id: 'CI-L6-NSA', name: 'NETWORK SYSTEM ADMINISTRATION LEVEL 6', department: 'Computing and Informatics' },
  { id: 'CI-L6-SD', name: 'SOFTWARE DEVELOPER LEVEL 6', department: 'Computing and Informatics' },
  { id: 'CI-L5-ICT', name: 'INFORMATION COMMUNICATION TECHNOLOGY LEVEL 5', department: 'Computing and Informatics' },
  { id: 'CI-L5-LIM', name: 'LIBRARY AND INFORMATION MANAGEMENT LEVEL 5', department: 'Computing and Informatics' },
  { id: 'CI-L5-NSA', name: 'NETWORK SYSTEM ADMINISTRATION LEVEL 5', department: 'Computing and Informatics' },
  { id: 'CI-L5-SD', name: 'SOFTWARE DEVELOPMENT LEVEL 5', department: 'Computing and Informatics' },
  { id: 'CI-L4-ICT', name: 'INFORMATION AND COMMUNICATION TECHNOLOGY LEVEL 4', department: 'Computing and Informatics' },

  // 2. Electrical Engineering
  { id: 'EE-L6-EET', name: 'ELECTRICAL ENGINEERING TECHNOLOGY LEVEL 6', department: 'Electrical Engineering' },
  { id: 'EE-L6-IMT', name: 'INDUSTRIAL MECHATRONICS TECHNOLOGY LEVEL 6', department: 'Electrical Engineering' },
  { id: 'EE-L6-ICT', name: 'INSTRUMENTATION AND CONTROL TECHNICIAN LEVEL 6', department: 'Electrical Engineering' },
  { id: 'EE-L6-TT', name: 'TELECOMMUNICATION TECHNOLOGY LEVEL 6', department: 'Electrical Engineering' },
  { id: 'EE-L5-EET', name: 'ELECTRICAL ENGINEERING TECHNOLOGY LEVEL 5', department: 'Electrical Engineering' },
  { id: 'EE-L5-ICT', name: 'INSTRUMENTATION AND CONTROL TECHNOLOGY LEVEL 5', department: 'Electrical Engineering' },
  { id: 'EE-L5-SPV', name: 'SOLAR PV SYSTEM INSTALLATION TECHNOLOGY LEVEL 5', department: 'Electrical Engineering' },
  { id: 'EE-L5-TT', name: 'TELECOMMUNICATION TECHNOLOGY LEVEL 5', department: 'Electrical Engineering' },
  { id: 'EE-L4-EIT', name: 'ELECTRICAL INSTALLATION TECHNOLOGY LEVEL 4', department: 'Electrical Engineering' },
  { id: 'EE-L4-EA', name: 'ELECTRONICS ARTISAN LEVEL 4', department: 'Electrical Engineering' },
  { id: 'EE-L4-ICO', name: 'INSTRUMENTATION AND CONTROL OPERATOR LEVEL 4', department: 'Electrical Engineering' },
  { id: 'EE-L4-SPV', name: 'SOLAR PV SYSTEMS INSTALLER LEVEL 4', department: 'Electrical Engineering' },
  { id: 'EE-L3-EIT', name: 'ELECTRICAL INSTALLATION TECHNOLOGY LEVEL 3', department: 'Electrical Engineering' },
  { id: 'EE-L3-EA', name: 'ELECTRONICS ARTISAN LEVEL 3', department: 'Electrical Engineering' },
  { id: 'EE-L3-SPV', name: 'SOLAR PV SYSTEMS INSTALLER LEVEL 3', department: 'Electrical Engineering' },

  // 3. Mechanical and Automotive Engineering
  { id: 'MA-L6-AT', name: 'AUTOBODY TECHNOLOGY LEVEL 6', department: 'Mechanical and Automotive Engineering' },
  { id: 'MA-L6-AET', name: 'AUTOMOTIVE ENGINEERING TECHNOLOGY LEVEL 6', department: 'Mechanical and Automotive Engineering' },
  { id: 'MA-L6-CPT', name: 'CONSTRUCTION PLANT TECHNOLOGY LEVEL 6', department: 'Mechanical and Automotive Engineering' },
  { id: 'MA-L6-IAR', name: 'INDUSTRIAL AUTOMATION AND ROBOTICS TECHNOLOGY LEVEL 6', department: 'Mechanical and Automotive Engineering' },
  { id: 'MA-L6-MPT', name: 'MECHANICAL PLANT TECHNOLOGY LEVEL 6', department: 'Mechanical and Automotive Engineering' },
  { id: 'MA-L6-MPR', name: 'MECHANICAL PRODUCTION TECHNOLOGY LEVEL 6', department: 'Mechanical and Automotive Engineering' },
  { id: 'MA-L5-AT', name: 'AUTOBODY TECHNOLOGY LEVEL 5', department: 'Mechanical and Automotive Engineering' },
  { id: 'MA-L5-AET', name: 'AUTOMOTIVE ENGINEERING TECHNOLOGY LEVEL 5', department: 'Mechanical and Automotive Engineering' },
  { id: 'MA-L5-CPT', name: 'CONSTRUCTION PLANT TECHNOLOGY LEVEL 5', department: 'Mechanical and Automotive Engineering' },
  { id: 'MA-L5-IAR', name: 'INDUSTRIAL AUTOMATION AND ROBOTICS TECHNOLOGY LEVEL 5', department: 'Mechanical and Automotive Engineering' },
  { id: 'MA-L5-MPT', name: 'MECHANICAL PLANT TECHNOLOGY LEVEL 5', department: 'Mechanical and Automotive Engineering' },
  { id: 'MA-L5-MPR', name: 'MECHANICAL PRODUCTION TECHNOLOGY LEVEL 5', department: 'Mechanical and Automotive Engineering' },
  { id: 'MA-L5-WT', name: 'WELDING TECHNOLOGY LEVEL 5', department: 'Mechanical and Automotive Engineering' },
  { id: 'MA-L4-CNCL', name: 'CNC LATHE OPERATIONS (PRODUCTION) LEVEL 4', department: 'Mechanical and Automotive Engineering' },
  { id: 'MA-L4-CNCM', name: 'CNC MILLING OPERATIONS (PRODUCTION) LEVEL 4', department: 'Mechanical and Automotive Engineering' },
  { id: 'MA-L4-IAR', name: 'INDUSTRIAL AUTOMATION AND ROBOTICS OPERATIONS LEVEL 4', department: 'Mechanical and Automotive Engineering' },
  { id: 'MA-L4-MPF', name: 'MECHANICAL PIPING FABRICATION LEVEL 4', department: 'Mechanical and Automotive Engineering' },
  { id: 'MA-L4-MPMO', name: 'MECHANICAL PRODUCTION MACHINE OPERATION LEVEL 4', department: 'Mechanical and Automotive Engineering' },
  { id: 'MA-L4-MVE', name: 'MOTOR VEHICLE ELECTRICS LEVEL 4', department: 'Mechanical and Automotive Engineering' },
  { id: 'MA-L4-MVM', name: 'MOTOR VEHICLE MECHANICS LEVEL 4', department: 'Mechanical and Automotive Engineering' },
  { id: 'MA-L4-MM', name: 'MOTORCYCLE MECHANICS LEVEL 4', department: 'Mechanical and Automotive Engineering' },
  { id: 'MA-L4-SP', name: 'SPRAY PAINTING LEVEL 4', department: 'Mechanical and Automotive Engineering' },
  { id: 'MA-L4-W', name: 'WELDING LEVEL 4', department: 'Mechanical and Automotive Engineering' },
  { id: 'MA-L3-MVE', name: 'MOTOR VEHICLE ELECTRICS LEVEL 3', department: 'Mechanical and Automotive Engineering' },
  { id: 'MA-L3-MVM', name: 'MOTOR VEHICLE MECHANICS LEVEL 3', department: 'Mechanical and Automotive Engineering' },
  { id: 'MA-L3-MM', name: 'MOTORCYCLE MECHANICS LEVEL 3', department: 'Mechanical and Automotive Engineering' },
  { id: 'MA-L3-PB', name: 'PANEL BEATING LEVEL 3', department: 'Mechanical and Automotive Engineering' },
  { id: 'MA-L3-W', name: 'WELDING LEVEL 3', department: 'Mechanical and Automotive Engineering' },
];

export const UNITS: Unit[] = [
  { id: 'unit-1', name: 'Core Computing Principles', classId: 'CI-L6-ICT' },
  { id: 'unit-2', name: 'Advanced Networking', classId: 'CI-L6-NSA' },
  { id: 'unit-3', name: 'Electrical Systems', classId: 'EE-L6-EET' },
  { id: 'unit-4', name: 'Industrial Mechatronics', classId: 'EE-L6-IMT' },
  { id: 'unit-5', name: 'Autobody Maintenance', classId: 'MA-L6-AT' },
];

export const UNIT_ASSIGNMENTS: UnitAssignment[] = [
  { unitId: 'unit-1', trainerId: 'trainer-1' },
  { unitId: 'unit-2', trainerId: 'trainer-4' },
  { unitId: 'unit-3', trainerId: 'trainer-2' },
  { unitId: 'unit-4', trainerId: 'trainer-5' },
  { unitId: 'unit-5', trainerId: 'trainer-3' },
];
