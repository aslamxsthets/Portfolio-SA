import { SkillItem, SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  'DIGITAL AND MOBILE FORENSICS',
  'NETWORK SECURITY',
  'SECURITY TOOLS',
  'PROGRAMMING AND SYSTEMS'
];

export const skillsData: SkillItem[] = [
  {
    name: 'Digital and Mobile Forensics',
    category: 'DIGITAL AND MOBILE FORENSICS',
    status: 'ACTIVE FOCUS',
    hakiType: 'Flow/Analysis',
    description: 'Investigating digital and mobile evidence, artifacts, and forensic timelines to support security cases.',
    visualMetaphor: 'Forensic Scan'
  },
  {
    name: 'Autopsy',
    category: 'DIGITAL AND MOBILE FORENSICS',
    status: 'COMFORTABLE',
    hakiType: 'Flow/Analysis',
    description: 'Disk image analysis, keyword search, artifact review, and forensic timeline support.',
    visualMetaphor: 'Forensic Investigation Scan'
  },
  {
    name: 'Evidence Analysis',
    category: 'DIGITAL AND MOBILE FORENSICS',
    status: 'ACTIVE FOCUS',
    hakiType: 'Observation/Detection',
    description: 'Reviewing artifacts and source data to confirm evidence integrity and interpret findings.',
    visualMetaphor: 'Evidence Scrutiny Pulse'
  },
  {
    name: 'Incident Response',
    category: 'DIGITAL AND MOBILE FORENSICS',
    status: 'ACTIVE FOCUS',
    hakiType: 'Armament/Hardening',
    description: 'Triage, containment, and structured investigation of suspicious security events.',
    visualMetaphor: 'Alert Pulse & Triage'
  },
  {
    name: 'Network Analysis',
    category: 'NETWORK SECURITY',
    status: 'COMFORTABLE',
    hakiType: 'Observation/Detection',
    description: 'Reviewing network structures, traffic flow, and protocol behavior for suspicious activity.',
    visualMetaphor: 'Packet Stream Dissection'
  },
  {
    name: 'Wireshark',
    category: 'NETWORK SECURITY',
    status: 'COMFORTABLE',
    hakiType: 'Observation/Detection',
    description: 'Packet capture analysis, stream inspection, and protocol-level traffic review.',
    visualMetaphor: 'Packet Wave Visualization'
  },
  {
    name: 'Nmap / Zenmap',
    category: 'NETWORK SECURITY',
    status: 'COMFORTABLE',
    hakiType: 'Observation/Detection',
    description: 'Network discovery, port scanning, and service identification for reconnaissance workflows.',
    visualMetaphor: 'Surface Mapping'
  },
  {
    name: 'Network Defense',
    category: 'NETWORK SECURITY',
    status: 'ACTIVE FOCUS',
    hakiType: 'Armament/Hardening',
    description: 'Designing defensive network controls and improving detection and response posture.',
    visualMetaphor: 'Perimeter Barrier Grid'
  },
  {
    name: 'SIEM',
    category: 'NETWORK SECURITY',
    status: 'ACTIVE FOCUS',
    hakiType: 'Observation/Detection',
    description: 'Security information and event monitoring as part of network security operations.',
    visualMetaphor: 'Signal Correlation'
  },
  {
    name: 'Splunk',
    category: 'SECURITY TOOLS',
    status: 'ACTIVE FOCUS',
    hakiType: 'Observation/Detection',
    description: 'Searching, correlating, and analyzing security logs for investigation and triage activity.',
    visualMetaphor: 'Signal Wave Filtering'
  },
  {
    name: 'Metasploit',
    category: 'SECURITY TOOLS',
    status: 'PRACTICING',
    hakiType: 'Observation/Detection',
    description: 'Exploring exploitation concepts and security testing workflows in controlled environments.',
    visualMetaphor: 'Payload X-Ray'
  },
  {
    name: 'Burp Suite',
    category: 'SECURITY TOOLS',
    status: 'COMFORTABLE',
    hakiType: 'Observation/Detection',
    description: 'Web application security testing, request inspection, and vulnerability review.',
    visualMetaphor: 'Proxy Flow Analysis'
  },
  {
    name: 'VeraCrypt',
    category: 'SECURITY TOOLS',
    status: 'COMFORTABLE',
    hakiType: 'Armament/Hardening',
    description: 'Secure storage review and encryption-focused investigation in digital forensics contexts.',
    visualMetaphor: 'Cryptographic Container Analysis'
  },
  {
    name: 'Python Scripting',
    category: 'PROGRAMMING AND SYSTEMS',
    status: 'ACTIVE FOCUS',
    hakiType: 'Flow/Analysis',
    description: 'Automation, analysis, and practical scripting for forensic and security workflows.',
    visualMetaphor: 'Automation Script Flow'
  },
  {
    name: 'Linux',
    category: 'PROGRAMMING AND SYSTEMS',
    status: 'COMFORTABLE',
    hakiType: 'Flow/Analysis',
    description: 'Command-line operations, system navigation, and security tooling usage on Linux systems.',
    visualMetaphor: 'Kernel Trace'
  },
  {
    name: 'Windows',
    category: 'PROGRAMMING AND SYSTEMS',
    status: 'COMFORTABLE',
    hakiType: 'Flow/Analysis',
    description: 'Windows environment operations, event analysis, and system-level investigation workflows.',
    visualMetaphor: 'Registry Deep Sweep'
  },
  {
    name: 'Visual Studio Code',
    category: 'PROGRAMMING AND SYSTEMS',
    status: 'ACTIVE FOCUS',
    hakiType: 'Flow/Analysis',
    description: 'Primary development environment for scripting, analysis, and practical security project work.',
    visualMetaphor: 'Code Matrix'
  },
  {
    name: 'Cisco Packet Tracer',
    category: 'PROGRAMMING AND SYSTEMS',
    status: 'PRACTICING',
    hakiType: 'Flow/Analysis',
    description: 'Building and reviewing network topologies in a controlled learning environment.',
    visualMetaphor: 'Topology Simulation'
  },
  {
    name: 'PE Explorer',
    category: 'SECURITY TOOLS',
    status: 'PRACTICING',
    hakiType: 'Observation/Detection',
    description: 'Reviewing portable executable structures as part of security and malware-analysis workflows.',
    visualMetaphor: 'Binary Structure Review'
  }
];
