export const CarbonProjectRoutePrefix = "/:carbonProjectId/";
export enum CarbonProjectRoutes {
  PIN = "",
  OVERVIEW = "overview",
  DOCUMENTS = "documents",
  PDD = "pdd",
  REGISTRATION = "registration",
  FORWARDS = "forwards",
  PROJECTS = "projects",
}

export const PINRoutePrefix = CarbonProjectRoutePrefix + "pin/";

export enum PINRoutes {
  SUMMARY = "",
  DETAILS = "details",
  EMISSION = "emission",
  BENEFITS = "benefits",
  VIABILITY = "viability",
}
