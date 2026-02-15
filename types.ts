export enum TrafficStatus {
  CLEAR = 'CLEAR',
  MODERATE = 'MODERATE',
  HEAVY = 'HEAVY',
  CLOSED = 'CLOSED'
}

export enum UserRole {
  PUBLIC = 'PUBLIC',
  POLICE = 'POLICE'
}

export interface Route {
  id: string;
  name: string;
  duration: number; // minutes
  distance: number; // km
  status: TrafficStatus;
  tags: string[]; // e.g., "Fastest", "Verified"
  segments: {
    color: 'green' | 'yellow' | 'red';
    percentage: number;
  }[];
  reportsCount: number;
  isVerified: boolean;
}

export interface Alert {
  id: string;
  title: string;
  location: string;
  type: 'ACCIDENT' | 'CONGESTION' | 'CLOSURE' | 'CONSTRUCTION' | 'WEATHER';
  description: string;
  timeAgo: string;
  status: TrafficStatus;
  reporter: {
    name: string;
    trustScore: number;
    avatarUrl: string;
    isOfficial: boolean;
  };
  verified: boolean;
}

export interface MapMarker {
  id: string;
  lat: number;
  lng: number;
  type: 'INCIDENT' | 'OFFICIAL' | 'USER';
  status: TrafficStatus;
}