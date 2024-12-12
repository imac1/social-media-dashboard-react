// src/data/sample-data.d.ts
export interface PlatformData {
    name: string;
    followers: number;
    difference: number;
  }
  
  export interface Data {
    platforms: { [key: string]: PlatformData }[];
    events: {
      platform: string;
      type: string;
      amount: number;
      modifier: number;
    }[];
  }
  
  export const data: Data;
  