declare module Artillery {

  export interface Latency {
      min: number;
      max: number;
      median: number;
      p95: number;
      p99: number;
  }

  export interface Rps {
      count: number;
      mean: number;
  }

  export interface ScenarioDuration {
      min: number;
      max: number;
      median: number;
      p95: number;
      p99: number;
  }

  export interface ScenarioCounts {
      0: number;
  }

  export interface Errors {
  }

  export interface Codes {
      200: number;
      301: number;
  }

  export interface CustomStats {
  }

  export interface Counters {
  }

  export interface Phase {
      duration: number;
      arrivalRate: number;
      name: string;
  }

  export interface Aggregate {
      timestamp: Date;
      scenariosCreated: number;
      scenariosCompleted: number;
      requestsCompleted: number;
      latency: Latency;
      rps: Rps;
      scenarioDuration: ScenarioDuration;
      scenarioCounts: ScenarioCounts;
      errors: Errors;
      codes: Codes;
      matches: number;
      customStats: CustomStats;
      counters: Counters;
      scenariosAvoided: number;
      phases: Phase[];
  }

  export interface Latency2 {
      min: number;
      max: number;
      median: number;
      p95: number;
      p99: number;
  }

  export interface Rps2 {
      count: number;
      mean: number;
  }

  export interface ScenarioDuration2 {
      min: number;
      max: number;
      median: number;
      p95: number;
      p99: number;
  }

  export interface ScenarioCounts2 {
      0: number;
  }

  export interface Errors2 {
  }

  export interface Codes2 {
      200: number;
      301: number;
  }

  export interface CustomStats2 {
  }

  export interface Counters2 {
  }

  export interface Intermediate {
      timestamp: Date;
      scenariosCreated: number;
      scenariosCompleted: number;
      requestsCompleted: number;
      latency: Latency2;
      rps: Rps2;
      scenarioDuration: ScenarioDuration2;
      scenarioCounts: ScenarioCounts2;
      errors: Errors2;
      codes: Codes2;
      matches: number;
      latencies: number[];
      customStats: CustomStats2;
      counters: Counters2;
      concurrency: number;
      pendingRequests: number;
      scenariosAvoided: number;
  }

  export interface Report {
      aggregate: Aggregate;
      intermediate: Intermediate[];
  }

}
