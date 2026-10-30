import { ProjectItem } from '../types';

export const projectsData: ProjectItem[] = [
  {
    id: "spectre",
    title: "SPECTRE",
    category: "Cybersecurity",
    focus: "Stealth Passive Engagement & Cyber Trap Reconnaissance Engine",
    description: "A defensive cybersecurity concept focused on passive engagement, deceptive telemetry, and reconnaissance detection to strengthen small-scale enterprise security monitoring.",
    technologies: ["Python", "Network Telemetry", "Log Capture", "Deception Architecture"],
    status: "Research Prototype",
    features: [
      "Passive trap engagement strategy for unauthorized probe detection",
      "Telemetry collection from adversary interaction with deceptive network layers",
      "Operational design intended to reduce false positives and support better monitoring",
      "Conceptual security architecture for low-overhead defensive deployment"
    ],
  },
  {
    id: "criminal-network-analysis",
    title: "AI-Powered Criminal Network Analysis System and Forensic Lab",
    category: "Digital Forensics / AI",
    focus: "Investigation, intelligence mapping, and forensic evidence analysis",
    description: "An intelligent forensic investigation system designed to analyze criminal network structures, correlate evidence, and support digital forensic workflows with AI-assisted investigation patterns.",
    technologies: ["Python", "AI / ML", "Forensic Data Structuring", "Cyber Investigation"],
    status: "Research Prototype",
    features: [
      "Investigation-focused analytical workflow for connected evidence relationships",
      "Forensic lab-oriented intelligence support for digital investigations",
      "Structured evidence mapping across communication and behavioral artifacts",
      "Application of AI-assisted pattern analysis to support forensic inquiry"
    ],
  },
  {
    id: "modular-ml-network-anomaly",
    title: "Modular Machine Learning Framework for Real-Time Network Anomaly Detection",
    category: "Network Security / ML",
    focus: "Anomaly detection and network telemetry analysis",
    description: "A modular machine learning framework for identifying abnormal behavior in real-time network traffic and improving detection of suspicious patterns in dynamic environments.",
    technologies: ["Python", "Machine Learning", "Network Analysis", "Anomaly Detection"],
    status: "Research Prototype",
    features: [
      "Real-time detection of suspicious network behavior patterns",
      "Modular architecture for flexible anomaly detection workflows",
      "Telemetry-driven security analysis for network environments",
      "Research-oriented framework supporting cybersecurity monitoring use cases"
    ],
  },
  {
    id: "splunk-soc-logs",
    title: "SOC Log Analysis using Splunk",
    category: "SIEM / Security Monitoring",
    focus: "Log correlation and security monitoring",
    description: "Analyzing enterprise security logs in Splunk to identify suspicious activity, policy violations, and potential indicators of compromise across monitored systems.",
    technologies: ["Splunk", "SPL", "Syslog", "Windows Event Logs"],
    status: "Completed",
    features: [
      "Authentication and network log analysis for suspicious patterns",
      "Correlation of signals across enterprise telemetry sources",
      "Monitoring workflows for rapid security triage",
      "Operational insight generation from security event data"
    ],
  },
  {
    id: "wireshark-traffic-analysis",
    title: "Network Traffic Analysis using Wireshark",
    category: "Network Security / Traffic Analysis",
    focus: "Packet inspection and protocol analysis",
    description: "Capturing and inspecting network traffic to investigate suspicious behavior, protocol anomalies, and communication flows using Wireshark-based packet analysis.",
    technologies: ["Wireshark", "TCP/IP", "PCAP Analysis", "Display Filters"],
    status: "Completed",
    features: [
      "Deep packet inspection across common network protocols",
      "Tracking suspicious communication sessions and anomalies",
      "Protocol and traffic behavior analysis for digital investigation workflows",
      "Evidence-oriented review of packet-based communication patterns"
    ],
  }
];
