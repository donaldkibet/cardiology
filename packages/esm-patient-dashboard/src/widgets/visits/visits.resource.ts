import { openmrsObservableFetch } from "@openmrs/esm-api";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

interface fetchResponse {}

export function getAllVisits(): Observable<Array<any>> {
  const customRepresentation =
    "?v=custom:(uuid,encounters:(uuid,encounterDatetime,form:(uuid,name),location:ref,encounterType:ref,encounterProviders:(uuid,display,provider:(uuid,display))),patient:(uuid,person:(display,gender,age)),visitType:(uuid,name,display),attributes:(uuid,display,value),location:(uuid,name,display),startDatetime,stopDatetime)";
  return openmrsObservableFetch(
    `/ws/rest/v1/visit${customRepresentation}`
  ).pipe(
    map(({ data }) => data),
    map(({ results }) => results.map((result) => result))
  );
}
